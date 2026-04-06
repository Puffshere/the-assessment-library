<template>
  <section class="story-page">
    <div class="story-page__bg" :style="pageBgStyle"></div>
    <div class="story-page__bg-overlay"></div>
    <main-nav />
    <div class="story-page__header">
      <button class="story-page__back" @click="$router.push('/dashboard')">← Back</button>
      <h1>{{ profile ? profile.childName + "'s Story" : 'Story' }}</h1>
    </div>
    <div v-if="loading" class="story-page__loading">Loading your story...</div>
    <div v-else-if="!chapters.length" class="story-page__empty">
      <p>No chapters yet! Complete an assessment and click "Add to Story" to begin your adventure.</p>
    </div>
    <div v-else class="story-page__book-wrapper">
      <div class="story-page__book" :class="{ 'is-flipping': isFlipping, 'flip-forward': flipDirection === 1, 'flip-backward': flipDirection === -1 }">
        <div class="story-page__page story-page__page--left" :class="{ 'is-disabled': currentChapterIndex === 0 }" :style="pageStyle" @click="flipPage(-1)">
          <div class="story-page__page-inner">
            <div class="story-page__chapter-title-area">
              <div v-if="editingTitle === currentChapter._id" class="story-page__title-edit">
                <input v-model="titleInput" class="story-page__title-input" placeholder="Name this chapter..." @keydown.enter="saveTitle(currentChapter)" />
                <button class="story-page__save-btn" @click.stop="saveTitle(currentChapter)">Save</button>
                <button class="story-page__cancel-btn" @click.stop="editingTitle = null">✕</button>
              </div>
              <div v-else class="story-page__title-display" @click.stop="startEditTitle(currentChapter)">
                <h2>{{ currentChapter.title || 'Chapter ' + currentChapter.chapterNumber }}</h2>
                <span class="story-page__edit-hint">✏️ {{ currentChapter.title ? 'rename' : 'name this chapter' }}</span>
              </div>
            </div>
            <div class="story-page__chapter-text story-page__chapter-text--left">
              <p v-for="(para, i) in splitContent.left" :key="i">{{ para }}</p>
            </div>
            <div class="story-page__left-footer">
              <span class="story-page__trait-badge">{{ currentChapter.dominantTraitAtTime }} style</span>
              <span class="story-page__page-num">{{ (currentChapterIndex + 1) * 2 - 1 }}</span>
            </div>
            <div class="story-page__click-hint story-page__click-hint--left">‹ prev</div>
          </div>
        </div>
        <div class="story-page__page story-page__page--right" :class="{ 'is-disabled': currentChapterIndex === chapters.length - 1 }" :style="pageStyle" @click="flipPage(1)">
          <div class="story-page__page-inner story-page__page-inner--right">
            <div class="story-page__illustration">
              <div v-if="!profile || !profile.characterImage" class="story-page__illus-text">✨ Illustration coming soon</div>
              <img v-else :src="profile.characterImage" class="story-page__char-img" />
            </div>
            <div class="story-page__chapter-text story-page__chapter-text--right">
              <p v-for="(para, i) in splitContent.right" :key="i">{{ para }}</p>
            </div>
            <div class="story-page__right-footer">
              <span class="story-page__date">{{ formatDate(currentChapter.createdAt) }}</span>
              <span class="story-page__page-num">{{ (currentChapterIndex + 1) * 2 }}</span>
            </div>
            <div class="story-page__click-hint story-page__click-hint--right">next ›</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  components: { 'main-nav': () => import('@/components/Nav') },
  data() {
    return {
      chapters: [],
      loading: true,
      currentChapterIndex: 0,
      isFlipping: false,
      flipDirection: 1,
      editingTitle: null,
      titleInput: '',
      bookHeight: 500,
      isMobile: false
    }
  },
  computed: {
    profile() { return this.$store.state.activeChildProfile },
    currentChapter() { return this.chapters[this.currentChapterIndex] || null },
    splitContent() {
      if (!this.currentChapter) return { left: [], right: [] }
      const paras = this.currentChapter.content.split('\n\n').filter(p => p.trim())
      const mid = Math.ceil(paras.length / 2)
      return { left: paras.slice(0, mid), right: paras.slice(mid) }
    },
    pageBgStyle() {
      const bg = this.profile && this.profile.cardBackground
      if (bg && bg.endsWith('.webp')) return { backgroundImage: `url(/images/backgrounds/${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }
      return { background: 'linear-gradient(135deg, #0f1623 0%, #1a2744 50%, #12304d 100%)' }
    },
    pageStyle() {
      if (this.isMobile) return {}
      return { height: this.bookHeight + 'px', overflow: 'hidden', boxSizing: 'border-box' }
    }
  },
  async mounted() {
    this.isMobile = window.innerWidth <= 640
    try {
      const res = await this.$axios.$get(`/api/story/${this.$route.params.childProfileId}/chapters`)
      this.chapters = res.chapters
      this.currentChapterIndex = this.chapters.length - 1
    } catch (err) { console.error(err) } finally { this.loading = false }
    this.$nextTick(() => {
      this.isMobile = window.innerWidth <= 640
      if (!this.isMobile) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
      this.setBookHeight()
    })
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth <= 640
      if (!this.isMobile) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
      this.setBookHeight()
    },
    setBookHeight() {
      if (this.isMobile) return
      this.$nextTick(() => {
        const kidsBar = document.querySelector('.kids-view-banner')
        const header = this.$el.querySelector('.story-page__header')
        const kidsH = kidsBar ? kidsBar.offsetHeight : 42
        const headerH = header ? header.offsetHeight : 60
        const navH = 64
        const padding = 48
        this.bookHeight = window.innerHeight - navH - kidsH - headerH - padding
      })
    },
    flipPage(direction) {
      const next = this.currentChapterIndex + direction
      if (next < 0 || next >= this.chapters.length || this.isFlipping) return
      this.flipDirection = direction
      this.isFlipping = true
      setTimeout(() => {
        this.currentChapterIndex = next
        setTimeout(() => { this.isFlipping = false }, 300)
      }, 300)
    },
    startEditTitle(chapter) { this.editingTitle = chapter._id; this.titleInput = chapter.title || '' },
    async saveTitle(chapter) {
      try {
        await this.$axios.$put(`/api/story/chapter/${chapter._id}/title`, { title: this.titleInput })
        chapter.title = this.titleInput
        this.editingTitle = null
      } catch (err) { console.error(err) }
    },
    formatDate(d) { return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.story-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.story-page__bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.story-page__bg-overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: rgba(0,0,0,0.5);
}

.story-page__header {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 32px;
  background: rgba(18,48,77,0.88);
  backdrop-filter: blur(10px);
  color: #fff;
  margin-top: 64px;
}

.story-page__back {
  background: rgba(#fff,0.15);
  border: none;
  color: #fff;
  padding: 7px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-family: $font-family;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;
  &:hover { background: rgba(#fff,0.25); }
}

.story-page__header h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.story-page__loading,
.story-page__empty {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 80px 24px;
  font-size: 16px;
  color: #fff;
}

.story-page__book-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 24px 24px 24px;
}

.story-page__book {
  display: flex;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  border-radius: 4px 12px 12px 4px;
  position: relative;
  overflow: hidden;
}

.story-page__page {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fffef8;
  position: relative;
  overflow: hidden;

  &--left {
    border-radius: 4px 0 0 4px;
    border-right: 1px solid rgba(0,0,0,0.12);
    background: linear-gradient(to right, #f0ede8, #fffef8);
    cursor: w-resize;
  }
  &--right {
    border-radius: 0 12px 12px 0;
    background: linear-gradient(to left, #f0ede8, #fffef8);
    cursor: e-resize;
  }
  &.is-disabled { cursor: default; }
}

.story-page__page-inner {
  flex: 1;
  overflow: hidden;
  padding: 24px 22px 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;

  &--right { position: relative; }
}

.story-page__illustration {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 110px;
  height: 110px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8f0fe, #f0f4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.story-page__illus-text {
  color: #bbb;
  font-size: 11px;
  font-style: italic;
  text-align: center;
  padding: 8px;
}

.story-page__char-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.story-page__chapter-title-area {
  flex-shrink: 0;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(0,51,197,0.1);
}

.story-page__title-display {
  display: flex;
  align-items: baseline;
  gap: 10px;
  cursor: pointer;
  h2 { font-size: 18px; font-weight: 700; color: #12304d; margin: 0; font-family: $font-family; }
}

.story-page__edit-hint { font-size: 11px; color: #bbb; white-space: nowrap; }

.story-page__title-edit { display: flex; gap: 8px; align-items: center; }

.story-page__title-input {
  flex: 1; padding: 6px 10px; border: 2px solid #0033c5;
  border-radius: 6px; font-size: 13px; font-family: $font-family; outline: none;
}

.story-page__save-btn {
  padding: 6px 12px; background: #0033c5; color: #fff;
  border: none; border-radius: 6px; cursor: pointer; font-size: 12px;
}

.story-page__cancel-btn {
  padding: 6px 8px; background: transparent; color: #aaa;
  border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 12px;
}

.story-page__chapter-text {
  flex: 1;
  overflow: hidden;
  min-height: 0;
  p {
    font-family: $nunito-family;
    font-size: 13px;
    line-height: 1.65;
    color: #2c3e50;
    margin-bottom: 10px;
    text-align: justify;
    &:last-child { margin-bottom: 0; }
  }
  &--left p:first-child::first-letter {
    font-size: 2.2em; font-weight: 700; float: left;
    line-height: 0.8; padding: 4px 6px 0 0;
    color: #0033c5; font-family: $font-family;
  }
  &--right { padding-top: 130px; }
}

.story-page__left-footer,
.story-page__right-footer {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid rgba(0,0,0,0.08);
  margin-top: auto;
}

.story-page__page-num { font-size: 11px; color: #aaa; font-style: italic; }
.story-page__trait-badge {
  font-size: 11px; font-weight: 700; padding: 3px 10px;
  border-radius: 20px; background: rgba(0,51,197,0.08); color: #0033c5;
}
.story-page__date { font-size: 11px; color: #aaa; }

.story-page__click-hint {
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  color: rgba(0,0,0,0.18);
  font-style: italic;
  pointer-events: none;
  &--left { left: 12px; }
  &--right { right: 12px; }
}
.story-page__page:hover .story-page__click-hint { color: rgba(0,0,0,0.35); }
.story-page__page.is-disabled .story-page__click-hint { display: none; }

.story-page__book.is-flipping.flip-forward .story-page__page--right {
  animation: flip-forward 0.6s ease-in-out;
}
.story-page__book.is-flipping.flip-backward .story-page__page--left {
  animation: flip-backward 0.6s ease-in-out;
}
@keyframes flip-forward {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(-90deg); }
  100% { transform: rotateY(0deg); }
}
@keyframes flip-backward {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
}

@media (max-width: 640px) {
  .story-page { overflow-y: auto !important; height: auto !important; min-height: 100vh; }
  .story-page__header { margin-top: 0; padding: 8px 12px; padding-top: 72px; }
  .story-page__book-wrapper { padding: 12px; }
  .story-page__book { flex-direction: column; border-radius: 12px; }
  .story-page__page--left {
    border-right: none;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    overflow: visible;
    height: auto !important;
  }
  .story-page__page--right {
    border-radius: 0 0 12px 12px;
    cursor: pointer;
    overflow: visible;
    height: auto !important;
  }
  .story-page__page-inner { overflow: visible; height: auto; padding-bottom: 24px; }
  .story-page__chapter-text { overflow: visible; min-height: auto; }
}
</style>
