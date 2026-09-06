/**
 * ZARAVI JEWELRY — BUTTERFLY VECTOR & GEOMETRY ENGINE
 * Source of Truth: butterfly-system.md & logo-system.md
 * Exact mathematical implementation of the 6-Level Visual Language
 */

window.ZARAVI_VECTORS = (function() {
  // Level 1 Primary Emblem SVG definitions
  // Grid 100x100, symmetry axis at x=50
  const rightWingPath = "M 50,15 C 68,22 85,32 85,50 L 64,50 C 78,65 72,78 50,85 Z";
  const leftWingPath = "M 50,15 C 32,22 15,32 15,50 L 36,50 C 22,65 28,78 50,85 Z";
  const axisPath = "M 50,12 L 50,88";

  // Level 1 Faceted Wing with 15° architectural notch
  const rightWingFaceted = "M 50,15 C 65,22 84,34 85,48 L 62,50 L 82,62 C 76,76 64,83 50,85 Z";
  const leftWingFaceted = "M 50,15 C 35,22 16,34 15,48 L 38,50 L 18,62 C 24,76 36,83 50,85 Z";

  // Z Monogram (architectural wing symmetry)
  const zMonogramPath = "M 20,24 H 80 L 32,76 H 80 M 20,24 V 36 M 80,64 V 76";

  return {
    // Level 1: Primary Emblem
    getLevel1Emblem: function(options = {}) {
      const {
        size = 100,
        fill = "currentColor",
        stroke = "none",
        strokeWidth = 0,
        mode = "solid", // solid, outline, gold
        id = "zaravi-emblem"
      } = options;

      const isOutline = mode === "outline";
      const isGold = mode === "gold";
      const actualFill = isOutline ? "none" : (isGold ? "url(#gold-shimmer-grad)" : fill);
      const actualStroke = isOutline ? (isGold ? "url(#gold-shimmer-grad)" : (fill || "currentColor")) : stroke;
      const actualStrokeWidth = isOutline ? (strokeWidth || 3.5) : strokeWidth;

      return `
        <svg id="${id}" class="zaravi-emblem-svg" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-shimmer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C9A962"/>
              <stop offset="35%" stop-color="#E8DFC9"/>
              <stop offset="70%" stop-color="#A4530C"/>
              <stop offset="100%" stop-color="#C9A962"/>
            </linearGradient>
            <filter id="foil-catch-light" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="0.8" flood-color="rgba(58,35,10,0.4)"/>
            </filter>
          </defs>
          <g class="butterfly-mark" ${isGold ? 'filter="url(#foil-catch-light)"' : ''}>
            <!-- Left Wing -->
            <path class="wing wing-left" d="${leftWingFaceted}" fill="${actualFill}" stroke="${actualStroke}" stroke-width="${actualStrokeWidth}" stroke-linejoin="round"/>
            <!-- Right Wing -->
            <path class="wing wing-right" d="${rightWingFaceted}" fill="${actualFill}" stroke="${actualStroke}" stroke-width="${actualStrokeWidth}" stroke-linejoin="round"/>
            <!-- Center Negative Space Symmetry Axis -->
            <line class="symmetry-axis" x1="50" y1="12" x2="50" y2="88" stroke="${isOutline ? actualStroke : (actualFill === '#3A230A' ? '#EEE9C1' : '#3A230A')}" stroke-width="1.5" opacity="0.6"/>
          </g>
        </svg>
      `;
    },

    // Level 2: Fragment Family
    getLevel2Fragment: function(type = "2A", size = 64, color = "currentColor") {
      switch(type) {
        case "2A": // Single Right Wing (Forward Motion)
          return `
            <svg class="zaravi-fragment-2a" viewBox="0 0 50 100" width="${size/2}" height="${size}" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,15 C 15,22 34,34 35,48 L 12,50 L 32,62 C 26,76 14,83 0,85 Z" fill="${color}" stroke="none"/>
            </svg>
          `;
        case "2B": // Wing Pair Open (Revelation / Transition)
          return `
            <svg class="zaravi-fragment-2b" viewBox="0 0 120 100" width="${size * 1.2}" height="${size}" xmlns="http://www.w3.org/2000/svg">
              <path d="M 45,15 C 30,22 11,34 10,48 L 33,50 L 13,62 C 19,76 31,83 45,85 Z" fill="${color}"/>
              <path d="M 75,15 C 90,22 109,34 110,48 L 87,50 L 107,62 C 101,76 89,83 75,85 Z" fill="${color}"/>
              <line x1="60" y1="10" x2="60" y2="90" stroke="${color}" stroke-dasharray="2 4" stroke-width="1" opacity="0.4"/>
            </svg>
          `;
        case "2C": // Lower Wing Fragment (Foundation & Craft)
          return `
            <svg class="zaravi-fragment-2c" viewBox="0 0 60 50" width="${size}" height="${size*0.83}" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,5 L 22,17 C 16,31 4,38 -10,40 Z" fill="${color}" transform="translate(15,0)"/>
            </svg>
          `;
        case "2D": // Symmetry Axis Divider (Balance / Structure)
          return `
            <svg class="zaravi-fragment-2d" viewBox="0 0 20 100" width="20" height="${size}" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" y1="0" x2="10" y2="100" stroke="${color}" stroke-width="1.2"/>
              <path d="M 5,15 L 10,10 L 15,15 M 5,85 L 10,90 L 15,85" fill="none" stroke="${color}" stroke-width="1.2"/>
            </svg>
          `;
        case "2E": // Wing Vertex Apex (Aspiration & Peak)
          return `
            <svg class="zaravi-fragment-2e" viewBox="0 0 60 40" width="${size}" height="${size*0.66}" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10,35 C 25,18 45,8 55,5" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="55" cy="5" r="2.5" fill="${color}"/>
            </svg>
          `;
        default:
          return "";
      }
    },

    // Level 3: Pattern SVG Generator
    getLevel3PatternSVG: function(patternId = "3A", color = "#3A230A", opacity = 0.08) {
      if (patternId === "3A") { // Wing Tessellation
        return `
          <svg width="0" height="0" style="position:absolute">
            <defs>
              <pattern id="pattern-3a" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 15,8 C 22,12 28,18 28,25 L 20,25 C 25,32 23,38 15,42 Z" fill="${color}" opacity="${opacity}"/>
                <path d="M 45,38 C 52,42 58,48 58,55 L 50,55 C 55,62 53,68 45,72 Z" fill="${color}" opacity="${opacity}"/>
              </pattern>
            </defs>
          </svg>
        `;
      } else if (patternId === "3B") { // Facet Grid 15°
        return `
          <svg width="0" height="0" style="position:absolute">
            <defs>
              <pattern id="pattern-3b" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
                <path d="M 0 0 L 20 20 L 40 0 L 20 -20 Z" fill="none" stroke="${color}" stroke-width="0.8" opacity="${opacity}"/>
                <circle cx="20" cy="20" r="1" fill="${color}" opacity="${opacity * 1.5}"/>
              </pattern>
            </defs>
          </svg>
        `;
      } else if (patternId === "3C") { // Wing Vein Micro Structure
        return `
          <svg width="0" height="0" style="position:absolute">
            <defs>
              <pattern id="pattern-3c" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 0,40 Q 40,20 80,40 M 40,20 Q 55,5 80,0 M 40,20 Q 55,35 80,50 M 20,30 Q 30,15 40,10" fill="none" stroke="${color}" stroke-width="0.6" opacity="${opacity}"/>
              </pattern>
            </defs>
          </svg>
        `;
      }
      return "";
    },

    // Z Monogram (Jewelry Engraving & Small Scale)
    getZMonogram: function(size = 40, color = "currentColor", outline = true) {
      return `
        <svg class="zaravi-z-monogram" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <path d="M 22,25 H 78 L 30,75 H 78" fill="none" stroke="${color}" stroke-width="${outline ? 6 : 14}" stroke-linecap="square" stroke-linejoin="miter"/>
          <line x1="22" y1="20" x2="22" y2="35" stroke="${color}" stroke-width="${outline ? 6 : 14}"/>
          <line x1="78" y1="65" x2="78" y2="80" stroke="${color}" stroke-width="${outline ? 6 : 14}"/>
        </svg>
      `;
    },

    // Wax Seal Vector (Level 4B)
    getWaxSealSVG: function(size = 120) {
      return `
        <svg class="zaravi-wax-seal" viewBox="0 0 140 140" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="wax-depth" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#4E2F10"/>
              <stop offset="60%" stop-color="#3A230A"/>
              <stop offset="100%" stop-color="#211406"/>
            </radialGradient>
            <filter id="wax-bevel" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="rgba(0,0,0,0.4)"/>
              <feSpecularLighting surfaceScale="2" specularConstant="0.8" specularExponent="15" result="spec">
                <fePointLight x="40" y="30" z="60"/>
              </feSpecularLighting>
            </filter>
          </defs>
          <!-- Organic Melt Edge -->
          <path d="M 70,10 C 95,8 122,22 128,45 C 134,68 126,98 110,118 C 94,138 62,135 40,126 C 18,117 8,92 10,68 C 12,44 45,12 70,10 Z" fill="url(#wax-depth)" filter="url(#wax-bevel)"/>
          <!-- Inner Stamped Ridge -->
          <circle cx="70" cy="70" r="46" fill="none" stroke="#251608" stroke-width="2.5" opacity="0.6"/>
          <circle cx="70" cy="70" r="44" fill="none" stroke="#5A3714" stroke-width="1.2" opacity="0.7"/>
          <!-- Central Gold Butterfly Emboss -->
          <g transform="translate(45, 45) scale(0.5)">
            <path d="${leftWingFaceted}" fill="#C9A962" opacity="0.9"/>
            <path d="${rightWingFaceted}" fill="#C9A962" opacity="0.9"/>
            <line x1="50" y1="15" x2="50" y2="85" stroke="#EEE9C1" stroke-width="2"/>
          </g>
        </svg>
      `;
    },

    // Primary Wordmark SVG
    getWordmarkSVG: function(options = {}) {
      const {
        color = "currentColor",
        subscriptColor = "#A4530C",
        includeSubscript = true,
        width = 240,
        id = "zaravi-wordmark-vector"
      } = options;

      return `
        <svg id="${id}" class="zaravi-wordmark-svg" viewBox="0 0 400 ${includeSubscript ? 80 : 50}" width="${width}" height="${includeSubscript ? width * 0.2 : width * 0.125}" xmlns="http://www.w3.org/2000/svg">
          <text x="200" y="40" text-anchor="middle" font-family="'Playfair Display', Didot, 'Bodoni MT', serif" font-size="42" font-weight="500" letter-spacing="0.25em" fill="${color}">
            ZARAVI
          </text>
          ${includeSubscript ? `
            <text x="200" y="68" text-anchor="middle" font-family="'Inter', sans-serif" font-size="10" font-weight="500" letter-spacing="0.45em" fill="${subscriptColor}">
              JEWELRY
            </text>
          ` : ''}
        </svg>
      `;
    }
  };
})();
