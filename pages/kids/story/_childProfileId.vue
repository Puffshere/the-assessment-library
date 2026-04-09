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
        <!-- Flip overlay: a blank page that turns the full 180° -->
        <div v-if="isFlipping"
             class="story-page__flip-page"
             :class="flipDirection === 1 ? 'story-page__flip-page--fwd' : 'story-page__flip-page--bwd'"></div>

        <div class="story-page__page story-page__page--left" :class="{ 'is-disabled': !canGoPrev, 'is-content-entering': contentFadingIn }" :style="pageStyle" @click="flipPage(-1)">
          <div class="story-page__page-inner">
            <div v-if="isFirstSpreadOfChapter" class="story-page__chapter-title-area">
              <div v-if="editingTitle === currentChapter._id" class="story-page__title-edit" @click.stop @mousedown.stop>
                <input v-model="titleInput" class="story-page__title-input" placeholder="Name this chapter..." @click.stop @mousedown.stop @keydown.stop @keydown.enter="saveTitle(currentChapter)" @keyup.stop />
                <button class="story-page__save-btn" @click.stop="saveTitle(currentChapter)" @mousedown.stop>Save</button>
                <button class="story-page__cancel-btn" @click.stop="editingTitle = null" @mousedown.stop>✕</button>
              </div>
              <div v-else class="story-page__title-display" @click.stop="startEditTitle(currentChapter)" @mousedown.stop>
                <h2>Chapter {{ currentChapter.chapterNumber }}: {{ currentChapter.title || 'Untitled' }}</h2>
                <span class="story-page__edit-hint">✏️ rename</span>
              </div>
            </div>
            <div class="story-page__chapter-text story-page__chapter-text--left" :class="{ 'story-page__chapter-text--no-title': !isFirstSpreadOfChapter }">
              <p v-for="(para, i) in currentSpread.left" :key="'l'+i">{{ para }}</p>
            </div>
            <div class="story-page__left-footer">
              <span class="story-page__trait-badge">{{ currentChapter.dominantTraitAtTime }} style</span>
              <span class="story-page__page-num">{{ leftPageNumber }}</span>
            </div>
            <div v-if="canGoPrev" class="story-page__click-hint story-page__click-hint--left">‹ prev</div>
          </div>
        </div>
        <div class="story-page__page story-page__page--right" :class="{ 'is-disabled': !canGoNext, 'is-content-entering': contentFadingIn }" :style="pageStyle" @click="flipPage(1)">
          <div class="story-page__page-inner story-page__page-inner--right">
            <div v-if="isFirstSpreadOfChapter && chapterDisplayImage" class="story-page__illustration">
              <img :src="chapterDisplayImage" class="story-page__char-img" />
            </div>
            <div class="story-page__chapter-text story-page__chapter-text--right" :class="{ 'story-page__chapter-text--no-illus': !isFirstSpreadOfChapter || !chapterDisplayImage }">
              <p v-for="(para, i) in currentSpread.right" :key="'r'+i">{{ para }}</p>
            </div>
            <div class="story-page__right-footer">
              <span class="story-page__date">{{ formatDate(currentChapter.createdAt) }}</span>
              <span class="story-page__page-num">{{ rightPageNumber }}</span>
            </div>
            <div v-if="canGoNext" class="story-page__click-hint story-page__click-hint--right">next ›</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hidden measurement container for pagination -->
    <div ref="measurer" class="story-page__measurer" aria-hidden="true">
      <div ref="measurerInner" class="story-page__measurer-inner"></div>
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
      currentSpreadIndex: 0,
      isFlipping: false,
      flipDirection: 1,
      contentFadingIn: false,
      editingTitle: null,
      titleInput: '',
      bookHeight: 500,
      isMobile: false,
      contentPages: [],
    }
  },
  computed: {
    profile() { return this.$store.state.activeChildProfile },
    currentChapter() { return this.chapters[this.currentChapterIndex] || null },
    paragraphs() {
      if (!this.currentChapter) return []
      return this.currentChapter.content.split('\n\n').filter(p => p.trim())
    },
    spreads() {
      if (!this.contentPages.length) {
        // Fallback before measurement: all text in one spread
        const paras = this.paragraphs
        const mid = Math.ceil(paras.length / 2)
        return [{ left: paras.slice(0, mid), right: paras.slice(mid) }]
      }
      const result = []
      for (let i = 0; i < this.contentPages.length; i += 2) {
        result.push({
          left: this.contentPages[i] || [],
          right: this.contentPages[i + 1] || []
        })
      }
      return result.length ? result : [{ left: this.paragraphs, right: [] }]
    },
    currentSpread() {
      return this.spreads[this.currentSpreadIndex] || { left: [], right: [] }
    },
    isFirstSpreadOfChapter() {
      return this.currentSpreadIndex === 0
    },
    canGoPrev() {
      return this.currentSpreadIndex > 0 || this.currentChapterIndex > 0
    },
    canGoNext() {
      return this.currentSpreadIndex < this.spreads.length - 1 || this.currentChapterIndex < this.chapters.length - 1
    },
    leftPageNumber() {
      let page = 1
      for (let c = 0; c < this.currentChapterIndex; c++) {
        const ch = this.chapters[c]
        const paras = ch.content.split('\n\n').filter(p => p.trim())
        page += Math.max(2, Math.ceil(paras.length / 3) * 2)
      }
      return page + this.currentSpreadIndex * 2
    },
    rightPageNumber() {
      return this.leftPageNumber + 1
    },
    chapterDisplayImage() {
      if (!this.currentChapter) return null
      if (this.currentChapter.chapterNumber === 1) return this.currentChapter.backgroundImage || null
      return this.currentChapter.chapterImage || null
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
  watch: {
    currentChapter() {
      this.currentSpreadIndex = 0
      this.$nextTick(() => this.paginateContent())
    },
    bookHeight() {
      this.$nextTick(() => this.paginateContent())
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
      this.$nextTick(() => {
        this.paginateContent()
      })
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
    paginateContent() {
      if (!this.currentChapter || this.isMobile) {
        this.contentPages = []
        return
      }
      const measurer = this.$refs.measurer
      const measurerInner = this.$refs.measurerInner
      if (!measurer || !measurerInner) {
        this.contentPages = []
        return
      }

      const paras = this.paragraphs
      if (!paras.length) { this.contentPages = []; return }

      // Set measurer width to match half the book (max-width 900px / 2 = 450px minus padding)
      const bookEl = this.$el.querySelector('.story-page__book')
      const pageWidth = bookEl ? bookEl.offsetWidth / 2 : 450
      measurer.style.width = pageWidth + 'px'

      // Measure each paragraph's rendered height
      const paraHeights = paras.map(text => {
        measurerInner.textContent = ''
        const p = document.createElement('p')
        p.textContent = text
        measurerInner.appendChild(p)
        const h = p.offsetHeight + 10 // 10px margin-bottom
        return h
      })
      measurerInner.textContent = ''

      // Calculate available heights for different page types
      const totalPad = 64 // 24px top + 40px bottom padding
      const footerH = 32
      const titleH = 52 // title area + margin + border
      const illustrationH = 140 // 110px img + 20px top + 10px gap
      const hasImage = !!this.chapterDisplayImage

      const leftFirstH = this.bookHeight - totalPad - footerH - titleH
      const leftOtherH = this.bookHeight - totalPad - footerH
      const rightFirstH = this.bookHeight - totalPad - footerH - (hasImage ? illustrationH : 0)
      const rightOtherH = this.bookHeight - totalPad - footerH

      // Pack paragraphs into pages
      const pages = []
      let paraIdx = 0
      let pageNum = 0
      while (paraIdx < paras.length) {
        const isLeftPage = pageNum % 2 === 0
        const isFirstSpread = pageNum < 2
        let availH
        if (isLeftPage) availH = isFirstSpread ? leftFirstH : leftOtherH
        else availH = isFirstSpread ? rightFirstH : rightOtherH

        const page = []
        let usedH = 0
        while (paraIdx < paras.length) {
          const pH = paraHeights[paraIdx]
          if (usedH + pH > availH && page.length > 0) break
          page.push(paras[paraIdx])
          usedH += pH
          paraIdx++
        }
        pages.push(page)
        pageNum++
      }

      // Ensure even number of pages (left+right pairs)
      if (pages.length % 2 !== 0) pages.push([])

      this.contentPages = pages
    },
    flipPage(direction) {
      if (this.isFlipping) return
      // Overlay flips full 180° over FLIP_MS.
      // Content swaps at SWAP_MS (just past edge-on) so it's hidden behind the overlay.
      // Content then fades in. Everything clears at END_MS.
      const SWAP_MS  = 380
      const FLIP_MS  = 750
      const END_MS   = 950

      const startFlip = (swapFn) => {
        this.flipDirection = direction
        this.isFlipping = true
        this.contentFadingIn = false
        setTimeout(() => {
          this.contentFadingIn = true
          swapFn()
        }, SWAP_MS)
        setTimeout(() => {
          this.isFlipping = false
          this.contentFadingIn = false
        }, END_MS)
      }

      if (direction === 1) {
        if (this.currentSpreadIndex < this.spreads.length - 1) {
          startFlip(() => { this.currentSpreadIndex++ })
        } else if (this.currentChapterIndex < this.chapters.length - 1) {
          startFlip(() => { this.currentChapterIndex++; this.currentSpreadIndex = 0 })
        }
      } else {
        if (this.currentSpreadIndex > 0) {
          startFlip(() => { this.currentSpreadIndex-- })
        } else if (this.currentChapterIndex > 0) {
          startFlip(() => {
            this.currentChapterIndex--
            this.$nextTick(() => {
              this.currentSpreadIndex = Math.max(0, this.spreads.length - 1)
            })
          })
        }
      }
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
  perspective: 2400px;
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

.story-page__char-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  &--no-title { padding-top: 0; }
  &--no-illus { padding-top: 0; }
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

/* ── 3D page-flip overlay ─────────────────────────── */

// The overlay is a blank "paper" element that flips the full 180°.
// It has a front face and back face via ::before / ::after so
// you always see a white page surface, never mirrored content.

.story-page__flip-page {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 10;
  transform-style: preserve-3d;
  pointer-events: none;

  // Front face
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
  }
  // Back face (pre-rotated so it shows when the overlay passes 90°)
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }

  &--fwd {
    right: 0;
    transform-origin: left center;
    animation: flip-overlay-fwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

    &::before {
      background: linear-gradient(to left, #ece8e1, #fffef8);
      border-radius: 0 12px 12px 0;
    }
    &::after {
      background: linear-gradient(to right, #ece8e1, #fffef8);
      border-radius: 4px 0 0 4px;
    }
  }

  &--bwd {
    left: 0;
    transform-origin: right center;
    animation: flip-overlay-bwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

    &::before {
      background: linear-gradient(to right, #ece8e1, #fffef8);
      border-radius: 4px 0 0 4px;
    }
    &::after {
      background: linear-gradient(to left, #ece8e1, #fffef8);
      border-radius: 0 12px 12px 0;
    }
  }
}

// Shadow cast onto the page underneath during flip
.story-page__book.is-flipping.flip-forward .story-page__page--left::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
  border-radius: inherit;
  animation: under-shadow-fwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.story-page__book.is-flipping.flip-backward .story-page__page--right::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
  border-radius: inherit;
  animation: under-shadow-bwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1);
}

// Content fade-in after the swap
.story-page__page.is-content-entering .story-page__page-inner {
  animation: content-enter 0.5s ease-out both;
}

// ── Keyframes ──

@keyframes flip-overlay-fwd {
  0% {
    transform: rotateY(0deg);
    box-shadow: -2px 0 6px rgba(0,0,0,0.06);
  }
  40% {
    transform: rotateY(-80deg);
    box-shadow: -18px 10px 40px rgba(0,0,0,0.4);
  }
  50% {
    transform: rotateY(-90deg);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
  60% {
    transform: rotateY(-100deg);
    box-shadow: 12px 10px 35px rgba(0,0,0,0.35);
  }
  88% {
    transform: rotateY(-175deg);
    box-shadow: 5px 4px 15px rgba(0,0,0,0.12);
    opacity: 1;
  }
  100% {
    transform: rotateY(-180deg);
    box-shadow: 0 0 0 rgba(0,0,0,0);
    opacity: 0;
  }
}

@keyframes flip-overlay-bwd {
  0% {
    transform: rotateY(0deg);
    box-shadow: 2px 0 6px rgba(0,0,0,0.06);
  }
  40% {
    transform: rotateY(80deg);
    box-shadow: 18px 10px 40px rgba(0,0,0,0.4);
  }
  50% {
    transform: rotateY(90deg);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
  60% {
    transform: rotateY(100deg);
    box-shadow: -12px 10px 35px rgba(0,0,0,0.35);
  }
  88% {
    transform: rotateY(175deg);
    box-shadow: -5px 4px 15px rgba(0,0,0,0.12);
    opacity: 1;
  }
  100% {
    transform: rotateY(180deg);
    box-shadow: 0 0 0 rgba(0,0,0,0);
    opacity: 0;
  }
}

// Shadow darkens as the overlay passes overhead, then lifts
@keyframes under-shadow-fwd {
  0%   { background: rgba(0,0,0,0); }
  40%  { background: rgba(0,0,0,0.18); }
  55%  { background: rgba(0,0,0,0.22); }
  80%  { background: rgba(0,0,0,0.08); }
  100% { background: rgba(0,0,0,0); }
}

@keyframes under-shadow-bwd {
  0%   { background: rgba(0,0,0,0); }
  40%  { background: rgba(0,0,0,0.18); }
  55%  { background: rgba(0,0,0,0.22); }
  80%  { background: rgba(0,0,0,0.08); }
  100% { background: rgba(0,0,0,0); }
}

// New content fades in after content swap
@keyframes content-enter {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (max-width: 640px) {
  .story-page { overflow-y: auto !important; height: auto !important; min-height: 100vh; }
  .story-page__header { margin-top: 0; padding: 8px 12px; padding-top: 72px; }
  .story-page__book-wrapper { padding: 12px; perspective: 2400px; }
  .story-page__book {
    flex-direction: column;
    border-radius: 12px;
    perspective: none;
    transform-style: preserve-3d;
  }
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

  // Hide the half-page overlay on mobile — we flip the whole book instead
  .story-page__flip-page { display: none !important; }

  // Disable per-page shadow pseudo on mobile
  .story-page__book.is-flipping .story-page__page--left::after,
  .story-page__book.is-flipping .story-page__page--right::after {
    animation: none !important;
  }

  // Mobile: the entire stacked book flips as one page
  .story-page__book.is-flipping.flip-forward {
    transform-origin: left center;
    animation: mobile-flip-fwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1);
    backface-visibility: hidden;
  }
  .story-page__book.is-flipping.flip-backward {
    transform-origin: right center;
    animation: mobile-flip-bwd 0.75s cubic-bezier(0.25, 0.1, 0.25, 1);
    backface-visibility: hidden;
  }

  @keyframes mobile-flip-fwd {
    0%   { transform: rotateY(0deg);   box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
    40%  { transform: rotateY(-80deg); box-shadow: -20px 10px 40px rgba(0,0,0,0.4); }
    50%  { transform: rotateY(-90deg); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
    100% { transform: rotateY(0deg);   box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
  }
  @keyframes mobile-flip-bwd {
    0%   { transform: rotateY(0deg);  box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
    40%  { transform: rotateY(80deg); box-shadow: 20px 10px 40px rgba(0,0,0,0.4); }
    50%  { transform: rotateY(90deg); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
    100% { transform: rotateY(0deg);  box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
  }
}

.story-page__measurer {
  position: absolute;
  left: -9999px;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  padding: 24px 22px 40px;
  box-sizing: border-box;
  overflow: hidden;
}

.story-page__measurer-inner {
  p {
    font-family: $nunito-family;
    font-size: 13px;
    line-height: 1.65;
    color: #2c3e50;
    margin-bottom: 10px;
    text-align: justify;
    &:last-child { margin-bottom: 0; }
  }
}
</style>
