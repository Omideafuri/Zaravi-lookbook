# ZARAVI BUTTERFLY VISUAL LANGUAGE SYSTEM
*6-Level Graphic System — Territory B: Dark Romantic / Editorial / Couture*

---

## DESIGN PHILOSOPHY

The butterfly is not a decoration. It is the structural DNA of ZARAVI.

Every level of this system derives from the same geometric principles:
- **Symmetry** — Perfect bilateral balance as organizational logic
- **Emergence** — Revealing, unfolding, becoming
- **Faceting** — Angular geometry replacing organic curves
- **Duality** — Light/dark, solid/void, seen/unseen

The system must be recognizable even when the butterfly itself is not explicitly shown.

---

## LEVEL 1: PRIMARY BUTTERFLY EMBLEM

### Design Specification

**Formal Qualities:**
- Abstract, geometric, architectural
- Not illustrative, not literal
- Symmetrical wing forms with faceted edges
- Central negative space = body
- Fits in 1:1 square

**Geometry:**
```
Construction Grid: 100 × 100 units

Wing Profile (per side):
- Vertex at (50, 15) — top center
- Upper curve: Bezier (50,15) → (70,25) → (85,50)
- Outer apex: (85, 50) — widest point
- Lower curve: Bezier (85,50) → (70,75) → (50,85)
- Inner edge: Straight line (50,15) → (50,85)
- Facet break: Angular notch at (60, 50) — 15° inward

Body (negative space):
- Vertical line: x=50, y=15 to y=85
- Width: 2 units at center, tapering to 0.5 at ends
```

**Variations:**

| Variant | Use Case | Min Size | Production |
|---------|----------|----------|------------|
| Solid filled | Seals, tags, certificates | 8mm | Foil, ink |
| Outline (0.08x) | Wax seals, embossing | 10mm | Blind, foil |
| Gold foil solid | Premium packaging | 8mm | Matte foil |
| Single-color | Digital, print | 24px | #3A230A |

**Behavior:**
- Never rotated
- Never cropped (at this level)
- Always given clear space = 0.5x emblem diameter
- On dark espresso: gold foil or warm ivory
- On warm ivory: dark espresso or gold foil

---

## LEVEL 2: SECONDARY BUTTERFLY GRAPHICS

### Fragment Family

Derived by cropping, rotating, or partial-revealing the Level 1 emblem.

#### 2A — Single Wing (Right)
- Right half of emblem only
- Faces right (forward direction)
- Used: Pattern generation, directional indicators, "next" states
- Represents: Emergence, movement, future

#### 2B — Wing Pair (Open)
- Both wings separated by 0.3x gap
- Central void widened
- Used: Loading states, transition moments, "opening" animations
- Represents: Unfolding, revelation, breath

#### 2C — Lower Wing Fragment
- Lower 40% of wing form
- Angular facet emphasized
- Used: Micro-patterns, texture fills, corner details
- Represents: Foundation, detail, craft

#### 2D — Symmetry Axis
- Central vertical line only
- With subtle wing suggestions at top/bottom (2 units each)
- Used: Dividers, section breaks, alignment guides
- Represents: Balance, center, structure

#### 2E — Wing Vertex
- Top 30% of wing (upper curve + apex)
- Sharp, directional
- Used: Arrow indicators, "premium" markers, corner anchors
- Represents: Aspiration, peak, precision

### Technical Specifications

All Level 2 graphics:
- Derived mathematically from Level 1 geometry
- Same stroke weight (0.08x bounding box)
- Same angular facet logic
- Delivered as SVG components with named layers

---

## LEVEL 3: PATTERN SYSTEM

### Pattern Philosophy

Patterns are not decorative fills. They are **structural textures** — the visual equivalent of fabric weave or metal grain.

### Pattern 3A: Wing Tessellation

**Construction:**
- Level 1 emblem tiled in brick bond
- Alternating rows offset by 50%
- Gap between emblems: 0.2x diameter
- Creates subtle herringbone at distance

**Applications:**
- Packaging paper (subtle, tone-on-tone)
- Website background (5% opacity)
- Tissue paper lining
- Shopping bag interior

**Colorways:**
1. Dark espresso on dark espresso (blind/tactile)
2. Warm ivory on warm ivory (blind/tactile)
3. Gold foil on dark espresso (premium)
4. Sage on warm ivory (subtle contrast)

### Pattern 3B: Facet Grid

**Construction:**
- Derived from angular facet (Level 1 notch at 60,50)
- Repeating diamond/rhombus grid
- Facet angle: 15°
- Module: 20 × 20 units

**Applications:**
- Business card reverse
- Certificate borders
- Digital hover states
- Ribbon edge detail

### Pattern 3C: Wing Vein Micro

**Construction:**
- Microscopic wing vein structure
- Organic branching (not geometric)
- Line weight: 0.02x module
- Density: 40% coverage

