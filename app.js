// ============================================================
// Cozy Farm — Fruit Feeding Strategy Dashboard (V2)
// Clash of Critters camp allocation tool — 79 Players Data
// ============================================================

// --- Embedded Player Data (79 Players) ---
const PLAYER_DATA = {
  "10094766": {
    "Dragon Fruit": 67,
    "Bamboo": 67,
    "Carrot": 69,
    "Ghost Fruit": 55,
    "Clocko Fruit": 63
  },
  "14736258": {
    "Dragon Fruit": 89,
    "Bamboo": 66,
    "Carrot": 78,
    "Ghost Fruit": 63,
    "Clocko Fruit": 66
  },
  "10080156": {
    "Dragon Fruit": 70,
    "Bamboo": 70,
    "Carrot": 72,
    "Ghost Fruit": 58,
    "Clocko Fruit": 50
  },
  "10065853": {
    "Dragon Fruit": 67,
    "Bamboo": 70,
    "Carrot": 72,
    "Ghost Fruit": 42,
    "Clocko Fruit": 63
  },
  "10137032": {
    "Dragon Fruit": 67,
    "Bamboo": 69,
    "Carrot": 70,
    "Ghost Fruit": 63,
    "Clocko Fruit": 60
  },
  "10066347": {
    "Dragon Fruit": 76,
    "Bamboo": 69,
    "Carrot": 69,
    "Ghost Fruit": 54,
    "Clocko Fruit": 52
  },
  "10264905": {
    "Dragon Fruit": 68,
    "Bamboo": 71,
    "Carrot": 67,
    "Ghost Fruit": 66,
    "Clocko Fruit": 42
  },
  "10544332": {
    "Dragon Fruit": 63,
    "Bamboo": 64,
    "Carrot": 68,
    "Ghost Fruit": 39,
    "Clocko Fruit": 52
  },
  "10002580": {
    "Dragon Fruit": 87,
    "Bamboo": 68,
    "Carrot": 84,
    "Ghost Fruit": 63,
    "Clocko Fruit": 64
  },
  "10404376": {
    "Dragon Fruit": 67,
    "Bamboo": 71,
    "Carrot": 70,
    "Ghost Fruit": 77,
    "Clocko Fruit": 82
  },
  "11704389": {
    "Dragon Fruit": 61,
    "Bamboo": 63,
    "Carrot": 57,
    "Ghost Fruit": 40,
    "Clocko Fruit": 66
  },
  "17424686": {
    "Dragon Fruit": 72,
    "Bamboo": 64,
    "Carrot": 65,
    "Ghost Fruit": 39,
    "Clocko Fruit": 49
  },
  "10303958": {
    "Dragon Fruit": 65,
    "Bamboo": 64,
    "Carrot": 67,
    "Ghost Fruit": 56,
    "Clocko Fruit": 66
  },
  "10131593": {
    "Dragon Fruit": 65,
    "Bamboo": 65,
    "Carrot": 68,
    "Ghost Fruit": 58,
    "Clocko Fruit": 64
  },
  "10219371": {
    "Dragon Fruit": 64,
    "Bamboo": 64,
    "Carrot": 67,
    "Ghost Fruit": 38,
    "Clocko Fruit": 49
  },
  "15276961": {
    "Dragon Fruit": 73,
    "Bamboo": 63,
    "Carrot": 66,
    "Ghost Fruit": 50,
    "Clocko Fruit": 39
  },
  "10048958": {
    "Dragon Fruit": 84,
    "Bamboo": 78,
    "Carrot": 87,
    "Ghost Fruit": 57,
    "Clocko Fruit": 48
  },
  "18977827": {
    "Dragon Fruit": 100,
    "Bamboo": 92,
    "Carrot": 99,
    "Ghost Fruit": 62,
    "Clocko Fruit": 60
  },
  "10763613": {
    "Dragon Fruit": 79,
    "Bamboo": 90,
    "Carrot": 88,
    "Ghost Fruit": 83,
    "Clocko Fruit": 100
  },
  "18886393": {
    "Dragon Fruit": 72,
    "Bamboo": 75,
    "Carrot": 82,
    "Ghost Fruit": 51,
    "Clocko Fruit": 56
  },
  "10334064": {
    "Dragon Fruit": 70,
    "Bamboo": 65,
    "Carrot": 91,
    "Ghost Fruit": 65,
    "Clocko Fruit": 81
  },
  "10213126": {
    "Dragon Fruit": 67,
    "Bamboo": 68,
    "Carrot": 68,
    "Ghost Fruit": 64,
    "Clocko Fruit": 63
  },
  "10388368": {
    "Dragon Fruit": 65,
    "Bamboo": 61,
    "Carrot": 68,
    "Ghost Fruit": 65,
    "Clocko Fruit": 66
  },
  "21007894": {
    "Dragon Fruit": 74,
    "Bamboo": 69,
    "Carrot": 76,
    "Ghost Fruit": 52,
    "Clocko Fruit": 65
  },
  "10187257": {
    "Dragon Fruit": 69,
    "Bamboo": 73,
    "Carrot": 70,
    "Ghost Fruit": 79,
    "Clocko Fruit": 71
  },
  "10254632": {
    "Dragon Fruit": 65,
    "Bamboo": 65,
    "Carrot": 67,
    "Ghost Fruit": 51,
    "Clocko Fruit": 64
  },
  "10392768": {
    "Dragon Fruit": 65,
    "Bamboo": 66,
    "Carrot": 67,
    "Ghost Fruit": 63,
    "Clocko Fruit": 63
  },
  "10795976": {
    "Dragon Fruit": 71,
    "Bamboo": 70,
    "Carrot": 66,
    "Ghost Fruit": 53,
    "Clocko Fruit": 54
  },
  "10284645": {
    "Dragon Fruit": 63,
    "Bamboo": 64,
    "Carrot": 66,
    "Ghost Fruit": 48,
    "Clocko Fruit": 63
  },
  "10693733": {
    "Dragon Fruit": 63,
    "Bamboo": 81,
    "Carrot": 65,
    "Ghost Fruit": 49,
    "Clocko Fruit": 40
  },
  "10409514": {
    "Dragon Fruit": 64,
    "Bamboo": 65,
    "Carrot": 67,
    "Ghost Fruit": 63,
    "Clocko Fruit": 98
  },
  "10430602": {
    "Dragon Fruit": 63,
    "Bamboo": 64,
    "Carrot": 67,
    "Ghost Fruit": 55,
    "Clocko Fruit": 77
  },
  "10088121": {
    "Dragon Fruit": 61,
    "Bamboo": 56,
    "Carrot": 50,
    "Ghost Fruit": 39,
    "Clocko Fruit": 38
  },
  "10294719": {
    "Dragon Fruit": 64,
    "Bamboo": 64,
    "Carrot": 53,
    "Ghost Fruit": 64,
    "Clocko Fruit": 63
  },
  "10041728": {
    "Dragon Fruit": 81,
    "Bamboo": 80,
    "Carrot": 74,
    "Ghost Fruit": 64,
    "Clocko Fruit": 65
  },
  "10649142": {
    "Dragon Fruit": 73,
    "Bamboo": 65,
    "Carrot": 66,
    "Ghost Fruit": 41,
    "Clocko Fruit": 54
  },
  "10654816": {
    "Dragon Fruit": 67,
    "Bamboo": 67,
    "Carrot": 67,
    "Ghost Fruit": 42,
    "Clocko Fruit": 60
  },
  "10132613": {
    "Dragon Fruit": 77,
    "Bamboo": 77,
    "Carrot": 72,
    "Ghost Fruit": 55,
    "Clocko Fruit": 65
  },
  "10092028": {
    "Dragon Fruit": 69,
    "Bamboo": 72,
    "Carrot": 87,
    "Ghost Fruit": 66,
    "Clocko Fruit": 58
  },
  "10016173": {
    "Dragon Fruit": 68,
    "Bamboo": 65,
    "Carrot": 68,
    "Ghost Fruit": 40,
    "Clocko Fruit": 39
  },
  "10932485": {
    "Dragon Fruit": 62,
    "Bamboo": 64,
    "Carrot": 66,
    "Ghost Fruit": 51,
    "Clocko Fruit": 63
  },
  "10402145": {
    "Dragon Fruit": 63,
    "Bamboo": 66,
    "Carrot": 66,
    "Ghost Fruit": 55,
    "Clocko Fruit": 53
  },
  "10962653": {
    "Dragon Fruit": 62,
    "Bamboo": 64,
    "Carrot": 66,
    "Ghost Fruit": 51,
    "Clocko Fruit": 63
  },
  "10097472": {
    "Dragon Fruit": 67,
    "Bamboo": 64,
    "Carrot": 66,
    "Ghost Fruit": 59,
    "Clocko Fruit": 60
  },
  "10054910": {
    "Dragon Fruit": 75,
    "Bamboo": 66,
    "Carrot": 71,
    "Ghost Fruit": 54,
    "Clocko Fruit": 57
  },
  "11964528": {
    "Dragon Fruit": 50,
    "Bamboo": 63,
    "Carrot": 58,
    "Ghost Fruit": 39,
    "Clocko Fruit": 63
  },
  "10214454": {
    "Dragon Fruit": 69,
    "Bamboo": 64,
    "Carrot": 67,
    "Ghost Fruit": 41,
    "Clocko Fruit": 82
  },
  "10101668": {
    "Dragon Fruit": 65,
    "Bamboo": 65,
    "Carrot": 67,
    "Ghost Fruit": 49,
    "Clocko Fruit": 76
  },
  "11033831": {
    "Dragon Fruit": 62,
    "Bamboo": 63,
    "Carrot": 55,
    "Ghost Fruit": 43,
    "Clocko Fruit": 51
  },
  "10086034": {
    "Dragon Fruit": 74,
    "Bamboo": 96,
    "Carrot": 76,
    "Ghost Fruit": 64,
    "Clocko Fruit": 63
  },
  "10063379": {
    "Dragon Fruit": 70,
    "Bamboo": 62,
    "Carrot": 68,
    "Ghost Fruit": 64,
    "Clocko Fruit": 71
  },
  "10998246": {
    "Dragon Fruit": 59,
    "Bamboo": 49,
    "Carrot": 50,
    "Ghost Fruit": 40,
    "Clocko Fruit": 41
  },
  "13682526": {
    "Dragon Fruit": 62,
    "Bamboo": 82,
    "Carrot": 75,
    "Ghost Fruit": 81,
    "Clocko Fruit": 68
  },
  "13117515": {
    "Dragon Fruit": 80,
    "Bamboo": 99,
    "Carrot": 100,
    "Ghost Fruit": 80,
    "Clocko Fruit": 81
  },
  "10327617": {
    "Dragon Fruit": 68,
    "Bamboo": 68,
    "Carrot": 86,
    "Ghost Fruit": 83,
    "Clocko Fruit": 100
  },
  "10187363": {
    "Dragon Fruit": 67,
    "Bamboo": 75,
    "Carrot": 70,
    "Ghost Fruit": 65,
    "Clocko Fruit": 67
  },
  "10039686": {
    "Dragon Fruit": 70,
    "Bamboo": 69,
    "Carrot": 69,
    "Ghost Fruit": 66,
    "Clocko Fruit": 64
  },
  "10292454": {
    "Dragon Fruit": 66,
    "Bamboo": 53,
    "Carrot": 77,
    "Ghost Fruit": 51,
    "Clocko Fruit": 78
  },
  "10222693": {
    "Dragon Fruit": 64,
    "Bamboo": 56,
    "Carrot": 70,
    "Ghost Fruit": 49,
    "Clocko Fruit": 64
  },
  "12252537": {
    "Dragon Fruit": 80,
    "Bamboo": 67,
    "Carrot": 70,
    "Ghost Fruit": 64,
    "Clocko Fruit": 68
  },
  "12312582": {
    "Dragon Fruit": 62,
    "Bamboo": 54,
    "Carrot": 66,
    "Ghost Fruit": 44,
    "Clocko Fruit": 63
  },
  "20475501": {
    "Dragon Fruit": 79,
    "Bamboo": 71,
    "Carrot": 96,
    "Ghost Fruit": 53,
    "Clocko Fruit": 75
  },
  "17207086": {
    "Dragon Fruit": 51,
    "Bamboo": 63,
    "Carrot": 53,
    "Ghost Fruit": 39,
    "Clocko Fruit": 73
  },
  "13740226": {
    "Dragon Fruit": 51,
    "Bamboo": 63,
    "Carrot": 75,
    "Ghost Fruit": 46,
    "Clocko Fruit": 58
  },
  "19188406": {
    "Dragon Fruit": 62,
    "Bamboo": 64,
    "Carrot": 75,
    "Ghost Fruit": 49,
    "Clocko Fruit": 52
  },
  "16069753": {
    "Dragon Fruit": 64,
    "Bamboo": 70,
    "Carrot": 70,
    "Ghost Fruit": 52,
    "Clocko Fruit": 71
  },
  "13128926": {
    "Dragon Fruit": 65,
    "Bamboo": 65,
    "Carrot": 68,
    "Ghost Fruit": 63,
    "Clocko Fruit": 67
  },
  "14333534": {
    "Dragon Fruit": 67,
    "Bamboo": 68,
    "Carrot": 81,
    "Ghost Fruit": 65,
    "Clocko Fruit": 65
  },
  "14288941": {
    "Dragon Fruit": 57,
    "Bamboo": 53,
    "Carrot": 52,
    "Ghost Fruit": 39,
    "Clocko Fruit": 49
  },
  "13087810": {
    "Dragon Fruit": 90,
    "Bamboo": 88,
    "Carrot": 79,
    "Ghost Fruit": 65,
    "Clocko Fruit": 81
  },
  "18956579": {
    "Dragon Fruit": 61,
    "Bamboo": 64,
    "Carrot": 76,
    "Ghost Fruit": 42,
    "Clocko Fruit": 63
  },
  "15649496": {
    "Dragon Fruit": 62,
    "Bamboo": 64,
    "Carrot": 65,
    "Ghost Fruit": 49,
    "Clocko Fruit": 49
  },
  "16949366": {
    "Dragon Fruit": 52,
    "Bamboo": 63,
    "Carrot": 54,
    "Ghost Fruit": 42,
    "Clocko Fruit": 50
  },
  "12159168": {
    "Dragon Fruit": 66,
    "Bamboo": 66,
    "Carrot": 80,
    "Ghost Fruit": 79,
    "Clocko Fruit": 100
  },
  "19217276": {
    "Dragon Fruit": 61,
    "Bamboo": 64,
    "Carrot": 68,
    "Ghost Fruit": 40,
    "Clocko Fruit": 78
  },
  "19470642": {
    "Dragon Fruit": 62,
    "Bamboo": 74,
    "Carrot": 65,
    "Ghost Fruit": 50,
    "Clocko Fruit": 51
  },
  "19757011": {
    "Dragon Fruit": 61,
    "Bamboo": 64,
    "Carrot": 66,
    "Ghost Fruit": 44,
    "Clocko Fruit": 51
  },
  "17942729": {
    "Dragon Fruit": 61,
    "Bamboo": 64,
    "Carrot": 65,
    "Ghost Fruit": 49,
    "Clocko Fruit": 70
  },
  "12148870": {
    "Dragon Fruit": 63,
    "Bamboo": 75,
    "Carrot": 66,
    "Ghost Fruit": 63,
    "Clocko Fruit": 64
  }
};

