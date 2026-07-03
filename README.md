# Danilo Borges Cavalcanti Academic Website

This repository contains a static Astro site for an academic portfolio and interactive curriculum. Content is organized in `src/data` so publications, courses, software entries, notes, and PDF links can be updated without touching page templates.

## Run Locally

```bash
npm install
npm run dev
```

Build the production site with:

```bash
npm run build
```

Preview the built site with:

```bash
npm run preview
```

## Add A Publication

Edit `src/data/publications.ts`. Add a new object to the correct group in `publicationGroups`. Each publication supports authors, year, title, venue, type, and an optional DOI or link.

## Add A Course

Edit `src/data/courses.ts`. Add a new course object with a unique `slug`. Astro automatically creates the detail page at `/teaching/your-slug/` from `src/pages/teaching/[slug].astro`.

## Add A PDF

Place PDFs in the matching folder:

- Theses and final projects: `public/pdfs/theses/`
- Teaching material: `public/pdfs/teaching/`
- Personal study notes: `public/pdfs/notes/`

Then update the corresponding `pdf` field in the relevant data file. Files in `public` are served from the site root, so `public/pdfs/theses/phd-thesis.pdf` is linked as `/pdfs/theses/phd-thesis.pdf`.

## Deploy To GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Astro site and deploys `dist` to GitHub Pages when changes are pushed to `main`. In the repository settings, set GitHub Pages to use "GitHub Actions" as the source.

## Key Files

- `src/data/profile.ts`: identity, links, hero text, and research interests.
- `src/data/publications.ts`: research output grouped by type.
- `src/data/courses.ts`: teaching overview and course detail content.
- `src/data/software.ts`: software cards.
- `src/data/notes.ts`: personal study notes.
- `src/components/`: reusable layout and content components.
