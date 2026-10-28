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

## Usage

Import `clamp` from `src/input` and call it with a value and its inclusive bounds:

```ts
import { clamp } from './src/input';

clamp(15, 0, 10); // 10 (above max, so capped at max)
clamp(-3, 0, 10); // 0  (below min, so raised to min)
clamp(5, 0, 10);  // 5  (already in range, returned unchanged)
```

Signature: `clamp(value: number, min: number, max: number): number`.