// --- Fruit Configuration (ordered by scarcity: scarcest first) ---
const FRUITS = [
  { name: "Ghost Fruit", emoji: "👻", key: "Ghost Fruit", count80: 4 },
  { name: "Bamboo", emoji: "🎋", key: "Bamboo", count80: 8 },
  { name: "Dragon Fruit", emoji: "🐉", key: "Dragon Fruit", count80: 8 },
  { name: "Clocko Fruit", emoji: "⏰", key: "Clocko Fruit", count80: 9 },
  { name: "Carrot", emoji: "🥕", key: "Carrot", count80: 12 },
];

// --- 9-Tier Configuration ---
const TIERS = [
  { min: 95, max: 100, label: "95-100 Max/S-Tier", cssClass: "tier-95", color: "#dc2626" },
  { min: 90, max: 94,  label: "90-94 Elite",      cssClass: "tier-90", color: "#16a34a" },
  { min: 85, max: 89,  label: "85-89 Very High",  cssClass: "tier-85", color: "#c2410c" },
  { min: 80, max: 84,  label: "80-84 High",       cssClass: "tier-80", color: "#ea580c" },
  { min: 75, max: 79,  label: "75-79 Good",       cssClass: "tier-75", color: "#d97706" },
  { min: 70, max: 74,  label: "70-74 Above Avg",  cssClass: "tier-70", color: "#eab308" },
  { min: 65, max: 69,  label: "65-69 Average",    cssClass: "tier-65", color: "#fbbf24" },
  { min: 60, max: 64,  label: "60-64 Below Avg",  cssClass: "tier-60", color: "#64748b" },
  { min: 0,  max: 59,  label: "<60 Low",          cssClass: "tier-low", color: "#334155" },
];

