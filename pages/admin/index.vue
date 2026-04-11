<template>
  <div class="admin-root">
    <div class="admin-header">
      <div class="header-inner">
        <div>
          <h1>Assessment creator</h1>
          <p class="header-sub">theassessmentlibrary.com — admin</p>
        </div>
        <div class="header-actions">
          <button class="tab-btn" :class="{ active: tab === 'create' }" @click="tab = 'create'">Create</button>
          <button class="tab-btn" :class="{ active: tab === 'library' }" @click="tab = 'library'; loadLibrary()">Library</button>
          <button class="tab-btn" :class="{ active: tab === 'shelves' }" @click="tab = 'shelves'; loadShelves()">Shelves</button>
          <button class="tab-btn" :class="{ active: tab === 'featured' }" @click="tab = 'featured'; loadFeatured()">Featured</button>
          <button class="sign-out-btn" @click="signOut">Sign out</button>
        </div>
      </div>
    </div>

    <div v-if="tab === 'create'" class="admin-body">
      <div class="card">
        <div class="card-title">Library placement</div>
        <div class="field-row-2">
          <div class="field">
            <label>Shelf</label>
            <div class="shelf-toggle">
              <button v-for="s in ['Adult', 'Kids']" :key="s" class="shelf-btn" :class="{ active: form.shelf === s }" type="button" @click="form.shelf = s">{{ s }}</button>
            </div>
          </div>
          <div class="field">
            <label>Genre / shelf section</label>
            <select v-model="form.genre">
              <option value="">-- select genre --</option>
              <option v-for="g in genres" :key="g">{{ g }}</option>
            </select>
          </div>
        </div>
        <div class="field" style="margin-top:16px">
          <label>Subcategory tags</label>
          <div class="tags-wrap">
            <span v-for="tag in availableTags" :key="tag" class="tag" :class="{ active: form.subcategories.includes(tag) }" @click="toggleTag(tag)">{{ tag }}</span>
            <input v-model="customTagInput" class="tag-input" placeholder="+ custom tag" @keydown.enter.prevent="addCustomTag" @blur="addCustomTag" />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Assessment details</div>
        <div class="field-row-2" style="margin-bottom:16px">
          <div class="field">
            <label>Title</label>
            <input v-model="form.title" type="text" placeholder="e.g. Jessica's First Job!" @input="autoSlug" />
          </div>
          <div class="field">
            <label>URL slug <span class="label-note">(auto-generated, editable)</span></label>
            <input v-model="form.slug" type="text" placeholder="jessicas-first-job" />
          </div>
        </div>
        <div class="field-row-3">
          <div class="field">
            <label>Credits cost</label>
            <input v-model.number="form.creditsCost" type="number" min="1" max="99" />
          </div>
          <div class="field">
            <label>Questions per playthrough</label>
            <select v-model.number="form.questionsPerPlaythrough">
              <option v-for="n in [10, 12, 15, 18, 20]" :key="n" :value="n">{{ n }} questions</option>
            </select>
          </div>
          <div class="field">
            <label>Target word count</label>
            <input v-model.number="form.wordCount" type="number" min="1000" max="15000" />
            <span class="hint">~{{ estMinutes }} min · words user encounters</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Story brief</div>
        <div class="info-note">Claude opus-4-6 uses this brief to generate the full branching story, all questions, and all four DISC conclusions. Be specific — the more detail you give, the better the story.</div>
        <div class="field" style="margin-bottom:16px">
          <label>Protagonist & setting</label>
          <input v-model="form.protagonist" type="text" placeholder="e.g. Jordan, 28, a new project manager at a fast-growing startup in Austin" />
        </div>
        <div class="field" style="margin-bottom:16px">
          <label>Core story brief</label>
          <textarea v-model="form.brief" rows="5" placeholder="Describe the central conflict, key story beats, and the world of the assessment. Claude will write all chapters, branch variants, and DISC conclusions from this."></textarea>
        </div>
        <div class="field">
          <label>Special instructions for Claude <span class="label-note">(optional)</span></label>
          <textarea v-model="form.instructions" rows="2" placeholder="e.g. Make the D-path more confrontational. Include a subplot about a difficult colleague."></textarea>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Story structure</div>
        <div class="struct-nodes">
          <span v-for="(n, i) in nodePreview" :key="i">
            <span v-if="i > 0" class="arrow">→</span>
            <span class="node" :class="n.css">{{ n.label }}</span>
          </span>
        </div>
        <div class="stats-row">
          <div class="stat-card"><div class="stat-label">Total nodes</div><div class="stat-val">{{ totalNodes }}</div></div>
          <div class="stat-card"><div class="stat-label">Est. completion</div><div class="stat-val">{{ estMinutes }} min</div></div>
          <div class="stat-card"><div class="stat-label">Credits cost</div><div class="stat-val">{{ form.creditsCost }}</div></div>
          <div class="stat-card"><div class="stat-label">Assessments</div><div class="stat-val">{{ form.batchCount }}</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Batch generation</div>
        <div class="field-row-2">
          <div class="field">
            <label>Number of assessments to generate</label>
            <input v-model.number="form.batchCount" type="number" min="1" max="20" />
            <span class="hint">Each will be a unique story using the brief as a creative guide.</span>
          </div>
          <div class="field">
            <label>Batch variation strategy</label>
            <select v-model="form.batchVariation">
              <option value="protagonist">Vary protagonist (name, age, background)</option>
              <option value="setting">Vary setting (same topic, different industry/location)</option>
              <option value="event">Vary central event (same theme, different incident)</option>
              <option value="full">Full variation (Claude decides everything within brief)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Cover image</div>
        <div class="field-row-2">
          <div class="field">
            <label>Image style</label>
            <select v-model="form.imageStyle">
              <option value="illustrated">Illustrated book cover (warm, editorial)</option>
              <option value="painterly">Painterly / watercolor</option>
              <option value="cinematic">Cinematic / photorealistic</option>
              <option value="flat">Flat design / graphic</option>
              <option value="pixel">Pixel art (great for kids)</option>
            </select>
          </div>
          <div class="field">
            <label>Image prompt override <span class="label-note">(optional)</span></label>
            <input v-model="form.imagePromptOverride" type="text" placeholder="Leave blank — Claude auto-generates from the brief" />
          </div>
        </div>
        <span class="hint" style="display:block;margin-top:8px">DALL-E 3 (hd quality) → Backblaze B2. One cover per assessment.</span>
      </div>

      <button class="generate-btn" :disabled="generating || !canGenerate" @click="generate">
        <span v-if="!generating">Generate {{ form.batchCount > 1 ? form.batchCount + ' assessments' : 'assessment' }} — save to MongoDB</span>
        <span v-else>Generating... please wait</span>
      </button>

      <div v-if="logs.length > 0" class="progress-card">
        <div class="progress-bar-wrap">
          <div class="progress-bar"><div class="progress-fill" :style="{ width: progress + '%' }"></div></div>
          <span class="progress-pct">{{ progress }}%</span>
        </div>
        <div ref="logBox" class="log-box">
          <div v-for="(line, i) in logs" :key="i" class="log-line" :class="line.type">{{ line.msg }}</div>
        </div>
        <div v-if="generationResults.length > 0" class="results-wrap">
          <div class="results-title">Generated assessments</div>
          <div v-for="r in generationResults" :key="r.slug" class="result-row">
            <span class="result-title">{{ r.title }}</span>
            <a :href="'/library/' + r.slug" target="_blank" class="result-link">View →</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="tab === 'library'" class="admin-body">
      <div v-if="libraryLoading" class="card"><div class="loading-msg">Loading...</div></div>
      <div v-else-if="library.length === 0" class="card"><div class="loading-msg">No assessments found.</div></div>
      <template v-else>

        <!-- ADULT TABLE -->
        <div class="card">
          <div class="card-title-row">
            <div class="card-title" style="margin-bottom:0">Adult Assessments ({{ adultLibrary.length }})</div>
            <select v-if="adultShelfOptions.length" v-model="adultShelfFilter" class="shelf-filter-select">
              <option value="all">All shelves</option>
              <option v-for="s in adultShelfOptions" :key="s._id" :value="s._id">{{ s.name }}</option>
            </select>
          </div>
          <div v-if="adultLibrary.length === 0" class="loading-msg">No adult assessments{{ adultShelfFilter !== 'all' ? ' on this shelf' : '' }}.</div>
          <table v-else class="lib-table">
            <thead>
              <tr>
                <th>Title</th><th>Genre</th><th>Credits</th><th>Questions</th><th>Est. time</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in adultLibrary" :key="a._id">
                <td>
                  <a :href="'/library/' + a.slug" target="_blank" class="result-link">{{ a.title }}</a>
                  <div style="margin-top:6px">
                    <img v-if="a.heroImageUrl && !a.heroImageUrl.includes('default')" :src="a.heroImageUrl" style="width:48px;height:48px;object-fit:cover;border-radius:4px;border:0.5px solid var(--color-border-tertiary)" />
                    <span v-else style="font-size:11px;color:var(--color-text-tertiary)">No image</span>
                  </div>
                </td>
                <td><span class="genre-tag">{{ a.genre || 'General' }}</span></td>
                <td>
                  <input class="inline-input" type="number" min="0" :value="a.creditsCost" @change="inlineUpdate(a, 'creditsCost', Number($event.target.value))" />
                </td>
                <td>{{ a.questionCount }}</td>
                <td>
                  <input class="inline-input" type="number" min="1" :value="a.estimatedCompletion" @change="inlineUpdate(a, 'estimatedCompletion', Number($event.target.value))" style="width:50px" /> min
                </td>
                <td><span class="status-pill" :class="a.isActive ? 'active' : 'inactive'">{{ a.isActive ? 'Active' : 'Hidden' }}</span></td>
                <td class="actions" style="min-width:200px">
                  <button class="action-btn" @click="toggleAssessment(a)">{{ a.isActive ? 'Hide' : 'Activate' }}</button>
                  <button class="action-btn" @click="openImageManager(a)">Image</button>
                  <button class="action-btn danger" @click="confirmDelete(a)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- KIDS TABLE -->
        <div class="card">
          <div class="card-title-row">
            <div class="card-title" style="margin-bottom:0">Kids Assessments ({{ kidsLibrary.length }})</div>
            <select v-if="kidsShelfOptions.length" v-model="kidsShelfFilter" class="shelf-filter-select">
              <option value="all">All shelves</option>
              <option v-for="s in kidsShelfOptions" :key="s._id" :value="s._id">{{ s.name }}</option>
            </select>
          </div>
          <div v-if="kidsLibrary.length === 0" class="loading-msg">No kids assessments{{ kidsShelfFilter !== 'all' ? ' on this shelf' : '' }}.</div>
          <table v-else class="lib-table">
            <thead>
              <tr>
                <th>Title</th><th>Genre</th><th>Credits</th><th>Questions</th><th>Est. time</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in kidsLibrary" :key="a._id">
                <td>
                  <a :href="'/library/' + a.slug" target="_blank" class="result-link">{{ a.title }}</a>
                  <div style="margin-top:6px">
                    <img v-if="a.heroImageUrl && !a.heroImageUrl.includes('default')" :src="a.heroImageUrl" style="width:48px;height:48px;object-fit:cover;border-radius:4px;border:0.5px solid var(--color-border-tertiary)" />
                    <span v-else style="font-size:11px;color:var(--color-text-tertiary)">No image</span>
                  </div>
                </td>
                <td><span class="genre-tag">{{ a.genre || 'General' }}</span></td>
                <td>
                  <input class="inline-input" type="number" min="0" :value="a.creditsCost" @change="inlineUpdate(a, 'creditsCost', Number($event.target.value))" />
                </td>
                <td>{{ a.questionCount }}</td>
                <td>
                  <input class="inline-input" type="number" min="1" :value="a.estimatedCompletion" @change="inlineUpdate(a, 'estimatedCompletion', Number($event.target.value))" style="width:50px" /> min
                </td>
                <td><span class="status-pill" :class="a.isActive ? 'active' : 'inactive'">{{ a.isActive ? 'Active' : 'Hidden' }}</span></td>
                <td class="actions" style="min-width:200px">
                  <button class="action-btn" @click="toggleAssessment(a)">{{ a.isActive ? 'Hide' : 'Activate' }}</button>
                  <button class="action-btn" @click="openImageManager(a)">Image</button>
                  <button class="action-btn danger" @click="confirmDelete(a)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </template>
    </div>

    <div v-if="deleteTarget" class="modal-backdrop" @click.self="deleteTarget = null">
      <div class="modal-card">
        <h2>Delete assessment?</h2>
        <p>This will permanently delete <strong>{{ deleteTarget.title }}</strong> from MongoDB. This cannot be undone.</p>
        <div class="modal-actions">
          <button class="action-btn" @click="deleteTarget = null">Cancel</button>
          <button class="action-btn danger" @click="deleteAssessment">Delete permanently</button>
        </div>
      </div>
    </div>
    <div v-if="imageTarget" class="modal-backdrop" @click.self="imageTarget = null">
      <div class="modal-card" style="max-width:580px">
        <h2>Cover image — {{ imageTarget.title }}</h2>

        <!-- Current image -->
        <div style="margin-bottom:1.25rem">
          <img v-if="imageTarget.heroImageUrl && !imageTarget.heroImageUrl.includes('default')" :src="imageTarget.heroImageUrl" style="width:100%;height:220px;object-fit:cover;border-radius:10px;border:0.5px solid var(--color-border-tertiary)" />
          <div v-else style="height:100px;background:var(--color-background-secondary);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-text-secondary)">No cover image yet</div>
        </div>

        <!-- Tab toggle -->
        <div style="display:flex;gap:8px;margin-bottom:1.25rem">
          <button class="tab-btn" :class="{ active: imageTab === 'style' }" @click="imageTab = 'style'">Change Style</button>
          <button class="tab-btn" :class="{ active: imageTab === 'content' }" @click="imageTab = 'content'">Edit Content</button>
          <button class="tab-btn" :class="{ active: imageTab === 'url' }" @click="imageTab = 'url'">Paste URL</button>
        </div>

        <!-- STYLE TAB -->
        <div v-if="imageTab === 'style'">
          <div class="field" style="margin-bottom:1rem">
            <label>Pick a style — keeps the same subject, changes the art direction</label>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
              <button v-for="style in imageStyles" :key="style.label"
                class="tag" :class="{ active: imageStyleSelected === style.label }"
                @click="imageStyleSelected = style.label; imagePrompt = style.prompt">
                {{ style.label }}
              </button>
            </div>
          </div>
          <div class="field" style="margin-bottom:1rem">
            <label>Custom style prompt <span class="label-note">(auto-filled from selection, editable)</span></label>
            <textarea v-model="imagePrompt" rows="3" :placeholder="'Regenerate the cover for ' + imageTarget.title + ' in a new art style...'"></textarea>
          </div>
        </div>

        <!-- CONTENT TAB -->
        <div v-if="imageTab === 'content'">
          <div class="info-note" style="margin-bottom:1rem">Describe what you want to change about the image content — characters, setting, mood, colors, composition.</div>
          <div class="field" style="margin-bottom:1rem">
            <label>What should change?</label>
            <textarea v-model="imageContentEdit" rows="3" placeholder="e.g. Make the main character a girl instead of a boy. Change the setting to a beach at sunset. Add more vibrant colors."></textarea>
          </div>
          <div class="field" style="margin-bottom:1rem">
            <label>Full image prompt <span class="label-note">(auto-built, editable)</span></label>
            <textarea v-model="imagePrompt" rows="3" :placeholder="'A book cover for ' + imageTarget.title + '...'"></textarea>
          </div>
        </div>

        <!-- URL TAB -->
        <div v-if="imageTab === 'url'">
          <div class="field" style="margin-bottom:1rem">
            <label>Paste image URL directly</label>
            <input v-model="imageUrl" type="text" placeholder="https://..." />
          </div>
        </div>

        <div class="modal-actions" style="margin-top:0.5rem">
          <button class="action-btn" @click="imageTarget = null">Cancel</button>
          <button v-if="imageTab === 'url'" class="action-btn" :disabled="imageLoading || !imageUrl" @click="saveImageUrl">Save URL</button>
          <button v-else class="generate-btn" style="flex:1;padding:10px;font-size:14px;margin-top:0" :disabled="imageLoading || !imagePrompt" @click="regenerateImage">
            {{ imageLoading ? 'Generating...' : 'Generate with DALL-E 3' }}
          </button>
        </div>
        <p v-if="imageError" style="color:#A32D2D;font-size:12px;margin-top:8px">{{ imageError }}</p>
      </div>
    </div>

    <div v-if="tab === 'shelves'" class="admin-body">

      <!-- Create new shelf -->
      <div class="card">
        <div class="card-title">{{ editingShelf ? 'Edit shelf: ' + editingShelf.name : 'Create custom shelf' }}</div>
        <div class="field-row-2" style="margin-bottom:16px">
          <div class="field">
            <label>Shelf name</label>
            <input v-model="newShelf.name" type="text" placeholder="e.g. Featured This Week, Holiday Special" />
          </div>
          <div class="field">
            <label>Section</label>
            <select v-model="newShelf.section">
              <option value="Adult">Adult</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </div>
        <div class="field-row-2" style="margin-bottom:16px">
          <div class="field">
            <label>Position on library page</label>
            <select v-model="newShelf.position">
              <option value="top">Top of section (featured)</option>
              <option value="bottom">Bottom of section</option>
            </select>
          </div>
          <div class="field">
            <label>Expiry date <span class="label-note">(optional — leave blank for permanent)</span></label>
            <input v-model="newShelf.expiresAt" type="datetime-local" />
          </div>
        </div>
        <div class="field" style="margin-bottom:16px">
          <label>Select assessments for this shelf</label>
          <div class="assessment-picker">
            <div v-for="a in library" :key="a._id" class="picker-item" :class="{ selected: newShelf.assessmentIds.includes(a._id) }" @click="toggleShelfAssessment(a._id)">
              <span class="picker-check">{{ newShelf.assessmentIds.includes(a._id) ? '✓' : '' }}</span>
              <span class="picker-title">{{ a.title }}</span>
              <span class="picker-shelf">{{ a.shelf }}</span>
            </div>
          </div>
        </div>
        <button class="generate-btn" style="margin-top:0" :disabled="!newShelf.name || newShelf.assessmentIds.length === 0 || shelfSaving" @click="editingShelf ? saveEditShelf() : createShelf()">
          {{ shelfSaving ? 'Saving...' : editingShelf ? 'Save changes' : 'Create shelf' }}
        </button>
        <button v-if="editingShelf" class="action-btn" style="margin-top:8px;width:100%" @click="editingShelf = null; newShelf = { name: '', section: 'Adult', position: 'top', expiresAt: '', assessmentIds: [] }">Cancel edit</button>
        <p v-if="shelfError" style="color:#A32D2D;font-size:13px;margin-top:8px">{{ shelfError }}</p>
      </div>

      <!-- All shelves unified list -->
      <div class="card">
        <div class="card-title">All shelves ({{ customShelves.length }})</div>
        <div v-if="shelvesLoading" class="loading-msg">Loading...</div>
        <div v-else-if="customShelves.length === 0" class="loading-msg">No shelves yet. Generate some assessments first to auto-create genre shelves.</div>
        <div v-else>
          <div style="display:flex;gap:8px;margin-bottom:1rem;flex-wrap:wrap;align-items:center">
            <span style="font-size:12px;padding:3px 10px;border-radius:20px;background:#EEEDFE;color:#3C3489;border:0.5px solid #7F77DD">Custom</span>
            <span style="font-size:12px;padding:3px 10px;border-radius:20px;background:var(--color-background-secondary);color:var(--color-text-secondary);border:0.5px solid var(--color-border-tertiary)">Genre (auto)</span>
            <span style="font-size:11px;color:var(--color-text-tertiary);margin-left:auto">Drag to reorder</span>
          </div>

          <!-- ADULT SHELVES -->
          <div v-if="adultShelvesAdmin.length" style="margin-bottom:1.5rem">
            <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px">Adult shelves</div>
            <div class="drag-list" @dragover.prevent @drop="onDrop('Adult')">
              <div v-for="(shelf, idx) in adultShelvesAdmin" :key="shelf._id"
                class="shelf-item" :class="{ archived: shelf.isArchived, 'drag-over': dragOverId === shelf._id }"
                draggable="true"
                @dragstart="onDragStart(shelf, idx, 'Adult')"
                @dragenter.prevent="onDragEnter(shelf)"
                @dragleave="onDragLeave(shelf)"
                @dragend="onDragEnd">
                <div class="shelf-item-header">
                  <div class="drag-handle" title="Drag to reorder">⠿</div>
                  <div style="flex:1;min-width:0">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
                      <span class="shelf-item-name">{{ shelf.name }}</span>
                      <span v-if="shelf.type === 'custom'" style="font-size:11px;padding:2px 8px;border-radius:20px;background:#EEEDFE;color:#3C3489;border:0.5px solid #7F77DD">Custom</span>
                      <span v-else style="font-size:11px;padding:2px 8px;border-radius:20px;background:var(--color-background-secondary);color:var(--color-text-secondary);border:0.5px solid var(--color-border-tertiary)">Genre</span>
                      <span v-if="shelf.isArchived" class="status-pill inactive">Archived</span>
                      <span v-else-if="shelf.isActive" class="status-pill active">Live</span>
                      <span v-else class="status-pill inactive">Hidden</span>
                    </div>
                    <span class="shelf-item-meta">{{ shelf.assessments ? shelf.assessments.length : 0 }} assessments</span>
                    <span v-if="shelf.expiresAt" class="shelf-item-meta">· expires {{ formatExpiry(shelf.expiresAt) }}</span>
                  </div>
                  <div class="actions">
                    <button class="action-btn" @click="toggleCustomShelf(shelf)">{{ shelf.isActive ? 'Hide' : 'Activate' }}</button>
                    <button class="action-btn" @click="toggleArchiveShelf(shelf)">{{ shelf.isArchived ? 'Restore' : 'Archive' }}</button>
                    <button v-if="shelf.type === 'custom'" class="action-btn" @click="editShelf(shelf)">Edit</button>
                    <button v-if="shelf.type === 'custom'" class="action-btn danger" @click="deleteCustomShelf(shelf)">Delete</button>
                  </div>
                </div>
                <div v-if="shelf.assessments && shelf.assessments.length" class="shelf-item-books">
                  <span v-for="a in shelf.assessments" :key="a._id" class="shelf-book-tag">{{ a.title }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- KIDS SHELVES -->
          <div v-if="kidsShelvesAdmin.length">
            <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px">Kids shelves</div>
            <div class="drag-list" @dragover.prevent @drop="onDrop('Kids')">
              <div v-for="(shelf, idx) in kidsShelvesAdmin" :key="shelf._id"
                class="shelf-item" :class="{ archived: shelf.isArchived, 'drag-over': dragOverId === shelf._id }"
                draggable="true"
                @dragstart="onDragStart(shelf, idx, 'Kids')"
                @dragenter.prevent="onDragEnter(shelf)"
                @dragleave="onDragLeave(shelf)"
                @dragend="onDragEnd">
                <div class="shelf-item-header">
                  <div class="drag-handle" title="Drag to reorder">⠿</div>
                  <div style="flex:1;min-width:0">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
                      <span class="shelf-item-name">{{ shelf.name }}</span>
                      <span v-if="shelf.type === 'custom'" style="font-size:11px;padding:2px 8px;border-radius:20px;background:#EEEDFE;color:#3C3489;border:0.5px solid #7F77DD">Custom</span>
                      <span v-else style="font-size:11px;padding:2px 8px;border-radius:20px;background:var(--color-background-secondary);color:var(--color-text-secondary);border:0.5px solid var(--color-border-tertiary)">Genre</span>
                      <span v-if="shelf.isArchived" class="status-pill inactive">Archived</span>
                      <span v-else-if="shelf.isActive" class="status-pill active">Live</span>
                      <span v-else class="status-pill inactive">Hidden</span>
                    </div>
                    <span class="shelf-item-meta">{{ shelf.assessments ? shelf.assessments.length : 0 }} assessments</span>
                    <span v-if="shelf.expiresAt" class="shelf-item-meta">· expires {{ formatExpiry(shelf.expiresAt) }}</span>
                  </div>
                  <div class="actions">
                    <button class="action-btn" @click="toggleCustomShelf(shelf)">{{ shelf.isActive ? 'Hide' : 'Activate' }}</button>
                    <button class="action-btn" @click="toggleArchiveShelf(shelf)">{{ shelf.isArchived ? 'Restore' : 'Archive' }}</button>
                    <button v-if="shelf.type === 'custom'" class="action-btn" @click="editShelf(shelf)">Edit</button>
                    <button v-if="shelf.type === 'custom'" class="action-btn danger" @click="deleteCustomShelf(shelf)">Delete</button>
                  </div>
                </div>
                <div v-if="shelf.assessments && shelf.assessments.length" class="shelf-item-books">
                  <span v-for="a in shelf.assessments" :key="a._id" class="shelf-book-tag">{{ a.title }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div v-if="tab === 'featured'" class="admin-body">
      <div class="card">
        <div class="card-title">New release modal</div>
        <div class="info-note" style="margin-bottom:1.25rem">This modal pops up once per session on the homepage for non-kids view users. Toggle it active to enable it.</div>

        <div class="field-row-2" style="margin-bottom:16px">
          <div class="field">
            <label>Modal status</label>
            <div class="shelf-toggle">
              <button class="shelf-btn" :class="{ active: featured.isActive }" type="button" @click="featured.isActive = true">Active — show modal</button>
              <button class="shelf-btn" :class="{ active: !featured.isActive }" type="button" @click="featured.isActive = false">Inactive — hide modal</button>
            </div>
          </div>
          <div class="field">
            <label>Modal title</label>
            <input v-model="featured.title" type="text" placeholder="e.g. New Releases, Just Added, Featured This Week" />
          </div>
        </div>

        <div class="field" style="margin-bottom:16px">
          <label>Message <span class="label-note">(optional — shown above the assessment cards)</span></label>
          <textarea v-model="featured.message" rows="3" placeholder="e.g. We just added new stories to the library! Check them out before everyone else does."></textarea>
        </div>

        <div class="field" style="margin-bottom:16px">
          <label>Featured assessments</label>
          <div class="assessment-picker">
            <div v-for="a in library" :key="a._id" class="picker-item" :class="{ selected: featured.assessmentIds.includes(a._id) }" @click="toggleFeaturedAssessment(a._id)">
              <span class="picker-check">{{ featured.assessmentIds.includes(a._id) ? '✓' : '' }}</span>
              <span class="picker-title">{{ a.title }}</span>
              <span class="picker-shelf">{{ a.shelf }}</span>
            </div>
          </div>
        </div>

        <button class="generate-btn" style="margin-top:0" :disabled="featuredSaving" @click="saveFeatured">
          {{ featuredSaving ? 'Saving...' : 'Save featured modal' }}
        </button>
        <p v-if="featuredError" style="color:#A32D2D;font-size:13px;margin-top:8px">{{ featuredError }}</p>
        <p v-if="featuredSuccess" style="color:#3B6D11;font-size:13px;margin-top:8px">{{ featuredSuccess }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AdminIndex',
  layout: 'admin',
  middleware: [],
  data() {
    return {
      tab: 'create',
      generating: false,
      progress: 0,
      logs: [],
      generationResults: [],
      library: [],
      libraryLoading: false,
      adultShelfFilter: 'all',
      kidsShelfFilter: 'all',
      libraryShelves: [],
      deleteTarget: null,
      imageTarget: null,
      imageUrl: '',
      imagePrompt: '',
      imageLoading: false,
      imageError: '',
      imageTab: 'style',
      imageStyleSelected: '',
      imageContentEdit: '',
      imageStyles: [
        { label: 'Illustrated', prompt: 'Reimagine this book cover in a warm, editorial illustrated style with rich colors and hand-drawn feel. Keep the same subject and story concept.' },
        { label: 'Watercolor', prompt: 'Reimagine this book cover in a beautiful watercolor painting style with soft washes of color and painterly texture. Keep the same subject and story concept.' },
        { label: 'Cinematic', prompt: 'Reimagine this book cover in a cinematic photorealistic style with dramatic lighting and movie poster composition. Keep the same subject and story concept.' },
        { label: 'Pixel Art', prompt: 'Reimagine this book cover in a vibrant retro pixel art style with clean pixels and bold colors. Keep the same subject and story concept.' },
        { label: 'Oil Painting', prompt: 'Reimagine this book cover as a classical oil painting with rich textures and dramatic brushwork. Keep the same subject and story concept.' },
        { label: 'Minimalist', prompt: 'Reimagine this book cover in a clean minimalist design style with simple shapes, limited color palette and modern typography feel. Keep the same subject and story concept.' },
        { label: 'Comic Book', prompt: 'Reimagine this book cover in a bold comic book illustration style with strong outlines and vibrant flat colors. Keep the same subject and story concept.' },
        { label: 'Photorealistic', prompt: 'Reimagine this book cover as a highly detailed photorealistic image with professional photography lighting. Keep the same subject and story concept.' },
      ],
      customShelves: [],
      shelvesLoading: false,
      shelfSaving: false,
      shelfError: '',
      editingShelf: null,
      dragShelf: null,
      dragSection: null,
      dragOverId: null,
      featured: { isActive: false, title: 'New Releases', message: '', assessmentIds: [] },
      featuredSaving: false,
      featuredError: '',
      featuredSuccess: '',
      newShelf: {
        name: '',
        section: 'Adult',
        position: 'top',
        expiresAt: '',
        assessmentIds: [],
      },
      customTagInput: '',
      availableTags: [
        'Career', 'Personal Growth', 'Leadership', 'Relationships', 'Teamwork',
        'School', 'Playground', 'Friendship', 'Sports', 'Family',
        'Conflict Resolution', 'Communication', 'Decision Making',
        'Current Events', 'Entrepreneurship', 'Health & Wellness',
        'Creativity', 'Life Skills', 'Community', 'Finance',
        'Technology', 'Adventure', 'Social Skills',
      ],
      genres: [
        'Career & Workplace', 'Leadership', 'Personal Growth',
        'Relationships', 'Family & Parenting', 'School & Learning',
        'Sports & Competition', 'Adventure & Exploration', 'Social Skills',
        'Current Events', 'Finance & Business', 'Health & Wellness',
        'Community & Teamwork', 'Creative Arts', 'Technology & Innovation',
      ],
      form: {
        title: '',
        slug: '',
        shelf: 'Adult',
        genre: '',
        subcategories: [],
        creditsCost: 2,
        questionsPerPlaythrough: 10,
        wordCount: 5200,
        protagonist: '',
        brief: '',
        instructions: '',
        batchCount: 1,
        batchVariation: 'protagonist',
        imageStyle: 'illustrated',
        imagePromptOverride: '',
      },
    }
  },
  computed: {
    adultLibrary() {
      const list = this.library.filter(a => a.shelf === 'Adult')
      if (this.adultShelfFilter === 'all') return list
      const shelf = this.libraryShelves.find(s => s._id === this.adultShelfFilter)
      if (!shelf) return list
      if (shelf.type === 'genre') return list.filter(a => a.genre === shelf.genre)
      const ids = (shelf.assessments || []).map(a => a._id)
      return list.filter(a => ids.includes(a._id))
    },
    kidsLibrary() {
      const list = this.library.filter(a => a.shelf === 'Kids')
      if (this.kidsShelfFilter === 'all') return list
      const shelf = this.libraryShelves.find(s => s._id === this.kidsShelfFilter)
      if (!shelf) return list
      if (shelf.type === 'genre') return list.filter(a => a.genre === shelf.genre)
      const ids = (shelf.assessments || []).map(a => a._id)
      return list.filter(a => ids.includes(a._id))
    },
    adultShelfOptions() {
      return this.libraryShelves.filter(s => s.section === 'Adult')
    },
    kidsShelfOptions() {
      return this.libraryShelves.filter(s => s.section === 'Kids')
    },
    adultShelvesAdmin() {
      return this.customShelves.filter(s => s.section === 'Adult').sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    },
    kidsShelvesAdmin() {
      return this.customShelves.filter(s => s.section === 'Kids').sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    },
    estMinutes() {
      return Math.max(1, Math.round((this.form.wordCount || 5200) / 200))
    },
    totalNodes() {
      const q = this.form.questionsPerPlaythrough || 10
      const rounds = Math.ceil(q / 2)
      const generics = rounds
      const branches = Math.floor(q / 2) * 4
      return generics + branches + 1
    },
    nodePreview() {
      const q = this.form.questionsPerPlaythrough || 10
      const rounds = Math.ceil(q / 2)
      const nodes = []
      for (let r = 0; r < rounds; r++) {
        nodes.push({ label: 'Ch' + (r * 2 + 1), css: 'node-generic' })
        if (r < Math.floor(q / 2)) {
          nodes.push({ label: 'Ch' + (r * 2 + 2) + ' x4', css: 'node-branch' })
        }
      }
      nodes.push({ label: 'End x4', css: 'node-end' })
      return nodes
    },
    canGenerate() {
      return this.form.title && this.form.brief && this.form.protagonist
    },
  },
  mounted() {
    if (!sessionStorage.getItem('tal_admin_secret')) {
      this.$router.replace('/admin/login')
    }
  },
  watch: {
    imageContentEdit(val) {
      if (this.imageTab === 'content' && val && this.imageTarget) {
        this.imagePrompt = 'Book cover for "' + this.imageTarget.title + '". ' + val + '. High quality, professional book cover illustration.'
      }
    },
    imageTab(val) {
      if (val === 'style') {
        this.imagePrompt = this.imageStyleSelected ? this.imageStyles.find(s => s.label === this.imageStyleSelected)?.prompt || '' : ''
      }
    }
  },
  methods: {
    signOut() {
      sessionStorage.removeItem('tal_admin_secret')
      this.$router.push('/admin/login')
    },
    autoSlug() {
      this.form.slug = this.form.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')
    },
    toggleTag(tag) {
      const idx = this.form.subcategories.indexOf(tag)
      if (idx === -1) { this.form.subcategories.push(tag) } else { this.form.subcategories.splice(idx, 1) }
    },
    addCustomTag() {
      const t = this.customTagInput.trim()
      if (!t) return
      if (!this.availableTags.includes(t)) this.availableTags.push(t)
      if (!this.form.subcategories.includes(t)) this.form.subcategories.push(t)
      this.customTagInput = ''
    },
    addLog(msg, type = '') {
      this.logs.push({ msg, type })
      this.$nextTick(() => {
        if (this.$refs.logBox) this.$refs.logBox.scrollTop = this.$refs.logBox.scrollHeight
      })
    },
    async generate() {
      this.generating = true
      this.progress = 0
      this.logs = []
      this.generationResults = []
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      if (!adminSecret) { this.$router.push('/admin/login'); return }
      this.addLog('Starting generation of ' + this.form.batchCount + ' assessment(s)...', 'active')
      this.addLog('Model: claude-opus-4-6 · Image: DALL-E 3 · Storage: Backblaze B2')
      this.addLog('Total nodes: ' + this.totalNodes + ' · Questions per playthrough: ' + this.form.questionsPerPlaythrough)
      this.addLog('')
      this.progress = 10
      try {
        const progressTimer = setInterval(() => {
          if (this.progress < 85) this.progress = Math.min(85, this.progress + 1)
        }, 3000)
        this.addLog('Sending to server — Claude is writing your story...', 'active')
        const res = await this.$axios.post('/api/admin/generate', {
          title: this.form.title,
          slug: this.form.slug,
          protagonist: this.form.protagonist,
          brief: this.form.brief,
          instructions: this.form.instructions,
          shelf: this.form.shelf,
          genre: this.form.genre,
          subcategories: this.form.subcategories,
          questionsPerPlaythrough: this.form.questionsPerPlaythrough,
          wordCount: this.form.wordCount,
          creditsCost: this.form.creditsCost,
          imageStyle: this.form.imageStyle,
          imagePromptOverride: this.form.imagePromptOverride,
          batchCount: this.form.batchCount,
          batchVariation: this.form.batchVariation,
        }, {
          headers: { 'x-admin-secret': adminSecret },
          timeout: 30000,
        })
        clearInterval(progressTimer)
        const { jobId } = res.data
        this.addLog('Job started — polling for results...', 'active')
        await this.pollJob(jobId, adminSecret)
      } catch (err) {
        this.progress = 0
        this.addLog('Error: ' + (err.response?.data?.error || err.message), 'error')
      } finally {
        this.generating = false
      }
    },
    async pollJob(jobId, adminSecret) {
      const poll = async () => {
        try {
          const res = await this.$axios.get('/api/admin/jobs/' + jobId, {
            headers: { 'x-admin-secret': adminSecret },
          })
          const job = res.data
          if (job.progress) this.addLog(job.progress, 'active')
          if (this.progress < 90) this.progress = Math.min(90, this.progress + 5)
          if (job.status === 'done') {
            this.progress = 100
            this.generationResults = job.results
            job.results.forEach(r => { this.addLog('Created: "' + r.title + '" — /library/' + r.slug, 'success') })
            if (job.errors.length > 0) {
              job.errors.forEach(e => { this.addLog('Error: ' + e.error, 'error') })
            }
            this.addLog('Done. ' + job.results.length + ' created, ' + job.errors.length + ' failed.', 'success')
          } else if (job.status === 'error') {
            this.progress = 0
            this.addLog('Error: ' + job.error, 'error')
          } else {
            setTimeout(poll, 4000)
          }
        } catch (err) {
          this.addLog('Polling error: ' + err.message, 'error')
        }
      }
      await poll()
    },
    async inlineUpdate(a, field, value) {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.patch('/api/admin/assessments/' + a._id, { [field]: value }, { headers: { 'x-admin-secret': adminSecret } })
        a[field] = value
        if (field === 'shelf') a.shelf = value
      } catch (err) {
        console.error('Inline update failed:', err)
        alert('Failed to update: ' + (err.response?.data?.error || err.message))
      }
    },
    async loadLibrary() {
      this.libraryLoading = true
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const [assessRes, shelvesRes] = await Promise.all([
          this.$axios.get('/api/admin/assessments', { headers: { 'x-admin-secret': adminSecret } }),
          this.$axios.get('/api/admin/shelves', { headers: { 'x-admin-secret': adminSecret } }).catch(() => ({ data: { shelves: [] } }))
        ])
        this.library = assessRes.data.assessments
        this.libraryShelves = shelvesRes.data.shelves || []
      } catch (err) {
        console.error('Failed to load library:', err)
      } finally {
        this.libraryLoading = false
      }
    },
    async toggleAssessment(a) {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.patch('/api/admin/assessments/' + a._id + '/toggle', {}, { headers: { 'x-admin-secret': adminSecret } })
        a.isActive = res.data.isActive
      } catch (err) { console.error('Toggle failed:', err) }
    },
    confirmDelete(a) { this.deleteTarget = a },
    openImageManager(a) {
      this.imageTarget = a
      this.imageUrl = a.heroImageUrl || ''
      this.imagePrompt = ''
      this.imageContentEdit = ''
      this.imageStyleSelected = ''
      this.imageTab = 'style'
      this.imageError = ''
    },
    async loadFeatured() {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.get('/api/admin/featured-release', { headers: { 'x-admin-secret': adminSecret } })
        const d = res.data
        this.featured = {
          isActive: d.isActive,
          title: d.title || 'New Releases',
          message: d.message || '',
          assessmentIds: (d.assessments || []).map(a => a._id),
        }
        if (this.library.length === 0) await this.loadLibrary()
      } catch(err) { console.error(err) }
    },
    toggleFeaturedAssessment(id) {
      const idx = this.featured.assessmentIds.indexOf(id)
      if (idx === -1) { this.featured.assessmentIds.push(id) }
      else { this.featured.assessmentIds.splice(idx, 1) }
    },
    async saveFeatured() {
      this.featuredSaving = true
      this.featuredError = ''
      this.featuredSuccess = ''
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.patch('/api/admin/featured-release', this.featured, { headers: { 'x-admin-secret': adminSecret } })
        this.featuredSuccess = 'Saved successfully.'
        setTimeout(() => { this.featuredSuccess = '' }, 3000)
      } catch(err) {
        this.featuredError = err.response?.data?.error || err.message
      } finally {
        this.featuredSaving = false
      }
    },
    onDragStart(shelf, idx, section) {
      this.dragShelf = shelf
      this.dragSection = section
    },
    onDragEnter(shelf) {
      if (this.dragShelf && shelf._id !== this.dragShelf._id) {
        this.dragOverId = shelf._id
      }
    },
    onDragLeave(shelf) {
      if (this.dragOverId === shelf._id) this.dragOverId = null
    },
    onDragEnd() {
      this.dragShelf = null
      this.dragSection = null
      this.dragOverId = null
    },
    async onDrop(section) {
      if (!this.dragShelf || this.dragSection !== section) { this.onDragEnd(); return }
      const list = section === 'Adult' ? this.adultShelvesAdmin : this.kidsShelvesAdmin
      const fromIdx = list.findIndex(s => s._id === this.dragShelf._id)
      const toIdx = list.findIndex(s => s._id === this.dragOverId)
      if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) { this.onDragEnd(); return }
      const ids = list.map(s => s._id)
      const [moved] = ids.splice(fromIdx, 1)
      ids.splice(toIdx, 0, moved)
      const order = ids.map((id, i) => ({ id, sortOrder: i }))
      order.forEach(o => {
        const s = this.customShelves.find(sh => sh._id === o.id)
        if (s) s.sortOrder = o.sortOrder
      })
      this.onDragEnd()
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.patch('/api/admin/shelves-reorder', { order }, { headers: { 'x-admin-secret': adminSecret } })
      } catch(err) { console.error('Reorder failed:', err) }
    },
    editShelf(shelf) {
      this.editingShelf = shelf
      this.newShelf = {
        name: shelf.name,
        section: shelf.section,
        position: shelf.position || 'top',
        expiresAt: shelf.expiresAt ? new Date(shelf.expiresAt).toISOString().slice(0,16) : '',
        assessmentIds: (shelf.assessments || []).map(a => a._id),
      }
      this.$nextTick(() => {
        const el = document.querySelector('.admin-body')
        if (el) el.scrollTo({ top: 0, behavior: 'smooth' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    async saveEditShelf() {
      this.shelfSaving = true
      this.shelfError = ''
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.patch('/api/admin/shelves/' + this.editingShelf._id, {
          name: this.newShelf.name,
          section: this.newShelf.section,
          position: this.newShelf.position,
          expiresAt: this.newShelf.expiresAt || null,
          assessmentIds: this.newShelf.assessmentIds,
        }, { headers: { 'x-admin-secret': adminSecret } })
        const shelf = this.customShelves.find(s => s._id === this.editingShelf._id)
        if (shelf) {
          shelf.name = this.newShelf.name
          shelf.section = this.newShelf.section
          shelf.position = this.newShelf.position
          shelf.expiresAt = this.newShelf.expiresAt || null
          shelf.assessments = this.library.filter(a => this.newShelf.assessmentIds.includes(a._id))
        }
        this.editingShelf = null
        this.newShelf = { name: '', section: 'Adult', position: 'top', expiresAt: '', assessmentIds: [] }
      } catch(err) {
        this.shelfError = err.response?.data?.error || err.message
      } finally {
        this.shelfSaving = false
      }
    },
    async saveImageUrl() {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        this.imageLoading = true
        const res = await this.$axios.patch(
          '/api/admin/assessments/' + this.imageTarget._id + '/image',
          { heroImageUrl: this.imageUrl },
          { headers: { 'x-admin-secret': adminSecret } }
        )
        this.imageTarget.heroImageUrl = res.data.heroImageUrl
        this.imageTarget = null
      } catch (err) {
        this.imageError = err.response?.data?.error || err.message
      } finally {
        this.imageLoading = false
      }
    },
    async regenerateImage() {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        this.imageLoading = true
        this.imageError = ''
        const res = await this.$axios.post(
          '/api/admin/assessments/' + this.imageTarget._id + '/regenerate-image',
          { prompt: this.imagePrompt },
          { headers: { 'x-admin-secret': adminSecret }, timeout: 120000 }
        )
        this.imageTarget.heroImageUrl = res.data.heroImageUrl
        this.imageUrl = res.data.heroImageUrl
        this.imageError = ''
      } catch (err) {
        this.imageError = err.response?.data?.error || err.message
      } finally {
        this.imageLoading = false
      }
    },
    async loadShelves() {
      this.shelvesLoading = true
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.get('/api/admin/shelves', { headers: { 'x-admin-secret': adminSecret } })
        this.customShelves = res.data.shelves
        if (this.library.length === 0) await this.loadLibrary()
      } catch(err) { console.error(err) } finally { this.shelvesLoading = false }
    },
    toggleShelfAssessment(id) {
      const idx = this.newShelf.assessmentIds.indexOf(id)
      if (idx === -1) { this.newShelf.assessmentIds.push(id) }
      else { this.newShelf.assessmentIds.splice(idx, 1) }
    },
    async createShelf() {
      this.shelfSaving = true
      this.shelfError = ''
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.post('/api/admin/shelves', this.newShelf, { headers: { 'x-admin-secret': adminSecret } })
        this.customShelves.unshift({ ...res.data.shelf, assessments: this.library.filter(a => this.newShelf.assessmentIds.includes(a._id)) })
        this.newShelf = { name: '', section: 'Adult', position: 'top', expiresAt: '', assessmentIds: [] }
      } catch(err) { this.shelfError = err.response?.data?.error || err.message } finally { this.shelfSaving = false }
    },
    async toggleCustomShelf(shelf) {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.patch('/api/admin/shelves/' + shelf._id + '/toggle', {}, { headers: { 'x-admin-secret': adminSecret } })
        shelf.isActive = res.data.isActive
      } catch(err) { console.error(err) }
    },
    async toggleArchiveShelf(shelf) {
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        const res = await this.$axios.patch('/api/admin/shelves/' + shelf._id + '/archive', {}, { headers: { 'x-admin-secret': adminSecret } })
        shelf.isArchived = res.data.isArchived
        shelf.isActive = false
      } catch(err) { console.error(err) }
    },
    async deleteCustomShelf(shelf) {
      if (!confirm('Delete shelf "' + shelf.name + '"? This cannot be undone.')) return
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.delete('/api/admin/shelves/' + shelf._id, { headers: { 'x-admin-secret': adminSecret } })
        this.customShelves = this.customShelves.filter(s => s._id !== shelf._id)
      } catch(err) { console.error(err) }
    },
    formatExpiry(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    async deleteAssessment() {
      if (!this.deleteTarget) return
      const adminSecret = sessionStorage.getItem('tal_admin_secret')
      try {
        await this.$axios.delete('/api/admin/assessments/' + this.deleteTarget._id, { headers: { 'x-admin-secret': adminSecret } })
        this.library = this.library.filter(a => a._id !== this.deleteTarget._id)
        this.deleteTarget = null
      } catch (err) { console.error('Delete failed:', err) }
    },
  },
}
</script>

