# Taazur Design System — شركة تآزر المبتكرة

**Taazur Al-Mubtakirah Company** is a young-led Saudi company delivering integrated solutions in procurement/supply, event management & execution, project management & execution, and business development. It works "solutions-by-need": understand the requirement → scope → build the solution → pick products, suppliers and executors → prepare, execute, follow up, deliver. Audiences are government entities, non-profits and corporate clients in KSA; nearly all material is **Arabic-first, RTL**, with English as a secondary line.

Surfaces represented: the brand guide (web/print doc), presentation decks (16:11 landscape kliché), A4 letters/reports (portrait kliché), and KPI/dashboard-style program reports.

## Sources
- Attached codebase `نظام تصميم تآزر/` (local folder): `Taazur Design System.dc.html` (brand guide — primary source of every value here), `Taazur Slides Template.dc.html` (7-slide deck), `Taazur Design System Deck.dc.html`, `assets/` (logos, letterheads), `downloads/` (DOCX + PPTX templates).
- Uploads: `uploads/Taazur-Design-System.pdf`, `uploads/نظام تصميم تآزر.pdf` (PDF exports of the guide), `uploads/شعار تآزر.png`, `uploads/شعار تآزرPNG.png` (logo).

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (`.ms` icon class).
- `guidelines/` — 20 foundation cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (below), one card per folder.
- `slides/` — 7 slide types copied from the deck template (1492×1054).
- `ui_kits/brand-guide/` — interactive recreation of the brand guide site.
- `assets/` — `logo.png` (full colour), `logo-petrol.png`, `logo-white.png`, `letterhead-landscape.png`, `letterhead-portrait.jpg`.
- `downloads/` — `Taazur-Letterhead-Template.docx`, `Taazur-Presentation-Template.pptx`.
- `SKILL.md` — Agent Skill entry.

## Components
- actions/: **Button** (primary · secondary · outline · link · gold · ghostDark; md/sm; disabled), **IconButton**, **NavPill**
- data/: **KpiCard**, **DataTable**, **StatusPill**, **ProgressBar**
- brand/: **Logo**, **CornerMotif**, **SectionHeader**, **ImageFrame**, **IconTile**, **Icon**
- content/: **DownloadCard**