// --- Module State ---
let activeFruit = "Ghost Fruit";

// ============================================================
// Core Logic
// ============================================================

function getTierConfig(val) {
  for (const tier of TIERS) {
    if (val >= tier.min) return tier;
  }
  return TIERS[TIERS.length - 1];
}

function getFruitConfig(fruitKey) {
  return FRUITS.find(f => f.key === fruitKey);
}

function getPlayersForFruit(fruitKey) {
  const players = [];

  for (const [id, fruits] of Object.entries(PLAYER_DATA)) {
    if (!(fruitKey in fruits)) continue;

    const val = fruits[fruitKey];
    const tierConfig = getTierConfig(val);

    // Overlapping fruits at 80+
    const overlaps = [];
    for (const [otherFruit, otherValue] of Object.entries(fruits)) {
      if (otherFruit === fruitKey) continue;
      if (otherValue >= 80) {
        const fruitConfig = getFruitConfig(otherFruit);
        const oTier = getTierConfig(otherValue);
        overlaps.push({
          fruit: otherFruit,
          value: otherValue,
          emoji: fruitConfig ? fruitConfig.emoji : "🍎",
          color: oTier.color
        });
      }
    }

    players.push({
      id,
      value: val,
      tierMin: tierConfig.min,
      tierConfig,
      overlapCount: overlaps.length,
      overlaps
    });
  }

  // Sort by value DESC, then overlapCount ASC
  players.sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    return a.overlapCount - b.overlapCount;
  });

  return players;
}

