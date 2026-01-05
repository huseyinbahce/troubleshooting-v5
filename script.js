:root {
  --ink: #1e2227;
  --slate: #2b3137;
  --primary: #3369a3;
  --accent: #70a1d7;
  --bg: #ffffff;
  --border: #dfe6ee;
  --muted: #5b6370;
  --shadow: 0 12px 30px rgba(30, 34, 39, 0.08);
}

@keyframes floaty {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  margin: 0;
  color: var(--slate);
}

p {
  margin: 0 0 0.75rem;
  color: var(--muted);
}

ul {
  margin: 0;
  padding: 0;
}

.top-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1.25rem clamp(1.25rem, 4vw, 2rem);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
}

.header-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.lang-toggle {
  display: inline-flex;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(51, 105, 163, 0.06), rgba(255, 255, 255, 0.9));
  box-shadow: var(--shadow);
  overflow: hidden;
}

.lang-btn {
  border: none;
  background: transparent;
  padding: 0.6rem 0.95rem;
  color: var(--slate);
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.lang-btn:hover,
.lang-btn:focus-visible {
  color: var(--primary);
  outline: none;
  background: rgba(112, 161, 215, 0.08);
}

.lang-btn.active {
  background: linear-gradient(135deg, rgba(51, 105, 163, 0.16), rgba(112, 161, 215, 0.14));
  color: var(--primary);
}

.return-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  color: var(--slate);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  background: linear-gradient(135deg, rgba(51, 105, 163, 0.06), rgba(255, 255, 255, 0.8));
  box-shadow: var(--shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.return-link:hover,
.return-link:focus-visible {
  border-color: var(--primary);
  box-shadow: 0 14px 32px rgba(51, 105, 163, 0.14);
  transform: translateY(-1px);
  outline: none;
}

.brand {
  display: flex;
  gap: 0.85rem;
  align-items: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
}

.brand-logo {
  width: 150px;
  height: auto;
}

.eyebrow {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--primary);
  margin: 0;
  font-weight: 700;
}

.lede {
  max-width: 52ch;
}

.main-menu {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.menu-button {
  border: 1px solid var(--border);
  background: #f7f9fb;
  color: var(--slate);
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-button:hover:not(.disabled) {
  border-color: var(--primary);
  color: var(--primary);
  box-shadow: 0 10px 30px rgba(51, 105, 163, 0.12);
}

.menu-button.active {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(51, 105, 163, 0.08), rgba(112, 161, 215, 0.08));
  color: var(--primary);
}

.menu-button.disabled {
  cursor: not-allowed;
  color: #98a1af;
  background: #f3f5f7;
}

main {
  padding: clamp(1.5rem, 5vw, 2.5rem);
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: grid;
  gap: 2rem;
}

.content-section {
  display: grid;
  gap: 1.25rem;
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: 2rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid var(--border);
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(112, 161, 215, 0.1), rgba(255, 255, 255, 0.8));
  animation: riseIn 0.8s ease both;
}

.hero-graphic {
  position: relative;
  min-height: 220px;
  display: grid;
  place-items: center;
}

.hero-image {
  width: 100%;
  max-width: 460px;
  height: auto;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  background: #fff;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.primary-cta {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 0.8rem 1.1rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.primary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 32px rgba(51, 105, 163, 0.18);
}

.ghost-cta {
  background: transparent;
  color: var(--slate);
  border: 1px dashed var(--border);
  padding: 0.8rem 1.1rem;
  border-radius: 12px;
  font-weight: 700;
}

.ghost-cta.disabled {
  color: #9ba3b1;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  animation: riseIn 0.75s ease both 0.05s;
}

.menu-card {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1rem 1.1rem;
  background: #fff;
  box-shadow: var(--shadow);
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-card.disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
}

.menu-card:not(.disabled):hover,
.menu-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 16px 38px rgba(30, 34, 39, 0.12);
  outline: none;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.pill {
  background: rgba(51, 105, 163, 0.1);
  color: var(--primary);
  border-radius: 20px;
  padding: 0.2rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;
}

.pill.muted {
  background: #eef2f6;
  color: #7a8290;
}

.chevron {
  position: absolute;
  right: 14px;
  bottom: 14px;
  color: var(--primary);
  font-weight: 800;
}

.section-header {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: start;
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.section-head-left {
  display: grid;
  gap: 0.35rem;
}

.section-title {
  margin: 0 0 0.35rem 0;
}

.section-subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 48ch;
}

.section-head-right {
  display: grid;
  gap: 0.8rem;
  align-content: start;
  justify-items: end;
}

.header-visual {
  width: min(340px, 100%);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.75rem;
  background: linear-gradient(135deg, rgba(112, 161, 215, 0.14), rgba(51, 105, 163, 0.08));
  box-shadow: 0 12px 28px rgba(30, 34, 39, 0.08);
}

.header-visual img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}

