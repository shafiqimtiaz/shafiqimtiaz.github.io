## 1. Audit and cleanup legacy routes

- [x] 1.1 Search repository for imports of legacy page files (`Home.jsx`, `Projects.jsx`, `About.jsx`, `_Home.jsx`, `_Projects.jsx`).
- [x] 1.2 Remove or archive any references found.
- [x] 1.3 Delete legacy files from `src/` if still present and unneeded.

## 2. Verify modular pages and data flow

- [x] 2.1 Confirm `src/App.jsx` routes point to `src/pages/<PageName>/index.jsx`.
- [x] 2.2 Confirm each page uses `PageShell` and shared data from `src/data`.
- [x] 2.3 Add or adjust the page folder code if any non-modular page remains.

## 3. Testing and validation

- [x] 3.1 Run `npm run build` and ensure it succeeds.
- [x] 3.2 Run `npm run dev` and manually verify each route loads the intended modular page.
- [x] 3.3 Optionally run any linting steps (`npm run lint` if configured).

## 4. Close Out

- [x] 4.1 Document completion in the change log / final commit message.
- [x] 4.2 Mark `tasks` artifact done in openspec status process (handled automatically).