function getCompetitionLevel(playerId) {
  const fruits = PLAYER_DATA[playerId];
  if (!fruits) return 0;
  return Object.values(fruits).filter(v => v >= 80).length;
}

function getStrategyNote(fruitKey) {
  const notes = {
    "Ghost Fruit": "🎯 Highest Priority — Only 4 camps at 80+ (Max 83). Crucial fallback in 65-69 (8 camps) and 60-64 (14 camps).",
    "Bamboo": "🎋 Second Priority — 8 camps at 80+, 2 at 95+ (13117515=99, 10086034=96). Snipe 10086034 first (low competition in other fruits).",
    "Dragon Fruit": "🐉 Third Priority — 8 camps at 80+, 1 Max 100 (18977827) and 1 90 (13087810). Strong 70-79 pool.",
    "Clocko Fruit": "⏰ Fourth Priority — 9 camps at 80+, including 3 Max 100 camps (10763613, 10327617, 12159168) and 1 98 camp (10409514).",
    "Carrot": "🥕 Fifth Priority — 12 camps at 80+, most abundant. 3 camps at 95+ (13117515=100, 18977827=99, 20475501=96). Maximum fallback options."
  };
  return notes[fruitKey] || "";
}

// ============================================================
// Copy Functionality
// ============================================================

