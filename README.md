# Rooted & Rising Life Coaching — Website Redesign

A redesign of Kristen Truby's life coaching site, inspired by the airy,
card-forward Velara layout while preserving her existing brand: a warm,
faith-based tone under the "Rooted & Rising" identity.

## What's here

- `index.html` — single-page site with all of Kristen's existing content
  (hero, mission, approach, services, how-it-works, scripture, testimonials,
  free consultation CTA, about, availability, footer).
- `styles.css` — standalone stylesheet. Palette: sage / teal / cream with a
  serif + sans pairing (Fraunces + Inter via Google Fonts).
- `script.js` — lightweight mobile-nav toggle and scroll-spy.

No build step and no dependencies. Host the folder on any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, the client's existing
provider, etc.).

## Running locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Content preserved from Kristen's current site

- Brand: Rooted & Rising Life Coaching — "Divine Purpose. Lived Free."
- Coach: Kristen Truby, Certified Christian Life Coach, M.A. Sociology,
  20+ years missionary experience.
- Hero message: "Real Change Starts Within — Guided By Faith".
- Stats: 20+ years, 98% client satisfaction.
- Scripture feature: Isaiah 40:31.
- Testimonials from Amelia Rose and Michael Hart.
- "How can I help you?" grid (Contact, Online Forms, Book Appointment,
  Services).
- "Walk in Purpose, Live in Faith" band.
- Free 15-minute clarity consultation CTA.
- Availability: Mon–Fri 9:00 am – 5:00 pm, Sat–Sun closed.
- Phone: (714) 287-6642.

## Image placeholders

Hero and portrait areas currently use soft gradient blocks so the layout
reads cleanly without any image rights concerns. Replace these two
backgrounds when Kristen's photography is ready:

- `.hero-card` (in `styles.css`) — the main hero background.
- `.mission-photo` and `.about-photo` — portrait blocks.

For each, replace the `background` declaration with
`background: url('path/to/photo.jpg') center/cover;`.
