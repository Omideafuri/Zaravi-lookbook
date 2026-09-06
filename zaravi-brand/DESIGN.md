---
version: alpha
name: ZARAVI
description: "A contemporary jewelry house where transformation becomes tangible — butterfly wings as philosophy, organic luxury as practice."
colors:
  # Primary Brand Colors (from reference DNA)
  sage:
    hex: "#8DA28C"
    cmyk: "45, 15, 35, 0"
    pantone: "PMS 5635 C"
    usage: "Primary packaging, brand surfaces, editorial backgrounds"
  
  burnt-sienna:
    hex: "#A4530C"
    cmyk: "0, 65, 85, 25"
    pantone: "PMS 1545 C"
    usage: "Accent color, ribbons, warmth, transformation"
  
  warm-ivory:
    hex: "#EEE9C1"
    cmyk: "10, 5, 25, 0"
    pantone: "PMS 7499 C"
    usage: "Interior packaging, cards, negative space, breath"
  
  dark-espresso:
    hex: "#3A230A"
    cmyk: "60, 70, 80, 50"
    pantone: "PMS 4625 C"
    usage: "Seals, text, depth, grounding"
  
  # Extended Neutral System
  stone:
    hex: "#C4BBA6"
    usage: "Secondary backgrounds, transitions"
  
  mushroom:
    hex: "#B8A99A"
    usage: "Tertiary surfaces, subtle warmth"
  
  dust:
    hex: "#D4CFC3"
    usage: "Light neutral, soft contrast"
  
  smoke:
    hex: "#8A8578"
    usage: "Muted text, secondary information"
  
  deep-olive:
    hex: "#4A5248"
    usage: "Dark mode primary, depth without black"
  
  antique-brass:
    hex: "#8B7355"
    usage: "Metallic accent direction, hardware reference"
  
  warm-champagne:
    hex: "#E8DFC9"
    usage: "Premium surfaces, gold alternative"
  
  # Metallic Direction (print reference)
  gold-foil:
    hex: "#C9A962"
    usage: "Foil stamping, premium marks, luxury signal"
  
  rose-gold:
    hex: "#B76E79"
    usage: "Jewelry metal reference, warm metallic"
  
  # Digital System Colors
  digital-bg:
    hex: "#FAF9F6"
    usage: "Website background, digital canvas"
  
  digital-text:
    hex: "#2D2A26"
    usage: "Primary digital text"
  
  digital-muted:
    hex: "#6B6560"
    usage: "Secondary text, captions"

typography:
  # Display Typography - Editorial Luxury
  display-primary:
    fontFamily: "Cormorant Garamond"
    fontSize: "4rem"
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: "-0.02em"
    usage: "Hero headlines, editorial statements, brand moments"
  
  display-secondary:
    fontFamily: "Cormorant Garamond"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.04em"
    usage: "Section headings, product names, key messages"
  
  # Wordmark Typography
  wordmark-primary:
    fontFamily: "Cormorant Garamond"
    fontSize: "2rem"
    fontWeight: 400
    letterSpacing: "0.25em"
    textTransform: "uppercase"
    usage: "ZARAVI primary wordmark"
  
  wordmark-jewelry:
    fontFamily: "Cormorant Garamond"
    fontSize: "0.625rem"
    fontWeight: 400
    letterSpacing: "0.35em"
    textTransform: "uppercase"
    usage: "JEWELRY subscript, secondary brand mark"
  
  # Body Typography
  body-lead:
    fontFamily: "Libre Baskerville"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.7
    usage: "Editorial body, manifestos, brand statements"
  
  body-primary:
    fontFamily: "Libre Baskerville"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    usage: "Product descriptions, extended copy"
  
  body-secondary:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    usage: "Technical details, specifications, metadata"
  
  # Label System
  label-caps:
    fontFamily: "Inter"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.12em"
    textTransform: "uppercase"
    usage: "Category labels, navigation, micro-copy"
  
  label-product:
    fontFamily: "Cormorant Garamond"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.15em"
    textTransform: "uppercase"
    usage: "Product codes, collection names"
  
  # Numerals
  numeral-display:
    fontFamily: "Cormorant Garamond"
    fontSize: "3rem"
    fontWeight: 300
    usage: "Large numbers, prices, years"
  
  numeral-body:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    usage: "Prices, measurements, technical numbers"

  # Persian Typography Support
  persian-display:
    fontFamily: "Vazirmatn"
    fontSize: "3rem"
    fontWeight: 300
    usage: "Persian headlines, RTL layouts"
  
  persian-body:
    fontFamily: "Vazirmatn"
    fontSize: "1rem"
    fontWeight: 400
    usage: "Persian body text, RTL content"

spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "48px"
  chapter: "72px"
  hero: "96px"

rounded:
  none: "0px"
  soft: "2px"
  md: "4px"
  lg: "8px"
  pill: "9999px"

elevation:
  none:
    shadow: "none"
    usage: "Flat surfaces, cards on matching backgrounds"
  
  subtle:
    shadow: "0 1px 3px rgba(58, 35, 10, 0.04)"
    usage: "Cards, packaging surfaces, subtle lift"
  
  soft:
    shadow: "0 4px 12px rgba(58, 35, 10, 0.06)"
    usage: "Elevated cards, dropdowns, overlays"
  
  lifted:
    shadow: "0 8px 24px rgba(58, 35, 10, 0.08)"
    usage: "Modals, floating elements, product showcases"
  
  deep:
    shadow: "0 16px 48px rgba(58, 35, 10, 0.12)"
    usage: "Hero product photography, cinematic moments"

components:
  # Buttons
  button-primary:
    backgroundColor: "{colors.dark-espresso}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
    typography: "{typography.label-caps}"
  
  button-primary-hover:
    backgroundColor: "{colors.burnt-sienna}"
    textColor: "{colors.warm-ivory}"
  
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dark-espresso}"
    border: "1px solid {colors.dark-espresso}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  
  button-secondary-hover:
    backgroundColor: "{colors.dark-espresso}"
    textColor: "{colors.warm-ivory}"
  
  # Cards
  card-product:
    backgroundColor: "{colors.warm-ivory}"
    rounded: "{rounded.soft}"
    padding: "{spacing.lg}"
    elevation: "{elevation.subtle}"
  
  card-editorial:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.dark-espresso}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  
  # Inputs
  input-text:
    backgroundColor: "transparent"
    textColor: "{colors.digital-text}"
    border: "1px solid {colors.stone}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  
  input-text-focus:
    border: "1px solid {colors.burnt-sienna}"
  
  # Tags
  tag-collection:
    backgroundColor: "{colors.burnt-sienna}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
    typography: "{typography.label-caps}"

motion:
  duration:
    fast: "150ms"
    normal: "300ms"
    slow: "500ms"
    cinematic: "800ms"
  
  easing:
    default: "cubic-bezier(0.4, 0, 0.2, 1)"
    enter: "cubic-bezier(0, 0, 0.2, 1)"
    exit: "cubic-bezier(0.4, 0, 1, 1)"
    organic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  
  principles:
    - "Movement should echo butterfly emergence — slow, deliberate, transformative"
    - "Avoid bouncing, elasticity, or playful timing"
    - "Reveal transitions feel like unfolding, not sliding"
    - "Hover states breathe, they don't snap"
    - "Page transitions feel cinematic, not mechanical"

materials:
  # Core Material Language
  paper-uncoated:
    name: "Uncoated Cotton Paper"
    weight: "350gsm"
    finish: "Soft-touch, tactile"
    usage: "Business cards, stationery, cards"
  
  paper-textured:
    name: "Linen-Textured Stock"
    weight: "300gsm"
    finish: "Woven texture, warm white"
    usage: "Packaging exterior, premium cards"
  
  fabric-canvas:
    name: "Organic Canvas"
    finish: "Natural weave, cream"
    usage: "Drawstring pouches, dust bags"
  
  fabric-suede:
    name: "Microsuede"
    finish: "Soft nap, sage dyed"
    usage: "Jewelry box interiors, display pillows"
  
  ribbon-satin:
    name: "Satin Ribbon"
    width: "15mm / 25mm"
    color: "{colors.burnt-sienna}"
    usage: "Box closure, gift wrapping"
  
  metal-brass:
    name: "Antique Brass"
    finish: "Brushed, unlacquered"
    usage: "Hardware, clasps, display stands"
  
  foil-gold:
    name: "Matte Gold Foil"
    finish: "Soft catch, not glossy"
    usage: "Logo stamping, butterfly mark, premium accents"

