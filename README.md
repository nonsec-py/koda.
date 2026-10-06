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

Editable services, pricing, projects and contact links are centralized in `lib/content.ts`. The contact form does not require environment variables: it validates the visitor's details and opens their email application with a prepared message.

## Deployment

Import the repository into Vercel. Next.js is detected automatically. Before connecting a domain, update `metadataBase` in `app/layout.tsx`.
