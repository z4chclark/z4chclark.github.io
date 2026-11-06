# Zach Clark: portfolio

A static, text-first one-page portfolio built with [Astro](https://astro.build).

## Editing content

All content lives in `src/data/`; the page only renders it.

| File | What it holds |
| --- | --- |
| `site.ts` | Name, headline, location, About text, links |
| `stack.ts` | Stack, grouped by area (`inProgress: true` marks items still being learned) |
| `projects.ts` | Projects in display order: add one object to add a project |
| `experience.ts` | Experience timeline |

Placeholders still to fill in are marked `TODO` in those files and show a TODO badge on the page.

## Commands

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run check    # content guard on dist/ (run after build)
npm run preview  # serve dist/ locally
```