packaging:
  # Jewelry Box System
  box-jewelry-small:
    dimensions: "80 × 80 × 45mm"
    material: "Rigid board, 1.5mm"
    exterior: "{colors.sage}"
    interior: "{colors.warm-ivory} microsuede"
    closure: "Magnetic hidden catch"
    finish: "Butterfly wing pattern wrap, blind emboss logo"
  
  box-jewelry-medium:
    dimensions: "120 × 100 × 50mm"
    material: "Rigid board, 2mm"
    exterior: "{colors.sage}"
    interior: "{colors.warm-ivory} microsuede"
    closure: "Ribbon pull tab"
  
  box-ring:
    dimensions: "55 × 55 × 35mm"
    material: "Rigid board, 1.5mm"
    exterior: "{colors.sage}"
    interior: "{colors.warm-ivory} velvet"
    closure: "Hinged lid"
  
  box-necklace:
    dimensions: "180 × 90 × 40mm"
    material: "Rigid board, 2mm"
    exterior: "{colors.sage}"
    interior: "{colors.warm-ivory} microsuede with chain channel"
  
  box-presentation:
    dimensions: "240 × 180 × 60mm"
    material: "Rigid board, 2.5mm"
    exterior: "{colors.sage}"
    interior: "{colors.warm-ivory} microsuede"
    closure: "Drawer-style with ribbon pull"
  
  # Gift Packaging
  box-gift-sleeve:
    dimensions: "Variable, sized to jewelry box + 10mm"
    material: "Textured paper 300gsm"
    base: "{colors.warm-ivory}"
    accent-band: "{colors.burnt-sienna}"
    closure: "{materials.ribbon-satin} + wax seal"
  
  # Pouches
  pouch-drawstring:
    dimensions: "100 × 140mm"
    material: "{materials.fabric-canvas}"
    closure: "Cotton cord with antique brass aglet"
    branding: "Discreet ZARAVI blind deboss"
  
  pouch-velvet:
    dimensions: "80 × 120mm"
    material: "Sage velvet"
    closure: "Silk ribbon"
  
  # Shopping Bag
  bag-shopping:
    dimensions: "280 × 200 × 100mm"
    material: "250gsm kraft paper"
    color: "{colors.sage}"
    handles: "{materials.ribbon-satin}"
    tag: "Cream hang tag with butterfly emboss"

---

## Overview

ZARAVI is a contemporary jewelry house built on the philosophy of transformation. The butterfly is not decoration — it is doctrine. Every element of the brand reflects metamorphosis: the patient emergence, the quiet reveal, the moment when something ordinary becomes extraordinary.

The visual language draws from entomology, botany, and the slow luxury of natural materials. Sage green and burnt sienna form the chromatic core — colors found in butterfly wings, autumn leaves, and aged brass. Warm ivory provides breath. Dark espresso grounds the palette in substance.

This is not a brand that shouts. It whispers. It rewards attention. It unfolds.

## Brand Strategy

### Brand Essence
**Transformation made tangible.**

ZARAVI exists at the intersection of nature's quiet dramas and human craft. The butterfly is the central metaphor not because it is beautiful, but because it represents the universal truth that change is the only constant — and that change, when embraced, becomes beauty.

### Brand Promise
Jewelry that marks the moments when you became who you are.

### Brand Personality

**Refined** — Nothing excessive. Every element earns its place.
**Sensual** — Tactile materials, organic forms, warmth against skin.
**Intelligent** — Thoughtful design that rewards close attention.
**Editorial** — Magazine-quality photography and typography.
**Artisanal** — Handcrafted feeling, small-batch sensibility.
**Quietly luxurious** — Expensive without announcing itself.
**Slightly mysterious** — Hidden details, gradual reveals.
**Emotionally memorable** — Pieces that become part of personal stories.

