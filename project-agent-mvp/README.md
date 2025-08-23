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

Deploy to Vercel by pushing this project and connecting the repo or using the Vercel CLI. When configuring the project on Vercel, set the **Root Directory** to `project-agent-mvp` so the app's `package.json` and routes are detected and you don't receive a 404.

## Troubleshooting

If you encounter deployment issues on Vercel, refer to their [error code documentation](https://vercel.com/docs/errors) for guidance.

## Assets

This repository avoids binary assets in the `public` folder. Placeholder SVGs (for example `avatar.svg` and `favicon.svg`) are used so the project can be stored entirely as text. In production, you may replace these SVGs with real images if desired.
