/**
 * ZARAVI JEWELRY — DIGITAL, CAMPAIGNS & MASTER WALL (CHAPTERS 11 - 12)
 * Art Direction: Dark Romantic / Editorial / Couture (Territory B)
 * Chapters: 11 The Campaign · 12 The Wall & Final Creative Test
 */

window.ZARAVI_DIGITAL = (function() {
  const V = window.ZARAVI_VECTORS;

  return {
    // ══════════════════════════════════════════════════
    // CHAPTER 11 · THE CAMPAIGN (Photography, Advertising & Digital)
    // ══════════════════════════════════════════════════
    renderChapter11: function() {
      return `
        <section id="chapter-11" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 11</span>
              <div class="section-title-wrap">
                <h2>The Campaign · Advertising, Digital & Social</h2>
                <p class="section-subtitle">“Every campaign touchpoint exists in a unified chiaroscuro atmosphere — quiet, arresting, authoritative.”</p>
              </div>
            </div>

            <!-- Chapter 11 Triptych: 3 Modalities of Campaign Delivery -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="Vogue Haute Joaillerie Editorial">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / PRINT EDITORIAL</span>
                  <div class="triptych-title">Vogue DPS Spread</div>
                  <div class="triptych-desc">High-couture chiaroscuro portraiture pairing the gold torque with dark silk and quiet typographic manifesto.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-29052d0a-4f0c-4f53-8ca3-147018ca609d.png" alt="Digital Storefront Presentation">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / DIGITAL COMMERCE</span>
                  <div class="triptych-title">Atelier Storefront</div>
                  <div class="triptych-desc">E-commerce interface formatted as an architectural publication with asymmetric splits and quiet acquisition flows.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wing_facet_shadow.jpg" alt="Architectural Shadow Campaign Plate">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / OUTDOOR BILLBOARD</span>
                  <div class="triptych-title">Architectural Shadow</div>
                  <div class="triptych-desc">Extreme negative space and razor-sharp 15° geometric shadow for monumental airport terminal billboards.</div>
                </div>
              </div>
            </div>

            <!-- Concept Explorer for Campaign: 3 Cohesive Campaign Directions -->
            <div class="concept-explorer" style="margin-bottom: var(--space-xl);">
              <div class="concept-tabs-nav">
                <button class="concept-tab-btn active" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-camp-vogue')">
                  <span>Campaign I</span>
                  <span class="concept-badge">Emergence (Vogue DPS Spread)</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-camp-social')">
                  <span>Campaign II</span>
                  <span class="concept-badge">The Specimen (3-2-1 Social)</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-camp-store')">
                  <span>Campaign III</span>
                  <span class="concept-badge">Evidence in Gold (Storefront & Email)</span>
                </button>
              </div>

              <!-- Campaign I: Emergence (Vogue France Double-Page Spread) -->
              <div id="tab-camp-vogue" class="concept-panel active">
                <div class="vogue-dps-spread">
                  <div class="vogue-page-left">
                    <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="Vogue Campaign Photography" style="object-position: left top;">
                  </div>
                  <div class="vogue-page-right">
                    <div>
                      <div class="spec-mono" style="color: var(--color-gold-foil); margin-bottom: var(--space-sm);">
                        PARIS · VOGUE FRANCE · DOUBLE-PAGE SPREAD
                      </div>
                      <h3 class="vogue-headline">
                        Transformation,<br>in solid gold.
                      </h3>
                      <p class="vogue-manifesto-para">
                        “The butterfly is not decoration. It is doctrine. Every piece carries the biological truth of emergence: that beauty requires the patience of the dark.”
                      </p>
                    </div>

                    <div style="border-top: 1px solid rgba(238, 233, 193, 0.15); padding-top: var(--space-md); display: flex; justify-content: space-between; align-items: flex-end;">
                      <div>
                        <div style="font-family: var(--font-display); font-size: 1.8rem; letter-spacing: var(--tracking-wordmark); color: var(--color-warm-ivory);">ZARAVI</div>
                        <div class="spec-mono" style="color: var(--color-stone); font-size: 0.6rem;">HAUTE JOAILLERIE · MAISON FONDÉE EN 2026</div>
                      </div>
                      <div class="spec-mono" style="color: var(--color-stone); text-align: right; font-size: 0.6rem;">
                        SERIES I: TENSION & METAMORPHOSIS<br>WWW.ZARAVI.COM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Campaign II: The Specimen (Social Media 3-2-1 Grid) -->
              <div id="tab-camp-social" class="concept-panel">
                <div style="max-width: 680px; margin: 0 auto; background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-lg);">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-md); border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-sm);">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--color-dark-espresso); display: flex; align-items: center; justify-content: center; color: var(--color-warm-ivory);">
                        ${V.getZMonogram({ size: 24, strokeWidth: 1.5, fill: "var(--color-gold-foil)" })}
                      </div>
                      <div>
                        <div style="font-family: var(--font-ui); font-size: 0.85rem; font-weight: 600;">@zaravijewelry</div>
                        <div style="font-size: 0.75rem; color: var(--color-digital-muted);">Maison ZARAVI · Haute Joaillerie</div>
                      </div>
                    </div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">3-2-1 RHYTHM ARCHITECTURE</span>
                  </div>

                  <!-- 3x3 Instagram Feed with Rich Conceptual Mix -->
                  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
                    <!-- Row 1: Campaign / Editorial / Detail -->
                    <div style="aspect-ratio: 1/1; overflow: hidden; position: relative;">
                      <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="Social Post 1" style="width: 100%; height: 100%; object-fit: cover; object-position: left top;">
                    </div>
                    <div style="aspect-ratio: 1/1; background: var(--color-dark-espresso); color: var(--color-warm-ivory); display: flex; align-items: center; justify-content: center; padding: 12px; text-align: center;">
                      <span style="font-family: var(--font-editorial); font-size: 0.95rem; font-style: italic;">“Transformation is not an event, but a practice.”</span>
                    </div>
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../ref-2-gold-jewelry.jpg" alt="Social Post 3" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>

                    <!-- Row 2: Product / Journal / Macro -->
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../wing_unfurling_macro.jpg" alt="Social Post 4" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../philosophy_silk.jpg" alt="Social Post 5" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../wing_facet_shadow.jpg" alt="Social Post 6" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>

                    <!-- Row 3: Packaging / Retail / Hallmark -->
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../ref-3-packaging-v1.jpg" alt="Social Post 7" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../material_palette_quad.jpg" alt="Social Post 8" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="aspect-ratio: 1/1; overflow: hidden;">
                      <img src="../hallmark_ring_macro.jpg" alt="Social Post 9" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Campaign III: Evidence in Gold (Storefront & Transactional Email Ceremony) -->
              <div id="tab-camp-store" class="concept-panel">
                <div style="background: var(--color-digital-bg); border: 1px solid var(--color-border-medium); border-radius: var(--radius-soft); overflow: hidden; box-shadow: var(--shadow-deep); margin-bottom: var(--space-xl);">
                  <!-- Browser Bar -->
                  <div style="background: rgba(58,35,10,0.06); padding: 12px 18px; border-bottom: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; gap: 6px;">
                      <div style="width: 10px; height: 10px; border-radius: 50%; background: #FF5F56;"></div>
                      <div style="width: 10px; height: 10px; border-radius: 50%; background: #FFBD2E;"></div>
                      <div style="width: 10px; height: 10px; border-radius: 50%; background: #27C93F;"></div>
                    </div>
                    <div class="spec-mono" style="background: rgba(255,255,255,0.7); padding: 4px 20px; border-radius: 12px; font-size: 0.65rem;">
                      🔒 https://www.zaravi.com/collections/series-1-tension
                    </div>
                    <div class="spec-mono" style="font-size: 0.65rem;">PARIS 04:18 CET</div>
                  </div>

                  <!-- Storefront Header & Hero -->
                  <div style="padding: var(--space-xl);">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                      <div style="font-family: var(--font-display); font-size: 1.6rem; letter-spacing: var(--tracking-wordmark); font-weight: 500;">ZARAVI</div>
                      <div style="display: flex; gap: var(--space-md); font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: var(--tracking-caps); text-transform: uppercase;">
                        <span style="color: var(--color-burnt-sienna); font-weight: 600;">Collections</span>
                        <span>The Atelier</span>
                        <span>Journal</span>
                        <span>Archive</span>
                      </div>
                      <div class="spec-mono">BAG (01)</div>
                    </div>

                    <div class="layout-split-editorial">
                      <div style="border-radius: var(--radius-soft); overflow: hidden; max-height: 360px;">
                        <img src="../generated-image-29052d0a-4f0c-4f53-8ca3-147018ca609d.png" alt="Digital Storefront Hero" style="width: 100%; height: 100%; object-fit: cover; object-position: left top;">
                      </div>
                      <div>
                        <span class="spec-mono" style="color: var(--color-burnt-sienna);">SERIES I · SPRING 2026</span>
                        <h3 style="font-family: var(--font-display); font-size: 2.6rem; line-height: 1.1; margin: 6px 0 12px;">
                          Bilateral Symmetry & Gold
                        </h3>
                        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted); margin-bottom: var(--space-lg);">
                          Sculpted from certified 18k Fairmined yellow gold. Designed with an asymmetric wing curve that frames the facial contours.
                        </p>
                        <button style="padding: 12px 28px; background: var(--color-dark-espresso); color: var(--color-warm-ivory); border: none; font-family: var(--font-ui); font-size: 0.72rem; font-weight: 600; letter-spacing: var(--tracking-caps); text-transform: uppercase; border-radius: var(--radius-soft); cursor: pointer;">
                          Acquire Piece · $1,680 USD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Transactional Luxury Email Ceremony Preview -->
                <div style="background: #FAF9F6; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); max-width: 560px; margin: 0 auto; padding: var(--space-xl); box-shadow: var(--shadow-lifted);">
                  <div style="text-align: center; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-md); margin-bottom: var(--space-md);">
                    <div style="width: 36px; margin: 0 auto 6px;">
                      ${V.getLevel1Emblem({ size: 36, mode: "dark" })}
                    </div>
                    <div style="font-family: var(--font-display); font-size: 1.3rem; letter-spacing: var(--tracking-wordmark); color: var(--color-dark-espresso);">ZARAVI</div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna); font-size: 0.58rem;">ACQUISITION CONFIRMATION · CEREMONY #ZRV-8942</span>
                  </div>
                  <div style="font-family: var(--font-editorial); font-size: 1.15rem; font-style: italic; color: var(--color-dark-espresso); text-align: center; margin-bottom: var(--space-md);">
                    “Your piece has entered the atelier bench.”
                  </div>
                  <p style="font-size: 0.85rem; color: var(--color-digital-muted); line-height: 1.6; text-align: center; margin-bottom: var(--space-md);">
                    Goldsmith Bench #04 has commenced preparation of your Metamorphosis Signet Band in 18k Fairmined gold. Your creation will be hand-sealed with natural chocolate beeswax prior to private transit.
                  </p>
                  <div style="background: var(--color-digital-paper); padding: 12px; border-radius: var(--radius-soft); font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-digital-text); border: 1px dashed var(--color-border-medium);">
                    CREATION: METAMORPHOSIS SIGNET (AU 750‰)<br>
                    ESTIMATED ATELIER DISPATCH: 05 SEPTEMBER 2026<br>
                    COURIER: SECURED PRIVATE ARMORED VAULT TRANSIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 12 · THE WALL (Master Mosaic & Final Creative Test)
    // ══════════════════════════════════════════════════
    renderChapter12: function() {
      return `
        <section id="chapter-12" class="brand-section" style="background: #110B06; color: var(--color-warm-ivory); padding: var(--space-hero) var(--space-lg);">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num" style="color: var(--color-gold-foil); border-color: var(--color-gold-foil);">CHAPTER 12</span>
              <div class="section-title-wrap">
                <h2 style="color: var(--color-warm-ivory);">The Master Application Wall</h2>
                <p class="section-subtitle" style="color: var(--color-stone);">
                  “The ultimate creative test: If the ZARAVI logo were removed from every image, could you still identify the brand?”
                </p>
              </div>
            </div>

            <!-- The Final Brand Test Verification Callout -->
            <div style="background: rgba(238, 233, 193, 0.05); border: 1px solid rgba(238, 233, 193, 0.15); border-radius: var(--radius-soft); padding: var(--space-xl); margin-bottom: var(--space-xl); display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-xl); align-items: center;">
              <div>
                <span class="spec-mono" style="color: var(--color-gold-foil);">THE ACID TEST OF LUXURY IDENTITY</span>
                <h3 style="font-family: var(--font-display); font-size: 2rem; color: var(--color-warm-ivory); margin: 6px 0 12px; line-height: 1.2;">
                  Identifiable Without the Name.
                </h3>
                <p style="font-size: 0.95rem; line-height: 1.8; color: var(--color-stone);">
                  A generic brand disappears when its wordmark is taken away. ZARAVI persists through the unmistakable collision of Mineral Sage paper, hand-stitched wing venation, raw basalt stone, 15° architectural facets, 18k brushed gold, and the quiet dignity of chiaroscuro light.
                </p>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-sm); font-family: var(--font-mono); font-size: 0.7rem;">
                <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 4px; border-left: 2px solid var(--color-sage);">
                  <strong style="color: var(--color-warm-ivory); display: block;">60/30/10 CHROMATIC RATIO</strong>
                  <span style="color: var(--color-stone);">Sage · Ivory · Sienna · Espresso</span>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 4px; border-left: 2px solid var(--color-burnt-sienna);">
                  <strong style="color: var(--color-warm-ivory); display: block;">15° FACET NOTCHES</strong>
                  <span style="color: var(--color-stone);">Architectural wing geometry</span>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 4px; border-left: 2px solid var(--color-gold-foil);">
                  <strong style="color: var(--color-warm-ivory); display: block;">BENCH REALITY</strong>
                  <span style="color: var(--color-stone);">Fairmined Au 750‰ solid gold</span>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 4px; border-left: 2px solid var(--color-stone);">
                  <strong style="color: var(--color-warm-ivory); display: block;">UNBOXING CEREMONY</strong>
                  <span style="color: var(--color-stone);">120° Hinge & chocolate wax seal</span>
                </div>
              </div>
            </div>

            <!-- 12-Column Master Photographic Masonry with Complete Visual Corpus -->
            <div class="brand-wall-mosaic">
              <!-- Item 0: Hero Emergence Sculpture (Span 12) -->
              <div class="wall-card span-12" style="height: 520px;">
                <img src="../zaravi_emergence_sculpture.jpg" alt="Master Emergence Sculpture">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">THE MASTERWORK · EMERGENCE</span>
                  <div style="font-family: var(--font-display); font-size: 1.5rem;">Solid 18K Wing Forged from Raw Green Onyx & Basalt Cleft</div>
                </div>
              </div>

              <!-- Item 1: Campaign Hero (Span 8) -->
              <div class="wall-card span-8" style="height: 480px;">
                <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="Campaign Hero" style="object-position: left top;">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">CAMPAIGN HERO</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">The Emergence Suite Worn on Skin</div>
                </div>
              </div>

              <!-- Item 2: Origin Textile Wing (Span 4) -->
              <div class="wall-card span-4" style="height: 480px;">
                <img src="../ref-1-textile-wing.jpg" alt="Textile Wing Reference">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">STRUCTURAL VENATION</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Silk & Gold-Thread Couching</div>
                </div>
              </div>

              <!-- Item 3: Letterpress Deboss (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../wordmark_letterpress.jpg" alt="Letterpress Wordmark Deboss">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">TYPOGRAPHIC RELIEF</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">0.3mm Cotton Paper Indentation</div>
                </div>
              </div>

              <!-- Item 4: Hallmark Ring Macro (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../hallmark_ring_macro.jpg" alt="18k Hallmark Inner Shank">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">LEGAL ASSAY HALLMARK</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">ZARAVI 18K AU 750 Fiber Laser</div>
                </div>
              </div>

              <!-- Item 5: Mark Stone Carving (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../mark_stone_carving.jpg" alt="Stone Monogram Carving">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">MONUMENTAL INSCRIPTION</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">45° V-Cut Chiseled Monogram Z</div>
                </div>
              </div>

              <!-- Item 6: Wing Facet Shadow (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../wing_facet_shadow.jpg" alt="Faceted Gold Emblem Shadow">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">GEOMETRIC TENSION</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">15° Shadow Cast on Archival Stock</div>
                </div>
              </div>

              <!-- Item 7: Wing Gold Specimen (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../wing_gold_specimen.jpg" alt="Gold Butterfly Museum Vitrine">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">ENTOMOLOGICAL SPECIMEN</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Filigree Butterfly in Antique Brass Cloche</div>
                </div>
              </div>

              <!-- Item 8: Wing Water Reflection (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../wing_water_reflection.jpg" alt="Gold Wing Liquid Reflection">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">LIQUID METAMORPHOSIS</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Gold Wing Hovering Over Mineral Pool</div>
                </div>
              </div>

              <!-- Item 9: Quad Material Palette (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../material_palette_quad.jpg" alt="Quad Material Curation">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">MATERIAL PALETTE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Green Onyx, Sage Paper, Sienna Ribbon, 18K Gold</div>
                </div>
              </div>

              <!-- Item 10: Sage Paper Macro (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../sage_paper_macro.jpg" alt="Deckled Sage Paper Macro">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">TACTILE COTTON SUBSTRATE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">150gsm Deckled Paper with Butterfly Stamp</div>
                </div>
              </div>

              <!-- Item 11: Chrysalis Chamber Monolith (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../chrysalis_chamber.jpg" alt="Chrysalis Sanctuary Chamber">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">RETAIL SANCTUARY</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Basalt Monolith with Molten Gold Fissure</div>
                </div>
              </div>

              <!-- Item 12: Philosophy Silk (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../philosophy_silk.jpg" alt="Sage Silk Twill on Charred Wood">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">ORGANIC DRAPE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Mineral Sage Silk Twill with 18K Gold Filament</div>
                </div>
              </div>

              <!-- Item 13: Sienna Satin Macro (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../sienna_satin_macro.jpg" alt="Burnt Sienna Satin Ribbon Macro">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">TEXTILE WEAVE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Burnt Sienna Satin on Warm Ivory Velvet</div>
                </div>
              </div>

              <!-- Item 14: Persian Calligraphy Gold (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../persian_calligraphy_gold.jpg" alt="18k Gold Leaf Persian Calligraphy of Zaravi">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">PERSIAN HERITAGE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">18K Gold Leaf Calligraphy of زرآوی</div>
                </div>
              </div>

              <!-- Item 15: Cormorant Type Macro (Span 4) -->
              <div class="wall-card span-4" style="height: 380px;">
                <img src="../cormorant_type_macro.jpg" alt="Vintage Lead Type Composing Stick">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">MOVABLE LEAD TYPE</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">ZARAVI Lead Type in Brass Composing Stick</div>
                </div>
              </div>

              <!-- Item 16: Teardrop Pendant Silk (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../teardrop_pendant_silk.jpg" alt="Chrysalis Teardrop Pendant on Pleated Silk">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">HIGH ATELIER CABOCHON</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Chrysoprase & 18K Gold Wing on Pleated Silk</div>
                </div>
              </div>

              <!-- Item 17: Wax Seal Pour (Span 6) -->
              <div class="wall-card span-6" style="height: 400px;">
                <img src="../wax_seal_pour.jpg" alt="Artisan Pouring Molten Beeswax Seal">
                <div class="wall-card-content">
                  <span class="spec-mono" style="color: var(--color-gold-foil);">PACKAGING CEREMONY</span>
                  <div style="font-family: var(--font-display); font-size: 1.3rem;">Molten Chocolate Beeswax & Brass Seal Die</div>
                </div>
              </div>
            </div>

            <!-- Closing Maison Signature -->
            <div style="text-align: center; margin-top: var(--space-hero); padding-top: var(--space-xl); border-top: 1px solid rgba(238, 233, 193, 0.1);">
              <div style="width: 60px; margin: 0 auto var(--space-sm);">
                ${V.getLevel1Emblem({ size: 60, mode: "gold" })}
              </div>
              <div style="font-family: var(--font-display); font-size: 2.2rem; letter-spacing: var(--tracking-wordmark); color: var(--color-warm-ivory);">
                ZARAVI
              </div>
              <div class="spec-mono" style="color: var(--color-burnt-sienna); margin-top: 4px;">
                HAUTE JOAILLERIE · MAISON FONDÉE EN 2026 · ALL RIGHTS RESERVED
              </div>
            </div>
          </div>
        </section>
      `;
    }
  };
})();