### Brand Values

1. **Transformation over tradition** — We honor change, not convention.
2. **Materiality over decoration** — Luxury lives in materials, not ornament.
3. **Patience over speed** — Slow reveals, lasting quality.
4. **Nature over artifice** — Organic inspiration, never forced.
5. **Intimacy over scale** — Personal moments, not mass production.

### Target Customer

**Primary:** Women 28-45. Design-conscious. Values craftsmanship and story over conspicuous branding. Seeks jewelry with meaning — marking milestones, celebrating self, honoring relationships. Educated, culturally aware, environmentally mindful. Shops at independent boutiques, reads architectural digest, values experiences over accumulation.

**Secondary:** Gift purchasers seeking meaningful, not generic, presents. Partners marking anniversaries, parents marking milestones, friends celebrating transformation.

### Luxury Positioning

Upper contemporary to accessible luxury. Positioned alongside:
- Independent jewelry maisons (Melanie Georgacopoulos, Ana Khouri)
- Design-forward brands (Charlotte Chesnais, WWAKE)
- Contemporary heritage (Foundrae, Rey City)

Not competing with traditional luxury houses (Cartier, Van Cleef) or fashion jewelry (Mejuri, Gorjana). ZARAVI occupies the space where art jewelry meets wearable design.

### Emotional Territory

- **Primary emotion:** Contemplative wonder
- **Secondary emotion:** Quiet confidence
- **Aspirational emotion:** Self-recognition

The ZARAVI customer doesn't buy to impress others. She buys because the piece reflects something true about herself.

### Cultural Positioning

Global citizen with appreciation for craft traditions. Neither aggressively modern nor nostalgically traditional. Contemporary without being trendy. International sensibility with Persian roots (ZARAVI derives from "zar" — gold in Persian, "avi" — of the air/wings).

### Differentiators

1. **Butterfly philosophy** — Not decorative motif, but core brand belief system
2. **Organic luxury** — Nature-inspired without being literal or bohemian
3. **Material restraint** — Fewer colors, more texture; fewer elements, more meaning
4. **Editorial quality** — Magazine-level photography and typography at every touchpoint
5. **Hidden details** — Brand rewards attention; butterfly embedded, not pasted

### Brand Story

ZARAVI began with a question: What if a jewelry brand was built not around status, but around transformation?

The butterfly is the answer. Not the pretty insect on a spring day, but the profound biological truth it represents: that the most beautiful things emerge from the most unlikely cocoons. That patience creates beauty. That change is not loss but becoming.

Every ZARAVI piece carries this philosophy. The butterfly appears not as a literal icon, but as a structural principle — in the asymmetric balance of a pendant, the way light moves across a faceted stone, the hidden signature that only the wearer knows exists.

This is jewelry for women who understand that transformation is not an event but a practice. That the most precious things are not the ones that announce themselves, but the ones that reveal themselves slowly, like wings unfolding in the morning light.

### Verbal Identity

**Tone of Voice**
- Poetic but not flowery
- Intelligent but not academic
- Intimate but not confessional
- International but not rootless
- Sensual but not sexualized

**Messaging Principles**
1. Lead with feeling, not features
2. Describe effects, not specifications
3. Use natural metaphors sparingly but precisely
4. Avoid superlatives and clichés
5. Honor the reader's intelligence

**Tagline Options**
- "Transformation, in gold."
- "Where change becomes beautiful."
- "Emergence."
- "The shape of becoming."

**Short Brand Statement**
ZARAVI is a contemporary jewelry house where transformation becomes tangible. Each piece carries the philosophy of the butterfly — patient, inevitable, beautiful.

**Long Brand Statement**
ZARAVI creates jewelry for women who understand that the most precious things reveal themselves slowly. Founded on the philosophy of transformation, every piece carries the spirit of the butterfly: not as decoration, but as doctrine. Organic materials meet artisanal craft. Natural palettes meet editorial sensibility. Each design marks a moment of becoming — the quiet metamorphosis that defines a life.

