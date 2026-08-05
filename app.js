// ============================================================
// Cozy Farm — Fruit Feeding Strategy Dashboard
// Clash of Critters camp allocation tool
// ============================================================

// --- Embedded Player Data ---
const PLAYER_DATA = {
  "18977827": { "Carrot": 100, "Dragon Fruit": 100, "Bamboo": 80 },
  "10048958": { "Carrot": 80, "Dragon Fruit": 80, "Bamboo": 70 },
  "10763613": { "Carrot": 80, "Dragon Fruit": 80, "Ghost Fruit": 80, "Bamboo": 90, "Clocko Fruit": 100 },
  "10002580": { "Carrot": 80, "Dragon Fruit": 80 },
  "10404376": { "Carrot": 70, "Ghost Fruit": 70, "Bamboo": 70, "Clocko Fruit": 80 },
  "18886393": { "Carrot": 80, "Dragon Fruit": 70, "Bamboo": 70 },
  "10187257": { "Carrot": 70, "Dragon Fruit": 70, "Ghost Fruit": 80, "Bamboo": 70, "Clocko Fruit": 70 },
  "10409514": { "Clocko Fruit": 100 },
  "10041728": { "Dragon Fruit": 80, "Bamboo": 80, "Carrot": 70 },
  "10092028": { "Carrot": 80, "Dragon Fruit": 70, "Bamboo": 70 },
  "10214454": { "Dragon Fruit": 70, "Clocko Fruit": 80 },
  "10086034": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 95 },
  "13682526": { "Carrot": 70, "Ghost Fruit": 80, "Bamboo": 80 },
  "13117515": { "Carrot": 100, "Dragon Fruit": 80, "Ghost Fruit": 80, "Bamboo": 100, "Clocko Fruit": 80 },
  "10327617": { "Carrot": 80, "Ghost Fruit": 80, "Clocko Fruit": 100 },
  "10094766": { "Carrot": 70 },
  "14736258": { "Carrot": 70, "Dragon Fruit": 90 },
  "10080156": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 70 },
  "10065853": { "Carrot": 70, "Bamboo": 70 },
  "10137032": { "Carrot": 70, "Bamboo": 70 },
  "10066347": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 70 },
  "10264905": { "Bamboo": 70 },
  "17424686": { "Dragon Fruit": 70 },
  "15276961": { "Dragon Fruit": 70 },
  "10334064": { "Carrot": 90, "Dragon Fruit": 70, "Clocko Fruit": 80 },
  "21007894": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 70 },
  "10795976": { "Dragon Fruit": 70, "Bamboo": 70 },
  "10693733": { "Bamboo": 80 },
  "10430602": { "Clocko Fruit": 70 },
  "10649142": { "Dragon Fruit": 70 },
  "10132613": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 70 },
  "10054910": { "Carrot": 70, "Dragon Fruit": 70 },
  "10101668": { "Clocko Fruit": 70 },
  "10063379": { "Dragon Fruit": 70, "Clocko Fruit": 70 },
  "10187363": { "Carrot": 70, "Bamboo": 70 },
  "10039686": { "Carrot": 70, "Dragon Fruit": 70, "Bamboo": 70 },
  "10292454": { "Carrot": 70, "Clocko Fruit": 70 },
  "10222693": { "Carrot": 70 },
  "12252537": { "Carrot": 70, "Dragon Fruit": 80 }
};

// --- Fruit Configuration (ordered by scarcity: scarcest first) ---
const FRUITS = [
  { name: 'Ghost Fruit', emoji: '👻', key: 'Ghost Fruit' },
  { name: 'Clocko Fruit', emoji: '⏰', key: 'Clocko Fruit' },
  { name: 'Bamboo', emoji: '🎋', key: 'Bamboo' },
  { name: 'Dragon Fruit', emoji: '🐉', key: 'Dragon Fruit' },
  { name: 'Carrot', emoji: '🥕', key: 'Carrot' },
];

// --- Tier Configuration ---
const TIERS = [
  { value: 100, label: 'MAX 100', cssClass: 'tier-100', color: '#dc2626' },
  { value: 95, label: '95+ Near Max', cssClass: 'tier-95', color: '#16a34a' },
  { value: 90, label: '90+ Very High', cssClass: 'tier-90', color: '#ca8a04' },
  { value: 80, label: '80+ High', cssClass: 'tier-80', color: '#ea580c' },
  { value: 70, label: '70+ Base', cssClass: 'tier-70', color: '#94a3b8' },
];

// --- Module State ---
let activeFruit = 'Ghost Fruit';

// ============================================================
// Core Logic
// ============================================================

/**
 * Classify a numeric value into a tier value (100, 95, 90, 80, 70).
 */
function classifyTier(value) {
  for (const tier of TIERS) {
    if (value >= tier.value) return tier.value;
  }
  return 70;
}

/**
 * Get the tier config object for a given tier value.
 */
function getTierConfig(tierValue) {
  return TIERS.find(t => t.value === tierValue) || TIERS[TIERS.length - 1];
}

