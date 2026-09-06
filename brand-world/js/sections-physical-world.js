/**
 * ZARAVI JEWELRY — PHYSICAL BRAND WORLD CHAPTERS (07 - 10)
 * Art Direction: Dark Romantic / Editorial / Couture (Territory B)
 * Chapters: 07 The Object · 08 The Ritual · 09 The Archive · 10 The Sanctuary
 */

window.ZARAVI_PHYSICAL = (function() {
  const V = window.ZARAVI_VECTORS;

  // The 11 Canonical Unboxing Stages with distinct visual assets & descriptions
  const unboxingStages = [
    {
      num: "01",
      name: "The Parcel Arrival",
      image: "../ref-3-packaging-v1.jpg",
      crop: "object-position: center top;",
      desc: "The client receives the outer parcel: a matte Mineral Sage E-flute corrugated shipper featuring a blind-embossed 20mm butterfly emblem and discreet address calligraphy. No exterior commercial logos.",
      spec: "1.5mm E-Flute Corrugated · Sage Kraft 250gsm · 0.3mm Blind Deboss"
    },
    {
      num: "02",
      name: "The Tear-Strip Rupture",
      image: "../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png",
      crop: "object-position: right top;",
      desc: "A continuous integrated pull-tab allows clean, blade-free opening with a satisfying mechanical peel, revealing the pristine interior packaging wrapped in protective tissue.",
      spec: "Reinforced Cotton Fiber Tear-Strip · Zero-Plastic Recyclable Closure"
    },
    {
      num: "03",
      name: "The Tissue Reveal",
      image: "../generated-image-0f020212-f9de-4565-97ec-b3e8ba064805.png",
      crop: "object-position: center center;",
      desc: "Parting two overlapping sheets of 18gsm Warm Ivory acid-free tissue paper, printed tone-on-tone with the Pattern 3B facet grid at subtle 5% opacity.",
      spec: "18gsm Acid-Free Cotton Tissue · 500 × 750mm · Tone-on-tone Mineral Ink"
    },
    {
      num: "04",
      name: "The Gift Sleeve Encounter",
      image: "../generated-image-29052d0a-4f0c-4f53-8ca3-147018ca609d.png",
      crop: "object-position: right top;",
      desc: "The heavy gift sleeve emerges, crafted from 300gsm Warm Ivory linen stock wrapped with a centered 30mm Burnt Sienna accent band.",
      spec: "300gsm Linen Textured Stock · 30mm Burnt Sienna Accent Band"
    },
    {
      num: "05",
      name: "The Wax Seal Inspection",
      image: "../wax_seal_pour.jpg",
      crop: "object-position: center center;",
      desc: "Hand contact with the 22mm Dark Chocolate beeswax-resin seal, hand-poured and stamped with the Level 1 butterfly outline and centered with a micro 3mm gold foil butterfly.",
      spec: "Custom Dark Chocolate Beeswax Blend · 22mm Diameter · 3mm Gold Foil Center"
    },
    {
      num: "06",
      name: "The Ribbon Unfurling",
      image: "../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png",
      crop: "object-position: right center;",
      desc: "Untying the 25mm double-face satin ribbon in Burnt Sienna, releasing the friction hold of the sleeve with quiet, tactile ceremony.",
      spec: "25mm Double-Face Satin · Burnt Sienna (PMS 1545 C) · Hand-Knotted Bow"
    },
    {
      num: "07",
      name: "Ecdysis (Sleeve Shedding)",
      image: "../generated-image-c0e94282-9eb4-4685-9536-d82ca1ca62e3.png",
      crop: "object-position: right top;",
      desc: "The Warm Ivory sleeve glides off smoothly, echoing chrysalis ecdysis, to reveal the deep, mysterious Dark Espresso rigid core jewelry box beneath.",
      spec: "0.5mm Lateral Clearance · Friction-fit Glide Tolerances"
    },
    {
      num: "08",
      name: "Tactile Mass & Hand Feel",
      image: "../generated-image-6516b536-9c3e-423f-8fef-53f3785a2be6.png",
      crop: "object-position: left top;",
      desc: "The substantial weight of the 2.5mm recycled greyboard box wrapped in 150gsm soft-touch cotton paper creates an immediate impression of generational permanence.",
      spec: "2.5mm Greyboard · 150gsm Uncoated Soft-Touch Wrap · Total Weight ~140g"
    },
    {
      num: "09",
      name: "Magnetic Release & 120° Hinge",
      image: "../generated-image-6605d34f-54e1-4937-8250-e4f769380363.png",
      crop: "object-position: right top;",
      desc: "Lifting the lid releases the silent 3.0 N Neodymium magnetic catch. The lid glides open past 90° to rest at the signature 120° wing angle, mirroring an unfurling wing.",
      spec: "3.0 N Neodymium N42 Magnet · Countersunk Flush · 120° Hinge Open Stop"
    },
    {
      num: "10",
      name: "The Hidden Lid Epiphany",
      image: "../generated-image-f7f90060-5649-4d71-8e50-8ec0e4a66dee.png",
      crop: "object-position: right top;",
      desc: "Ambient light catches the interior lid ceiling, revealing the hidden 15mm blind-embossed Level 1 butterfly mark discovered only upon complete opening.",
      spec: "15mm Level 1 Emblem · 0.3mm Blind Deboss · Warm Ivory Microsuede"
    },
    {
      num: "11",
      name: "The Adornment Presentation",
      image: "../generated-image-6605d34f-54e1-4937-8250-e4f769380363.png",
      crop: "object-position: left center;",
      desc: "The jewelry rests illuminated upon the Warm Ivory microsuede tray with the embossed facet grid, nestled alongside the Certificate of Authenticity and care documentation.",
      spec: "300gsm Velvet Microsuede · Custom Cut Cushion · Serialized COA Insert"
    }
  ];

  return {
    // ══════════════════════════════════════════════════
    // CHAPTER 07 · THE OBJECT (Jewelry Specimen Spreads)
    // ══════════════════════════════════════════════════
    renderChapter07: function() {
      const pieces = [
        {
          sku: "ZRV-R-001",
          category: "Rings",
          name: "Metamorphosis Signet Band",
          image: "../ref-2-gold-jewelry.jpg",
          desc: "Solid 18k yellow gold signet ring featuring a 15° wing ridge contour and directional hand-brushed satin finish. Marked with laser-engraved ZARAVI 18K hallmark.",
          metal: "18K Fairmined Gold (14.2g)",
          finish: "Directional hand-brushed satin",
          dimensions: "6.4mm band width · 2.1mm profile",
          price: "$1,850 USD"
        },
        {
          sku: "ZRV-B-004",
          category: "Bracelets",
          name: "The Emergence Architectural Cuff",
          image: "../ref-2-gold-jewelry.jpg",
          desc: "Substantial 18k yellow gold open cuff structured around bilateral wing facets. Designed to rest flush against the wrist bone with quiet sculptural presence.",
          metal: "18K Fairmined Gold (42.5g)",
          finish: "Matte velvet satin with polished bevels",
          dimensions: "18mm band height · 58mm internal oval",
          price: "$4,600 USD"
        },
        {
          sku: "ZRV-N-002",
          category: "Necklaces",
          name: "Chrysalis Teardrop Pendant",
          image: "../teardrop_pendant_silk.jpg",
          desc: "Natural Australian chrysoprase cabochon held in a custom 18k gold bezel resembling unfurling wing scales, suspended from a delicate diamond-cut cable chain.",
          metal: "18K Gold & Grade-A Chrysoprase",
          finish: "Micro-polished bezel",
          dimensions: "14 × 10mm stone · 45cm chain",
          price: "$2,450 USD"
        },
        {
          sku: "ZRV-E-003",
          category: "Earrings",
          name: "Bilateral Wing-Drop Huggies",
          image: "../generated-image-29052d0a-4f0c-4f53-8ca3-147018ca609d.png",
          desc: "Sculptural huggie hoops carrying asymmetrical wing curves. Left and right earrings are mirrored bilateral twins framing the jawline.",
          metal: "18K Yellow Gold (8.6g)",
          finish: "Brushed exterior with mirror interior",
          dimensions: "16mm outer diameter · 4mm thickness",
          price: "$1,680 USD"
        },
        {
          sku: "ZRV-N-005",
          category: "Statement Pieces",
          name: "The Wing Specimen Collar",
          image: "../generated-image-0f020212-f9de-4565-97ec-b3e8ba064805.png",
          desc: "Masterwork rigid gold torque choker designed to trace the collarbone. Hinged seamlessly at the back with a hidden butterfly clasp mechanism.",
          metal: "18K Yellow Gold (68.0g)",
          finish: "Continuous brushed contour",
          dimensions: "125mm internal diameter · 5mm width",
          price: "$7,200 USD"
        },
        {
          sku: "ZRV-P-006",
          category: "Pendants",
          name: "Symmetry Axis Medallion",
          image: "../generated-image-6516b536-9c3e-423f-8fef-53f3785a2be6.png",
          desc: "Circular gold coin medal with intaglio wing veins radiating from a central vertical slit. Reversible with blind brand hallmark on reverse.",
          metal: "18K Gold & 0.04ct Diamond",
          finish: "Antiqued satin wash",
          dimensions: "18mm diameter · 50cm chain",
          price: "$2,150 USD"
        }
      ];

      return `
        <section id="chapter-07" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 07</span>
              <div class="section-title-wrap">
                <h2>The Object · Jewelry Atelier Vitrine</h2>
                <p class="section-subtitle">“Sculptural, architectural, tactile. Wing geometry expressed through facets, ridges, and tension rather than literal insect illustrations.”</p>
              </div>
            </div>

            <!-- Chapter 07 Triptych: 3 Visual Philosophies of Jewelry Presentation -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../ref-2-gold-jewelry.jpg" alt="18k Gold Cuff on Volcanic Basalt">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / BENCH SPECIMEN</span>
                  <div class="triptych-title">Raw Basalt Contrast</div>
                  <div class="triptych-desc">The 18k solid gold cuff and signet band photographed on porous black volcanic stone under single grazing light.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="ZARAVI Jewelry Worn on Skin">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / HUMAN DIALOGUE</span>
                  <div class="triptych-title">The Adorned Body</div>
                  <div class="triptych-desc">Sculptural torques and bracelets in physical contact with skin, illuminated by soft north-window chiaroscuro.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../teardrop_pendant_silk.jpg" alt="Chrysalis Teardrop Pendant on Pleated Silk">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / CHRYSALIS CABOCHON</span>
                  <div class="triptych-title">Green Chrysoprase & Gold</div>
                  <div class="triptych-desc">Translucent natural green chrysoprase stone in wing-scale gold bezel, resting on pleated dark espresso silk.</div>
                </div>
              </div>
            </div>

            <!-- Concept Explorer: Specimen vs Worn -->
            <div class="concept-explorer" style="margin-bottom: var(--space-xl);">
              <div class="concept-tabs-nav">
                <button class="concept-tab-btn active" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-art-specimen')">
                  <span>Direction A</span>
                  <span class="concept-badge">The Specimen (Volcanic Basalt)</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-art-worn')">
                  <span>Direction B</span>
                  <span class="concept-badge">The Worn (Skin & Natural Chiaroscuro)</span>
                </button>
              </div>

              <div id="tab-art-specimen" class="concept-panel active">
                <div class="layout-split-editorial">
                  <div style="border-radius: var(--radius-soft); overflow: hidden; max-height: 380px;">
                    <img src="../ref-2-gold-jewelry.jpg" alt="ZARAVI Gold Cuff on Basalt Stone" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">PHOTOGRAPHY FAMILY A · THE BENCH SPECIMEN</span>
                    <h3 style="font-family: var(--font-display); font-size: 2rem; margin: var(--space-xs) 0;">
                      Macro Precision on Raw Basalt
                    </h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted);">
                      Jewelry captured as pure sculptural artifacts resting upon porous volcanic stone. 90mm macro lens, f/11 aperture for deep depth of field, directional single-source grazing light revealing the microscopic hand-brushing of 18k solid gold.
                    </p>
                  </div>
                </div>
              </div>

              <div id="tab-art-worn" class="concept-panel">
                <div class="layout-split-editorial">
                  <div style="border-radius: var(--radius-soft); overflow: hidden; max-height: 380px;">
                    <img src="../generated-image-25ba2de4-a61c-4226-bfe4-b83ad40e1829.png" alt="ZARAVI Jewelry Worn on Skin" style="width: 100%; height: 100%; object-fit: cover; object-position: left top;">
                  </div>
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">PHOTOGRAPHY FAMILY B · INTIMATE HUMAN DIALOGUE</span>
                    <h3 style="font-family: var(--font-display); font-size: 2rem; margin: var(--space-xs) 0;">
                      Warmth Against Real Skin
                    </h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted);">
                      Jewelry in physical dialogue with the body. Natural north-window light, authentic skin texture, tactile gestures of self-adornment. The jewelry is not posed; it lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Asymmetric Editorial Museum Vitrine Spreads (Alternating Left/Right) -->
            <div style="display: flex; flex-direction: column; gap: var(--space-xl); margin-top: var(--space-xl);">
              ${pieces.map((p, idx) => {
                const isEven = idx % 2 === 0;
                return `
                  <div class="layout-specimen-vitrine" style="display: grid; grid-template-columns: ${isEven ? '1.2fr 1fr' : '1fr 1.2fr'}; gap: var(--space-xl); align-items: center; background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); overflow: hidden; box-shadow: var(--shadow-soft);">
                    
                    ${isEven ? `
                      <!-- Image Left -->
                      <div style="height: 380px; overflow: hidden; position: relative;">
                        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        <span class="spec-mono" style="position: absolute; top: 14px; left: 14px; background: rgba(26,18,11,0.85); color: var(--color-gold-foil); padding: 4px 10px; border-radius: var(--radius-soft);">
                          ${p.category}
                        </span>
                      </div>
                      
                      <!-- Specs Right -->
                      <div style="padding: var(--space-xl);">
                        <span class="spec-mono" style="color: var(--color-burnt-sienna);">${p.sku}</span>
                        <h3 style="font-family: var(--font-display); font-size: 2rem; color: var(--color-dark-espresso); margin: 4px 0 10px;">${p.name}</h3>
                        <p style="font-size: 0.92rem; color: var(--color-digital-muted); line-height: 1.7; margin-bottom: var(--space-md);">${p.desc}</p>
                        
                        <table class="specimen-specs-table">
                          <tr><td>Metallurgy</td><td>${p.metal}</td></tr>
                          <tr><td>Finish</td><td>${p.finish}</td></tr>
                          <tr><td>Dimensions</td><td>${p.dimensions}</td></tr>
                          <tr><td>Acquisition</td><td style="color: var(--color-burnt-sienna); font-weight: 700;">${p.price}</td></tr>
                        </table>
                      </div>
                    ` : `
                      <!-- Specs Left -->
                      <div style="padding: var(--space-xl);">
                        <span class="spec-mono" style="color: var(--color-burnt-sienna);">${p.sku}</span>
                        <h3 style="font-family: var(--font-display); font-size: 2rem; color: var(--color-dark-espresso); margin: 4px 0 10px;">${p.name}</h3>
                        <p style="font-size: 0.92rem; color: var(--color-digital-muted); line-height: 1.7; margin-bottom: var(--space-md);">${p.desc}</p>
                        
                        <table class="specimen-specs-table">
                          <tr><td>Metallurgy</td><td>${p.metal}</td></tr>
                          <tr><td>Finish</td><td>${p.finish}</td></tr>
                          <tr><td>Dimensions</td><td>${p.dimensions}</td></tr>
                          <tr><td>Acquisition</td><td style="color: var(--color-burnt-sienna); font-weight: 700;">${p.price}</td></tr>
                        </table>
                      </div>

                      <!-- Image Right -->
                      <div style="height: 380px; overflow: hidden; position: relative;">
                        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        <span class="spec-mono" style="position: absolute; top: 14px; left: 14px; background: rgba(26,18,11,0.85); color: var(--color-gold-foil); padding: 4px 10px; border-radius: var(--radius-soft);">
                          ${p.category}
                        </span>
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 08 · THE RITUAL (Packaging & Unboxing Ceremony)
    // ══════════════════════════════════════════════════
    renderChapter08: function() {
      return `
        <section id="chapter-08" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 08</span>
              <div class="section-title-wrap">
                <h2>The Ritual · Packaging Ecosystem & Unboxing</h2>
                <p class="section-subtitle">“Packaging is not wrapping; it is a theatrical ceremony of ecdysis, revealing precious metal from deep shadows.”</p>
              </div>
            </div>

            <!-- Chapter 08 Triptych: 3 Physical Manifestations of Packaging -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../ref-3-packaging-v1.jpg" alt="Complete Packaging Ecosystem Still Life">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / HERO SYSTEM</span>
                  <div class="triptych-title">Mineral Sage Box Ecosystem</div>
                  <div class="triptych-desc">The complete rigid packaging hierarchy wrapped in 150gsm sage cotton paper with dark chocolate wax seals.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../wax_seal_pour.jpg" alt="Artisan Pouring Dark Chocolate Beeswax Seal">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / BEESWAX CEREMONY</span>
                  <div class="triptych-title">Molten Wax Pouring</div>
                  <div class="triptych-desc">Molten dark chocolate beeswax poured from a brass crucible onto ivory wrap, stamped with the butterfly brass die.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-6605d34f-54e1-4937-8250-e4f769380363.png" alt="120 Degree Hinge Revelation">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / UNBOXING RITUAL</span>
                  <div class="triptych-title">120° Wing-Stop Hinge</div>
                  <div class="triptych-desc">Box open at signature 120° wing angle, revealing warm ivory microsuede interior and concealed magnet catch.</div>
                </div>
              </div>
            </div>

            <!-- Concept Explorer for Packaging: 3 Directions -->
            <div class="concept-explorer" style="margin-bottom: var(--space-xl);">
              <div class="concept-tabs-nav">
                <button class="concept-tab-btn active" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-pack-objects')">
                  <span>Direction A</span>
                  <span class="concept-badge">The Object (Pedestal Art)</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-pack-ceremony')">
                  <span>Direction B</span>
                  <span class="concept-badge">The Ceremony (11-Stage Stepper)</span>
                </button>
                <button class="concept-tab-btn" onclick="ZARAVI_APP.switchConceptTab(this, 'tab-pack-engineering')">
                  <span>Direction C</span>
                  <span class="concept-badge">The Engineering (Dielines & Matrix)</span>
                </button>
              </div>

              <!-- Direction A: The Object (Pedestal Staging) -->
              <div id="tab-pack-objects" class="concept-panel active">
                <div class="layout-split-editorial">
                  <div style="border-radius: var(--radius-soft); overflow: hidden; box-shadow: var(--shadow-lifted); max-height: 420px;">
                    <img src="../generated-image-6516b536-9c3e-423f-8fef-53f3785a2be6.png" alt="Packaging Engineering Pedestal">
                  </div>
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">DIRECTION A · THE OBJECT AS PEDESTAL ART</span>
                    <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin: var(--space-xs) 0 var(--space-md);">
                      Generational Permanence
                    </h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-digital-muted); margin-bottom: var(--space-md);">
                      ZARAVI packaging boxes are constructed not to be discarded, but to live permanently on dressing tables as sculptural jewelry reliquaries. Wrapped in 150gsm Mineral Sage cotton paper with concealed magnetic catches and 120° wing-stop hinges.
                    </p>
                    <div class="spec-mono" style="background: rgba(58,35,10,0.06); padding: 14px; border-radius: 4px; line-height: 1.8;">
                      CORE BOARD: 2.5MM RIGID RECYCLED GREYBOARD<br>
                      MAGNETIC CATCH: 3.0N NEODYMIUM FLUSH COUNTERSUNK<br>
                      INTERIOR: 300GSM CRUSHED MICROSUEDE WITH LASER SLOTS
                    </div>
                  </div>
                </div>
              </div>

              <!-- Direction B: Interactive 11-Stage Stepper -->
              <div id="tab-pack-ceremony" class="concept-panel">
                <div class="unboxing-player-container">
                  <div class="unboxing-stepper-bar">
                    ${unboxingStages.map((s, idx) => `
                      <button class="step-btn ${idx === 0 ? 'active' : ''}" onclick="ZARAVI_APP.selectUnboxingStep(${idx})" id="step-btn-${idx}">
                        STAGE ${s.num}
                      </button>
                    `).join('')}
                  </div>

                  <div class="unboxing-stage-display">
                    <div class="unboxing-image-frame">
                      <img id="unboxing-stage-img" src="${unboxingStages[0].image}" alt="${unboxingStages[0].name}" style="${unboxingStages[0].crop}">
                    </div>
                    <div class="unboxing-narrative">
                      <span id="unboxing-stage-badge" class="stage-badge">STAGE 01 OF 11 · CEREMONY RITUAL</span>
                      <h3 id="unboxing-stage-title" class="stage-title">${unboxingStages[0].name}</h3>
                      <p id="unboxing-stage-desc" class="stage-desc">${unboxingStages[0].desc}</p>
                      <div id="unboxing-stage-spec" class="stage-specs-box">
                        SPEC: ${unboxingStages[0].spec}
                      </div>

                      <div style="display: flex; gap: 10px; margin-top: var(--space-md);">
                        <button onclick="ZARAVI_APP.prevUnboxingStep()" class="btn-icon" title="Previous Stage">←</button>
                        <button onclick="ZARAVI_APP.nextUnboxingStep()" class="btn-icon" title="Next Stage">→</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Direction C: Vector Dielines & 7-Box Matrix -->
              <div id="tab-pack-engineering" class="concept-panel">
                <div class="layout-split-editorial" style="margin-bottom: var(--space-lg);">
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">ENGINEERING DIELINE 01 · RING BOX</span>
                    <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin: 4px 0 8px;">72 × 72 × 54 mm Ring Box</h3>
                    <p style="font-size: 0.88rem; color: var(--color-digital-muted); line-height: 1.6; margin-bottom: var(--space-md);">
                      Constructed from 2.0mm recycled rigid board, 150gsm Mineral Sage cotton wrap, and 15mm Burnt Sienna pull ribbon. Includes calibrated steel ruler inspection.
                    </p>
                    <a href="../ZARAVI_Ring_Box_72x72x54_Dieline.svg" target="_blank" class="spec-mono" style="display: inline-block; padding: 10px 18px; border: 1px solid var(--color-border-medium); border-radius: var(--radius-soft); color: var(--color-burnt-sienna);">
                      ↗ Open Production Vector SVG
                    </a>
                  </div>
                  <div style="background: #F8F5E7; border: 1px solid #D9D2A3; border-radius: var(--radius-soft); padding: var(--space-md); text-align: center;">
                    <img src="../ZARAVI_Ring_Box_72x72x54_Dieline.svg" alt="Ring Box Dieline Vector" style="max-height: 240px; margin: 0 auto;">
                  </div>
                </div>

                <div class="layout-split-editorial" style="margin-bottom: var(--space-xl);">
                  <div>
                    <span class="spec-mono" style="color: var(--color-burnt-sienna);">ENGINEERING DIELINE 02 · NECKLACE DRAWER</span>
                    <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin: 4px 0 8px;">178 × 178 × 44 mm Sliding Drawer</h3>
                    <p style="font-size: 0.88rem; color: var(--color-digital-muted); line-height: 1.6; margin-bottom: var(--space-md);">
                      Rigid outer sleeve with damped friction-fit sliding inner drawer. Fitted with Warm Ivory microsuede presentation pad and concealed chain channel.
                    </p>
                    <a href="../ZARAVI_Necklace_Drawer_178x178x44_Dieline.svg" target="_blank" class="spec-mono" style="display: inline-block; padding: 10px 18px; border: 1px solid var(--color-border-medium); border-radius: var(--radius-soft); color: var(--color-burnt-sienna);">
                      ↗ Open Production Vector SVG
                    </a>
                  </div>
                  <div style="background: #F8F5E7; border: 1px solid #D9D2A3; border-radius: var(--radius-soft); padding: var(--space-md); text-align: center;">
                    <img src="../ZARAVI_Necklace_Drawer_178x178x44_Dieline.svg" alt="Necklace Drawer Dieline Vector" style="max-height: 240px; margin: 0 auto;">
                  </div>
                </div>

                <!-- 7-Box Architectural Matrix -->
                <div style="overflow-x: auto; background: var(--color-digital-bg); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-md);">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                    <thead>
                      <tr style="border-bottom: 2px solid var(--color-burnt-sienna); font-family: var(--font-mono); font-size: 0.68rem;">
                        <th style="padding: 10px;">BOX TYPE</th>
                        <th style="padding: 10px;">DIMENSIONS</th>
                        <th style="padding: 10px;">BOARD CALIPER</th>
                        <th style="padding: 10px;">WRAP PAPER</th>
                        <th style="padding: 10px;">INTERIOR LINER</th>
                        <th style="padding: 10px;">FORCE TOLERANCE</th>
                      </tr>
                    </thead>
                    <tbody style="line-height: 1.8;">
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Ring Box</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">72 × 72 × 54 mm</td>
                        <td style="padding: 10px;">2.0mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Sage Cotton</td>
                        <td style="padding: 10px;">Ivory Microsuede</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">2.5 N Magnet</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Small Jewelry Box</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">70 × 70 × 40 mm</td>
                        <td style="padding: 10px;">2.5mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Espresso</td>
                        <td style="padding: 10px;">Ivory Microsuede</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">3.0 N Magnet</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Medium Jewelry Box</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">180 × 90 × 40 mm</td>
                        <td style="padding: 10px;">2.5mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Espresso</td>
                        <td style="padding: 10px;">Channel + Clasp Pocket</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">Dual 3.0 N</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Necklace Drawer</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">178 × 178 × 44 mm</td>
                        <td style="padding: 10px;">2.5mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Sage Cotton</td>
                        <td style="padding: 10px;">Pendant Vitrine</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">1.2 N Friction Glide</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Bracelet Box</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">220 × 60 × 30 mm</td>
                        <td style="padding: 10px;">2.0mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Espresso</td>
                        <td style="padding: 10px;">Curved Pillow Form</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">Dual 2.5 N</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-border-subtle);">
                        <td style="padding: 10px; font-weight: 600;">Earring Box</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">60 × 60 × 25 mm</td>
                        <td style="padding: 10px;">2.0mm Greyboard</td>
                        <td style="padding: 10px;">150gsm Espresso</td>
                        <td style="padding: 10px;">Dual Laser Holes</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">Single 2.5 N</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; font-weight: 600;">Presentation Drawer</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">240 × 180 × 65 mm</td>
                        <td style="padding: 10px;">3.0mm Heavy Board</td>
                        <td style="padding: 10px;">Ivory Linen Sleeve</td>
                        <td style="padding: 10px;">Modular Grid Tray</td>
                        <td style="padding: 10px; font-family: var(--font-mono);">Brass Antenna Pull</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 09 · THE ARCHIVE (Stationery & Authenticity Suite)
    // ══════════════════════════════════════════════════
    renderChapter09: function() {
      return `
        <section id="chapter-09" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 09</span>
              <div class="section-title-wrap">
                <h2>The Archive · Stationery & Certificate Suite</h2>
                <p class="section-subtitle">“Every object is entered into the permanent Maison register. Authenticity is not a marketing promise; it is physical evidence.”</p>
              </div>
            </div>

            <!-- Chapter 09 Triptych: 3 Tactile Studies of Archival Authority -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../sage_paper_macro.jpg" alt="Deckled Archival Paper Texture">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / ARCHIVAL PAPER</span>
                  <div class="triptych-title">Uncoated Cotton Stock</div>
                  <div class="triptych-desc">Deckled 150gsm cotton rag paper bearing the micro blind-debossed butterfly hallmark, capturing raking sunlight.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-0f020212-f9de-4565-97ec-b3e8ba064805.png" alt="Archival Travel Pouch and Certificate Box">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / ARCHIVE ENSEMBLE</span>
                  <div class="triptych-title">Linen Pouch & Envelope</div>
                  <div class="triptych-desc">Heavy linen travel case and Certificate of Authenticity portfolio sealed with dark chocolate wax.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../ref-4-blueprint-dielines.jpg" alt="Production CAD Drawings and Calipers">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / BLUEPRINT PROOF</span>
                  <div class="triptych-title">Production Schematics</div>
                  <div class="triptych-desc">Registered CAD architectural dielines with millimetric scoring angles, glue tab specs, and bench notes.</div>
                </div>
              </div>
            </div>

            <!-- The A5 Certificate of Authenticity Mockup -->
            <div class="certificate-mockup" style="margin-bottom: var(--space-xl);">
              <div class="cert-border-outer">
                <div class="cert-header">
                  <div style="width: 50px; margin: 0 auto 8px;">
                    ${V.getLevel1Emblem({ size: 50, mode: "dark" })}
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: var(--tracking-mono); color: var(--color-burnt-sienna);">
                    MAISON ZARAVI · HAUTE JOAILLERIE · ARCHIVE REGISTER
                  </div>
                  <h3 class="cert-title">Certificate of Authenticity</h3>
                </div>

                <div class="cert-body-text">
                  This document certifies that the accompanying creation is an authentic original work of Maison ZARAVI, hand-wrought in certified 18-karat gold and bearing the official registered assay mark. Each piece is crafted in strict adherence to our doctrine of metamorphosis and structural balance.
                </div>

                <!-- Registration Data Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg); border-top: 1px solid rgba(58,35,10,0.15); border-bottom: 1px solid rgba(58,35,10,0.15); padding: var(--space-md) 0; font-family: var(--font-mono); font-size: 0.72rem;">
                  <div>
                    <span style="color: var(--color-digital-muted); display: block;">OBJECT DESIGNATION</span>
                    <strong>THE METAMORPHOSIS SIGNET (AU 750‰)</strong>
                  </div>
                  <div>
                    <span style="color: var(--color-digital-muted); display: block;">SERIAL REGISTRATION</span>
                    <strong style="color: var(--color-burnt-sienna);">#ZRV-2026-0418</strong>
                  </div>
                  <div>
                    <span style="color: var(--color-digital-muted); display: block;">GOLDSMITH BENCH ATELIER</span>
                    <strong>BENCH #04 · MAÎTRE D'ART</strong>
                  </div>
                  <div>
                    <span style="color: var(--color-digital-muted); display: block;">DATE OF ASSAY</span>
                    <strong>03 SEPTEMBER 2026</strong>
                  </div>
                </div>

                <!-- Tear-off Stub -->
                <div class="cert-tear-stub">
                  <span>CLIENT RETENTION RECORD · DETACH HERE</span>
                  <span style="color: var(--color-burnt-sienna);">ARCHIVE STUB #ZRV-2026-0418</span>
                </div>
              </div>
            </div>

            <!-- Supporting Stationery Suite with Calibrated Millimeter Ruler & Still-Life -->
            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-xl); align-items: center; background: var(--color-digital-paper); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-soft); padding: var(--space-xl);">
              <!-- Business Card Against Ruler -->
              <div>
                <span class="spec-mono" style="color: var(--color-burnt-sienna);">CORRESPONDENCE SPECIMEN 01 · SCALE CALIBRATION</span>
                <h4 style="font-family: var(--font-display); font-size: 1.8rem; margin: 6px 0 10px;">
                  85 × 55 mm Duplexed Card
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-digital-muted); line-height: 1.7; margin-bottom: var(--space-md);">
                  Duplexed 600gsm cotton board (Warm Ivory face / Dark Espresso reverse) with 0.3mm blind-embossed facet grid. Shown at exact 1:1 ratio against metric millimeter rules.
                </p>

                <!-- Visual Mockup of Card on Ruler -->
                <div style="background: #EAE5D2; border: 1px solid #CCC3AD; border-radius: var(--radius-soft); padding: var(--space-md); display: flex; flex-direction: column; align-items: center; gap: 8px;">
                  <div style="width: 255px; height: 165px; background: var(--color-warm-ivory); border: 1px solid var(--color-stone); border-radius: 2px; box-shadow: var(--shadow-soft); display: flex; flex-direction: column; justify-content: space-between; padding: 16px;">
                    <div style="font-family: var(--font-display); font-size: 1.2rem; letter-spacing: var(--tracking-wordmark); color: var(--color-dark-espresso);">ZARAVI</div>
                    <div style="font-family: var(--font-mono); font-size: 0.55rem; color: var(--color-burnt-sienna);">HAUTE JOAILLERIE · PARIS</div>
                  </div>
                  <!-- Millimeter scale markings -->
                  <div style="width: 255px; border-top: 2px solid #8A8578; display: flex; justify-content: space-between; font-family: monospace; font-size: 0.55rem; color: #555; padding-top: 2px;">
                    <span>| 0mm</span>
                    <span>| 25mm</span>
                    <span>| 50mm</span>
                    <span>| 75mm</span>
                    <span>| 85mm</span>
                  </div>
                </div>
              </div>

              <!-- Letterhead & Envelope Specs -->
              <div style="border-left: 1px solid var(--color-border-subtle); padding-left: var(--space-xl);">
                <span class="spec-mono" style="color: var(--color-burnt-sienna);">CORRESPONDENCE SPECIMEN 02 & 03</span>
                <div style="margin: var(--space-md) 0;">
                  <h5 style="font-family: var(--font-display); font-size: 1.25rem;">Watermarked Laid Letterhead (A4)</h5>
                  <p style="font-size: 0.85rem; color: var(--color-digital-muted); line-height: 1.6;">120gsm unbleached cotton paper featuring the Level 1 butterfly outline watermark revealed only when held against transmitted ambient light.</p>
                </div>
                <div>
                  <h5 style="font-family: var(--font-display); font-size: 1.25rem;">Twisted Thread C5 Envelope</h5>
                  <p style="font-size: 0.85rem; color: var(--color-digital-muted); line-height: 1.6;">250gsm Sage Kraft paper with dark espresso washer and wax-sealed closure for private VIP client correspondence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // ══════════════════════════════════════════════════
    // CHAPTER 10 · THE SANCTUARY (Retail Architecture & Scent)
    // ══════════════════════════════════════════════════
    renderChapter10: function() {
      const zones = [
        {
          num: "ZONE 01",
          name: "The Threshold",
          desc: "Dark Espresso decompression entry with acoustic dampening and compressed 2.2m ceiling. Removes urban noise."
        },
        {
          num: "ZONE 02",
          name: "The Chrysalis Vitrines",
          desc: "Low-light gallery corridor with directional fiber-optic pin spots illuminating jewelry in suspended smoked glass cloches."
        },
        {
          num: "ZONE 03",
          name: "The Consultation Table",
          desc: "Monolithic slab of Iranian green onyx resting on an antique brushed-brass cantilever. Private sage velvet seating."
        },
        {
          num: "ZONE 04",
          name: "The Archive Vault",
          desc: "Concealed wall cabinetry with serialized velvet drawers. The client's bespoke piece is drawn out with quiet precision."
        },
        {
          num: "ZONE 05",
          name: "The Packing Salon",
          desc: "Dedicated bench where packaging, ribbon tying, and dark chocolate wax-sealing take place in the client's presence."
        }
      ];

      return `
        <section id="chapter-10" class="brand-section">
          <div class="section-container">
            <div class="section-header">
              <span class="section-num">CHAPTER 10</span>
              <div class="section-title-wrap">
                <h2>The Sanctuary · Retail & Olfactory Architecture</h2>
                <p class="section-subtitle">“A physical space designed as an architectural sanctuary of quiet, shadow, green onyx, and contemplative emergence.”</p>
              </div>
            </div>

            <!-- Chapter 10 Triptych: 3 Spatial Perspectives of the Flagship -->
            <div class="editorial-triptych">
              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-c0e94282-9eb4-4685-9536-d82ca1ca62e3.png" alt="Iranian Green Onyx Table in Consultation Salon">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">01 / THE SALON</span>
                  <div class="triptych-title">Green Onyx Consultation</div>
                  <div class="triptych-desc">Monolithic Iranian green onyx table, antique brushed brass base, and private sage velvet seating.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../generated-image-29052d0a-4f0c-4f53-8ca3-147018ca609d.png" alt="Smoked Glass Bell Cloche Vitrines">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">02 / THE GALLERY</span>
                  <div class="triptych-title">Smoked Glass Cloches</div>
                  <div class="triptych-desc">Directional fiber-optic pin spots illuminating sculptural gold torques suspended inside glass vitrines.</div>
                </div>
              </div>

              <div class="triptych-item">
                <div class="triptych-img-wrap">
                  <img src="../chrysalis_chamber.jpg" alt="Threshold Decompression Monolith">
                </div>
                <div class="triptych-caption">
                  <span class="triptych-badge">03 / THE THRESHOLD</span>
                  <div class="triptych-title">Decompression Chamber</div>
                  <div class="triptych-desc">Dark espresso entry chamber with rough-hewn basalt monolith and vertical golden light fissure.</div>
                </div>
              </div>
            </div>

            <!-- Architectural Section Floor Plan SVG -->
            <div style="background: #181109; border: 1px solid rgba(238,233,193,0.15); border-radius: var(--radius-soft); padding: var(--space-xl); margin-bottom: var(--space-xl); text-align: center;">
              <span class="spec-mono" style="color: var(--color-gold-foil);">ARCHITECTURAL BLUEPRINT · 5-ZONE SEQUENCE (PARIS FLAGSHIP)</span>
              
              <svg viewBox="0 0 800 160" style="width: 100%; max-width: 760px; height: auto; margin: var(--space-md) auto; display: block;">
                <!-- Zone 1 -->
                <rect x="20" y="20" width="130" height="120" fill="none" stroke="rgba(238,233,193,0.3)" stroke-width="1.5"/>
                <text x="85" y="75" fill="#C9A962" font-family="monospace" font-size="10" text-anchor="middle">ZONE 01</text>
                <text x="85" y="95" fill="#EEE9C1" font-family="serif" font-size="12" text-anchor="middle">THRESHOLD</text>
                
                <!-- Corridor -->
                <line x1="150" y1="80" x2="180" y2="80" stroke="var(--color-burnt-sienna)" stroke-width="1.5" stroke-dasharray="2,2"/>

                <!-- Zone 2 -->
                <rect x="180" y="20" width="140" height="120" fill="none" stroke="rgba(238,233,193,0.3)" stroke-width="1.5"/>
                <text x="250" y="75" fill="#C9A962" font-family="monospace" font-size="10" text-anchor="middle">ZONE 02</text>
                <text x="250" y="95" fill="#EEE9C1" font-family="serif" font-size="12" text-anchor="middle">VITRINES</text>

                <!-- Corridor -->
                <line x1="320" y1="80" x2="350" y2="80" stroke="var(--color-burnt-sienna)" stroke-width="1.5" stroke-dasharray="2,2"/>

                <!-- Zone 3 -->
                <rect x="350" y="20" width="150" height="120" fill="none" stroke="var(--color-gold-foil)" stroke-width="2"/>
                <text x="425" y="75" fill="#C9A962" font-family="monospace" font-size="10" text-anchor="middle">ZONE 03</text>
                <text x="425" y="95" fill="#EEE9C1" font-family="serif" font-size="12" text-anchor="middle">ONYX TABLE</text>

                <!-- Corridor -->
                <line x1="500" y1="80" x2="530" y2="80" stroke="var(--color-burnt-sienna)" stroke-width="1.5" stroke-dasharray="2,2"/>

                <!-- Zone 4 -->
                <rect x="530" y="20" width="120" height="120" fill="none" stroke="rgba(238,233,193,0.3)" stroke-width="1.5"/>
                <text x="590" y="75" fill="#C9A962" font-family="monospace" font-size="10" text-anchor="middle">ZONE 04</text>
                <text x="590" y="95" fill="#EEE9C1" font-family="serif" font-size="12" text-anchor="middle">VAULT</text>

                <!-- Corridor -->
                <line x1="650" y1="80" x2="680" y2="80" stroke="var(--color-burnt-sienna)" stroke-width="1.5" stroke-dasharray="2,2"/>

                <!-- Zone 5 -->
                <rect x="680" y="20" width="100" height="120" fill="none" stroke="rgba(238,233,193,0.3)" stroke-width="1.5"/>
                <text x="730" y="75" fill="#C9A962" font-family="monospace" font-size="10" text-anchor="middle">ZONE 05</text>
                <text x="730" y="95" fill="#EEE9C1" font-family="serif" font-size="12" text-anchor="middle">SALON</text>
              </svg>
            </div>

            <!-- 5-Zone Retail Space Cards -->
            <div class="retail-sanctuary-grid">
              ${zones.map(z => `
                <div class="sanctuary-card">
                  <span class="sanctuary-zone-num">${z.num}</span>
                  <h3 class="sanctuary-zone-name">${z.name}</h3>
                  <p style="font-size: 0.85rem; color: var(--color-digital-muted); line-height: 1.6; margin-top: 6px;">${z.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Scent Profile Footnote (Calibrated Footnote Style) -->
            <div style="background: rgba(58, 35, 10, 0.04); border-left: 2px solid var(--color-burnt-sienna); border-radius: var(--radius-soft); padding: var(--space-md) var(--space-lg); margin-top: var(--space-xl); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md);">
              <div>
                <span class="spec-mono" style="color: var(--color-burnt-sienna);">OLFACTORY ARCHITECTURE FOOTNOTE · AMBIENT 0.02 PPM</span>
                <p style="font-size: 0.85rem; color: var(--color-digital-muted); margin-top: 2px;">
                  Exclusive formulation diffused subtly: Italian Bergamot & Green Tea (Top) · Florentine Orris Butter (Heart) · Mysore Sandalwood & Beeswax (Base).
                </p>
              </div>
              <div class="spec-mono">PARIS ATELIER FORMULATION #04</div>
            </div>
          </div>
        </section>
      `;
    },

    getUnboxingStages: function() {
      return unboxingStages;
    }
  };
})();
