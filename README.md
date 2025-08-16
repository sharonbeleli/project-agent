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

The application's home page lives at `app/page.tsx`, and a simple health-check endpoint is available at `app/api/health/route.ts`.

## Assets
Binary images are not stored in this repository. SVG placeholders (for example `public/avatar.svg` and `public/favicon.svg`) keep the repo text-only. Replace them with real images in production if desired.

## Directory listing
The `public/index.html` file is a minimal placeholder that prevents static directory
listing if the `public` folder is ever exposed directly by a host.

## Troubleshooting
If you encounter deployment issues on Vercel, refer to their [error code documentation](https://vercel.com/docs/errors) for guidance.
