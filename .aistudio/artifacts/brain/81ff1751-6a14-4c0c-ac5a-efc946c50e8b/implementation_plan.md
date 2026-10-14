# Implementation Plan: Ultra-Fluid Inertia Smooth Scroll & Section Rearrangement

## User Decision Summary
Based on the clarifying questions answered by the user:
- **Scrolling Experience**: Inertia momentum smooth scroll (`lenis`) for an ultra-fluid luxury agency feel.
- **Section Sequence**: Highlight skills earlier: **Hero → Work → Skills → Experience → About → Contact**.

---

## 1. Architecture & Dependency Strategy

### A. Inertia Smooth Scroll Engine (`lenis`)
- Install `lenis` (`npm i lenis`) for hardware-accelerated momentum scrolling with natural inertia, friction curves, and buttery physics.
- Mount Lenis in a top-level hook / provider (`src/hooks/useLenisScroll.ts` or `src/components/SmoothScrollProvider.tsx`) running on `requestAnimationFrame`.
- Configure inertia parameters:
  - `duration: 1.2`s
  - Easing: exponential decay `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
  - `smoothWheel: true`, `wheelMultiplier: 1.05`, `touchMultiplier: 1.5`
- Provide programmatic anchor scroll handling (`lenis.scrollTo('#skills', { offset: -88, duration: 1.3 })`) so clicking any header nav item or CTA produces a silky glide with zero sudden jumps.

### B. Scroll Lock Coordination
- Coordinate with `ProjectModal`, `QuickHireModal`, and `UploadPdfModal`:
  - When any modal opens, call `lenis.stop()` so background inertia ceases completely.
  - When the modal closes, call `lenis.start()` to seamlessly restore buttery viewport momentum.

---

## 2. Visual Architecture & Layout Rearrangement

The page flow will be restructured in `src/screens/HomeScreen.tsx` and mirrored in navigation items:

1. **Hero Section (`#home`)**:
   - High-impact designer typography, verified credentials, and quick action buttons ("Explore Work", "Direct Inquiry").
2. **Featured Work & Concept Brands (`#work`)**:
   - Filterable showcase cards (Cocona, Seth Dhanraj, Sharpix) with subtle scale-up hover physics and full-screen modal project views.
3. **Core Skills & Technical Mastery (`#skills`)** *(Moved up)*:
   - Visual identity, packaging, AI tool ecosystem (Photoshop, Illustrator, InDesign, Midjourney, Figma, Runway, Premiere Pro).
   - Direct proof of capability placed immediately adjacent to the work samples.
4. **Professional Experience & Timeline (`#experience`)** *(Moved up)*:
   - Career timeline at Jundalo Technologies, verified client deliverables, and design metrics.
5. **About Me & Design Philosophy (`#about`)** *(Placed after experience)*:
   - Personal monograph, design approach, education, and verified resume download.
6. **Contact & Project Planner (`#contact`)**:
   - Direct validated contact form with honeypot spam protection and live percentage submission progress.

---

## 3. Header & Navigation Synchronization

### A. Top Navigation Bar (`src/components/Header.tsx`)
- Update `navItems` array to match the new sequence:
  `['home', 'work', 'skills', 'experience', 'about', 'contact']`.
- Update the Intersection Observer / scroll spy logic in `Header.tsx` to track the new section order and accurately highlight active tabs with zero lag.
- Update smooth scroll click handlers to dispatch through `lenis.scrollTo()` for unified acceleration curves.

### B. Footer & Floating Controls
- Update section anchor links in `Footer.tsx` and `BackToTop.tsx` to glide to top via `lenis.scrollTo(0, { duration: 1.5 })`.

---

## 4. Anti-Slop & Visual Refinements

- Retain clean unboxed text metadata with typographic dot separators (`·`).
- Ensure consistent section top and bottom spacing (`py-12 md:py-16`) across all rearranged sections.
- Polish section transition dividers with subtle hairline borders (`border-b border-[#e5e2dc]/60 dark:border-[#222428]`).

---

## 5. Verification Plan

1. **Build & Lint Verification**:
   - Run `lint_applet` and `compile_applet` to confirm 100% clean TypeScript build without errors.
2. **Scroll Physics Verification**:
   - Test mouse wheel, trackpad, and drag scrolling to ensure ultra-smooth inertia with zero stutter.
   - Verify anchor navigation clicks (Home, Work, Skills, Experience, About, Contact) glide smoothly with correct sticky header offset (-88px).
3. **Modal & Preloader Interaction**:
   - Open and close Concept Project modal to verify background scroll stops and resumes without jumps.
   - Verify BackToTop button glides to top smoothly.
