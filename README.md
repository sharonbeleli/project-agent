# Project Agent

The production app lives inside the `project-agent-mvp` folder. When deploying to Vercel, set the project’s **Root Directory** to `project-agent-mvp` in the Vercel dashboard so routes resolve correctly. The `vercel.json` file at the repo root only defines build and development commands.

The application's home page is defined in `project-agent-mvp/app/page.tsx`, and a simple health-check endpoint is available at `project-agent-mvp/app/api/health/route.ts`.

## Assets

Binary images are not stored in this repository. SVG placeholders (e.g. `project-agent-mvp/public/avatar.svg`) are used so the repo remains text-only. Replace them with real images in production if needed.
