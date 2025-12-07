:root {
  --bg: #f5f7fa;
  --bg-alt: #ffffff;
  --text: #101828;
  --muted: #6b7280;
  --border: #e5e7eb;
  --brand: #003f6b;
  --accent: #ff7a00;
  --shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

body.dark {
  --bg: #0b1120;
  --bg-alt: #020617;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --border: #1f2937;
  --brand: #1d4ed8;
  --accent: #f97316;
  --shadow: 0 18px 35px rgba(0, 0, 0, 0.45);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top left, #e5f0ff 0, var(--bg) 32%, var(--bg) 100%);
  color: var(--text);
  transition: background 0.3s ease, color 0.3s ease;
}

/* Header */

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background: linear-gradient(90deg, var(--brand), #0b7285);
  color: #fff;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 20;
}

.brand-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 9px;
  object-fit: contain;
  background: #fff;
  padding: 4px;
}

.brand-text .brand-title {
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.brand-text .brand-subtitle {
  font-size: 0.82rem;
  opacity: 0.8;
}

.brand-right {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}

.headshot-wrapper {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.9);
}

.headshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-label {
  opacity: 0.8;
}

/* Toolbar */

.toolbar {
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
  gap: 12px;
  flex-wrap: wrap;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.btn {
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-alt);
  color: var(--text);
  padding: 6px 14px;
  font-size: 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition:
    background 0.2s ease,
    transform 0.1s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.btn.primary {
  background: var(--brand);
  color: #fff;
  border-color: transparent;
}

.btn.secondary {
  border-color: var(--accent);
  color: var(--accent);
}

.btn.small {
  font-size: 0.8rem;
  padding: 4px 10px;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Layout */

#layout-container {
  padding: 12px 24px 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 18px;
  transition: grid-template-columns 0.3s ease;
}

.layout-one-col {
  grid-template-columns: minmax(0, 1fr);
}

.layout-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

/* Panels */

.panel {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  padding: 16px 18px 18px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(148, 163, 184, 0.38);
  backdrop-filter: blur(10px);
  animation: panelIn 0.25s ease-out both;
}

body.dark .panel {
  background: rgba(15, 23, 42, 0.95);
}

@keyframes panelIn {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.05rem;
}

.panel-subtitle {
  margin: 3px 0 0;
  font-size: 0.78rem;
  color: var(--muted);
}

/* Filters */

.panel-filters {
  margin: 10px 0 8px;
}

.search-input {
  width: 100%;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.85rem;
  background: var(--bg-alt);
  color: var(--text);
}

.dropdown-row {
  display: flex;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
}

.select {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.8rem;
  background: var(--bg-alt);
  color: var(--muted);
}

/* Status / list */

.panel-status {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 6px;
}

.article-list {
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 6px;
}

/* Articles */

.article {
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  padding: 10px 12px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.96);
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    border-color 0.12s ease,
    background 0.12s ease;
  position: relative;
}

body.dark .article {
  background: rgba(15, 23, 42, 0.95);
}

.article:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.15);
  border-color: var(--brand);
}

.article-title {
  font-size: 0.9rem;
  font-weight: 600;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  margin-top: 4px;
  color: var(--muted);
}

.article-summary {
  margin-top: 8px;
  font-size: 0.8rem;
  line-height: 1.4;
  display: none;
}

.article.expanded .article-summary {
  display: block;
}

.article-link {
  font-size: 0.78rem;
  margin-top: 6px;
  color: var(--accent);
  text-decoration: none;
}

.article-link:hover {
  text-decoration: underline;
}

/* Footer */

.app-footer {
  padding: 12px 24px 18px;
  font-size: 0.78rem;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border);
}

/* Responsive */

@media (max-width: 900px) {
  #layout-container {
    grid-template-columns: minmax(0, 1fr);
  }
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  .toolbar-left,
  .toolbar-right {
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .brand-right {
    align-self: flex-end;
  }
}
