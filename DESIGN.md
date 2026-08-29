# Design system

Dark-only. Every colour lives in `tailwind.config.mjs` (Tailwind names) and
`src/styles/global.css` (CSS custom properties). Change it in one of those two
places, never inline.

## Colour

| Token | Hex | Use | Contrast on `ink` |
| --- | --- | --- | --- |
| `ink` | `#06251F` | page background | — |
| `ink-2` | `#082E27` | footer, code blocks, blockquotes | — |
| `surface` | `#0C3A31` | cards, FAQ panel | — |
| `surface-hover` | `#0E4036` | card hover | — |
| `line` | `#1B4F44` | borders, rules | — |
| `line-strong` | `#2A6B58` | pill borders, card hover borders | — |
| `content` | `#F1F7F4` | headings, card titles | 14.98:1 |
| `content-muted` | `#C3D8D1` | body copy | 10.88:1 |
| `content-faint` | `#9BB4AC` | dates, read time, captions | 7.37:1 |
| `brand` | `#55b48e` | the main colour: buttons, pills, accents | 6.43:1 |
| `brand-bright` | `#7ACFAC` | links inside articles, hover states | 8.78:1 |

Every text pair clears WCAG AA (4.5:1 for body, 3:1 for large text). If you add
a colour, check it before shipping.

## Type

- Headings and UI: **Inter**, bold, tight tracking. Sizes come from the
  `text-display` / `text-title` / `text-heading` tokens, which are fluid
  (`clamp`) so they scale without breakpoints.
- Article body: **Lora** at 19px / 1.78 line height, capped near 70 characters
  per line by the `narrow` container.

## Components

- `Container` — `narrow` (articles), `default` (grids), `wide`.
- `PostCard` — three variants: `featured`, `row`, `grid`.
- `Cover` — generated abstract art. Palette and pattern are derived from the
  post slug using two independent hashes, so each post keeps the same cover
  forever and the grid stays varied. No image files needed. If you later add
  real cover images, swap `Cover` out inside `PostCard`.
- `Marquee` — the scrolling section divider. Pauses on hover.
- `PostMeta` — date and read time.

## Motion

`.animate` elements fade up when scrolled into view (IntersectionObserver in
`Head.astro`). Everything is disabled under `prefers-reduced-motion`.