## Colors

The palette is built from the visual DNA of butterfly wings — specifically the sage, rust, cream, and deep brown found in species like the Monarch and Buckeye. These are not literal translations but emotional approximations: colors that feel like nature without copying nature.

**Primary Brand Colors:**

- **Sage ({colors.sage})** — The brand's signature surface. Represents growth, calm, organic luxury. Never use at 100% saturation in digital contexts; prefer 85-95% for warmth.

- **Burnt Sienna ({colors.burnt-sienna})** — The accent of transformation. Fire, autumn, the moment of change. Used sparingly but decisively: ribbons, seals, singular moments of warmth.

- **Warm Ivory ({colors.warm-ivory})** — Breath, space, light. Interior packaging, cards, moments of visual rest. Never pure white.

- **Dark Espresso ({colors.dark-espresso})** — Depth, grounding, text. The anchor that prevents the palette from floating away. Subtle brown undertones, never pure black.

**Extended Neutral System:**

Stone, mushroom, dust, and smoke form a family of transitional neutrals. Use for backgrounds that need warmth without color, and text that needs subtlety without disappearing.

**Metallic Direction:**

Gold foil and rose gold are production references, not screen colors. In print, gold foil should be matte, not glossy — soft catch light, not mirror reflection. Brass hardware should be antiqued, unlacquered, allowing natural patina.

## Typography

ZARAVI's typography system balances editorial elegance with functional clarity.

**Display Typography — Cormorant Garamond:**
A contemporary interpretation of 16th-century Garamond styles. The light weights (300) create elegant tension at display sizes. Tight letter-spacing on headlines creates a refined, international feel. Never use below 24pt for display purposes.

**Body Typography — Libre Baskerville:**
A web-optimized version of the classic Baskerville. Warm, readable, with subtle editorial character. Larger line-height (1.6-1.7) creates the spacious, contemplative rhythm the brand requires.

**Supporting Typography — Inter:**
For technical content, labels, and UI elements. The geometric precision of Inter contrasts with the serif warmth, creating visual interest without competing. Use sparingly, primarily for functional content.

**Persian Support — Vazirmatn:**
For RTL layouts and Persian content. Matches the weight and proportions of the Latin type system while maintaining cultural authenticity.

**Typography Rules:**
- Never mix more than two typefaces in a single composition
- Display type earns its size; if it doesn't need to be large, it shouldn't be
- Captions and labels are always uppercase with generous letter-spacing
- Numbers in product contexts use Inter; numbers in editorial contexts use Cormorant

## Layout

Spacing follows a 4px baseline, but the principle matters more than the math:

- **Micro spacing** (4-8px): Within components, between labels
- **Component spacing** (12-24px): Between elements in a group
- **Section spacing** (32-48px): Between distinct content blocks
- **Chapter spacing** (72-96px): Between major sections, hero moments

Generous whitespace is not emptiness — it's luxury. Resist the urge to fill.

## Components

**Buttons:**
ZARAVI buttons are never rounded rectangles with drop shadows. Primary buttons use the dark espresso background with ivory text. Hover states transition to burnt sienna. Secondary buttons are outlined, not filled. All buttons use uppercase labels with generous tracking.

**Cards:**
Product cards are calm. White/ivory background, minimal shadow, no visible borders. Editorial cards use the sage background for content that needs visual separation. Never use more than one shadow depth in a single view.

**Inputs:**
Form inputs are understated — transparent backgrounds, subtle borders, no rounded corners. Focus states introduce the burnt sienna color as a signal of attention.

## Motion

Movement in ZARAVI reflects the butterfly philosophy: slow, deliberate, transformative.

**Principles:**
- No bouncing, elasticity, or playful timing
- Reveals feel like unfolding, not sliding
- Hover states breathe, they don't snap
- Page transitions feel cinematic, not mechanical
- Duration is longer than expected — the user should feel the change

