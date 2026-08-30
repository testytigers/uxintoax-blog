# Design system

Dark only, drawn from the Bacha Coffee tins: cobalt blue, black label panels,
gold ornament, cream type. Every colour lives in `tailwind.config.mjs`
(Tailwind names) and `src/styles/global.css` (CSS custom properties). Change it
in one of those two places, never inline.

## Colour

Two-tone by design. Deep navy carries the reading surfaces; near-black panels
carry the cards and headers, the way the tins carry their black labels; the
saturated cobalt appears in cover art and accent blocks.

| Token | Hex | Use | Contrast on `ink` |
| --- | --- | --- | --- |
| `ink` | `#06356E` | page background, the tin blue | — |
| `ink-2` | `#04264F` | footer, code blocks, related-posts band | — |
| `surface` | `#080D16` | cards, hero plate, FAQ, marquee band | — |
| `surface-hover` | `#101828` | card hover | — |
| `cobalt` | `#0A5AAE` | cover art, accent blocks | — |
| `cobalt-bright` | `#1276D8` | cover art highlight | — |
| `line` | `#14498C` | subtle blue rules | — |
| `line-strong` | `#8A6A22` | dim gold hairline | — |
| `content` | `#F8F3E7` | headings, card titles (cream, not white) | 10.89:1 |
| `content-muted` | `#DCD2BC` | body copy | 8.03:1 |
| `content-faint` | `#B3A98F` | dates, read time | 5.16:1 |
| `brand` | `#E8B33C` | gold: frames, badges, buttons, rules | 6.28:1 |
| `brand-bright` | `#F5CE72` | links inside articles, hover | 8.01:1 |

On the black panels those same values run 10:1 to 17:1. One rule to keep:
**never put `content-faint` or small gold text on `cobalt`** — it drops to
2.9:1 and 3.6:1. Cobalt is for artwork and large type only.

## Type

- Headings, titles and display: **Lora**, semibold, from the fluid
  `text-display` / `text-title` / `text-heading` tokens.
- UI, badges, meta and buttons: **Inter**, uppercase, letterspaced. The wide
  tracking is what carries the deco feel.
- Article body: **Lora** at 17px mobile / 19px desktop, capped near 70
  characters by the `narrow` container.

Swapping in a true deco display face (Playfair Display, DM Serif Display) is a
one-line change in `Head.astro` plus the `fontFamily` block, if you want more
of the tin's label character.

## Deco vocabulary

Composable classes in `global.css`:

- `.plate` — black panel with a gold hairline. The base for every card.
- `.plate-inset` — adds the faint inner frame line.
- `.deco-corners` — gold corner brackets on all four corners.
- `.badge` — gold-framed uppercase category stamp (`.pill` is an alias).
- `.deco-rule` — gold rule that fades at both ends, for a centred `.diamond`.
- `.diamond` — the small gold lozenge used as a separator.
- `.eyebrow` — gold uppercase micro-label.
- `.btn` / `.btn-primary` / `.btn-ghost` — square-cornered, uppercase.

## Cover art

`Cover.astro` draws each post a coffee-tin label with no image files: a colour
field, one of eight geometric motifs, and a gold frame. Palette, motif, flip,
rotation, scale and offset all come from the slug through an avalanche-mixed
hash, so a post keeps the same label forever and no two of the 57 posts share
one. The avalanche step matters — without it, similar slugs land on
neighbouring buckets and the archive shows the same label three times in a row.

## Motion

`.animate` elements fade up when scrolled into view (IntersectionObserver in
`Head.astro`). Everything is disabled under `prefers-reduced-motion`.
