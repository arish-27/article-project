# IT 2030 — AI, Jobs & The Future of India’s Tech Cities

A high-performance, evidence-aware strategic research dossier and interactive scenario analysis web application exploring how AI adoption across IT occupations transforms India's technology hubs (Bengaluru, Hyderabad, Chennai) and their connected urban service ecosystems.

---

## 🏛️ Technology Stack

- **Markup:** Pure HTML5 (Semantic Structure)
- **Styling:** CSS3, Tailwind CSS, Bootstrap 5 utilities
- **Logic:** Vanilla JavaScript (ES6+ Modules, DOM Manipulation, Event Bus)
- **Design Aesthetic:** *Retro-Monolithic Editorial Dossier* (Bone `#F6F4EE`, Cream `#FAF8F3`, Obsidian Ink `#111111`, Amber Accent `#C97A3E`)
- **Runtime Dependency:** Zero runtime build requirements. Works directly over standard HTTP static serving.

---

## 📂 Project Architecture

```
/
├── index.html                   # Main Master Dossier Application
├── pages/
│   ├── roles.html               # Dedicated IT Role Explorer
│   ├── future-skills.html       # The New IT Workforce (Expanding & Emerging Roles)
│   ├── city-impact.html         # Tri-City Economic Matrix (Bengaluru, Hyderabad, Chennai)
│   ├── simulator.html           # 2030 Scenario Simulator Engine
│   ├── career-explorer.html     # Resilient Career Pathways & Transition Matrix
│   └── sources.html             # Data Tiers, Citations & Research Methodology
│
├── css/
│   ├── style.css                # Design tokens, color palette, custom fonts & resets
│   ├── components.css           # Editorial cards, buttons, badges, modals, sliders
│   └── responsive.css           # Mobile drawer navigation & breakpoint adjustments
│
├── js/
│   ├── app.js                   # Master application orchestrator & toast dispatcher
│   ├── data.js                  # Central data store (16 roles, 3 cities, 23 future roles, 8 roadmaps)
│   ├── navigation.js            # Masthead live date, smooth scrolling & mobile menu
│   ├── roles.js                 # Search, category filters, AI exposure filters & role detail modal
│   ├── city.js                  # City matrix switcher & Chennai/Hyderabad corridor dossiers
│   ├── future-roles.js          # Tab switcher between 10 expanding vs 13 emerging roles
│   ├── simulator.js             # Real-time multivariate equilibrium scenario calculation
│   └── career.js                # 8 career track selectors & 4-stage progressive roadmaps
│
└── README.md                    # Documentation & Setup Guide
```

---

## 🚀 How to Run Locally

You can serve this pure static project using any local HTTP web server:

### Option 1: Python HTTP Server
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 2: Node / npx serve
```bash
npx serve . -p 3000
```

### Option 3: VS Code / IDE Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📊 Core Features & Interactive Capabilities

1. **Top Masthead & Live Status:** Active corridor counters, date stamp, and responsive navigation.
2. **Hero & Causal Cascade Flow:** 5-step causal transmission model with the 1 IT : 3.6 service job urban multiplier.
3. **Tri-City Economic Matrix:** Comparative deep dives into Bengaluru (Product & Deep Tech), Hyderabad (GCC & Cloud Infrastructure), and Chennai (SaaS, Auto-Tech, and OMR IT Corridor) with interactive area modals.
4. **16-Role Occupational Explorer:** Real-time search, category filters, AI exposure sliders, and full dossier popup modals.
5. **The New IT Workforce:** 10 Expanding roles vs 13 Brand New Emerging Titles (e.g., AI Agent Developer, AI Auditor, AI Safety Engineer).
6. **2030 Scenario Simulator:** Real-time multi-dimensional scenario simulator evaluating entry-level hiring, senior compensation, office footfalls, and PG/rental occupancy.
7. **8 Resilient Career Pathways:** 4-stage progression timelines from current coding baselines to high-leverage 2030 target architectures.
8. **Research Transparency:** Clear classification of Research-Backed Data (WEF, NASSCOM, MeitY, CBRE), Illustrative Assumptions, Scenario Outputs, and Personas.
