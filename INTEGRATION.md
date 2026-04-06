# Archie Integration Guide

## Files to add / edit

### 1. New file → api/controllers/archieController.js
Copy archieController.js from this delivery into api/controllers/

### 2. Edit → api/index.js
Add near other controller requires:
  const archieController = require('./controllers/archieController')

Add route (near other authenticated routes):
  app.post('/archie/tip', sessionsController.authenticate, archieController.getTip)

### 3. New file → components/ArchieButler.vue
Copy ArchieButler.vue from this delivery into components/

### 4. Edit → layouts/default.vue
Template — after <KidsViewBanner />:
  <ArchieButler />

Script — add import:
  import ArchieButler from '~/components/ArchieButler.vue'

Add to components: { KidsViewBanner, ArchieButler }

### 5. .env
  ANTHROPIC_API_KEY=sk-ant-...

### 6. Install SDK
  npm install @anthropic-ai/sdk

---

## How it works

- Archie sits fixed bottom-right, collapsed to a pill by default
- Click to expand — he fetches a tip from POST /api/archie/tip
- Tips are cached in localStorage for 24hrs per trait+page combo
  Cache key format: archie_{trait}_{pageContext}
- Uses claude-haiku (fastest + cheapest model) — ~$0.0004 per tip
- With 24hr caching, 1,000 active users ≈ $5-15/month total
- Page context auto-detected from $route.path
- Dominant trait pulled from Vuex sessionsByAssessmentId store
- Auth handled by existing sessionsController.authenticate middleware
- Hides automatically on /auth/* pages and for logged-out users

## Cost estimate
- claude-haiku-4-5: ~$0.80 per 1M input tokens, ~$4 per 1M output tokens
- Each tip: ~150 input tokens + ~60 output tokens = ~$0.0004
- With 24hr cache: a user visiting 5 pages/day = 5 API calls max
- 1,000 users × 5 calls × $0.0004 = ~$2/day worst case (no cache hits)
- Realistically with cache: 80-90% fewer calls → ~$0.20-0.40/day
