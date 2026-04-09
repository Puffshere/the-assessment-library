# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (Nuxt hot reload, no API changes watched)
npm run dev:nuxt

# Development with API watching via nodemon
npm run dev

# Production build
npm run build

# Production start
npm start

# Run tests (ava)
npm test

# Production deployment (PM2)
pm2 start npm -- start   # first time
pm2 restart npm           # subsequent deploys after build
```

## Architecture

This is a **Nuxt 2 / Vue 2** application with a custom **Express.js** REST API mounted as Nuxt server middleware at `/api`. In production, a **Koa** server (`server/index.js`) wraps Nuxt.

### Stack
- **Frontend**: Nuxt 2, Vue 2, Vuex, SCSS
- **Backend**: Express.js API (`api/index.js`) exposed at `/api/*` via `nuxt.config.js` `serverMiddleware`
- **Database**: MongoDB via Mongoose 5
- **Auth**: JWT tokens; stored in `localStorage` under keys `tal_logged_in` and `tal_token`; the Vuex store (`store/index.js`) is the source of truth for `loggedIn`, `user`, and `token` state
- **Route protection**: `middleware/auth.js` redirects unauthenticated users to `/auth/login`

### Domain Model
The core domain is **scenario-based DISC personality assessments**:
- `Assessment` — the story/book with chapters, branching questions, and DISC-keyed conclusion text
- `AssessmentSession` — a user's progress through one assessment (statuses: `not_started` → `in_progress` → `completed`)
- `User` — has `creditsBalance`; credits are consumed to unlock assessments
- `CreditTransaction` — ledger for credit purchases

**DISC traits**: Dominance (D), Influence (I), Steadiness (S), Conscientiousness (C). Each answer carries a `value` that maps to a trait via `scoringConfig`. The final question renders one of four conclusion texts (`dominanceConclusion`, etc.) based on the top-scoring trait. Trait colors: D = `#e93d2f`, I = `#ffbd05`, S = `#0dab49`, C = `#1666ff`.

### API Routes (`api/index.js`)
| Method | Path | Controller |
|---|---|---|
| POST | `/api/auth/login` | authController |
| POST | `/api/auth/register` | authController |
| POST | `/api/auth/forgot-password` | authController |
| POST | `/api/auth/reset-password` | authController |
| GET | `/api/dashboard` | dashboardController |
| GET | `/api/assessments` | assessmentController |
| GET | `/api/assessments/:slug` | assessmentController |
| POST | `/api/sessions` | sessionsController (auth required) |
| GET | `/api/sessions/:id` | sessionsController (auth required) |
| POST | `/api/sessions/:id/answer` | sessionsController (auth required) |
| POST | `/api/credits/add-one` | creditsController (auth required) |
| POST | `/api/contact` | contactController |
| POST | `/api/upload` | uploadController |

Authentication middleware lives in `sessionsController.authenticate` and is applied per-route.

### Frontend Pages
- `/` — home
- `/library` — browse assessments
- `/library/:slug` — assessment detail / checkout (`pages/library/_slug.vue`)
- `/library/:slug/*` — assessment question flow (`pages/library/_slug/` directory)
- `/dashboard` — user dashboard with session list and DISC results panels (auth required)
- `/auth/login`, `/auth/registration`, `/auth/reset-password` — auth flows
- `/about`, `/contact` — marketing pages

### Key Files
- `nuxt.config.js` — Nuxt config, axios `baseURL`/`browserBaseURL`, GTM, sitemap, plugins list
- `store/index.js` — all auth state and actions (`login`, `register`, `logout`, `nuxtClientInit`)
- `plugins/auth-state.client.js` — calls `store.dispatch('initFromStorage')` on client boot
- `components/ResultsPanel.vue` / `ResultsPanelThirdPerson.vue` — DISC results display
- `assets/scss/` — shared SCSS variables and styles (imported as `~assets/scss/vars` / `~assets/scss/new-styles`)

### Module System Note
The codebase mixes CommonJS and ES modules. API **controllers** use `require`/`module.exports`; API **models** use `import`/`export default`. When adding new files, follow the convention of the directory.

## AI Model Guidelines

When generating creative content via the Anthropic API (story chapters, assessment scenarios, narrative text), always use `claude-opus-4-6` for the highest quality creative writing. This applies to:
- Story chapter generation (`storyController.js`)
- Assessment scenario/question generation (future work)
- Any other user-facing narrative content

Use a cheaper/faster model (e.g. `claude-sonnet-4-5` or `claude-haiku-4-5`) only for non-creative tasks like classification, summarization, or structured data extraction.

## Environment Variables

Required in `.env`:
```
MONGO_URI=
JWT_SECRET=
RECAPTCHA_SECRET_KEY=
RECAPTCHA_SECRET_KEY_V3=
BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:3000
BROWSER_API_BASE_URL=http://localhost:3000
```
