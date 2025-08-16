# Project Agent

The production app lives inside the `project-agent-mvp` folder. A `vercel.json` file at the repo root sets this folder as the Vercel
**Root Directory**, preventing `404_NOT_FOUND` errors when deploying. The application's home page is defined in
`project-agent-mvp/app/page.tsx`, and a simple health-check endpoint is available at
`project-agent-mvp/app/api/health/route.ts`.

## Assets

Binary images are not stored in this repository. SVG placeholders (e.g. `project-agent-mvp/public/avatar.svg`) are used so the repo remains text-only. Replace them with real images in production if needed.