/**
 * Get the fruit config object for a given fruit key.
 */
function getFruitConfig(fruitKey) {
  return FRUITS.find(f => f.key === fruitKey);
}

/**
 * Return array of { id, tier, overlapCount, overlaps } for all players
 * who have the given fruit.
 *
 * - tier: the numeric tier value for this fruit
 * - overlapCount: count of OTHER fruits this player has at 80+
 * - overlaps: array of { fruit, tier, emoji } for other fruits at 80+
 *
 * Sorted by: tier DESC, then overlapCount ASC
 */
function getPlayersForFruit(fruitKey) {
  const players = [];

  for (const [id, fruits] of Object.entries(PLAYER_DATA)) {
    if (!(fruitKey in fruits)) continue;

    const tier = classifyTier(fruits[fruitKey]);

    // Find overlapping fruits at 80+ (excluding the current fruit)
    const overlaps = [];
    for (const [otherFruit, otherValue] of Object.entries(fruits)) {
      if (otherFruit === fruitKey) continue;
      if (otherValue >= 80) {
        const fruitConfig = getFruitConfig(otherFruit);
        overlaps.push({
          fruit: otherFruit,
          tier: classifyTier(otherValue),
          emoji: fruitConfig ? fruitConfig.emoji : '🍎',
        });
      }
    }

    players.push({
      id,
      tier,
      overlapCount: overlaps.length,
      overlaps,
    });
  }

  // Sort: tier DESC, then overlapCount ASC
  players.sort((a, b) => {
    if (b.tier !== a.tier) return b.tier - a.tier;
    return a.overlapCount - b.overlapCount;
  });

  return players;
}

/**
 * Return the total count of fruits this player has at 80+ tier.
 */
function getCompetitionLevel(playerId) {
  const fruits = PLAYER_DATA[playerId];
  if (!fruits) return 0;
  return Object.values(fruits).filter(v => v >= 80).length;
}

/**
 * Return a strategy tip string for each fruit.
 */
function getStrategyNote(fruitKey) {
  const notes = {
    'Ghost Fruit': '🎯 Highest priority — only 6 camps total. Every placement counts. Target the 5 Orange-tier camps. Avoid overlapping with Clocko Fruit Red targets.',
    'Clocko Fruit': '⚡ Second priority — 12 camps, but 3 are Red (max). Snipe 10409514 first (Red, zero overlap). Then hit Orange camps that don\'t overlap with Ghost Fruit targets.',
    'Bamboo': '🎋 Third priority — 22 camps. Snipe 10086034 first (Green/95+, low competition in other fruits). Player 13117515 is RED here but extremely contested (RED in Carrot too).',
    'Dragon Fruit': '🐉 Fourth priority — 25 camps with good fallback. 14736258 is Yellow/90+ with minimal other fruit competition. Plenty of White-tier backup options.',
    'Carrot': '🥕 Last priority — 28 camps, most abundant. Maximum fallback options. Target the 2 Red camps only if they\'re not already taken for other fruits.',
  };
  return notes[fruitKey] || '';
}

// ============================================================
// Copy Functionality
// ============================================================

/**
 * Copy text to clipboard — robust for mobile.
 * Falls back to a visible, pre-selected textarea so the native "Copy" popup appears.
 */
function copyToClipboard(text, count) {
  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyToast(count, true);
    }).catch(() => {
      fallbackCopy(text, count);
    });
  } else {
    fallbackCopy(text, count);
  }
}

