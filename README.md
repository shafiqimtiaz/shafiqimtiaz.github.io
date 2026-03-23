## shafiqimtiaz.vercel.app

Link - https://shafiqimtiaz.vercel.app/

## Local development

This project is configured for npm.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Canonical class suggestion feature

This repository now includes utility logic for validating and normalizing CSS utility classes in suggestions.

- `src/utils/canonicalClasses.js`: canonical set + alias mapping + resolver/filter Pipeline
- `src/utils/canonicalClasses.test.js`: tests for canonical behavior
