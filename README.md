# Project Agent MVP

Next.js 14 + Tailwind + Supabase starter with RTL Hebrew UI.

## Getting Started
1. Copy `.env.example` to `.env.local` and fill `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. For production build:
   ```bash
   npm run build
   npm start
   ```

## Deployment (Vercel)
The production Next.js app lives inside the `project-agent-mvp` folder.  
In Vercel **Project Settings → General**, set **Root Directory** to `project-agent-mvp` so routes resolve correctly.  
The `vercel.json` at the repo root only defines build/dev commands.

- Home page: `project-agent-mvp/app/page.tsx`  
- Health check: `project-agent-mvp/app/api/health/route.ts`

## Assets
Binary images are not stored in this repository. SVG placeholders (e.g. `project-agent-mvp/public/avatar.svg`, `project-agent-mvp/public/favicon.svg`) are used so the repo remains text-only. Replace them with real images in production if needed.

## Troubleshooting
If you encounter deployment issues on Vercel, refer to their [error code documentation](https://vercel.com/docs/errors).