**Applications:**
- Gold foil detail on certificates
- Embossed texture on box interiors
- Website loading shimmer
- Jewelry pouch lining (subtle print)

### Pattern 3D: Emergence Sequence

**Construction:**
- 12-frame sequence
- Frame 1: Single vertical line (symmetry axis)
- Frame 4: Wing suggestions appear
- Frame 8: Wings half-formed
- Frame 12: Full Level 1 emblem

**Applications:**
- Digital page transitions
- Packaging animation concept
- Brand video intro/outro
- App launch screen

---

## LEVEL 4: MICRO DETAILS

### Invisible Brand Language

Details that reward close attention. Not visible at arm's length — discovered on handling.

#### 4A: Blind Emboss Signature

**Location:** Inside lid of every jewelry box
**Form:** Level 1 outline emblem, 15mm diameter
**Depth:** 0.3mm blind emboss
**Discovery:** Only visible when box is opened, catches light

#### 4B: Wax Seal Impression

**Form:** Level 1 outline in dark chocolate wax
**Diameter:** 22mm
**Detail:** Gold foil butterfly at center (3mm)
**Use:** Gift box closure, certificate authentication

#### 4C: Jewelry Engraving Micro

**Form:** Z monogram (derived from butterfly symmetry)
**Size:** 1.5mm - 3mm
**Location:** Interior ring band, necklace clasp, earring post
**Method:** Laser (0.05mm spot) or hand-stamping

#### 4D: Ribbon Woven Detail

**Form:** Level 2C (lower wing fragment) woven into ribbon selvedge
**Scale:** 3mm repeat
**Color:** Tone-on-tone (burnt sienna on burnt sienna)
**Discovery:** Visible only when ribbon is examined closely

#### 4E: Paper Watermark

**Form:** Level 1 outline, 30mm
**Location:** Center of all stationery paper
**Visibility:** Held to light only
**Paper:** Custom watermark in cotton stock

#### 4F: Digital Easter Eggs

- **Cursor:** Butterfly wing follows cursor at 0.5s delay (subtle)
- **Scroll:** Wing fragments emerge at section boundaries
- **Hover:** Product images reveal vein pattern on long hover
- **Console:** ASCII butterfly in dev tools

---

## LEVEL 5: PACKAGING APPLICATIONS

### Structural Integration

The butterfly informs packaging **construction**, not just surface graphics.

#### 5A: Box Hinge as Wing

**Concept:** The box opening mechanism mimics wing movement
**Execution:**
- Hinged lid opens to 120° (not 90°)
- Interior lid continues the exterior surface (one continuous plane)
- Opening feels like wing unfolding
- Magnetic catch at "wing tip" — silent, smooth

#### 5B: Drawer Pull as Antenna

**Concept:** Presentation box drawer pull derives from butterfly antenna
**Execution:**
- Thin brass rod (1.5mm diameter)
- Curved tip (15° upward)
- Length: 25mm
- Antique brass finish
- Tactile, distinctive, functional

#### 5C: Ribbon Closure as Proboscis

**Concept:** Single ribbon thread through box, pulled to open
**Execution:**
- Satin ribbon, burnt sienna
- Threaded through single hole (not tied)
- Pulling ribbon = "unfurling"
- Ribbon remains attached — part of object

#### 5D: Interior Geometry

**Concept:** Box interior lined with facet grid (Pattern 3B)
**Execution:**
- Microsuede with embossed facet pattern
- Pattern aligns across lid and base when closed
- Jewelry sits in "facets" — each piece has a place
- Removable tray continues pattern

#### 5E: Gift Box Sleeve Geometry

**Concept:** Sleeve slides off like wing shedding
**Execution:**
- Sleeve: Warm ivory textured paper
- Accent band: Burnt sienna (30mm) at center
- Band features: Level 1 gold foil emblem
- Base box: Dark espresso, revealed on opening

---

## LEVEL 6: DIGITAL MOTION BEHAVIOR

### Motion Principles

All motion derives from **butterfly biomechanics** — not cartoon animation.

| Principle | Butterfly Source | Digital Expression |
|-----------|------------------|-------------------|
| Unfolding | Wing emergence from chrysalis | Content reveals from center outward |
| Symmetry | Bilateral wing movement | UI expands symmetrically from center |
| Vibration | Wing flutter (high frequency) | Subtle hover tremble (2-3px) |
| Glide | Effortless aerial movement | Smooth, decelerating transitions |
| Pause | Resting with wings closed | Static states feel settled, not frozen |

### Motion Specifications

#### 6A: Logo Animation (800ms)

