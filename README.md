# SADCHIRO Website

A React + TypeScript + Tailwind CSS corporate website for SADCHIRO, built to be extended (new products, new pages) without redesigning the whole site.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — one file per route: `Home`, `Products`, `Suma`, `Debrah`, `About`, `Contact`.
- `src/components/` — shared UI: `Navbar`, `Footer`, `Button`, `ProductCard`, `SectionHeading`, `ProductPageLayout`.
- `src/data/products.ts` — the single source of truth for product info (name, tagline, status, link). Both the homepage products section and the `/products` page read from this list.

## Adding a new product later

1. Add an entry to `src/data/products.ts`.
2. Create `src/pages/<NewProduct>.tsx` using `ProductPageLayout` (see `Suma.tsx` or `Debrah.tsx` as a template).
3. Add the route in `src/App.tsx`.

No other page needs to change — the homepage and `/products` grid pick up new products automatically.

## Content placeholders

SUMA and Debrah's "How it works," "Benefits," and "Key features" sections contain `[Placeholder]` copy, per the brief's instruction not to invent unconfirmed technical details. Search for `Placeholder` in `src/pages/Suma.tsx` and `src/pages/Debrah.tsx` to fill these in once specifics are available.

## Brand tokens

Defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `pine` | `#16302A` | Primary — headers, dark sections |
| `clay` | `#C4622D` | Accent — CTAs, highlights |
| `ivory` | `#F6F1E7` | Page background |
| `charcoal` | `#211F1C` | Body text |
| `moss` | `#7C8A7E` | Secondary/muted text, borders |

Typefaces: Fraunces (headlines) + Inter (body/UI), loaded via Google Fonts in `index.html`.

## Contact form

The form in `src/pages/Contact.tsx` validates client-side and shows success/error states, but the actual submission is a placeholder (`setTimeout`). Wire it up to a real endpoint or form service (e.g. Formspree, a serverless function) when ready.
