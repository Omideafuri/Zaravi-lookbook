/**
 * ZARAVI JEWELRY — BRAND CORE CHAPTERS (01 - 06)
 * Art Direction: Dark Romantic / Editorial / Couture (Territory B)
 * Architectural Entomology & Living Brand Doctrine
 */

window.ZARAVI_CORE = (function() {
  const V = window.ZARAVI_VECTORS;

  return {
    // ══════════════════════════════════════════════════
    // CHAPTER 01 · THE COVER (Cinematic Entry)
    // ══════════════════════════════════════════════════
    renderChapter01: function() {
      return `
        <section id="chapter-01" class="brand-section" style="min-height: 96vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: radial-gradient(circle at 50% 30%, #2A1C10 0%, #170E07 70%, #100904 100%); color: var(--color-warm-ivory); padding: var(--space-hero) var(--space-lg); position: relative;">
          
          <!-- Luminous Golden Emblem with Breathing Biomechanics -->
          <div style="margin-bottom: var(--space-md); animation: breathe 6s infinite ease-in-out;">
            ${V.getLevel1Emblem({ size: 140, mode: "gold", id: "hero-gold-emblem" })}
          </div>

          <!-- Primary Wordmark with Stroke & Glow Metamorphosis -->
          <h1 style="font-family: var(--font-display); font-size: clamp(3.8rem, 9.5vw, 8rem); font-weight: 400; letter-spacing: var(--tracking-wordmark); line-height: 1.0; color: var(--color-warm-ivory); text-shadow: 0 4px 32px rgba(0,0,0,0.7); animation: emergence 1.2s var(--ease-organic);">
            ZARAVI
          </h1>

          <!-- Subscript & Heritage Callout -->
          <div style="margin-top: var(--space-sm); font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: var(--tracking-mono); color: var(--color-burnt-sienna); text-transform: uppercase;">
            HAUTE JOAILLERIE · MAISON FONDÉE EN 2026 · زرآوی
          </div>

          <div class="gold-accent-line" style="margin: var(--space-lg) auto;"></div>

          <!-- The Brand Manifesto -->
          <div style="max-width: 780px; margin: 0 auto var(--space-lg); font-family: var(--font-editorial); font-size: clamp(1.25rem, 2.2vw, 1.65rem); font-style: italic; line-height: 1.7; color: var(--color-stone);">
            “We believe in the patience of the chrysalis. In the courage of the unfurling wing. In the beauty that emerges from the dark. Transformation is not an event, but a practice. Not decoration. Doctrine. Transformation, in solid gold.”
          </div>

          <!-- Hero Emergence Sculpture Plate -->
          <div style="max-width: 900px; width: 100%; margin: 0 auto var(--space-xl); border-radius: var(--radius-soft); overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.85); border: 1px solid rgba(201, 169, 98, 0.3);">
            <img src="../zaravi_emergence_sculpture.jpg" alt="ZARAVI Emergence: 18K Solid Gold Wing Sculpted in Volcanic Basalt" style="width: 100%; max-height: 480px; object-fit: cover;">
          </div>

          <!-- Visual Concept Triptych: 3 Distinct Perspectives on Emergence -->
          <div style="max-width: 1100px; width: 100%; margin: 0 auto var(--space-xl); text-align: left;">
            <span class="spec-mono" style="color: var(--color-gold-foil); display: block; text-align: center; margin-bottom: var(--space-sm);">THE THREE VISUAL PHENOMENOLOGIES OF EMERGENCE</span>
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../zaravi_emergence_sculpture.jpg" alt="The Masterwork Emergence Sculpture">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / THE MASTERWORK</span>
                  <div class="triptych-title">The Cleft Emergence</div>
                  <div class="triptych-desc">18K solid gold wing erupting through raw Iranian green onyx and fractured volcanic basalt stone.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../chrysalis_chamber.jpg" alt="The Chrysalis Chamber Monolith">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / THE NOCTURNE</span>
                  <div class="triptych-title">Chrysalis Sanctuary</div>
                  <div class="triptych-desc">Nocturne chiaroscuro chamber with single overhead light beam illuminating molten gold kintsugi seam.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wing_unfurling_macro.jpg" alt="Macro Gold Wing on Slate">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / THE SPECIMEN</span>
                  <div class="triptych-title">Unfurling Wing Macro</div>
                  <div class="triptych-desc">Hand-brushed 18k solid gold wing with 15° faceted ridges emerging from dark charcoal slate stone.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Direct Navigation Triggers -->
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap; justify-content: center; margin-bottom: var(--space-xl);">
            <a href="#chapter-07" style="padding: 14px 34px; background: var(--color-warm-ivory); color: var(--color-dark-espresso); font-family: var(--font-ui); font-size: 0.72rem; font-weight: 600; letter-spacing: var(--tracking-caps); text-transform: uppercase; border-radius: var(--radius-soft); transition: all var(--duration-fast);">
              Inspect Jewelry Atelier
            </a>
            <a href="#chapter-08" style="padding: 14px 34px; background: transparent; color: var(--color-warm-ivory); border: 1px solid rgba(238, 233, 193, 0.4); font-family: var(--font-ui); font-size: 0.72rem; font-weight: 600; letter-spacing: var(--tracking-caps); text-transform: uppercase; border-radius: var(--radius-soft); transition: all var(--duration-fast);">
              Unboxing Ceremony
            </a>
          </div>

          <!-- Subtle Scroll Indicator -->
          <div style="animation: breathe 3s infinite; opacity: 0.75; margin-top: var(--space-sm);">
            <span class="spec-mono" style="color: var(--color-stone); font-size: 0.58rem;">SCROLL TO ENTER ATELIER</span>
            <div style="width: 1px; height: 26px; background: linear-gradient(to bottom, var(--color-burnt-sienna), transparent); margin: 6px auto 0;"></div>
          </div>

          <!-- Bottom Technical Spec Bar -->
          <div style="position: absolute; bottom: 16px; left: 0; right: 0; display: flex; justify-content: space-between; padding: 0 var(--space-xl); font-family: var(--font-mono); font-size: 0.62rem; color: rgba(238, 233, 193, 0.4); letter-spacing: var(--tracking-mono);">
            <span>TERRITORY B : DARK ROMANTIC / COUTURE</span>
            <span>SYSTEM SPECIFICATION V2.0</span>
            <span>AU 750‰ · SOLID 18K GOLD</span>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 02 · THE DOCTRINE (Philosophy & DNA)
    // ══════════════════════════════════════════════════
    renderChapter02: function() {
      return `
        <section id="chapter-02" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 02</span>
              <div class="section-title-wrap">
                <h2>The Doctrine & Metaphor</h2>
                <p class="section-subtitle">“A single butterfly wing observed under a macro lens — not as ornament, but as architecture.”</p>
              </div>
            </div>

            <!-- Bilateral Split Editorial Spread -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; border-radius: var(--radius-soft); overflow: hidden; box-shadow: var(--shadow-deep); margin-bottom: var(--space-xl);">
              
              <!-- Left: Dark Espresso Void -->
              <div style="background: var(--color-dark-espresso); color: var(--color-warm-ivory); padding: var(--space-hero) var(--space-xl); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <span class="spec-mono" style="color: var(--color-gold-foil);">THE CORE METAPHOR</span>
                  <h3 style="font-family: var(--font-display); font-size: clamp(2rem, 3.2vw, 2.8rem); line-height: 1.15; margin: var(--space-sm) 0 var(--space-lg); color: var(--color-warm-ivory);">
                    She wasn't rescued.<br><span style="font-style: italic; color: var(--color-gold-foil);">She transformed herself.</span>
                  </h3>
                  <p style="font-family: var(--font-body); font-size: 0.95rem; line-height: 1.8; color: var(--color-stone);">
                    Commercial jewelry brands treat the butterfly as a sentimental garden motif — light, decorative, delicate, and passive. ZARAVI treats it as architectural doctrine: bilateral tension, structural venation, and the immense biological force required for metamorphosis.
                  </p>
                </div>
                <div style="margin-top: var(--space-xl); border-top: 1px solid rgba(238, 233, 193, 0.15); padding-top: var(--space-md); font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-burnt-sienna);">
                  PRINCIPLE: CUT THE PRETTY · KEEP THE EVIDENCE
                </div>
              </div>

              <!-- Right: Warm Ivory Atelier Paper -->
              <div style="background: var(--color-warm-ivory); color: var(--color-dark-espresso); padding: var(--space-hero) var(--space-xl); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">THE 4 FOUNDATIONAL PILLARS</span>
                  
                  <div style="display: flex; flex-direction: column; gap: var(--space-md); margin-top: var(--space-md);">
                    <div>
                      <h4 style="font-family: var(--font-display); font-size: 1.25rem;">01. Metamorphosis as Doctrine</h4>
                      <p style="font-size: 0.88rem; color: rgba(58, 35, 10, 0.75); line-height: 1.6;">Every piece marks a personal threshold. The object doesn't celebrate status; it anchors the wearer's conscious becoming.</p>
                    </div>
                    <div>
                      <h4 style="font-family: var(--font-display); font-size: 1.25rem;">02. Materiality Over Decoration</h4>
                      <p style="font-size: 0.88rem; color: rgba(58, 35, 10, 0.75); line-height: 1.6;">Brushed 18k gold, tactile paper grain, and blind deboss relief speak louder than gratuitous mirror foil or superficial embellishment.</p>
                    </div>
                    <div>
                      <h4 style="font-family: var(--font-display); font-size: 1.25rem;">03. Bilateral Symmetry & Tension</h4>
                      <p style="font-size: 0.88rem; color: rgba(58, 35, 10, 0.75); line-height: 1.6;">The vertical symmetry axis is a spine of strength. Outer contours feature 15° architectural facets rather than sweet organic curves.</p>
                    </div>
                    <div>
                      <h4 style="font-family: var(--font-display); font-size: 1.25rem;">04. The Living Archive</h4>
                      <p style="font-size: 0.88rem; color: rgba(58, 35, 10, 0.75); line-height: 1.6;">Every creation is numbered, cataloged, and registered with a serialized Certificate of Authenticity and craftsman bench log.</p>
                    </div>
                  </div>
                </div>

                <div style="margin-top: var(--space-lg); border-top: 1px solid rgba(58, 35, 10, 0.15); padding-top: var(--space-md); font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-dark-espresso);">
                  ETYMOLOGY: ZAR (GOLD) + AVI (OF THE WINGS)
                </div>
              </div>
            </div>

            <!-- Chapter 02 Triptych: The 3 Tenets of Doctrine -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../philosophy_silk.jpg" alt="Mineral Sage Silk with Gold Thread">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / MATERIAL TRUTH</span>
                  <div class="triptych-title">Raw Silk & Gold Thread</div>
                  <div class="triptych-desc">Mineral sage silk twill interwoven with raw 18k unlacquered gold filament against charred wood.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../chrysalis_chamber.jpg" alt="The Sanctuary Chamber">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / SPATIAL STILLNESS</span>
                  <div class="triptych-title">The Chrysalis Monolith</div>
                  <div class="triptych-desc">Architectural quiet and deep shadows, where solid gold fills the fissure of fractured stone.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../ref-1-textile-wing.jpg" alt="Original Textile Wing Anatomy">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / BIOLOGICAL EVIDENCE</span>
                  <div class="triptych-title">Hand-Capped Venation</div>
                  <div class="triptych-desc">Master reference plate: Mineral sage silk with burnt sienna cellular markings outlined in raw gold couching.</div>
                </div>
              </div>
            </div>

            <!-- The Critical Audit: Cliché vs ZARAVI Reality -->
            <div style="background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-lg); display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
              <div>
                <span class="spec-mono" style="color: #9E3A3A;">✕ WHAT WE REJECT (GENERIC LUXURY CLICHÉ)</span>
                <ul style="margin-top: 8px; font-size: 0.85rem; line-height: 1.8; color: var(--color-digital-muted); list-style: none;">
                  <li>— Black-and-gold casino/perfume aesthetic</li>
                  <li>— Literal, illustrative butterfly clipart</li>
                  <li>— Glossy plastic lamination and mirror chrome finishes</li>
                  <li>— Unearned "Heritage since 1880" romantic mythology</li>
                </ul>
              </div>
              <div style="border-left: 1px solid var(--color-border-subtle); padding-left: var(--space-lg);">
                <span class="spec-mono" style="color: var(--color-sage);">✓ WHAT WE MANDATE (THE ZARAVI STANDARD)</span>
                <ul style="margin-top: 8px; font-size: 0.85rem; line-height: 1.8; color: var(--color-digital-text); list-style: none;">
                  <li>— Mineral Sage 60%, Warm Ivory 30%, Burnt Sienna 10%</li>
                  <li>— Structural wing venation & 15° architectural facets</li>
                  <li>— Uncoated 150gsm cotton wrap, blind deboss, and linen paper</li>
                  <li>— Exact engineering calipers, real assay hallmarks, honest serials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 03 · THE MARK (Logo as Architecture)
    // ══════════════════════════════════════════════════
    renderChapter03: function() {
      return `
        <section id="chapter-03" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 03</span>
              <div class="section-title-wrap">
                <h2>The Mark & Letterform Architecture</h2>
                <p class="section-subtitle">“The logo is not merely displayed — it is constructed with engineering tolerances.”</p>
              </div>
            </div>

            <!-- Monumental Letterform Specimen with Visual Construction Callouts -->
            <div style="background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-xl); margin-bottom: var(--space-xl); position: relative; overflow: hidden;">
              <span class="spec-mono">ANATOMICAL LETTERFORM BREAKDOWN · CAP HEIGHT = 1.0 UNIT</span>
              
              <div style="display: flex; justify-content: space-around; align-items: baseline; margin: var(--space-xl) 0; font-family: var(--font-display); font-size: clamp(4rem, 10vw, 8rem); color: var(--color-dark-espresso); user-select: none;">
                <div style="position: relative; text-align: center;">
                  <span>Z</span>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">RAZOR BRACKET</div>
                </div>
                <div style="position: relative; text-align: center;">
                  <span>A</span>
                  <div style="position: absolute; bottom: 33%; left: -10px; right: -10px; border-bottom: 1px dashed var(--color-burnt-sienna);"></div>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">33% CROSSBAR</div>
                </div>
                <div style="position: relative; text-align: center;">
                  <span>R</span>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">EXTENDED LEG</div>
                </div>
                <div style="position: relative; text-align: center;">
                  <span>A</span>
                  <div style="position: absolute; bottom: 33%; left: -10px; right: -10px; border-bottom: 1px dashed var(--color-burnt-sienna);"></div>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">33% CROSSBAR</div>
                </div>
                <div style="position: relative; text-align: center;">
                  <span>V</span>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">45° VERTEX</div>
                </div>
                <div style="position: relative; text-align: center;">
                  <span>I</span>
                  <div style="position: absolute; bottom: -8px; left: 0; right: 0; font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna); white-space: nowrap;">VERTICAL SERIF</div>
                </div>
              </div>

              <!-- Space Mono Engineering Overlays -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-md); border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-md);">
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">TRACKING TOLERANCE</span>
                  <p style="font-size: 0.85rem; margin-top: 4px;">+200 (+0.2em) editorial spacing strictly enforced across print & web.</p>
                </div>
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">CLEAR SPACE BOUNDARY</span>
                  <p style="font-size: 0.85rem; margin-top: 4px;">0.5x Cap Height minimum clearance perimeter on all four axes.</p>
                </div>
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">MINIMUM SIZES</span>
                  <p style="font-size: 0.85rem; margin-top: 4px;">Print: 20mm width · Digital: 120px · Hallmark Laser: 1.5mm.</p>
                </div>
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">CROSSBAR ELEVATION</span>
                  <p style="font-size: 0.85rem; margin-top: 4px;">Set at lower 33% vertical baseline for high-couture tension.</p>
                </div>
              </div>
            </div>

            <!-- Chapter 03 Triptych: 3 Physical Embodiments of the Mark -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wordmark_letterpress.jpg" alt="ZARAVI Letterpress Deboss on Heavy Cotton Paper">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / LETTERPRESS RELIEF</span>
                  <div class="triptych-title">Debossed Cotton Relief</div>
                  <div class="triptych-desc">The wordmark pressed with a 0.3mm brass die into 600gsm warm ivory cotton paper, capturing crisp shadows.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../hallmark_ring_macro.jpg" alt="ZARAVI 18K Inner Shank Hallmark Macro">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / FIBER LASER HALLMARK</span>
                  <div class="triptych-title">Inner Shank Assay Strike</div>
                  <div class="triptych-desc">Microscopic 1.5mm legal assay hallmark 'ZARAVI 18K AU 750' engraved into the hand-brushed gold shank.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../mark_stone_carving.jpg" alt="Monumental Z Carving in Basalt Stone">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / ARCHITECTURAL MONOLITH</span>
                  <div class="triptych-title">Chiseled Basalt Monogram</div>
                  <div class="triptych-desc">Monumental serif Z with facet notch carved into dark basalt stone with 45° V-cut incisions.</div>
                </div>
              </div>
            </div>

            <!-- Real Physical Substrate Simulator -->
            <div class="section-title-wrap" style="margin-bottom: var(--space-md);">
              <h3 style="font-family: var(--font-display); font-size: 1.6rem;">Physical Substrate Inspection</h3>
              <p style="font-size: 0.9rem; color: var(--color-digital-muted);">Observe identity behavior across manufacturing stocks and precision metal finishing.</p>
            </div>

            <div class="substrate-grid">
              <!-- 01 Uncoated Warm Ivory -->
              <div class="substrate-card substrate-ivory">
                <span class="spec-mono">SUBSTRATE 01 · 300GSM COTTON UNCOATED</span>
                <div style="text-align: center; margin: var(--space-md) 0;">
                  <h3 style="font-family: var(--font-display); font-size: 2rem; letter-spacing: var(--tracking-wordmark); color: var(--color-dark-espresso);">ZARAVI</h3>
                  <span style="font-family: var(--font-ui); font-size: 0.6rem; letter-spacing: var(--tracking-subscript); text-transform: uppercase; color: var(--color-burnt-sienna);">HAUTE JOAILLERIE</span>
                </div>
                <div class="spec-mono" style="font-size: 0.65rem;">PMS 4625 C ESPRESSO INK · LETTERPRESS RELIEF</div>
              </div>

              <!-- 02 Dark Espresso Rigid Board with Matte Gold Foil -->
              <div class="substrate-card substrate-espresso">
                <span class="spec-mono" style="color: var(--color-gold-foil);">SUBSTRATE 02 · 150GSM ESPRESSO WRAP</span>
                <div style="text-align: center; margin: var(--space-md) 0;">
                  <h3 class="foil-mark" style="font-family: var(--font-display); font-size: 2rem; letter-spacing: var(--tracking-wordmark);">ZARAVI</h3>
                  <span style="font-family: var(--font-ui); font-size: 0.6rem; letter-spacing: var(--tracking-subscript); text-transform: uppercase; color: var(--color-warm-ivory);">HAUTE JOAILLERIE</span>
                </div>
                <div class="spec-mono" style="font-size: 0.65rem; color: var(--color-stone);">12µM MATTE GOLD FOIL · 120°C THERMAL STAMP</div>
              </div>

              <!-- 03 Mineral Sage Box with Blind Deboss -->
              <div class="substrate-card substrate-blind-emboss">
                <span class="spec-mono">SUBSTRATE 03 · 150GSM SAGE BOX CORE</span>
                <div style="text-align: center; margin: var(--space-md) 0;">
                  <h3 style="font-family: var(--font-display); font-size: 2rem; letter-spacing: var(--tracking-wordmark);">ZARAVI</h3>
                  <div style="margin: 8px auto; width: 40px; opacity: 0.5;">
                    ${V.getLevel1Emblem({ size: 40, mode: "dark" })}
                  </div>
                </div>
                <div class="spec-mono" style="font-size: 0.65rem;">0.3MM BLIND DEBOSS · MALE/FEMALE BRASS DIE</div>
              </div>

              <!-- 04 Solid 18k Brushed Gold Inner Shank -->
              <div class="substrate-card substrate-engraved-metal">
                <span class="spec-mono" style="color: #ECC87A;">SUBSTRATE 04 · SOLID 18K YELLOW GOLD</span>
                <div style="text-align: center; margin: var(--space-md) 0;">
                  <span style="font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.25em; color: #ECC87A; border-bottom: 1px solid rgba(236,200,122,0.3); padding-bottom: 4px;">
                    ZARAVI 18K
                  </span>
                  <div style="font-family: var(--font-mono); font-size: 0.62rem; color: #A49A78; margin-top: 6px;">AU 750 · ASSAY #842</div>
                </div>
                <div class="spec-mono" style="font-size: 0.65rem; color: #C4BBA6;">0.05MM FIBER LASER HALLMARK ENGRAVING</div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 04 · THE WING (Structural DNA & 6 Levels)
    // ══════════════════════════════════════════════════
    renderChapter04: function() {
      return `
        <section id="chapter-04" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 04</span>
              <div class="section-title-wrap">
                <h2>The Wing Architecture & 6-Level Hierarchy</h2>
                <p class="section-subtitle">“The butterfly is not an icon. It is structural DNA governing geometry, symmetry, progression, and spatial balance.”</p>
              </div>
            </div>

            <!-- Chapter 04 Triptych: 3 Studies of Wing Phenomenon -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wing_facet_shadow.jpg" alt="18k Gold Faceted Emblem Casting 15 Degree Shadow">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / GEOMETRIC SHADOW</span>
                  <div class="triptych-title">15° Architectural Facet</div>
                  <div class="triptych-desc">Hard directional light striking the solid gold emblem, casting razor-sharp 15° geometric shadow planes.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wing_gold_specimen.jpg" alt="Filigree Gold Butterfly in Museum Vitrine">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / ENTOMOLOGICAL VITRINE</span>
                  <div class="triptych-title">The Pinned Specimen</div>
                  <div class="triptych-desc">Gold filigree butterfly pinned against dark espresso velvet inside an antique unlacquered brass vitrine case.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wing_water_reflection.jpg" alt="Gold Wing Reflecting in Dark Mineral Water">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / LIQUID REFLECTION</span>
                  <div class="triptych-title">Mineral Water Pool</div>
                  <div class="triptych-desc">Solid gold wing suspended above still obsidian mineral water, mirroring bilateral tension and surface reflection.</div>
                </div>
              </div>
            </div>

            <!-- Concept Explorer for Chapter 04 -->
            <div class="concept-explorer">
              <div class="concept-tabs-nav">
                <button class="concept-tab-btn active" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-wing-geo')">
                  <span>Concept A</span>
                  <span class="concept-badge">100×100 Blueprint Overlay</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-wing-tactile')">
                  <span>Concept B</span>
                  <span class="concept-badge">Textile & Vein Anatomy</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-wing-fragments')">
                  <span>Concept C</span>
                  <span class="concept-badge">Level 2 Fragment Kit</span>
                </button>
              </div>

              <!-- Concept A: 100x100 Mathematical Grid Directly Overlaid on Textile Wing Specimen -->
              <div id="tab-wing-geo" class="concept-panel active">
                <div class="layout-split-editorial">
                  <div style="border-radius: var(--radius-soft); overflow: hidden; position: relative; max-height: 400px; box-shadow: var(--shadow-lifted);">
                    <img src="../ref-1-textile-wing.jpg" alt="ZARAVI Textile Wing Specimen" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);">
                    
                    <!-- Architectural Transparent 100x100 Grid Overlay -->
                    <svg viewBox="0 0 100 100" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#C9A962" stroke-width="0.8" stroke-dasharray="2,2"/>
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#C9A962" stroke-width="0.8" stroke-dasharray="2,2"/>
                      <line x1="60" y1="50" x2="54" y2="50" stroke="#FF5F56" stroke-width="1.2"/>
                      <circle cx="60" cy="50" r="1.5" fill="#FF5F56"/>
                      <text x="63" y="49" fill="#EEE9C1" font-family="monospace" font-size="3.5">15° NOTCH</text>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(201, 169, 98, 0.4)" stroke-width="0.5" stroke-dasharray="1,2"/>
                    </svg>
                  </div>
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">LEVEL 1 : PRIMARY BILATERAL EMBLEM</span>
                    <h3 style="font-family: var(--font-display); font-size: 2rem; margin: var(--space-xs) 0 var(--space-md);">
                      15° Architectural Facet Notches
                    </h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted); margin-bottom: var(--space-md);">
                      Constructed on an exact 100×100 unit coordinate grid with bilateral symmetry at x=50. The outer contour deflects inward at (60, 50) with a strict 15° triangular notch cut, eliminating organic softness in favor of faceted architectural tension.
                    </p>
                    <div class="spec-mono" style="background: rgba(58,35,10,0.06); padding: 12px; border-radius: 4px; line-height: 1.8;">
                      STROKE WEIGHT: 0.08X BOUNDING BOX<br>
                      CENTRAL VOID: 2.0 UNITS TAPERING TO 0.5 AT TIPS<br>
                      RESERVED EXCLUSIVELY FOR: SEALS, CEREMONIES, CERTIFICATES
                    </div>
                  </div>
                </div>
              </div>

              <!-- Concept B: Textile & Vein Anatomy -->
              <div id="tab-wing-tactile" class="concept-panel">
                <div class="layout-split-editorial">
                  <div style="border-radius: var(--radius-soft); overflow: hidden; box-shadow: var(--shadow-lifted); max-height: 380px;">
                    <img src="../ref-1-textile-wing.jpg" alt="ZARAVI Textile Wing Specimen" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">ORIGIN REFERENCE · TEXTILE WING ANATOMY</span>
                    <h3 style="font-family: var(--font-display); font-size: 2rem; margin: var(--space-xs) 0 var(--space-md);">
                      Sage Silk Twill & Hand-Stitched Veins
                    </h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted);">
                      The master physical reference plate (Ref. 01). Mineral sage silk, folded and creased, with burnt sienna cellular markings outlined in raw gold-thread hand couching against mulberry paper.
                    </p>
                    <p style="font-size: 0.9rem; line-height: 1.6; color: var(--color-digital-muted); margin-top: 12px;">
                      Notice the structural integrity: each vein acts as a structural truss holding tension across delicate gossamer planes.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Concept C: Level 2 Fragment Kit -->
              <div id="tab-wing-fragments" class="concept-panel">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-md);">
                  <div style="background: var(--color-digital-bg); padding: var(--space-md); border-radius: var(--radius-soft); text-align: center; border: 1px solid var(--color-border-subtle);">
                    <div style="height: 70px; display: flex; align-items: center; justify-content: center;">
                      ${V.getLevel2Fragment("2A", 50, "var(--color-dark-espresso)")}
                    </div>
                    <span class="spec-mono" style="display: block; margin-top: 8px;">2A · SINGLE FORWARD WING</span>
                    <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 4px;">Directional cue & next-page trigger</p>
                  </div>

                  <div style="background: var(--color-digital-bg); padding: var(--space-md); border-radius: var(--radius-soft); text-align: center; border: 1px solid var(--color-border-subtle);">
                    <div style="height: 70px; display: flex; align-items: center; justify-content: center;">
                      ${V.getLevel2Fragment("2B", 50, "var(--color-dark-espresso)")}
                    </div>
                    <span class="spec-mono" style="display: block; margin-top: 8px;">2B · OPEN WING PAIR</span>
                    <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 4px;">0.3x expanded gap · Unfolding ritual</p>
                  </div>

                  <div style="background: var(--color-digital-bg); padding: var(--space-md); border-radius: var(--radius-soft); text-align: center; border: 1px solid var(--color-border-subtle);">
                    <div style="height: 70px; display: flex; align-items: center; justify-content: center;">
                      ${V.getLevel2Fragment("2C", 50, "var(--color-dark-espresso)")}
                    </div>
                    <span class="spec-mono" style="display: block; margin-top: 8px;">2C · LOWER WING BASE</span>
                    <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 4px;">40% base · Foundation micro-patterns</p>
                  </div>

                  <div style="background: var(--color-digital-bg); padding: var(--space-md); border-radius: var(--radius-soft); text-align: center; border: 1px solid var(--color-border-subtle);">
                    <div style="height: 70px; display: flex; align-items: center; justify-content: center;">
                      ${V.getLevel2Fragment("2D", 50, "var(--color-dark-espresso)")}
                    </div>
                    <span class="spec-mono" style="display: block; margin-top: 8px;">2D · SYMMETRY AXIS</span>
                    <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 4px;">Central equilibrium divider</p>
                  </div>

                  <div style="background: var(--color-digital-bg); padding: var(--space-md); border-radius: var(--radius-soft); text-align: center; border: 1px solid var(--color-border-subtle);">
                    <div style="height: 70px; display: flex; align-items: center; justify-content: center;">
                      ${V.getLevel2Fragment("2E", 50, "var(--color-dark-espresso)")}
                    </div>
                    <span class="spec-mono" style="display: block; margin-top: 8px;">2E · VERTEX APEX</span>
                    <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 4px;">Upper 30% · Micro-marker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 05 · THE PALETTE (Color as Physical Material)
    // ══════════════════════════════════════════════════
    renderChapter05: function() {
      return `
        <section id="chapter-05" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 05</span>
              <div class="section-title-wrap">
                <h2>The Palette as Physical Material</h2>
                <p class="section-subtitle">“Colors are not arbitrary digital hex values. They are physical paper stocks, vegetable inks, and textiles.”</p>
              </div>
            </div>

            <!-- Chapter 05 Triptych: 3 Physical Substrate Studies -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../material_palette_quad.jpg" alt="Quad-Material Curation Still Life">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / MATERIAL HARMONY</span>
                  <div class="triptych-title">The Four Elements</div>
                  <div class="triptych-desc">Iranian green onyx slab, deckled sage paper, burnt sienna satin ribbon, and solid 18k gold ingot on dark oak.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../sage_paper_macro.jpg" alt="Mineral Sage Deckled Paper Macro">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / FIBER TOOTH</span>
                  <div class="triptych-title">Mineral Sage Paper Stock</div>
                  <div class="triptych-desc">150gsm uncoated cotton paper with deckled raw edge and blind-debossed butterfly hallmark on charred wood.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../sienna_satin_macro.jpg" alt="Burnt Sienna Double-Face Satin Ribbon Macro">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / SILK SATIN WEAVE</span>
                  <div class="triptych-title">Burnt Sienna Satin Ribbon</div>
                  <div class="triptych-desc">25mm double-face satin ribbon in burnt sienna looping across warm ivory microsuede, catching directional studio light.</div>
                </div>
              </div>
            </div>

            <!-- The 60/30/10 Ratio Architectural Swatches with Physical Material Textures -->
            <div style="display: grid; grid-template-columns: 2fr 1.2fr 0.8fr; gap: var(--space-md); margin-bottom: var(--space-xl);">
              
              <!-- 60% Mineral Sage (Crumpled Uncoated Cotton Paper Texture) -->
              <div style="background: var(--color-sage); color: var(--color-dark-espresso); border-radius: var(--radius-soft); padding: var(--space-xl); min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-lifted); position: relative; overflow: hidden; background-image: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 100%);">
                <div>
                  <span class="spec-mono" style="color: rgba(58,35,10,0.7);">PHYSICAL STOCK: 150GSM CRUMPLED COTTON WRAP · 60% VOLUME</span>
                  <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin-top: 4px;">Mineral Sage</h3>
                  <p style="font-size: 0.88rem; max-width: 320px; line-height: 1.5; margin-top: 6px;">The exterior wrap of rigid packaging, luxury shopping bags, and brand environment architecture.</p>
                </div>
                <div class="spec-mono" style="font-size: 0.7rem; border-top: 1px solid rgba(58,35,10,0.2); padding-top: 8px;">
                  HEX: #8DA28C · CMYK: 45, 15, 35, 0 · PANTONE 5635 C
                </div>
              </div>

              <!-- 30% Warm Ivory (Tactile Velvet Microsuede) -->
              <div style="background: var(--color-warm-ivory); color: var(--color-dark-espresso); border-radius: var(--radius-soft); padding: var(--space-xl); min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-lifted); position: relative; overflow: hidden; background-image: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 60%);">
                <div>
                  <span class="spec-mono" style="color: var(--color-burnt-sienna);">PHYSICAL STOCK: 300GSM VELVET MICROSUEDE · 30% VOLUME</span>
                  <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin-top: 4px;">Warm Ivory</h3>
                  <p style="font-size: 0.88rem; line-height: 1.5; margin-top: 6px;">Interior presentation pads, authentic certificates, unboxing cushion paper.</p>
                </div>
                <div class="spec-mono" style="font-size: 0.7rem; border-top: 1px solid rgba(58,35,10,0.2); padding-top: 8px;">
                  HEX: #EEE9C1 · CMYK: 10, 5, 25, 0 · PANTONE 7499 C
                </div>
              </div>

              <!-- 10% Burnt Sienna (Lustrous Double-Face Satin Ribbon) -->
              <div style="background: var(--color-burnt-sienna); color: var(--color-warm-ivory); border-radius: var(--radius-soft); padding: var(--space-xl); min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-lifted); position: relative; overflow: hidden; background-image: linear-gradient(115deg, rgba(255,255,255,0.25) 0%, transparent 35%, rgba(0,0,0,0.25) 100%);">
                <div>
                  <span class="spec-mono" style="color: var(--color-warm-champagne);">PHYSICAL STOCK: 25MM SATIN RIBBON · 10% MAX</span>
                  <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin-top: 4px;">Burnt Sienna</h3>
                  <p style="font-size: 0.88rem; line-height: 1.5; margin-top: 6px;">Double-faced satin ribbons, drawer pull tabs, single edition seals.</p>
                </div>
                <div class="spec-mono" style="font-size: 0.7rem; border-top: 1px solid rgba(238,233,193,0.3); padding-top: 8px;">
                  HEX: #A4530C · CMYK: 0, 65, 85, 25 · PANTONE 1545 C
                </div>
              </div>
            </div>

            <!-- Mathematical Contrast Validation Matrix -->
            <div style="background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-lg);">
              <span class="spec-mono">WCAG 2.1 MATHEMATICAL ACCESSIBILITY VALIDATION</span>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-md); margin-top: var(--space-md);">
                <div style="border-left: 2px solid #2E7D32; padding-left: 10px;">
                  <div style="font-size: 0.85rem; font-weight: 600;">Espresso on Ivory</div>
                  <div class="spec-mono" style="color: #2E7D32; margin-top: 2px;">12.6:1 · PASSES AAA STRICT</div>
                  <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 2px;">Used for all long-form editorial & specifications.</p>
                </div>
                <div style="border-left: 2px solid #2E7D32; padding-left: 10px;">
                  <div style="font-size: 0.85rem; font-weight: 600;">Ivory on Espresso</div>
                  <div class="spec-mono" style="color: #2E7D32; margin-top: 2px;">12.6:1 · PASSES AAA STRICT</div>
                  <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 2px;">Used for Nocturne mode and luxury packaging.</p>
                </div>
                <div style="border-left: 2px solid #1565C0; padding-left: 10px;">
                  <div style="font-size: 0.85rem; font-weight: 600;">Burnt Sienna on Ivory</div>
                  <div class="spec-mono" style="color: #1565C0; margin-top: 2px;">4.8:1 · PASSES AA LARGE</div>
                  <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 2px;">Used for chapter titles, badges, and accents.</p>
                </div>
                <div style="border-left: 2px solid #D84315; padding-left: 10px;">
                  <div style="font-size: 0.85rem; font-weight: 600;">Ivory on Sage</div>
                  <div class="spec-mono" style="color: #D84315; margin-top: 2px;">1.8:1 · RESTRICTED</div>
                  <p style="font-size: 0.75rem; color: var(--color-digital-muted); margin-top: 2px;">Strictly forbidden for body text. Tonal marks only.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 06 · THE LETTER (Typography & Persian Heritage)
    // ══════════════════════════════════════════════════
    renderChapter06: function() {
      return `
        <section id="chapter-06" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 06</span>
              <div class="section-title-wrap">
                <h2>The Letter & Bilingual Heritage</h2>
                <p class="section-subtitle">“Where European high-couture serifs meet the calligraphic mastery of Persian goldsmithing.”</p>
              </div>
            </div>

            <!-- Chapter 06 Triptych: 3 Typographic Manifestations -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../cormorant_type_macro.jpg" alt="Cormorant Lead Movable Type Composing Stick">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / MOVABLE LEAD TYPE</span>
                  <div class="triptych-title">Lead Typeset Composing Stick</div>
                  <div class="triptych-desc">Vintage lead alloy metal type blocks spelling ZARAVI set in an artisan brass composing stick with inky patina.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../persian_calligraphy_gold.jpg" alt="18k Gold Leaf Persian Calligraphy of Zaravi">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / PERSIAN GOLD CALLIGRAPHY</span>
                  <div class="triptych-title">Gold Leaf Manuscript</div>
                  <div class="triptych-desc">Hand-wrought 18k gold leaf calligraphy of زرآوی (Zaravi) inscribed with reed pen on deckled unbleached mulberry paper.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wordmark_letterpress.jpg" alt="Letterpress Typographic Specimen">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / LETTERPRESS RELIEF</span>
                  <div class="triptych-title">Cotton Paper Deboss</div>
                  <div class="triptych-desc">Razor-fine horizontal serifs and 33% low crossbar pressed with 0.3mm depth into heavy cotton rag paper.</div>
                </div>
              </div>
            </div>

            <!-- Monumental 'Z' Wireframe Anatomy -->
            <div style="background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-xl); margin-bottom: var(--space-xl); text-align: center; position: relative; overflow: hidden;">
              <span class="spec-mono" style="color: var(--color-burnt-sienna);">MONUMENTAL GLYPH ARCHITECTURE · THE SERIF ANATOMY OF 'Z'</span>
              <div style="position: relative; height: 320px; display: flex; justify-content: center; align-items: center;">
                <div style="font-family: var(--font-display); font-size: clamp(12rem, 24vw, 20rem); line-height: 1; color: var(--color-dark-espresso); opacity: 0.95; user-select: none;">
                  Z
                </div>
                <!-- Overlay dimension guides -->
                <div style="position: absolute; top: 16%; left: 50%; transform: translateX(-50%); width: 260px; border-top: 1px dashed var(--color-burnt-sienna); display: flex; justify-content: space-between;">
                  <span class="spec-mono" style="font-size: 0.55rem; color: var(--color-burnt-sienna);">RAZOR BRACKET</span>
                  <span class="spec-mono" style="font-size: 0.55rem; color: var(--color-burnt-sienna);">WING ARM: 1.0 CAP</span>
                </div>
                <div style="position: absolute; bottom: 16%; left: 50%; transform: translateX(-50%); width: 260px; border-bottom: 1px dashed var(--color-burnt-sienna); display: flex; justify-content: space-between;">
                  <span class="spec-mono" style="font-size: 0.55rem; color: var(--color-burnt-sienna);">PARALLEL BASELINE</span>
                  <span class="spec-mono" style="font-size: 0.55rem; color: var(--color-burnt-sienna);">DIAGONAL TENSION: 42°</span>
                </div>
              </div>
            </div>

            <!-- Side-by-Side Latin and Persian Typographic Master Spread -->
            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-xl); background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-xl); margin-bottom: var(--space-xl);">
              
              <!-- Latin Column -->
              <div>
                <span class="spec-mono" style="color: var(--color-burnt-sienna);">LATIN EDITORIAL SPECIMEN · CORMORANT GARAMOND</span>
                <h3 style="font-family: var(--font-display); font-size: clamp(2.4rem, 4vw, 3.8rem); line-height: 1.1; margin: var(--space-sm) 0; color: var(--color-dark-espresso);">
                  Metamorphosis in solid eighteen-karat gold.
                </h3>
                <p style="font-family: var(--font-body); font-size: 1rem; line-height: 1.8; color: var(--color-digital-muted);">
                  The primary Latin display typeface is Cormorant Garamond, characterized by its sharp horizontal serifs, exquisite contrast, and razor-fine hairlines that reflect the tension of gossamer butterfly wings.
                </p>
                <div style="margin-top: var(--space-md); font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-burnt-sienna);">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                  abcdefghijklmnopqrstuvwxyz · 0123456789
                </div>
              </div>

              <!-- Persian Column -->
              <div style="border-left: 1px solid var(--color-border-subtle); padding-left: var(--space-xl); direction: rtl; text-align: right;">
                <span class="spec-mono" style="color: var(--color-burnt-sienna); display: block; direction: ltr; text-align: right;">PERSIAN HERITAGE SPECIMEN · VAZIRMATN</span>
                <h3 style="font-family: var(--font-persian); font-size: clamp(2.4rem, 4vw, 3.8rem); line-height: 1.3; margin: var(--space-sm) 0; color: var(--color-dark-espresso); font-weight: 300;">
                  دگرگونی، در قالب طلای هجده عیار زرآوی
                </h3>
                <p style="font-family: var(--font-persian); font-size: 1rem; line-height: 2; color: var(--color-digital-muted);">
                  واژه «زرآوی» برگرفته از دو ریشه کهن پارسی است: «زر» به معنای طلای ناب و فلز جاودان، و «آوی» به معنای وابسته به آسمان، پرواز و بال‌ها. ما طلایی را خلق می‌کنیم که پرواز را بر پیکر می‌نشاند.
                </p>
                <div style="margin-top: var(--space-md); font-family: var(--font-persian); font-size: 0.95rem; color: var(--color-burnt-sienna);">
                  ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی · ۰۱۲۳۴۵۶۷۸۹
                </div>
              </div>
            </div>

            <!-- Tabular Monospace Specification Stack -->
            <div style="background: rgba(58, 35, 10, 0.04); border-radius: var(--radius-soft); padding: var(--space-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-sm);">
              <span class="spec-mono">MICRO-SPECIFICATION FONT : SPACE MONO (0.625REM · 0.22EM TRACKING)</span>
              <span class="spec-mono">ASSAY HALLMARK · 18K (750‰) AU · REG #ZRV-2026</span>
              <span class="spec-mono">UI CONTROLS : INTER 500/600</span>
            </div>
          </div>
        </section>
      `;
    }
  };
})();
