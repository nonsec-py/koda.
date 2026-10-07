# koda.

Freelance web design and development site for Adán, built with Next.js, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

Editable services, pricing, projects and contact links are centralized in `lib/content.ts`. The contact form sends inquiries through Formspree; its endpoint is configured as `FORM_ENDPOINT` in the same file.

## Deployment

Import the repository into Vercel. Next.js is detected automatically. Before connecting a domain, update `metadataBase` in `app/layout.tsx`.
