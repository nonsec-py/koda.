# koda.

Sitio de diseño y desarrollo web freelance de Adán, construido con Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run typecheck
npm run build
```

El contenido editable de servicios, precios, proyectos y enlaces está centralizado en `lib/content.ts`. El formulario no requiere variables de entorno: valida los datos y abre WhatsApp con el mensaje preparado.

## Despliegue

Importa el repositorio en Vercel. Next.js se detecta automáticamente. Antes de conectar un dominio, actualiza `metadataBase` en `app/layout.tsx`.
