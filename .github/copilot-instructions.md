# Workspace Instructions

## Project Overview

Personal portfolio website deployed on Vercel at https://shafiqimtiaz.vercel.app/

## Build Commands

Run these commands in the terminal to work with the project:

```bash
npm install        # Install dependencies
npm run dev        # Start development server (Vite)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

## Architecture

**Stack**: React 18 + Vite + Tailwind CSS v4 + React Router v7

**Key Files**:

- \`src/App.jsx\` - Route definitions with shared Navbar/Footer shell
- \`src/main.jsx\` - Entry point, wraps app in BrowserRouter
- \`src/hooks/useTheme.js\` - Theme state management (localStorage persisted)
- \`src/styles/theme.css\` - CSS custom properties for dark/light themes
- \`src/styles/global.css\` - Tailwind imports + base styles + decorative overlays (CRT scanlines, grid patterns)

**Routing**: Client-side routing with react-router. GitHub Pages SPA redirect script in \`index.html\` handles 404 fallbacks.

**Theming**: Dark mode default. \`useTheme\` hook toggles \`theme-light\` class on \`<html>\`. All colors use CSS custom properties from theme.css.

**Static Projects**: Legacy vanilla JS projects live in \`public/projects/\` and are served directly.