.about-guide {
  margin: 0.75rem 0 0;
  color: var(--slate);
  max-width: 66ch;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.7rem;
  background: linear-gradient(135deg, rgba(51, 105, 163, 0.12), rgba(112, 161, 215, 0.18));
  border: 1px solid rgba(51, 105, 163, 0.2);
  padding: 0.85rem 1rem;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(51, 105, 163, 0.16);
  font-weight: 600;
}

.guide-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(30, 34, 39, 0.9), rgba(51, 105, 163, 0.9));
  color: #fff;
  font-weight: 800;
  font-size: 1.05rem;
  box-shadow: 0 10px 20px rgba(30, 34, 39, 0.18);
}

.guide-copy {
  line-height: 1.4;
}

.legend {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--muted);
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid currentColor;
}

.legend-dot.primary { color: var(--slate); }
.legend-dot.secondary { color: var(--primary); }
.legend-dot.accent { color: var(--accent); }

.callout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: #f8fbff;
}

.callout.caution {
  background: #fff7f3;
  border-color: #ffddc7;
}

.callout-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.1rem;
}

.callout.caution .callout-icon {
  background: #d9534f;
}

.callout-title {
  margin: 0 0 0.35rem;
  color: var(--slate);
  font-weight: 700;
}

.guide-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr 0.9fr;
  gap: 1rem;
  align-items: start;
  animation: riseIn 0.75s ease both 0.1s;
  position: relative;
}

.guide-layout::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 12% 18%, rgba(112, 161, 215, 0.12), transparent 35%),
    radial-gradient(circle at 88% 32%, rgba(51, 105, 163, 0.1), transparent 33%),
    linear-gradient(135deg, rgba(112, 161, 215, 0.06), rgba(51, 105, 163, 0.03));
  border-radius: 20px;
  z-index: -1;
}

.column-title {
  margin-bottom: 0.5rem;
  color: var(--slate);
}

.column-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.column-hint {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}


.problem-column,
.flow-column,
.solution-column {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.9), rgba(247, 249, 251, 0.9));
  border: 1px solid rgba(51, 105, 163, 0.12);
  border-radius: 18px;
  padding: 0.9rem;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.problem-column {
  align-self: flex-start;
}

.problem-column::after,
.flow-column::after,
.solution-column::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(112, 161, 215, 0.04), transparent 60%);
  pointer-events: none;
}

.problem-slider {
  position: relative;
  margin-top: 0.4rem;
  padding: 0.35rem;
  border-radius: 16px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.9), rgba(247, 249, 251, 0.9));
  border: 1px solid rgba(51, 105, 163, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  max-height: 520px;
}

.problem-grid {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow-y: auto;
  max-height: 470px;
  padding: 0.4rem 0.35rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(180deg, #f7f9fb, #ffffff);
  position: relative;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) #eef2f6;
  flex: 1;
}

.problem-grid::-webkit-scrollbar {
  width: 8px;
}

.problem-grid::-webkit-scrollbar-track {
  background: #eef2f6;
  border-radius: 10px;
}

.problem-grid::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(51, 105, 163, 0.4), rgba(112, 161, 215, 0.7));
  border-radius: 10px;
}

.problem-chip {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(112, 161, 215, 0.1));
  border: 2px solid rgba(51, 105, 163, 0.22);
  border-radius: 14px;
  padding: 0.9rem 0.9rem 0.8rem;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  color: var(--slate);
  transition: all 0.2s ease;
  box-shadow: 0 10px 20px rgba(30, 34, 39, 0.05);
  min-height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: space-between;
}

.problem-chip:hover,
.problem-chip:focus-visible {
  border-color: var(--primary);
  color: var(--primary);
  outline: none;
  transform: translateY(-3px);
  box-shadow: 0 18px 36px rgba(51, 105, 163, 0.18);
}

.problem-chip.active {
  background: linear-gradient(145deg, rgba(112, 161, 215, 0.18), rgba(51, 105, 163, 0.08));
  border-color: var(--primary);
  box-shadow: 0 16px 32px rgba(51, 105, 163, 0.2);
}

.problem-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  border: 2px dashed rgba(51, 105, 163, 0.35);
  background: linear-gradient(145deg, rgba(112, 161, 215, 0.1), rgba(255, 255, 255, 0.85));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex: 1;
  min-height: 140px;
  max-width: 220px;
}

.problem-photo.has-image {
  border-style: solid;
  border-color: rgba(51, 105, 163, 0.28);
}

.problem-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
}

.problem-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent 65%);
  pointer-events: none;
}

.photo-placeholder {
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
}

.problem-title {
  font-weight: 800;
  color: var(--slate);
  line-height: 1.35;
  flex: 0;
}

.problem-grid:focus-visible {
  outline: 2px solid rgba(51, 105, 163, 0.35);
  outline-offset: 3px;
}