function copyToClipboard(text, count) {
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
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
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
  textarea.focus();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (e) {
    copied = false;
  }

  if (copied) {
    document.body.removeChild(textarea);
    showCopyToast(count, true);
  } else {
    showCopyToast(count, false);
    setTimeout(() => {
      if (textarea.parentNode) document.body.removeChild(textarea);
    }, 5000);
    const removeOnTap = (e) => {
      if (e.target !== textarea) {
        if (textarea.parentNode) document.body.removeChild(textarea);
        document.removeEventListener("touchstart", removeOnTap);
        document.removeEventListener("click", removeOnTap);
      }
    };
    document.addEventListener("touchstart", removeOnTap);
    document.addEventListener("click", removeOnTap);
  }
}

function showCopyToast(count, success) {
  let toast = document.querySelector(".copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }

  if (success) {
    toast.innerHTML = `✅ Copied ${count} player ID${count !== 1 ? "s" : ""}!`;
  } else {
    toast.innerHTML = `📋 Text selected — long press & tap "Copy"`;
  }
  toast.classList.remove("toast-hide");
  toast.classList.add("toast-show");

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove("toast-show");
    toast.classList.add("toast-hide");
  }, success ? 2000 : 4000);
}

// ============================================================
// UI Rendering
// ============================================================