Intentional additions: **Icon** (wrapper for the Material Symbols ligature font so components don't repeat the font CSS); **Logo** (img wrapper choosing the correct approved file).

---

## CONTENT FUNDAMENTALS
- **Language:** Modern Standard Arabic, formal-but-warm, institutional. English appears only as a secondary line (logotype, mono labels like `LOGO`, `COLOR`, `BRAND SYSTEM · v1.0 · 2026`).
- **Voice:** first-person plural "we" (نصمّم، نبدأ، نعمل) speaking about the company; second person (قدّم طلبك، تواصل معنا، ثبّت الخطوط) for instructions/CTAs. Imperative, short CTAs: «قدّم طلبك الآن»، «عرض التفاصيل»، «اعرف المزيد»، «تحميل الملف التعريفي».
- **Themes:** partnership/synergy (تآزر = mutual support), impact (الأثر), methodology, measurable results. E.g. «شراكة تصنع الفرق»، «تآزر يصنع الأثر»، «نصمّم البرامج ونديرها بمنهجية واضحة تربط الأهداف بالنتائج القابلة للقياس».
- **Structure:** numbered sections (01, 02…) with Arabic title + English mono label; one-sentence intro paragraphs; bulleted rules; "· " middle dots as separators («العنوان الفرعي · اسم الجهة»).
- **Numbers:** Western digits (123) in tables, KPIs and money, tabular and LTR-isolated; currency «ر.س». Percent deltas in pills: `+12%`, `−4%` (true minus).
- **Casing:** Latin labels are UPPERCASE mono with wide tracking; Latin body is sentence case.
- **Emoji:** never. Unicode used only for `·` separators and `—` dashes.

## VISUAL FOUNDATIONS
- **Colour:** three hues lifted from the logo's ribbons. Petrol `#0A4456` leads (~60%), desert gold `#CDAA6E` (~15%) for rules, frames and highlighted numbers on dark, orange `#F04E23` (~10%) only to direct attention; warm neutrals fill the rest. Orange text/buttons use the darker `#C93D15`. Gold is never used for text on white. Dark grounds use petrol-900 `#062C38`.
- **Type:** Noto Kufi Arabic (600–800) for display/headings — geometric Kufi echoing the logotype; IBM Plex Sans Arabic (300–700) for body/UI; IBM Plex Sans for Latin; IBM Plex Mono for labels, hex codes, section numbers. Arabic paragraphs use generous 1.8–1.9 line-height. Scale: 56/40/30/22/17/14/13.
- **Backgrounds:** off-white paper `#FBFAF7` page, white cards, sand `#F6F1E7` and petrol-900 bands. No gradients except the petrol photo scrim. The signature motif is the **kliché corners**: a petrol right-triangle top-left and orange triangle bottom-right, each sitting on a slightly larger gold triangle that shows as a thin edge. Letterheads add a faint watermark "T" and a thin gold footer rule.
- **Imagery:** real Saudi teams/workshops/beneficiaries, warm natural light, natural colours near sand/petrol; no staged stock or saturated filters. Three treatments: identity corner, bottom petrol scrim (`rgba(6,44,56,.92)→0`) with gold bar + white Kufi title, offset gold 2px frame with orange corner for portraits.
- **Cards:** white, `1px solid #E7E2D6`, radius 16 (panels 18, slide cards 20), padding 24–32, **no shadow**. Dark variant: petrol fill with gold corner triangle. Shadows appear only on printed-paper thumbnails (`0 12px 40px rgba(6,44,56,.12)`).
- **Borders/rules:** 1px warm lines; 1.5px for outline buttons and gold rings; 2px gold rule to separate totals; 4–5px gold bar under titles (96–120px long).
- **Radii:** 4 · 6 (tags, print thumbs) · 8 · 10 (buttons, inputs) · 12 · 14 (icon tiles) · 16 (cards) · 18 · 999 (pills).
- **Spacing:** 4-ish rhythm but with exact values 12/14/16/20/24/28/32/40/48; sections separated by 112px; container 1200px + 32px gutters.
- **Hover:** darker shade of the same hue (orange-600→800, petrol-700→900, gold-500→300 on dark); outline/icon buttons get petrol-50 fill or petrol border; links go orange-600. No scale/press shrink; transitions are short colour fades (~150ms). No bounce or decorative animation.
- **Transparency/blur:** none beyond the photo scrim; the logo must never be faded.
- **Layout:** RTL; content right-aligned, English isolated LTR; money columns align left. Fluid grids with `auto-fit minmax`. Slides: 1492×1054, content inset 136px from the right, titles at y=120.
- **Data:** petrol table header, zebra rows in paper, tabular numerals, status pills (green/amber/red/petrol on tinted backgrounds), 6px progress bars.

## ICONOGRAPHY
- **Set:** Google **Material Symbols Rounded** (variable font, opsz 24, wght 400, FILL 0) loaded from Google Fonts — the codebase uses it via a `.ms` ligature class (`<span class="ms">handshake</span>`). Use `components/brand/Icon` or `.ms` from `tokens/base.css`.
- **Sizes:** 20 (in buttons), 22–24 (inline), 32 (feature grids).
- **Colour:** petrol by default; gold-700 or orange-600 inside tinted tiles; white inside solid petrol tile.
- **Containers:** 56px squares radius 14 (petrol solid / gold-50 / orange-50 tint) or circle with 1.5px gold ring; KPI cards use 40px radius 10.
- **Directional icons** (`arrow_forward`) are mirrored with `scaleX(-1)` in RTL.
- Core vocabulary: handshake, lightbulb, school, insights, architecture, groups, assignment, event, target, verified, support_agent, trending_up, workspaces, flag, download, check_circle, cancel.
- No SVG icon sprites, no PNG icons, no emoji, no unicode glyph icons.

## Fonts
All four families are Google Fonts (as linked in the source guide's downloads section); no font binaries were provided, so they're loaded via `@import` in `tokens/fonts.css`.
