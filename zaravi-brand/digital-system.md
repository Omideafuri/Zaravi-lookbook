# ZARAVI DIGITAL BRAND SYSTEM
*Website Art Direction & Digital Identity — Territory B: Dark Romantic / Editorial / Couture*

---

## DIGITAL PHILOSOPHY

The ZARAVI website is not an e-commerce site with editorial elements. It is an **editorial publication with commerce capability**.

Every digital touchpoint should feel like discovering a rare magazine in a quiet library — beautiful, intelligent, worth returning to.

**Core Principles:**
- **Cinematic over functional** — Beauty serves meaning, not just conversion
- **Restraint over richness** — Less, but infinitely better
- **Materiality on screen** — Digital textures that evoke physical ones
- **Pacing over speed** — The user should slow down
- **Discovery over navigation** — Finding is part of the experience

---

## WEBSITE ART DIRECTION

### Visual Language

**Color Application:**
- **Dark Espresso (#3A230A)** — Primary background (85% of surfaces)
- **Warm Ivory (#EEE9C1)** — Primary text, key surfaces, breath
- **Burnt Sienna (#A4530C)** — Interaction states, accents, warmth
- **Gold Foil (#C9A962)** — Premium moments, logo, butterfly
- **Sage (#8DA28C)** — Rare, intentional — collection pages only

**Typography Scale (CSS Custom Properties):**

```css
:root {
  /* Display — Editorial Serif */
  --font-display: 'Playfair Display', serif;
  --display-1: 4rem / 1.0 / 300 / -0.02em;    /* Hero, manifesto */
  --display-2: 2.5rem / 1.1 / 400 / 0.04em;    /* Section heads */
  --display-3: 1.75rem / 1.2 / 400 / 0.02em;   /* Product names */

  /* Wordmark */
  --font-wordmark: 'Playfair Display', serif;
  --wordmark: 2rem / 1.0 / 400 / 0.25em / uppercase;

  /* Body — Warm Serif */
  --font-body: 'Libre Baskerville', serif;
  --body-lead: 1.25rem / 1.7 / 400;             /* Intro paragraphs */
  --body: 1rem / 1.6 / 400;                      /* Standard copy */

  /* Functional — Geometric Sans */
  --font-ui: 'Inter', sans-serif;
  --label: 0.6875rem / 1.4 / 500 / 0.12em / uppercase;  /* Navigation, labels */
  --caption: 0.75rem / 1.5 / 400;               /* Metadata, prices */
  --price: 1rem / 1.4 / 400 / tabular-nums;     /* Pricing */

  /* Persian */
  --font-persian: 'Vazirmatn', sans-serif;
}
```

**Spacing System:**
- Base unit: 8px
- Micro: 4px (--space-1)
- XS: 8px (--space-2)
- SM: 16px (--space-4)
- MD: 24px (--space-6)
- LG: 32px (--space-8)
- XL: 48px (--space-12)
- Chapter: 72px (--space-18)
- Hero: 96px (--space-24)

**Motion Tokens:**
```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-cinematic: 800ms;

  --ease-organic: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

---

### PAGE ARCHETYPES

#### 1. HOME — THE COVER

**Composition:**
- Full viewport, single focus
- No traditional header (logo appears on scroll)
- Hero: Editorial image + manifesto fragment
- Entry point: Single "Enter" action (not "Shop")

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│           [EDITORIAL IMAGE]         │  100vh
│         (full bleed, cinematic)     │
│                                     │
│    "Transformation, in gold."       │  Centered, display-1
│                                     │
│           [ENTER]                   │  Button-primary, centered
│                                     │
└─────────────────────────────────────┘
```

**Behavior:**
- Image loads with wing-mask reveal (600ms)
- Text fades in after image (staggered 200ms)
- Enter button: Subtle pulse (gold glow, 3s loop)
- Scroll hint: Minimal arrow, appears at 3s
- No auto-scroll, no carousel

#### 2. COLLECTION — THE EDITORIAL SPREAD

**Composition:**
- Asymmetric grid (not uniform)
- Large hero product + 2-3 supporting
- Editorial copy between products
- Horizontal scroll for "Complete the Look"

**Grid System:**
```
┌──────────────┬──────────────┐
│   HERO       │   EDITORIAL  │  2/3 + 1/3
│   PRODUCT    │   COPY       │
│   (large)    │              │
├──────────────┼──────────────┤
│  SUPPORTING  │  SUPPORTING  │  1/2 + 1/2
│  PRODUCT     │  PRODUCT     │
└──────────────┴──────────────┘
```

**Product Card:**
- Image: 4:5 ratio, full bleed within card
- Hover: Wing-mask reveal to alternate view (worn/detail)
- Info: Appears on hover (not always visible)
- Price: Tabular numerals, warm ivory, label style
- No "Add to Bag" on card — click to enter product

#### 3. PRODUCT — THE FEATURE ARTICLE

**Composition:**
- Editorial layout, not product template
- Large imagery (70% width)
- Story + specifications (30% width)
- Long-form scroll with anchored navigation

**Structure:**
```
┌─────────────────────────────────────────────────┐
│  [GALLERY]              │  PRODUCT NAME         │
│  (sticky, 70vw)         │  Collection • Material│
│                         │                       │
│  Main image             │  "The story of this   │
│  Thumbnail strip        │   piece begins..."    │
│  (vertical, left)       │  [Lead paragraph]     │
│                         │                       │
│  Alternate views:       │  Price (large)        │
│  - Worn                 │  [SELECT]             │
│  - Detail               │  [MATERIAL]           │
│  - Scale                │  [SIZE]               │
│  - Packaging            │                       │
│                         │  [ADD TO BAG]         │
│                         │  (button-primary)     │
│                         │                       │
│                         │  SPECIFICATIONS       │
│                         │  [Table: label/caption]│
│                         │                       │
│                         │  PACKAGING            │
│                         │  [Icon + description] │
│                         │                       │
│                         │  SHIPPING & RETURNS   │
│                         │  [Link]               │
└─────────────────────────────────────────────────┘
```

**Gallery Behavior:**
- Main image: Wing-mask reveal on load
- Thumbnails: Vertical strip, hover previews main
- Worn view: Video loop (muted, auto-play, pauses on hover)
- Detail: 360° rotation (drag or auto-slow)
- Scale: Next to everyday object (coin, hand, pencil)

#### 4. CONTENT / JOURNAL — THE MAGAZINE

**Composition:**
- Article grid, masonry-style
- Mix of: Stories, interviews, process films, guides
- No "blog" feel — each piece is a feature

**Article Page:**
- Full-width hero image
- Display-1 headline
- Author + date (label style)
- Body: body-lead → body
- Pull quotes: display-3, gold accent line
- Inline product links: Subtle, contextual
- Related: 3 articles, asymmetric

#### 5. CHECKOUT — THE CEREMONY

**Philosophy:** Not a funnel. A conclusion.

**Flow:**
1. **Review** — Beautiful order summary (editorial layout)
2. **Details** — Shipping, gift options
3. **Payment** — Minimal, secure, calm
4. **Confirmation** — Not a receipt. A moment.

**Confirmation Page:**
- Full-screen animation: Butterfly emergence (Level 6A)
- "Your piece is being prepared."
- Order details: Elegant, printable
- "Add a note for the recipient" — Handwritten-style font
- Packaging preview: Shows exact box they'll receive
- Share: "Tell them it's coming" — Generates beautiful image

---

## INTERACTION PATTERNS

### Navigation

**Desktop:**
- Hidden by default
- Revealed on: Scroll up, hover top 50px, keypress (M)
- Full-screen overlay (not dropdown)
- Centered, typographic
- Sections: Collections, Journal, Atelier, Contact
- No mega menus, no sub-menus

**Mobile:**
- Bottom sheet (not hamburger)
- Swipe up from bottom
- Same typographic treatment
- Thumb-reachable

### Search

**Behavior:**
- Command+K / Ctrl+K opens
- Full-screen, centered
- Results as editorial cards
- Categories: Products, Journal, Information
- No autocomplete suggestions (type to discover)

### Filtering (Collection Pages)

**Not a sidebar.** Inline, contextual.

- Material: Visual chips (gold, silver, stone swatches)
- Category: Typographic pills
- Price: Single slider, label only
- Clear all: "Reset" (label style)

### Wishlist / Save

**Heart icon:** Level 2A (single wing, right-facing)
- Empty: Outline
- Filled: Solid gold
- Animation: Wing unfurls (300ms, organic ease)
- Saved items: Private "My Collection" page (editorial layout)

### Size Guide

**Not a modal.** Inline expansion.
- Click "Find your size" → Section expands below product
- Ring: Interactive sizer (drag to measure)
- Necklace: Visual length guide (on model, at collarbone, etc.)
- Bracelet: Wrist measurement + fit preference

---

## MICRO-INTERACTIONS

### Button States

```css
.button-primary {
  background: var(--dark-espresso);
  color: var(--warm-ivory);
  border: none;
  padding: 14px 32px;
  font: var(--label);
  transition: background var(--duration-normal) var(--ease-enter);
}

.button-primary:hover {
  background: var(--burnt-sienna);
  /* No transform, no shadow — color only */
}

.button-primary:active {
  background: var(--deep-olive);
  transition-duration: 50ms;
}

.button-primary:focus-visible {
  outline: 2px solid var(--burnt-sienna);
  outline-offset: 4px;
}
```

### Link States (Editorial)

```css
.link-editorial {
  color: inherit;
  text-decoration: none;
  position: relative;
}

.link-editorial::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--burnt-sienna);
  transition: width var(--duration-slow) var(--ease-organic),
              left var(--duration-slow) var(--ease-organic);
}

.link-editorial:hover::after {
  width: 100%;
  left: 0;
}
```

### Image Hover (Product Cards)

```css
.product-card {
  overflow: hidden;
  position: relative;
}

.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(58,35,10,0.4));
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-enter);
}

.product-card:hover::before {
  opacity: 1;
}

.product-card .image-alt {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.05);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: opacity var(--duration-slow) var(--ease-organic),
              clip-path var(--duration-cinematic) var(--ease-organic);
}

.product-card:hover .image-alt {
  opacity: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  /* Wing-shaped reveal via SVG mask */
}
```

### Form Inputs

```css
.input-field {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--stone);
  padding: 12px 0;
  font: var(--body);
  color: var(--warm-ivory);
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-enter);
}

.input-field::placeholder {
  color: var(--smoke);
}

.input-field:focus {
  outline: none;
  border-color: var(--burnt-sienna);
}

.input-field:invalid:not(:placeholder-shown) {
  border-color: var(--burnt-sienna); /* Not red — warm error */
}
```

### Cart / Bag

**Icon:** Level 2A (single wing) + count badge
- Badge: Burnt sienna, pill, label font
- Click: Slide-in panel (right, 400px)
- Panel: Editorial summary, not list
- "View Bag" → Full page (not modal)

---

## RESPONSIVE BEHAVIOR

### Breakpoints

| Name | Width | Context |
|------|-------|---------|
| Mobile | < 640px | Phone portrait |
| Mobile-L | 640-768px | Phone landscape / small tablet |
| Tablet | 768-1024px | Tablet portrait |
| Desktop | 1024-1440px | Laptop / desktop |
| Wide | > 1440px | Large displays |

### Key Adaptations

**Home:**
- Mobile: Hero image crops to 4:5, text scales to display-2
- Enter button: Full width, bottom fixed

**Collection:**
- Mobile: Single column, hero product first
- Tablet: 2-column grid
- Desktop: Asymmetric editorial grid

**Product:**
- Mobile: Gallery stacks above info (accordion thumbnails)
- Tablet: Side-by-side, gallery sticky
- Desktop: Full editorial spread

**Navigation:**
- Mobile: Bottom sheet
- Tablet+: Full-screen overlay

**Typography Scaling:**
- Display-1: 4rem → 2.5rem (mobile)
- Display-2: 2.5rem → 1.75rem (mobile)
- Body: 1rem → 1rem (unchanged)
- Label: 0.6875rem → 0.625rem (mobile)

---

## E-COMMERCE SPECIFICS

### Product Data Model

```json
{
  "sku": "ZRV-R-001",
  "name": "Metamorphosis Ring",
  "collection": "Emergence",
  "description": "Long-form editorial story...",
  "shortDescription": "A ring that unfolds.",
  "price": 1850,
  "currency": "USD",
  "materials": ["18k yellow gold", "ethical diamond"],
  "dimensions": {"width": "4.2mm", "thickness": "1.8mm"},
  "images": {
    "hero": "hero.jpg",
    "worn": "worn.mp4",
    "detail": ["detail-1.jpg", "detail-2.jpg"],
    "scale": "scale.jpg",
    "packaging": "box.jpg",
    "360": "360-frames/"
  },
  "sizes": ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"],
  "customizable": true,
  "leadTime": "3-4 weeks",
  "packaging": "ring-box",
  "certificate": true
}
```

### Inventory Display

- In stock: "Ready to ship" (warm ivory)
- Low stock: "Few remaining" (burnt sienna)
- Made to order: "Crafted for you — 3-4 weeks" (gold)
- Out of stock: "Join waitlist" (link-editorial style)

### Gift Options

- Gift packaging: Auto-included over $500
- Handwritten note: Free, 200 char limit
- Receipt: Hidden (price removed)
- Shipping notification: Beautiful email + SMS

---

## EMAIL SYSTEM

### Design Language
- Dark espresso background
- Warm ivory text
- Single column, generous padding
- Editorial imagery
- Minimal CTAs (one per email)

### Templates

**1. Welcome (Post-Signup)**
- Subject: "Welcome to ZARAVI"
- Hero: Butterfly emergence animation (GIF)
- Copy: Brand manifesto fragment
- CTA: "Begin exploring" → Journal

**2. Order Confirmation**
- Subject: "Your ZARAVI piece is being prepared"
- Animation: Butterfly emergence (CSS in email where supported)
- Order summary: Editorial layout
- Packaging preview
- "Add a note" link

**3. Shipping Notification**
- Subject: "Your ZARAVI package is on its way"
- Tracking: Beautiful card
- Unboxing preview: "Here's what awaits"
- Care guide link

**4. Collection Launch**
- Subject: "New collection: [Name]"
- Hero: Campaign image
- Story: 2-3 paragraphs
- Shop link: Subtle

**5. Journal Digest (Monthly)**
- Subject: "This month at ZARAVI"
- 3 articles, editorial cards
- No products (pure content)

---

## SOCIAL MEDIA INTEGRATION

### Instagram Feed (Website Integration)

- Not a widget. Curated selection.
- "As seen on @zaravi" section on product pages
- UGC: Customer photos (approved) in editorial layout
- Hashtag: #ZARAVImoment (not #ZARAVIjewelry)

### Pinterest

- Every product image: Pin-optimized (2:3)
- Boards per collection
- "Style guide" boards
- Packaging inspiration board

### TikTok / Reels

- Vertical video: Process, packaging, wearing
- Series: "The Making Of", "Unboxing", "Styling"
- Website: Video embedded in Journal, not feed

---

## ACCESSIBILITY

### WCAG AA Compliance (Minimum)

**Color Contrast:**
- Warm ivory on dark espresso: 12.6:1 ✓
- Burnt sienna on dark espresso: 4.8:1 ✓
- Gold foil on dark espresso: 3.2:1 → Use warm ivory outline
- Dark espresso on warm ivory: 12.6:1 ✓

**Motion:**
- prefers-reduced-motion: Disables all non-essential animation
- Logo animation: Static fallback
- Page transitions: Instant fallback
- Loaders: Simple spinner fallback

**Navigation:**
- Skip to main content link
- Focus order logical
- All interactive elements keyboard accessible
- ARIA labels on icon-only buttons

**Typography:**
- Base size: 1rem (16px) minimum
- User scaling supported to 200%
- Line height ≥ 1.5 for body
- No text in images (except logo)

---

## TECHNICAL STACK RECOMMENDATIONS

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS Modules + CSS Custom Properties
- **Animation:** Framer Motion (for complex) + CSS transitions
- **Images:** Next/Image + Cloudinary (transformation)
- **Fonts:** Self-hosted (Playfair Display, Libre Baskerville, Inter, Vazirmatn)
- **Analytics:** Plausible (privacy-first)

### E-Commerce
- **Platform:** Shopify Headless (Storefront API)
- **Checkout:** Shopify Checkout (customized)
- **Payments:** Shopify Payments + local methods
- **Inventory:** Shopify Admin

### CMS
- **Content:** Sanity.io (structured content for Journal)
- **Assets:** Sanity + Cloudinary

### Performance Targets
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms
- Lighthouse: > 90 all categories

---

## ANALYTICS & MEASUREMENT

### Brand Metrics (Not Just Conversion)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time on site | > 4 min | GA4 engagement |
| Pages per session | > 3.5 | GA4 |
| Journal read completion | > 40% | Scroll depth |
| Video play rate (worn view) | > 60% | Custom event |
| Packaging preview interaction | > 30% | Custom event |
| Return visitor rate | > 35% | GA4 |
| Email open rate | > 35% | ESP |
| Social referral quality | > 2 min session | UTM + GA4 |

---

*Digital Brand System — ZARAVI Brand Identity*
*Version 1.0 — September 2026*
*Territory B: Dark Romantic / Editorial / Couture*