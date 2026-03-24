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

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. Create account: https://formspree.io/
2. Create new form, copy endpoint URL (e.g., `https://formspree.io/f/xyz123`)
3. Add to `.env`:
   ```
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xyz123
   ```
4. Add to Vercel Environment Variables in project settings

If not configured, the form falls back to `mailto:`.