**Logo Animation Concept:**
The ZARAVI wordmark emerges letter by letter, as if being written in real time. The butterfly symbol appears last, unfolding from a single line to full form over 800ms.

## Materials

ZARAVI's material vocabulary is as important as its color palette. Every physical touchpoint should feel considered.

**Paper:**
Uncoated, cotton-rich stocks for tactile warmth. Linen textures for packaging that suggests craft heritage. Avoid glossy, coated, or plasticized papers.

**Fabric:**
Organic canvas for pouches. Suede-like microfiber for jewelry box interiors. Natural silk and satin for ribbons. Nothing synthetic or industrial.

**Metal:**
Antique brass hardware that will patina over time. Matte gold foil for stamping — soft catch light, not mirror reflection. Avoid chrome, polished nickel, or cold metals.

**Production Techniques:**
- Blind embossing for subtle branding
- Debossing for creating depth
- Letterpress for stationery
- Foil stamping used sparingly for premium signal
- No gloss UV, no plastic lamination

## Packaging

The unboxing experience is a ritual of transformation. Each layer reveals, never just contains.

**Jewelry Box Construction:**
Rigid board with magnetic or ribbon closure. Exterior wrapped in sage paper with subtle butterfly wing pattern (not printed, but embossed or debossed). Interior lined with warm ivory microsuede. The ZARAVI logo blind-embossed inside the lid — visible only when opening, a private moment between brand and customer.

**Gift Box System:**
Two-piece sleeve box in warm ivory with burnt sienna accent band. Closed with satin ribbon and wax seal (dark chocolate seal with gold butterfly emboss). The act of untying the ribbon is the first moment of transformation.

**Pouches:**
Drawstring pouches in organic canvas or velvet. Discreet branding — the ZARAVI name blind-debossed, not printed. These pouches should feel like heirlooms, not packaging.

**Shopping Bag:**
Sage kraft paper with satin ribbon handles. Cream hang tag with embossed butterfly. The bag should feel worth keeping, not disposable.

## Digital

The digital brand translates physical materials into screen language.

**Website Principles:**
- Cinematic, not template-like
- Editorial photography at large scale
- Typography-driven hierarchy
- Generous whitespace as luxury
- Motion that unfolds, never slides
- Product as hero, UI as support

**E-commerce Behavior:**
- Product pages feel like magazine features
- Photography at multiple scales (detail, worn, styled)
- Minimal UI chrome
- Add-to-bag is a commitment, not a click
- Checkout is calm, not anxious

**Social Media:**
- Grid as editorial spread, not individual posts
- Imagery quality over quantity
- Butterfly details appear in margins, not centers
- Captions are poetic, not promotional

## Photography Direction

**Lighting:**
Soft, diffused, northern-window quality. Avoid harsh shadows or artificial studio lighting. The goal is naturalism with control.

**Background:**
Warm neutrals, sage tones, paper and fabric textures. Never pure white or pure black. Depth through material, not gradient.

**Product Photography:**
Macro details that reveal craft. Pieces shown worn on skin for scale and intimacy. Still-life compositions with organic props (leaves, stone, paper).

**Editorial Photography:**
Fashion-forward without being trendy. Real women, not models, showing real emotion. Movement and gesture over posed perfection.

**Campaign Photography:**
World-building imagery. The butterfly as metaphor, not motif. Moments of transformation, emergence, becoming.

## Do's and Don'ts

**Do:**
- Use token references ({colors.sage}) in component definitions
- Maintain generous whitespace
- Use the butterfly as embedded principle, not decoration
- Honor materials — texture and weight matter
- Create moments of reveal and discovery
- Use the full typography hierarchy before adding boxes or color
- Show jewelry on skin for scale and warmth

**Don't:**
- Mix rounded and sharp corners in the same composition
- Use glossy finishes or high-shine foils
- Place the butterfly icon randomly as decoration
- Use black as a background (use deep olive or dark espresso)
- Create busy layouts that compete with product
- Use stock photography or generic luxury imagery
- Shout with typography, color, or animation

---

*ZARAVI Brand Identity System — Design Token Specification*
*Version 1.0 — September 2026*
