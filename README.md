# Bijay Bastakoti — Portfolio

Personal portfolio built with Angular 21 for GitHub Pages.

## Local development

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Production build

```bash
npm run build
```

The static site is generated under `dist/portfolio/browser/`.

## Deploy to GitHub Pages

1. Create a new GitHub repository (recommended name: `portfolio`).
2. Push this project to the repository's `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to `main` again if necessary. The included workflow will build and deploy the site.

The build uses a relative base href, so it works both as a project site (`username.github.io/portfolio/`) and as a user site (`username.github.io`).

## Updating content

Most portfolio content lives in:

- `src/app/app.component.ts` — experience, projects, publications, skills
- `src/app/app.component.html` — page structure/content
- `src/app/app.component.css` — component styling
- `src/styles.css` — global styling
- `public/Bijay_Bastakoti_Resume.pdf` — downloadable résumé
