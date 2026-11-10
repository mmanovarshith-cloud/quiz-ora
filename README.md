# Quizora — Learn. Challenge. Improve.

A responsive quiz-learning frontend built with React, TypeScript and Vite. This V1 release is designed for GitHub Pages and stores demo profile, bookmarks, theme and quiz history in the browser's `localStorage`.

## Included in V1

- Responsive dashboard and navigation
- Cricket, UK GCSE Maths, Intermediate Maths, B.Tech, English and General Knowledge categories
- Category and subject exploration, search and filters
- Randomized multiple-choice quiz sessions
- Answer feedback and explanations
- Results, score review and elapsed-time tracking
- Bookmarks, achievements, history and progress summaries
- Light/dark theme and editable local display name
- GitHub Actions deployment workflow for GitHub Pages

## Requirements

- Node.js 20 or newer
- npm 10 or newer recommended

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build and preview

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Publish to GitHub Pages

1. Create a GitHub repository named `quizora` (or another name you prefer).
2. Upload the contents of this project folder to the repository root. Do not upload `node_modules` or `dist`.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Push to `main`. The included workflow installs dependencies, builds the site and deploys `dist/`.
7. After the workflow succeeds, open the Pages URL shown in the Actions deployment.

The Vite config uses a relative asset base and the app uses `HashRouter`, so it works for both `username.github.io/quizora/` project sites and user/organization sites without needing a repository-specific base path.

## Important V1 limitations

This is a frontend-only release. Browser storage is local to one browser/device and can be cleared by the user. There is no real account authentication, shared leaderboard, cross-device sync, admin content manager, or secure server-side scoring yet. Do not use localStorage as a secure store for sensitive data. The current question bank is illustrative starter content and must be expanded and fact-checked before public educational use. The category counts are roadmap estimates, not the number of bundled questions.

## Recommended next engineering phase

Integrate Supabase Auth and PostgreSQL. Move answer keys and scoring to a trusted server-side function, add Row Level Security, content moderation, question sourcing/review metadata, automated browser tests and operational monitoring before treating Quizora as a production multi-user service.