function renderFruitTabs() {
  const container = document.getElementById("fruit-tabs");
  container.innerHTML = "";

  for (const fruit of FRUITS) {
    const players = getPlayersForFruit(fruit.key);
    const count80 = players.filter(p => p.value >= 80).length;
    const isActive = activeFruit === fruit.key;

    const btn = document.createElement("button");
    btn.className = `fruit-tab${isActive ? " active" : ""}`;
    btn.dataset.fruit = fruit.key;
    btn.innerHTML = `
      <span class="fruit-emoji">${fruit.emoji}</span>
      <span>${fruit.name}</span>
      <span class="scarcity-badge" title="${count80} camps at 80+">${count80} High</span>
    `;
    btn.addEventListener("click", () => {
      activeFruit = fruit.key;
      container.querySelectorAll(".fruit-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      renderFruitSection(fruit.key);
    });

    container.appendChild(btn);
  }
}

function renderFruitSection(fruitKey) {
  const container = document.getElementById("fruit-content");
  const players = getPlayersForFruit(fruitKey);
  const fruitConfig = getFruitConfig(fruitKey);

  // Group players by tier
  const tierGroups = {};
  for (const tier of TIERS) {
    tierGroups[tier.min] = players.filter(p => p.tierMin === tier.min);
  }

  const allIds = players.map(p => p.id);

  let html = "";

  // Full Page Copy Button
  html += `
    <button class="copy-all-fruit-btn" data-copy-ids="${allIds.join(",")}" data-copy-count="${allIds.length}">
      📋 Copy All ${allIds.length} IDs for ${fruitConfig.emoji} ${fruitConfig.name}
    </button>
  `;

  // Strategy Note
  html += `
    <div class="strategy-note">
      ${getStrategyNote(fruitKey)}
    </div>
  `;

  // Tier Groups
  for (const tier of TIERS) {
    const tierPlayers = tierGroups[tier.min];
    if (!tierPlayers || tierPlayers.length === 0) continue;

    const tierIds = tierPlayers.map(p => p.id);

    html += `
      <div class="tier-group">
        <div class="tier-group-header">
          <div class="tier-label">
            <span class="tier-dot" style="background: ${tier.color}"></span>
            <span>${tier.label}</span>
          </div>
          <div class="tier-header-actions">
            <span class="count-badge">${tierPlayers.length} player${tierPlayers.length !== 1 ? "s" : ""}</span>
            <button class="copy-all-btn" data-copy-ids="${tierIds.join(",")}" data-copy-count="${tierIds.length}">
              📋 Copy Tier IDs
            </button>
          </div>
        </div>
        <div class="player-grid">
          ${tierPlayers.map(player => renderPlayerBadge(player, tier, fruitKey)).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // Event Delegation for Copy
  container.querySelectorAll("[data-copy-ids]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ids = btn.dataset.copyIds.split(",");
      const count = parseInt(btn.dataset.copyCount, 10);
      copyToClipboard(ids.join("\n"), count);
    });
  });
  container.querySelectorAll("[data-copy-single]").forEach(btn => {
    btn.addEventListener("click", () => {
      copyToClipboard(btn.dataset.copySingle, 1);
    });
  });
}

function renderPlayerBadge(player, tier, currentFruit) {
  const competitionLevel = getCompetitionLevel(player.id);
  const highCompetition = competitionLevel >= 3;

  let overlapsHtml = "";
  if (player.overlaps.length > 0) {
    overlapsHtml = `
      <div class="overlap-badges">
        ${player.overlaps.map(o => `
          <span class="overlap-pill" style="border-color: ${o.color}" title="${o.fruit}: ${o.value}">
            <span class="overlap-dot" style="background: ${o.color}"></span>
            <span>${o.emoji} ${o.value}</span>
          </span>
        `).join("")}
      </div>
    `;
  }

  const warningHtml = highCompetition
    ? `<div class="competition-warning">⚠️ High competition (${competitionLevel} fruits at 80+)</div>`
    : "";

  return `
    <div class="player-badge" style="border-left-color: ${tier.color}">
      <div class="player-badge-header">
        <div class="player-id-block">
          <span class="player-id-label">Player ID</span>
          <span class="player-id-text">${player.id}</span>
        </div>
        <div class="player-value-badge" style="background: ${tier.color}">
          ${player.value}
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
  activeFruit = "Ghost Fruit";
  renderFruitTabs();
  renderFruitSection("Ghost Fruit");
}

document.addEventListener("DOMContentLoaded", init);
