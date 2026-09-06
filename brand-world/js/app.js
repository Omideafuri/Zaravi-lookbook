/**
 * ZARAVI JEWELRY — MASTER BRAND WORLD APPLICATION CONTROLLER
 * Orchestrates 12 Chapters, Concept Explorer Tabs, Unboxing Stepper,
 * Live RGB/Hex Token Tuning, Fuzzy Search Filtering, and Navigation Sync.
 */

window.ZARAVI_APP = (function() {
  let currentUnboxingIndex = 0;

  // Searchable Brand Architecture Index
  const searchIndex = [
    { title: "The Cover & Manifesto", category: "Philosophy", target: "chapter-01", snippet: "Transformation made tangible · Doctrine not ornament" },
    { title: "The Doctrine & Metaphor", category: "DNA", target: "chapter-02", snippet: "She wasn't rescued. She transformed herself · 4 Foundational Pillars" },
    { title: "The Mark & Letterform Architecture", category: "Typography", target: "chapter-03", snippet: "Low crossbar A · Extended Z arms · Clear space 0.5x" },
    { title: "Physical Substrate Simulator", category: "Materials", target: "chapter-03", snippet: "Warm Ivory letterpress · Dark Espresso gold foil · 18k gold laser hallmark" },
    { title: "The Wing & 100×100 Geometry", category: "Symbol", target: "chapter-04", snippet: "15° Architectural facet notches · Level 1 bilateral emblem" },
    { title: "Level 2 Wing Fragment Kit (2A–2E)", category: "Symbol", target: "chapter-04", snippet: "Single wing, open pair, lower wing, symmetry axis, vertex apex" },
    { title: "The Palette (60/30/10 Ratio)", category: "Color", target: "chapter-05", snippet: "Mineral Sage 60% · Warm Ivory 30% · Burnt Sienna 10% · Espresso" },
    { title: "WCAG Contrast Validation Matrix", category: "Accessibility", target: "chapter-05", snippet: "12.6:1 AAA Espresso on Ivory · 4.8:1 AA Large Sienna" },
    { title: "Bilingual Typography & Persian Heritage", category: "Heritage", target: "chapter-06", snippet: "Cormorant Garamond · Vazirmatn RTL · Space Mono micro-specs" },
    { title: "Metamorphosis Signet Band (ZRV-R-001)", category: "Jewelry", target: "chapter-07", snippet: "18k Fairmined gold · 15° wing ridge · Hand-brushed satin" },
    { title: "The Emergence Architectural Cuff (ZRV-B-004)", category: "Jewelry", target: "chapter-07", snippet: "42.5g Fairmined yellow gold · Bilateral wing facets" },
    { title: "Chrysalis Teardrop Pendant (ZRV-N-002)", category: "Jewelry", target: "chapter-07", snippet: "Grade-A Australian chrysoprase · 18k gold wing-scale bezel" },
    { title: "11-Stage Unboxing Ceremony Stepper", category: "Packaging", target: "chapter-08", snippet: "Wax seal · 120° Wing hinge · Hidden lid blind deboss" },
    { title: "Ring Box 72×72×54 mm Dieline", category: "Engineering", target: "chapter-08", snippet: "2.0mm Greyboard · Calibrated steel ruler · Vector SVG" },
    { title: "Necklace Drawer 178×178×44 mm Dieline", category: "Engineering", target: "chapter-08", snippet: "Damped sliding drawer · Micro-suede vitrine insert" },
    { title: "7-Box Architectural Specification Matrix", category: "Packaging", target: "chapter-08", snippet: "Ring, small, medium, necklace, bracelet, earring, presentation" },
    { title: "Certificate of Authenticity (A5)", category: "Archive", target: "chapter-09", snippet: "350gsm Cranes Crest · Tear-off client stub · Serial #ZRV-2026-0418" },
    { title: "Duplexed Business Card & Watermarked Letterhead", category: "Stationery", target: "chapter-09", snippet: "600gsm Duplex · 120gsm Laid cotton with Level 1 watermark" },
    { title: "5-Zone Retail Sanctuary Architecture", category: "Retail", target: "chapter-10", snippet: "Threshold decompression · Chrysalis vitrines · Iranian green onyx" },
    { title: "Olfactory Scent Architecture", category: "Atmosphere", target: "chapter-10", snippet: "Bergamot · Green tea · Florentine orris · Mysore sandalwood" },
    { title: "Vogue France Double-Page Spread (DPS)", category: "Campaign", target: "chapter-11", snippet: "Transformation in solid gold · Page 142–143 · Haute Joaillerie" },
    { title: "Digital Storefront & 3-2-1 Social Grid", category: "Digital", target: "chapter-11", snippet: "Asymmetric 2/3 + 1/3 layout · Instagram 3-2-1 editorial rhythm" },
    { title: "Master Brand Application Wall", category: "Brand Wall", target: "chapter-12", snippet: "12-column masonry · Final creative test: Identifiable without logo" }
  ];

  function hexToRgb(hex) {
    const cleanHex = hex.replace('#', '');
    const bigint = parseInt(cleanHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  function initApp() {
    const mainContainer = document.getElementById('zaravi-content-root');
    if (!mainContainer) return;

    // Render all 12 Chapters sequentially
    const chaptersHTML = [
      window.ZARAVI_CORE.renderChapter01(),
      window.ZARAVI_CORE.renderChapter02(),
      window.ZARAVI_CORE.renderChapter03(),
      window.ZARAVI_CORE.renderChapter04(),
      window.ZARAVI_CORE.renderChapter05(),
      window.ZARAVI_CORE.renderChapter06(),
      window.ZARAVI_PHYSICAL.renderChapter07(),
      window.ZARAVI_PHYSICAL.renderChapter08(),
      window.ZARAVI_PHYSICAL.renderChapter09(),
      window.ZARAVI_PHYSICAL.renderChapter10(),
      window.ZARAVI_DIGITAL.renderChapter11(),
      window.ZARAVI_DIGITAL.renderChapter12()
    ];

    mainContainer.innerHTML = chaptersHTML.join('');

    // Initialize subsystems
    setupNavigation();
    setupTokenTuner();
    setupSearchModal();
    initThemeState();
  }

  // Synchronize horizontal navigation bar with scroll position
  function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link-item');
    const sections = document.querySelectorAll('.brand-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            if (link.getAttribute('data-target') === id) {
              link.classList.add('active');
              link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(sec => observer.observe(sec));
  }

  // Theme Toggler with local persistence
  function initThemeState() {
    const savedTheme = localStorage.getItem('zaravi-theme') || 'light';
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('zaravi-theme', theme);
  }

  // Concept Explorer Tab Switcher
  function switchConceptTab(btn, targetPanelId) {
    const container = btn.closest('.concept-explorer');
    if (!container) return;

    // Update buttons
    container.querySelectorAll('.concept-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update panels
    container.querySelectorAll('.concept-panel').forEach(p => p.classList.remove('active'));
    const targetPanel = container.querySelector('#' + targetPanelId);
    if (targetPanel) targetPanel.classList.add('active');
  }

  // 11-Stage Unboxing Stepper Controller
  function selectUnboxingStep(idx) {
    const stages = window.ZARAVI_PHYSICAL.getUnboxingStages();
    if (!stages || !stages[idx]) return;

    currentUnboxingIndex = idx;
    const stage = stages[idx];

    // Update buttons
    document.querySelectorAll('.step-btn').forEach((btn, i) => {
      if (i === idx) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    // Update image and text
    const imgElem = document.getElementById('unboxing-stage-img');
    const badgeElem = document.getElementById('unboxing-stage-badge');
    const titleElem = document.getElementById('unboxing-stage-title');
    const descElem = document.getElementById('unboxing-stage-desc');
    const specElem = document.getElementById('unboxing-stage-spec');

    if (imgElem) {
      imgElem.src = stage.image;
      imgElem.alt = stage.name;
      if (stage.crop) imgElem.style.cssText = stage.crop;
    }
    if (badgeElem) badgeElem.textContent = `STAGE ${stage.num} OF 11 · CEREMONY RITUAL`;
    if (titleElem) titleElem.textContent = stage.name;
    if (descElem) descElem.textContent = stage.desc;
    if (specElem) specElem.textContent = `SPEC: ${stage.spec}`;
  }

  function prevUnboxingStep() {
    const stages = window.ZARAVI_PHYSICAL.getUnboxingStages();
    if (!stages) return;
    const prev = (currentUnboxingIndex - 1 + stages.length) % stages.length;
    selectUnboxingStep(prev);
  }

  function nextUnboxingStep() {
    const stages = window.ZARAVI_PHYSICAL.getUnboxingStages();
    if (!stages) return;
    const next = (currentUnboxingIndex + 1) % stages.length;
    selectUnboxingStep(next);
  }

  // Live Token Tuner with Hex & RGB Sync
  function setupTokenTuner() {
    const toggleBtn = document.getElementById('btn-toggle-tuner');
    const closeBtn = document.getElementById('btn-close-tuner');
    const drawer = document.getElementById('tuner-drawer');
    const resetBtn = document.getElementById('btn-reset-tokens');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => drawer.classList.toggle('open'));
    }
    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
    }

    const configs = [
      { id: 'picker-sage', labelId: 'label-sage', varName: '--color-sage', defaultVal: '#8DA28C' },
      { id: 'picker-sienna', labelId: 'label-sienna', varName: '--color-burnt-sienna', defaultVal: '#A4530C' },
      { id: 'picker-ivory', labelId: 'label-ivory', varName: '--color-warm-ivory', defaultVal: '#EEE9C1' },
      { id: 'picker-espresso', labelId: 'label-espresso', varName: '--color-dark-espresso', defaultVal: '#3A230A' }
    ];

    configs.forEach(c => {
      const picker = document.getElementById(c.id);
      const label = document.getElementById(c.labelId);
      if (picker) {
        picker.addEventListener('input', (e) => {
          const val = e.target.value.toUpperCase();
          document.documentElement.style.setProperty(c.varName, val);
          document.documentElement.style.setProperty(c.varName + '-rgb', hexToRgb(val));
          if (label) label.textContent = val;
        });
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        configs.forEach(c => {
          document.documentElement.style.removeProperty(c.varName);
          document.documentElement.style.removeProperty(c.varName + '-rgb');
          const picker = document.getElementById(c.id);
          const label = document.getElementById(c.labelId);
          if (picker) picker.value = c.defaultVal;
          if (label) label.textContent = c.defaultVal;
        });
      });
    }
  }

  // Functional Fuzzy Search Modal
  function setupSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('modal-results-container');
    const openBtn = document.getElementById('btn-open-search');
    const closeBtn = document.getElementById('btn-close-search');

    if (!modal || !input || !resultsContainer) return;

    function renderResults(query) {
      const q = query.trim().toLowerCase();
      const filtered = q === '' 
        ? searchIndex.slice(0, 8) 
        : searchIndex.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.snippet.toLowerCase().includes(q) || 
            item.category.toLowerCase().includes(q)
          );

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--color-digital-muted); font-size: 0.9rem;">
            No brand assets found matching "${query}". Try searching for <em>Dieline</em>, <em>Cuff</em>, <em>Scent</em>, or <em>Wax Seal</em>.
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = filtered.map(item => `
        <div class="modal-result-item" onclick="ZARAVI_APP.navigateTo('${item.target}')">
          <div>
            <div style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 500; color: var(--color-digital-text);">${item.title}</div>
            <div style="font-size: 0.78rem; color: var(--color-digital-muted); margin-top: 2px;">${item.snippet}</div>
          </div>
          <span class="concept-badge" style="text-transform: uppercase;">${item.category}</span>
        </div>
      `).join('');
    }

    function openSearch() {
      modal.classList.add('open');
      renderResults('');
      setTimeout(() => input.focus(), 60);
    }

    function closeSearch() {
      modal.classList.remove('open');
      input.value = '';
    }

    if (openBtn) openBtn.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeSearch();
      }
    });
  }

  function navigateTo(targetId) {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.remove('open');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Arrow key navigation between the 12 chapters
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    const chapters = [
      'chapter-01', 'chapter-02', 'chapter-03', 'chapter-04',
      'chapter-05', 'chapter-06', 'chapter-07', 'chapter-08',
      'chapter-09', 'chapter-10', 'chapter-11', 'chapter-12'
    ];
    const activeLink = document.querySelector('.nav-link-item.active');
    const currentTarget = activeLink ? activeLink.getAttribute('data-target') : 'chapter-01';
    let currentIndex = chapters.indexOf(currentTarget);
    if (currentIndex === -1) currentIndex = 0;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIdx = Math.min(currentIndex + 1, chapters.length - 1);
      navigateTo(chapters[nextIdx]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIdx = Math.max(currentIndex - 1, 0);
      navigateTo(chapters[prevIdx]);
    }
  });

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  return {
    switchConceptTab: switchConceptTab,
    selectUnboxingStep: selectUnboxingStep,
    prevUnboxingStep: prevUnboxingStep,
    nextUnboxingStep: nextUnboxingStep,
    navigateTo: navigateTo
  };
})();
