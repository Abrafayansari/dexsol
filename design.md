# DEXSOL Digital Growth Agency - Design System Documentation

Based on the standalone `DEXSOL.html` conceptual layout, here is the complete teardown of the foundational design rules and mechanics you'll use throughout your React portfolio.

## 1. Global Theming & Token Colors
The design embraces a hyper-modern Neumorphic/Light theme heavily accented with vibrant pop colors against a light, noise-textured background.

**Backgrounds**
- **Main Background (`--bg`)**: `#f0f4f1` (a soft, cool-toned off-white/mint)
- **Alternate Background (`--bg-alt`)**: `#e8ece9` (slightly deeper ambient shade for form fields/accents)
- **Card Background (`--card-bg`)**: `#ffffff` (pure white for depth)
- **Dark Accent (`--accent-dark`)**: `#1a1a1a` (used for heavy buttons, cursors, footer, and the Review section)

**Typography Colors**
- **Primary Text (`--text`)**: `#0a0a0a` 
- **Subtext/Light (`--text-light`)**: `#555555`
- **Muted Text (`--text-muted`)**: `#888888`

**Brand Accents (The Pop Palette)**
- **Green**: `#5cb85c` (used for active states, hero badges, success themes)
- **Yellow**: `#f5d547` / `#fae878` (used for primary pill CTA buttons, highlights)
- **Cyan**: `#4ecdc4` (used for detail accents, contact section theme)
- **Orange**: `#ff8c42` (services icon accent)
- **Purple**: `#9b5de5` (about/services icon accent)
- **Pink**: `#f15bb5` (services icon accent)

## 2. Typography
A premium two-font pairing is applied for maximum editorial punch.
- **Display/Headings**: `'Space Grotesk', sans-serif` -> Provides sharp, geometric, and brutally bold headers (usually font-weight: 700) with tight tracking `letter-spacing: -1.5px / -2px`.
- **Body/Paragraphs**: `'Inter', sans-serif` -> Clean, highly legible UI font for extended read times (font-weight: 400, 500, 600).

## 3. UI Aesthetics & Micro-Interactions

### A. Background & Texture
To prevent flatness, `body::before` leverages an SVG fractal noise (`opacity: 0.025`) spanning the viewport rigidly to give the entire application a gentle, tactile "paper" or "grain" look. 

### B. The Cursor & Tracking
- A custom cursor replaces the native pointer (`width/height: 16px`, `mix-blend-mode: difference`, tracking lag `0.12`).
- **Hover State**: It expands to `50px` when intersecting actionable fields (buttons, links, form inputs).

### C. Glassmorphism Nav & Progress
- **Top progress bar**: `h-3px` linear gradient from green -> cyan -> yellow that scales on `window.scrollY`.
- **Navbar**: Upon scrolling `>100px`, the transparent nav assumes a `backdrop-filter: blur(20px)` glass panel aesthetic (`rgba(240, 244, 241, 0.95)`).

### D. Magnetic Physics
Call-to-action buttons (`.btn-primary`, `.btn-pill`) employ coordinate-based translation geometry. Mousing over them literally "pulls" the button box slightly towards the cursor coordinate before snapping back on `mouseleave`.

## 4. Animation & Framer Rules (GSAP)
Every scroll transition is meticulously choreographed via `gsap.timeline()` combined with `ScrollTrigger`.
- **Intro Staggering**: Text lines use nested `overflow: hidden` mapping to sweep upwards.
- **Parallax Layers**: Abstract geometric shapes (`.hero-deco`, parallax SVG patterns) transform `y` and `rotate` on scroll to simulate 3d planes.
- **Reveal Timings**: Sections progressively unveil sequentially: `Label -> Title -> Text -> Grid Items -> CTA` to prevent overwhelming cluster viewing. 

## 5. Implementation Directives for React (`dexsol-digital-agency`)
1. **Lenis Global Layer**: Implement `<ReactLenis root options={{ lerp: 0.05 }}>` inside `App.tsx` as the parent wrapper for buttery smooth scrolling frames that GSAP can piggyback against.
2. **GSAP Injection**: Swap standard framer-motion entry elements for `.to(..., { opacity: 1, y: 0 })` timeline chains triggered by `useRef` triggers in sections.
3. **Contrast Corrections**: Services component needs to return to light theme cards with dynamic top-borders referencing the unique color-palette logic, avoiding dark themes within light sections.
