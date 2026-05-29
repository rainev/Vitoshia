# Vitoshia PH — Design Reference

Source of truth: `../website-draft.html` (the slide deck mockup).
Use exact pixel values from the draft — do not over-scale on wide viewports.

## ⚠️ Tailwind v4 gotcha

Brand color tokens **must** be defined in a regular `@theme { ... }` block, **not** inside `@theme inline { ... }`. When raw values are mixed with `var()` references inside `@theme inline`, the whole block can silently fail to emit utilities — `bg-brand-orange` etc. won't appear in the CSS bundle. See `app/globals.css`: brand colors are in their own `@theme {}` block; only the shadcn theme aliases live in `@theme inline`.

## Brand colors (CSS vars in `app/globals.css`)

| Token                       | Hex / value             | Use                                         |
| --------------------------- | ----------------------- | ------------------------------------------- |
| `--color-brand-green-dark`  | `#01240f`               | Primary heading color, dark backdrops       |
| `--color-brand-green`       | `#02511f`               | Trust bar values, deep accents              |
| `--color-brand-green-bright`| `#378d16`               | Brighter green accent (rare)                |
| `--color-brand-orange`      | `#e56a27`               | Primary CTA fill, primary accent dots       |
| `--color-brand-orange-deep` | `#e16125`               | Primary CTA hover                           |
| `--color-brand-yellow`      | `#f9c722`               | Kicker text over dark backgrounds, highlights |
| `--color-brand-ink`         | `#1b1b1b`               | Body text on light backgrounds              |
| `--color-brand-paper`       | `#fefdfb`               | Page surfaces (off-white)                   |
| `--color-brand-muted`       | `#6b6b6b`               | Labels, secondary text                      |
| `--color-brand-line`        | `rgba(1, 36, 15, 0.12)` | Subtle dividers                             |

## Fonts

- Body: **Montserrat** (`font-sans`) — weights 300–800 loaded.
- Headings: **Playfair Display** (`font-serif`) — weights 600, 700.

### Per-element weights (locked spec)

| Element                | Family            | Weight        | Tracking      |
| ---------------------- | ----------------- | ------------- | ------------- |
| Logo wordmark          | Montserrat        | **Bold 700**  | 0.02–0.05em   |
| Nav links              | Montserrat        | **Medium 500** | 0.15–0.20em  |
| Buttons / CTAs         | Montserrat        | **Bold 700**  | 0.10–0.15em   |
| Section eyebrows       | Montserrat        | Semibold 600  | 0.45em        |
| Section h1 / hero h1   | Playfair Display  | Bold 700      | normal        |
| Trust bar values       | Playfair Display  | 400 (default) | normal        |

## Hero (`components/site/Hero.tsx`)

Draft CSS reference:
```css
.hero { min-height: 440px; color: #fff; }
.hero::before { background: linear-gradient(180deg, rgba(1,36,15,.55) 0%, rgba(1,36,15,.85) 100%); }
.hero-body { padding: 40px 60px 60px; max-width: 760px; }
.hero-body .kicker { color: var(--yellow); font-size: 11px; letter-spacing: 5px; text-transform: uppercase; font-weight: 600; margin-bottom: 14px }
.hero-body h2 { font-family: 'Playfair Display'; font-size: 46px; line-height: 1.05; margin-bottom: 18px }
.hero-body p { color: #e8efe5; font-size: 15px; max-width: 560px; margin-bottom: 22px }
.btn { padding: 12px 22px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600 }
.btn-primary { background: var(--orange) }
.btn-ghost   { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.4) }
```

**Key sizes to match (no responsive over-scaling):**
- H1: **46px** (`text-[46px]` or `text-5xl ≈ 48px`)
- Description: **15px** with `max-w-[560px]`
- Kicker: **11px**, `tracking-[0.45em]`
- Buttons: `h-11`, `text-xs`, `tracking-[0.18em]`

**Gradient — use inline style if Tailwind opacity tokens misbehave:**
```tsx
style={{ background: 'linear-gradient(180deg, rgba(1,36,15,0.55) 0%, rgba(1,36,15,0.85) 100%)' }}
```

## Header / Nav (`components/site/Header.tsx`)

Draft CSS reference:
```css
.nav { padding: 18px 40px }
.nav .brand { gap: 12px; font-weight: 700; letter-spacing: 2px }
.nav .brand-mark { width: 38px; height: 38px; background: #fff; border-radius: 8px; padding: 4px }
.nav ul { gap: 26px; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase }
.nav .cta { background: var(--orange); padding: 9px 18px; font-size: 12px; letter-spacing: 2px }
```

- Brand mark white square 38×38, 4px padding around logo
- Nav links: 12px uppercase, `tracking-[0.13em]`, gap-7 between links
- CTA button: same orange as hero primary

## Trust bar (`components/site/TrustBar.tsx`)

Draft CSS reference:
```css
.trust { background: #fff; padding: 22px 40px; display: flex; gap: 30px;
         justify-content: space-between; border-top: 1px solid #eee; border-bottom: 1px solid #eee; flex-wrap: wrap }
.trust .item { display: flex; align-items: center; gap: 10px; color: var(--muted);
               font-size: 11px; letter-spacing: 2px; text-transform: uppercase }
.trust .item b { color: var(--green); font-size: 18px; font-family: 'Playfair Display' }
```

- **No vertical dividers** between items — just `gap-30` and `justify-between`.
- Value: **18px** (`text-lg`), Playfair, color `brand-green` (`#02511f` — not `green-dark`).
- Border: light grey `#eee` (use `border-[#eee]` or `border-brand-line`).

## Section heads (future use)

```css
.section-head { padding: 42px 56px 0 }
.eyebrow { font-size: 11px; letter-spacing: 5px; text-transform: uppercase; color: var(--orange); font-weight: 600 }
.section-head h1 { font-family: 'Playfair Display'; font-size: 34px; color: var(--green-dark) }
.section-head p.lead { color: var(--muted); font-size: 14px; max-width: 740px }
```
