# acme

Internal dashboard for the Acme platform. Small on purpose: this repository
exists so people can try Superset against something real without cloning a
large codebase.

## Getting started

```bash
npm install
npm run dev
```

`npm run build` produces the production bundle, `npm test` runs the unit tests.

## Layout

- `src/input.ts` — normalisation helpers for the command bar
- `src/icons.ts` — the shared icon size scale
