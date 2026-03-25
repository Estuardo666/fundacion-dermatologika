<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project conventions in this repo

- App Router code lives under `src/app/` (`src/app/layout.tsx`, `src/app/page.tsx`), and the home page is composed from organism sections in `src/components/organisms/`.
- Follow the Atomic Design structure documented in `src/components/README.md`: keep reusable UI split across `src/components/atoms/`, `src/components/molecules/`, and `src/components/organisms/`.
- Treat `src/components/atoms/Button.tsx` as the single source of truth for CTA buttons. Use the shared `primary` and `secondary` variants instead of one-off button styles so the global pill design stays consistent.
- For href-based CTAs, prefer `src/components/atoms/LinkButton.tsx` so navigation actions reuse the same pill system without ad hoc styling.
- Use the TypeScript path alias `@/*` (configured in `tsconfig.json`) for imports from `src/`.
- Styling uses Tailwind CSS v4 plus CSS custom properties in `src/app/globals.css`; prefer existing tokens like `--institutional-green`, `--semi-dark-gray`, and `--soft-gray`.
- Client-only animation/scroll logic is implemented with `"use client"` components plus `framer-motion` and `lenis` (see `src/components/providers/SmoothScrollProvider.tsx` and `src/app/page.tsx`).

## Workflow and integrations

- Use npm scripts from `package.json`: `npm run dev`, `npm run lint`, `npm run build`, `npm run prisma:generate`, and `npm run prisma:migrate`.
- Prisma is configured via `prisma/schema.prisma` and `prisma.config.ts` with a MySQL datasource (`DATABASE_URL`).
- Cloudflare R2 integration is centralized in `src/lib/s3.ts` and requires: `CLOUDFLARE_R2_ACCOUNT_ID`, `CLOUDFLARE_R2_ACCESS_KEY_ID`, `CLOUDFLARE_R2_SECRET_ACCESS_KEY`, and `CLOUDFLARE_R2_BUCKET_NAME`.
- Treat `src/generated/prisma/` as generated output; do not hand-edit generated client files.
<!-- END:nextjs-agent-rules -->
