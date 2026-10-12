# Sitio web · Coaching de alto rendimiento

Sitio profesional para **Andrea Fernández**, coach de alto rendimiento deportivo. Lo desarrollé como freelance para una clienta real y está publicado en **[andreatucoach.com](https://andreatucoach.com)**.

## Qué incluye

- Sitio de una sola página con las secciones Inicio, Sobre mí, Filosofía, Metodología, Certificación, Trayectoria, Equipo y Contacto, con acceso directo a WhatsApp.
- **Bilingüe (español / inglés)** con un sistema de traducciones propio (`src/i18n`) y selector de idioma.
- Animaciones y tarjetas con efecto *flip* para presentar contenido.
- Diseño responsive para celular, tablet y escritorio.

## Tecnologías

`React` · `TypeScript` · `Vite` · `Tailwind CSS` · `shadcn/ui (Radix)` · `Vitest` · deploy en `Netlify`

## Cómo lo construí

La base inicial la generé con **Lovable** y después seguí el desarrollo con **Claude Code**: ajustes de diseño, textos en los dos idiomas, correcciones y mejoras pedidas por la clienta. Cada cambio lo reviso y lo pruebo en el navegador antes de publicarlo.

## Correr el proyecto

```bash
npm install
npm run dev      # entorno local
npm run build    # build de producción
```

## Estructura

```
src/
  components/   componentes reutilizables (FlipCard, LanguageToggle, ui/)
  i18n/         diccionario y proveedor de idioma
  pages/        página principal y 404
  assets/       imágenes del sitio
public/         archivos públicos
```

---

Desarrollado por [Facundo Artola](https://github.com/facuartola).