<style scoped>
.admin-root { min-height: 100vh; background: var(--color-background-tertiary, #f5f4f1); }
.admin-header { background: var(--color-background-primary, #fff); border-bottom: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12)); padding: 1rem; position: sticky; top: 0; z-index: 10; }
.header-inner { max-width: 960px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
h1 { font-size: 18px; font-weight: 500; margin: 0 0 2px; }
.header-sub { font-size: 12px; color: var(--color-text-secondary, #666); margin: 0; }
.header-actions { display: flex; align-items: center; gap: 8px; }
.tab-btn { padding: 6px 14px; border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 6px; background: transparent; font-size: 13px; cursor: pointer; color: var(--color-text-primary, #1a1a1a); font-family: inherit; transition: all 0.15s; }
.tab-btn.active { background: #534AB7; border-color: #534AB7; color: #fff; }
.sign-out-btn { padding: 6px 14px; border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 6px; background: transparent; font-size: 13px; cursor: pointer; color: var(--color-text-secondary, #666); font-family: inherit; }
.admin-body { max-width: 960px; margin: 0 auto; padding: 1.5rem 1rem 4rem; }
.card { background: var(--color-background-primary, #fff); border: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12)); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.25rem; }
.card-title { font-size: 15px; font-weight: 500; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.1)); }
.field-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.field-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
@media (max-width: 640px) { .field-row-2, .field-row-3 { grid-template-columns: 1fr; } }
.field { display: flex; flex-direction: column; gap: 6px; }
label { font-size: 13px; font-weight: 500; color: var(--color-text-secondary, #666); }
.label-note { font-weight: 400; font-size: 11px; }
input, select, textarea { padding: 8px 10px; border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 8px; font-size: 14px; background: var(--color-background-primary, #fff); color: var(--color-text-primary, #1a1a1a); font-family: inherit; outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box; }
input:focus, select:focus, textarea:focus { border-color: #534AB7; box-shadow: 0 0 0 3px rgba(83,74,183,0.08); }
textarea { resize: vertical; min-height: 90px; line-height: 1.6; }
.shelf-toggle { display: flex; gap: 8px; }
.shelf-btn { flex: 1; padding: 9px; border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 8px; background: var(--color-background-primary, #fff); font-size: 14px; cursor: pointer; transition: all 0.15s; color: var(--color-text-primary, #1a1a1a); font-family: inherit; }
.shelf-btn.active { background: #CECBF6; border-color: #534AB7; color: #3C3489; font-weight: 500; }
.tags-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.tag { padding: 4px 10px; background: var(--color-background-secondary, #f5f4f1); border: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15)); border-radius: 6px; font-size: 12px; cursor: pointer; transition: all 0.15s; color: var(--color-text-primary, #1a1a1a); }
.tag.active { background: #CECBF6; border-color: #534AB7; color: #3C3489; }
.tag-input { padding: 4px 10px; border: 0.5px dashed var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 6px; font-size: 12px; width: 120px; background: transparent; }
.hint { font-size: 12px; color: var(--color-text-tertiary, #999); }
.info-note { font-size: 13px; color: var(--color-text-secondary, #666); background: var(--color-background-secondary, #f5f4f1); padding: 10px 14px; border-radius: 6px; border-left: 3px solid #7F77DD; margin-bottom: 1.25rem; line-height: 1.6; }
.struct-nodes { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-bottom: 1rem; }
.node { padding: 3px 8px; border-radius: 4px; font-size: 11px; white-space: nowrap; }
.node-generic { background: #E6F1FB; border: 1px solid #378ADD; color: #0C447C; }
.node-branch { background: #EEEDFE; border: 1px solid #7F77DD; color: #3C3489; }
.node-end { background: #EAF3DE; border: 1px solid #639922; color: #27500A; }
.arrow { color: var(--color-text-tertiary, #aaa); font-size: 12px; }
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
@media (max-width: 640px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
.stat-card { background: var(--color-background-secondary, #f5f4f1); border-radius: 8px; padding: 0.75rem 1rem; }
.stat-label { font-size: 12px; color: var(--color-text-secondary, #666); }
.stat-val { font-size: 22px; font-weight: 500; margin-top: 2px; }
.generate-btn { width: 100%; padding: 15px; background: #534AB7; color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 500; cursor: pointer; transition: all 0.15s; margin-top: 0.5rem; font-family: inherit; }
.generate-btn:hover:not(:disabled) { background: #3C3489; }
.generate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.progress-card { background: var(--color-background-primary, #fff); border: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12)); border-radius: 12px; padding: 1.25rem; margin-top: 1rem; }
.progress-bar-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
.progress-bar { flex: 1; height: 6px; background: var(--color-background-secondary, #eee); border-radius: 3px; overflow: hidden; }
.progress-fill { height: 100%; background: #534AB7; border-radius: 3px; transition: width 0.4s ease; }
.progress-pct { font-size: 12px; color: var(--color-text-secondary, #666); min-width: 36px; text-align: right; }
.log-box { background: var(--color-background-secondary, #f5f4f1); border-radius: 8px; padding: 0.75rem; font-family: var(--font-mono, monospace); font-size: 12px; max-height: 220px; overflow-y: auto; line-height: 1.8; }
.log-line { color: var(--color-text-secondary, #666); }
.log-line.active { color: #534AB7; font-weight: 500; }
.log-line.success { color: #3B6D11; }
.log-line.error { color: #A32D2D; }
.results-wrap { margin-top: 1rem; padding-top: 1rem; border-top: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.1)); }
.results-title { font-size: 13px; font-weight: 500; margin-bottom: 8px; }
.result-row { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.08)); }
.result-title { font-size: 13px; }
.result-link { font-size: 12px; color: #534AB7; text-decoration: none; }
.result-link:hover { text-decoration: underline; }
.loading-msg { color: var(--color-text-secondary, #666); font-size: 14px; padding: 1rem 0; }
.lib-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.lib-table th { text-align: left; padding: 8px 10px; font-weight: 500; border-bottom: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.2)); color: var(--color-text-secondary, #666); }
.lib-table td { padding: 10px; border-bottom: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.08)); vertical-align: middle; }
.card-title-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 1rem; flex-wrap: wrap; }
.shelf-filter-select { padding: 5px 10px; border: 0.5px solid var(--color-border-secondary); border-radius: 6px; font-size: 13px; font-family: inherit; background: transparent; cursor: pointer; min-width: 160px; }
.shelf-filter-select:focus { border-color: #534AB7; outline: none; }
.genre-tag { font-size: 11px; padding: 2px 8px; border-radius: 20px; background: var(--color-background-secondary); color: var(--color-text-secondary); border: 0.5px solid var(--color-border-tertiary); white-space: nowrap; }
.inline-input { width: 60px; padding: 4px 6px; border: 0.5px solid var(--color-border-tertiary); border-radius: 6px; font-size: 13px; font-family: inherit; text-align: center; background: transparent; transition: border-color 0.15s; }
.inline-input:focus { border-color: #534AB7; outline: none; }
.inline-select { padding: 4px 6px; border: 0.5px solid var(--color-border-tertiary); border-radius: 6px; font-size: 13px; font-family: inherit; background: transparent; cursor: pointer; transition: border-color 0.15s; }
.inline-select:focus { border-color: #534AB7; outline: none; }
.status-pill { padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 500; }
.status-pill.active { background: #EAF3DE; color: #27500A; border: 0.5px solid #639922; }
.status-pill.inactive { background: var(--color-background-secondary, #f0f0f0); color: var(--color-text-secondary, #666); border: 0.5px solid var(--color-border-tertiary); }
.actions { display: flex; gap: 6px; }
.action-btn { padding: 4px 10px; border: 0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3)); border-radius: 6px; background: transparent; font-size: 12px; cursor: pointer; color: var(--color-text-primary, #1a1a1a); font-family: inherit; transition: all 0.15s; }
.action-btn:hover { background: var(--color-background-secondary, #f5f4f1); }
.action-btn.danger { color: #A32D2D; border-color: rgba(163,45,45,0.4); }
.action-btn.danger:hover { background: #FCEBEB; }
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 1rem; }
.modal-card { background: var(--color-background-primary, #fff); border-radius: 12px; padding: 2rem; max-width: 440px; width: 100%; border: 0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12)); }
.modal-card h2 { font-size: 18px; font-weight: 500; margin-bottom: 0.75rem; }
.modal-card p { font-size: 14px; color: var(--color-text-secondary, #666); margin-bottom: 1.5rem; line-height: 1.6; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; }
.assessment-picker {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 280px;
  overflow-y: auto;
  border: 0.5px solid var(--color-border-tertiary);
  border-radius: 8px;
  padding: 8px;
}
.picker-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.12s;
}
.picker-item:hover { background: var(--color-background-secondary); }
.picker-item.selected { background: #EEEDFE; }
.picker-check {
  width: 18px;
  height: 18px;
  border: 0.5px solid var(--color-border-secondary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #534AB7;
  flex-shrink: 0;
}
.picker-item.selected .picker-check { background: #534AB7; color: #fff; border-color: #534AB7; }
.picker-title { font-size: 13px; flex: 1; }
.picker-shelf { font-size: 11px; color: var(--color-text-secondary); background: var(--color-background-secondary); padding: 2px 8px; border-radius: 20px; }
.shelf-item {
  border: 0.5px solid var(--color-border-tertiary);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 10px;
  transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  cursor: grab;
  background: #fff;
}
.shelf-item:active { cursor: grabbing; }
.shelf-item.archived { opacity: 0.5; }
.shelf-item.drag-over { border-color: #534AB7; box-shadow: 0 0 0 2px rgba(83,74,183,0.2); }
.drag-handle {
  font-size: 18px;
  color: var(--color-text-tertiary);
  cursor: grab;
  user-select: none;
  padding: 0 8px 0 0;
  line-height: 1;
  display: flex;
  align-items: center;
}
.drag-handle:active { cursor: grabbing; }
.drag-list { min-height: 20px; }
.shelf-item-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
.shelf-item-name { font-size: 15px; font-weight: 500; display: block; margin-bottom: 4px; }
.shelf-item-meta { font-size: 12px; color: var(--color-text-secondary); margin-right: 4px; }
.shelf-item-books { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.shelf-book-tag { font-size: 11px; padding: 3px 10px; background: var(--color-background-secondary); border-radius: 20px; color: var(--color-text-secondary); border: 0.5px solid var(--color-border-tertiary); }
</style>
