# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website deployed on Vercel at https://shafiqimtiaz.vercel.app/

## Build Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server (Vite)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

## Architecture

**Stack**: React 18 + Vite + Tailwind CSS v4 + React Router v7

**Key Files**:

- [src/App.jsx](src/App.jsx) - Route definitions with shared Navbar/Footer shell
- [src/main.jsx](src/main.jsx) - Entry point, wraps app in BrowserRouter
- [src/hooks/useTheme.js](src/hooks/useTheme.js) - Theme state management (localStorage persisted)
- [src/styles/theme.css](src/styles/theme.css) - CSS custom properties for dark/light themes
- [src/styles/global.css](src/styles/global.css) - Tailwind imports + base styles + decorative overlays (CRT scanlines, grid patterns)

**Routing**: Client-side routing with react-router. GitHub Pages SPA redirect script in [index.html](index.html) handles 404 fallbacks.

**Theming**: Dark mode default. `useTheme` hook toggles `theme-light` class on `<html>`. All colors use CSS custom properties from theme.css.

**Static Projects**: Legacy vanilla JS projects live in [public/projects/](public/projects/) and are served directly.