.fade-edge {
  position: absolute;
  left: 12px;
  right: 12px;
  height: 46px;
  pointer-events: none;
  z-index: 2;
  border-radius: 12px;
}

.fade-edge.vertical.top {
  top: 10px;
  background: linear-gradient(to bottom, rgba(112, 161, 215, 0.16), transparent);
}

.fade-edge.vertical.bottom {
  bottom: 10px;
  background: linear-gradient(to top, rgba(51, 105, 163, 0.12), transparent);
}

.flow-map {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.1rem;
  position: relative;
  min-height: 360px;
  box-shadow: var(--shadow);
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.flow-map::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(112, 161, 215, 0.16), transparent 35%),
    radial-gradient(circle at 80% 60%, rgba(51, 105, 163, 0.12), transparent 32%);
  pointer-events: none;
}

.problem-cloud {
  margin: 0 auto;
  max-width: 420px;
  text-align: center;
  padding: 0.9rem 1rem;
  border-radius: 999px;
  background: #f4f7fb;
  border: 1px dashed var(--primary);
  color: var(--slate);
  font-weight: 700;
}

.cause-clouds {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.75rem;
  margin-top: 0.25rem;
  flex: 1;
  align-content: start;
}

.cause-cloud {
  position: relative;
  background: linear-gradient(160deg, rgba(112, 161, 215, 0.18), rgba(51, 105, 163, 0.06));
  border: 1px solid rgba(51, 105, 163, 0.14);
  border-radius: 18px;
  padding: 0.95rem 1rem 1.1rem;
  color: var(--slate);
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(51, 105, 163, 0.14);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.3s ease, opacity 0.2s ease;
  backdrop-filter: blur(4px);
  animation: riseIn 0.45s ease both, floaty 7s ease-in-out infinite;
  animation-delay: calc(var(--order, 0) * 70ms), calc(0.5s + var(--order, 0) * 120ms);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 110px;
  text-align: center;
  isolation: isolate;
}

.cause-cloud::before,
.cause-cloud::after {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 14px;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.36), transparent 55%);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
}

.cause-cloud::after {
  inset: auto 14px 10px 14px;
  height: 4px;
  background: linear-gradient(90deg, rgba(51, 105, 163, 0.15), rgba(112, 161, 215, 0.5), rgba(51, 105, 163, 0.15));
  opacity: 0.75;
}

.cause-cloud:hover,
.cause-cloud:focus-visible {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 16px 34px rgba(51, 105, 163, 0.2);
  outline: none;
  border-color: rgba(51, 105, 163, 0.4);
  background: linear-gradient(160deg, rgba(112, 161, 215, 0.26), rgba(51, 105, 163, 0.12));
}

.cause-cloud.active {
  border-color: var(--primary);
  color: var(--slate);
  box-shadow: 0 18px 36px rgba(51, 105, 163, 0.26);
}

.cause-rank-chip {
  position: absolute;
  top: 10px;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(112, 161, 215, 0.3));
  border: 1px solid rgba(51, 105, 163, 0.3);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 10px 18px rgba(51, 105, 163, 0.12);
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--primary);
  z-index: 1;
}

.cause-text {
  display: grid;
  gap: 0.25rem;
  justify-items: center;
  width: 100%;
  z-index: 1;
  padding-top: 0.35rem;
}

.cause-title {
  color: var(--slate);
  font-weight: 800;
}

.solution-column {
  padding: 1rem 1.1rem;
}

.solution-panel {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(112, 161, 215, 0.1));
  border: 1px solid rgba(51, 105, 163, 0.18);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  min-height: 130px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 14px 32px rgba(51, 105, 163, 0.16);
  flex: 0 0 auto;
}

.solution-panel.active-card {
  animation: riseIn 0.35s ease both;
}

.solution-panel h5 {
  margin: 0 0 0.35rem;
  color: var(--slate);
}

.solution-panel .solution-body {
  color: var(--muted);
}

.placeholder {
  color: #93a1b3;
  margin: 0;
}

.hidden {
  display: none;
}

.disclaimer {
  margin-top: 1.5rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(51, 105, 163, 0.18);
  background: linear-gradient(135deg, rgba(112, 161, 215, 0.08), rgba(255, 255, 255, 0.95));
  box-shadow: var(--shadow);
  color: var(--slate);
}

.disclaimer h4 {
  margin: 0 0 0.5rem 0;
  color: var(--slate);
}

.disclaimer p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

@media (max-width: 960px) {
  .section-header {
    grid-template-columns: 1fr;
  }

  .section-head-right {
    justify-items: start;
  }

  .guide-layout {
    grid-template-columns: 1fr;
  }

  .flow-map {
    min-height: 280px;
  }
}

@media (max-width: 640px) {
  .top-bar {
    position: static;
  }

  .brand h1 {
    font-size: 1.3rem;
  }
}