function fallbackCopy(text, count) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  // Make it visible enough for mobile to show the "Copy" context menu
  textarea.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    padding: 16px;
    font-size: 16px;
    font-family: monospace;
    background: #1e293b;
    color: #e2e8f0;
    border: 2px solid #6366f1;
    border-radius: 12px;
    z-index: 10000;
    opacity: 1;
    white-space: pre-wrap;
    max-height: 200px;
    overflow-y: auto;
  `;
  document.body.appendChild(textarea);

  // Select the content
  textarea.focus();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (e) {
    copied = false;
  }

  if (copied) {
    document.body.removeChild(textarea);
    showCopyToast(count, true);
  } else {
    // Could not auto-copy — leave textarea visible so user can manually copy
    showCopyToast(count, false);
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (textarea.parentNode) {
        document.body.removeChild(textarea);
      }
    }, 5000);
    // Remove on tap outside
    const removeOnTap = (e) => {
      if (e.target !== textarea) {
        if (textarea.parentNode) document.body.removeChild(textarea);
        document.removeEventListener('touchstart', removeOnTap);
        document.removeEventListener('click', removeOnTap);
      }
    };
    document.addEventListener('touchstart', removeOnTap);
    document.addEventListener('click', removeOnTap);
  }
}

/**
 * Show a copy toast notification.
 */
function showCopyToast(count, success) {
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  if (success) {
    toast.innerHTML = `✅ Copied ${count} player ID${count !== 1 ? 's' : ''}!`;
  } else {
    toast.innerHTML = `📋 Text selected — long press & tap "Copy"`;
  }
  toast.classList.remove('toast-hide');
  toast.classList.add('toast-show');

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
  }, success ? 2000 : 4000);
}

// ============================================================
// UI Rendering
// ============================================================

/**
 * Render fruit tab buttons into #fruit-tabs.
 */
function renderFruitTabs() {
  const container = document.getElementById('fruit-tabs');
  container.innerHTML = '';

  for (const fruit of FRUITS) {
    const count = getPlayersForFruit(fruit.key).length;
    const isActive = activeFruit === fruit.key;

    const btn = document.createElement('button');
    btn.className = `fruit-tab${isActive ? ' active' : ''}`;
    btn.dataset.fruit = fruit.key;
    btn.innerHTML = `
      <span class="fruit-emoji">${fruit.emoji}</span>
      <span>${fruit.name}</span>
      <span class="scarcity-badge">${count}</span>
    `;
    btn.addEventListener('click', () => {
      activeFruit = fruit.key;
      // Update active states
      container.querySelectorAll('.fruit-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderFruitSection(fruit.key);
    });

    container.appendChild(btn);
  }
}

/**
 * Render the full content section for a given fruit.
 */
function renderFruitSection(fruitKey) {
  const container = document.getElementById('fruit-content');
  const players = getPlayersForFruit(fruitKey);
  const fruitConfig = getFruitConfig(fruitKey);

  // Group players by tier
  const tierGroups = {};
  for (const tier of TIERS) {
    tierGroups[tier.value] = players.filter(p => p.tier === tier.value);
  }

  // All IDs sorted by tier (highest first) for the "Copy All" button
  const allIds = players.map(p => p.id);

  let html = '';

  // --- Full Page Copy Button ---
  html += `
    <button class="copy-all-fruit-btn" data-copy-ids="${allIds.join(',')}" data-copy-count="${allIds.length}">
      📋 Copy All ${allIds.length} IDs for ${fruitConfig.emoji} ${fruitConfig.name}
    </button>
  `;

  // --- Strategy Note ---
  html += `
    <div class="strategy-note">
      ${getStrategyNote(fruitKey)}
    </div>
  `;

  // --- Tier Groups ---
  for (const tier of TIERS) {
    const tierPlayers = tierGroups[tier.value];
    if (tierPlayers.length === 0) continue;

    const tierIds = tierPlayers.map(p => p.id);

    html += `
      <div class="tier-group">
        <div class="tier-group-header">
          <div class="tier-label">
            <span class="tier-dot" style="background: ${tier.color}"></span>
            <span>${tier.label}</span>
          </div>
          <div class="tier-header-actions">
            <span class="count-badge">${tierPlayers.length} player${tierPlayers.length !== 1 ? 's' : ''}</span>
            <button class="copy-all-btn" data-copy-ids="${tierIds.join(',')}" data-copy-count="${tierIds.length}">
              📋 Copy All IDs
            </button>
          </div>
        </div>
        <div class="player-grid">
          ${tierPlayers.map(player => renderPlayerBadge(player, tier, fruitKey)).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // --- Attach copy event listeners via delegation ---
  container.querySelectorAll('[data-copy-ids]').forEach(btn => {
    btn.addEventListener('click', () => {
      const ids = btn.dataset.copyIds.split(',');
      const count = parseInt(btn.dataset.copyCount, 10);
      copyToClipboard(ids.join('\n'), count);
    });
  });
  container.querySelectorAll('[data-copy-single]').forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard(btn.dataset.copySingle, 1);
    });
  });
}

/**
 * Render a single player badge card.
 */
function renderPlayerBadge(player, tier, currentFruit) {
  const competitionLevel = getCompetitionLevel(player.id);
  const highCompetition = competitionLevel >= 3;

  let overlapsHtml = '';
  if (player.overlaps.length > 0) {
    overlapsHtml = `
      <div class="overlap-badges">
        ${player.overlaps.map(o => {
          const oTier = getTierConfig(o.tier);
          return `<span class="overlap-dot" style="background: ${oTier.color}" title="${o.fruit} (${o.tier})">${o.emoji}</span>`;
        }).join('')}
      </div>
    `;
  }

  const warningHtml = highCompetition
    ? `<div class="competition-warning">⚠️ High competition (${competitionLevel} fruits at 80+)</div>`
    : '';

  return `
    <div class="player-badge" style="border-left-color: ${tier.color}">
      <div class="player-badge-header">
        <div class="player-id-block">
          <span class="player-id-label">Player ID</span>
          <span class="player-id-text">${player.id}</span>
        </div>
        <button class="copy-btn" data-copy-single="${player.id}" title="Copy ID">
          📋
        </button>
      </div>
      ${overlapsHtml}
      ${warningHtml}
    </div>
  `;
}

// ============================================================
// Initialization
// ============================================================

function init() {
  activeFruit = 'Ghost Fruit';
  renderFruitTabs();
  renderFruitSection('Ghost Fruit');
}

document.addEventListener('DOMContentLoaded', init);