```
0ms     : Blank
100ms   : Symmetry axis appears (draws down)
200ms   : Left wing begins (upper curve)
250ms   : Right wing begins (mirrored)
400ms   : Wings reach apex simultaneously
550ms   : Lower curves complete
700ms   : Facet notches "click" into place
800ms   : Full emblem — subtle glow pulse (gold)
Easing  : cubic-bezier(0.25, 0.46, 0.45, 0.94) — organic
```

#### 6B: Page Transition (600ms)

```
Exit    : Content folds along vertical center (like wings closing)
          Duration: 300ms, easing: cubic-bezier(0.4, 0, 1, 1)
Between : 100ms pause (chrysalis moment)
Enter   : New content unfolds from center
          Duration: 300ms, easing: cubic-bezier(0, 0, 0.2, 1)
```

#### 6C: Image Reveal (500ms)

```
Trigger : Viewport intersection (20% visible)
Action  : Image masked by wing-shape SVG
          Mask expands from center (radial)
          Duration: 500ms, easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
Result  : Image feels like it "emerges" not "loads"
```

#### 6D: Hover Behavior (200ms)

```
Card/Product:
  - Subtle scale: 1.0 → 1.015 (barely perceptible)
  - Shadow deepens: subtle → soft
  - Gold accent (if present): 10% opacity → 100%
  - Duration: 200ms, easing: cubic-bezier(0, 0, 0.2, 1)

Button:
  - Background: dark espresso → burnt sienna
  - Text: warm ivory (unchanged)
  - No scale, no shadow
  - Duration: 150ms, easing: cubic-bezier(0.4, 0, 0.2, 1)

Link (editorial):
  - Underline: draws from center outward (wing unfold)
  - Color: dark espresso → burnt sienna
  - Duration: 200ms
```

#### 6E: Loading States

**Primary: Emergence Loader**
- Level 1 emblem builds frame-by-frame (Pattern 3D)
- 12 frames, 60ms each = 720ms loop
- No spinner, no bar — pure brand expression

**Secondary: Wing Flutter**
- Level 2B (open wings) subtle oscillation
- ±3° rotation, 1.2s period
- For longer loads (checkout, account creation)

**Micro: Facet Pulse**
- Pattern 3B single diamond
- Opacity pulse: 30% → 100% → 30%
- 800ms period
- For button presses, form submissions

---

## SYSTEM COHERENCE RULES

### Cross-Level Consistency

1. **All geometry derives from Level 1 construction grid**
   - No arbitrary proportions
   - Facet angle (15°) constant across levels
   - Wing curve control points shared

2. **Stroke weight hierarchy**
   - Level 1: 0.08x
   - Level 2: 0.08x (same)
   - Level 3: 0.04x (half)
   - Level 4: 0.02x (quarter)
   - Level 5: Implied (construction, not drawn)
   - Level 6: Implied (motion paths)

3. **Color discipline**
   - Dark espresso: Structure, text, primary marks
   - Gold foil: Premium, celebration, discovery
   - Burnt sienna: Warmth, interaction, accent
   - Warm ivory: Breath, reverse, interior
   - Sage: Never used for butterfly (reserved for brand surfaces)

4. **Orientation discipline**
   - Butterfly always upright (vertical symmetry axis)
   - Single wing always faces right (forward)
   - Never mirrored horizontally (breaks emergence narrative)

### Recognition Without Representation

The system succeeds when a viewer recognizes ZARAVI **without seeing a butterfly**:

- The 15° facet angle appears in packaging corners, UI radii, typography details
- The symmetry logic governs all layouts (centered, bilateral)
- The emergence timing governs all transitions (center-out)
- The color pairing (dark espresso + gold) signals the brand
- The tactile language (blind emboss, matte foil, texture) carries the DNA

---

## DELIVERABLES CHECKLIST

### Vector Assets (SVG)
- [ ] Level 1: Primary emblem (solid, outline, gold variants)
- [ ] Level 2: 5 fragment graphics
- [ ] Level 3: 4 pattern tiles (seamless)
- [ ] Level 3D: 12-frame emergence sequence
- [ ] Level 6: Animation keyframes (JSON/Lottie)

### Production Assets
- [ ] Embossing dies (Level 1 outline, Level 4A)
- [ ] Wax seal die (Level 4B)
- [ ] Engraving die (Level 4C)
- [ ] Ribbon weaving spec (Level 4D)
- [ ] Watermark roller (Level 4E)

### Digital Assets
- [ ] CSS motion tokens (durations, easings)
- [ ] SVG mask library (image reveals)
- [ ] Cursor follower component
- [ ] Loader components (3 variants)
- [ ] Hover state library

### Documentation
- [ ] Geometry construction guide
- [ ] Color application matrix
- [ ] Size/scale reference chart
- [ ] Misuse guidelines
- [ ] Animation spec sheet

---

*Butterfly Visual Language System — ZARAVI Brand Identity*
*Version 1.0 — September 2026*
*Territory B: Dark Romantic / Editorial / Couture*