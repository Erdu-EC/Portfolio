# Portafolio de Eduardo Castillo

Portafolio personal construido con **Astro 7** y **Tailwind CSS 4**.
## 🚀 Tecnologías

- [Astro 7](https://astro.build) — Framework web de nueva generación
- [Tailwind CSS 4](https://tailwindcss.com) — Framework CSS utility-first
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) — Gestión de contenido tipado con Zod

## 📁 Estructura del proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BlogPostCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   └── Skills.astro
│   ├── content/
│   │   ├── blog/          # Artículos del blog (Markdown)
│   │   └── projects/      # Proyectos (Markdown)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## 🧞 Comandos

| Comando                | Acción                                            |
| :--------------------- | :------------------------------------------------ |
| `pnpm install`         | Instala las dependencias                          |
| `pnpm dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`           | Compila el sitio para producción en `./dist/`     |
| `pnpm preview`         | Previsualiza el build localmente                  |

## ✨ Características

- **Modo oscuro** con detección automática del sistema
- **Content Collections** con validación Zod para proyectos y blog
- **Rutas dinámicas** para artículos del blog
- **Diseño responsive** con Tailwind CSS 4
- **SEO optimizado** con meta tags dinámicos
- **Navegación responsive** con menú móvil

## 📝 Agregar contenido

### Nuevo proyecto

Crea un archivo Markdown en `src/content/projects/`:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción del proyecto"
tags:
  - Tecnología 1
  - Tecnología 2
links:
  source: https://github.com/usuario/repo
  demo: https://demo.example.com
featured: true
---
```

### Nuevo artículo del blog

Crea un archivo Markdown en `src/content/blog/`:

```markdown
---
title: "Título del artículo"
description: "Descripción breve"
pubDate: 2024-01-01
tags:
  - Tag 1
  - Tag 2
draft: false
---

Contenido del artículo en Markdown...
```

## 🌐 Despliegue

El sitio se compila como estático y puede desplegarse en cualquier proveedor:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## 📄 Licencia

MIT
# Portfolio
