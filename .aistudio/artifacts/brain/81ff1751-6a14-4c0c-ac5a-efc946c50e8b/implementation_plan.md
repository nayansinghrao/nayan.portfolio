# Portfolio Content & Data Customization Plan

Structured roadmap and fill-in-the-blank content template to replace all placeholder portfolio data with your verified personal information, brand copy, and professional milestones across the site and PDF exports.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your responses, we are updating **all default content at once**, retaining the three flagship concept brand frameworks (**Cocona**, **Seth Dhanraj**, and **Sharpix**) while customizing their descriptive copy, and providing a clean **fill-in-the-blank template** for you to provide your information.
>
> Below is the exact data blueprint. Review the plan and fill out the template fields below when approving or in your next response.

- **Confirmed Scope**: Comprehensive single-turn update of personal details, contact endpoints, concept brand copy, case studies, career trajectory, and tool ecosystems.
- **Brand Strategy**: Retain Cocona, Seth Dhanraj, and Sharpix frameworks, keeping their PDF deck infrastructure intact while updating client briefs, metrics, and narrative copy.
- **Workflow Format**: Fill-in-the-blank template provided directly in this plan.

---

## 1. Overview & Core Concept

- **What It Does**: Replaces all hardcoded placeholder data in `src/data/portfolioData.ts`, `src/data/brandSlideDecks.ts`, and component labels with your actual professional details, live contact links, custom case study copy, and career achievements.
- **Target Audience**: Prospective clients, design agencies, creative directors, and founders seeking brand identity, motion design, and generative AI production services.
- **Key Value**: Instantly transforms the portfolio into an authentic, production-ready showcase representing your real identity, experience, and contact channels.

---

## 2. Fill-in-the-Blank Content Template

You can copy this section, fill in your details, and reply with it:

```markdown
### SECTION A: PERSONAL & CONTACT INFORMATION
1. Full Name: [e.g., Nayan Singh Rao]
2. Professional Title / Headline: [e.g., Brand & Motion Designer • Creative AI Director]
3. Hero Hook Statement: [e.g., Designing high-impact visual identities, kinetic motion reels, and generative AI commercial pipelines for visionary brands.]
4. Primary Email: [e.g., nayan02062004@gmail.com]
5. Phone / WhatsApp (with country code): [e.g., +91 98765 43210]
6. Location & Timezone: [e.g., Rajasthan, India (IST UTC+5:30)]
7. Availability Status Pill: [e.g., Available for work • Q3/Q4 2025 • 2 Slots Open]
8. Social & Portfolio URLs:
   - LinkedIn: [https://linkedin.com/in/...]
   - Behance / Dribbble: [https://behance.net/...]
   - Instagram / X (Optional): [...]

### SECTION B: ABOUT ME & PHILOSOPHY
1. Bio Paragraph: [2-3 sentences about your creative background, trajectory, and passion]
2. Core Creative Pillars (3 Pillars):
   - Pillar 1 Title & Description: [e.g., Tactile Craftsmanship — Physical dielines and bespoke finishes]
   - Pillar 2 Title & Description: [e.g., Algorithmic Velocity — Generative AI diffusion pipelines]
   - Pillar 3 Title & Description: [e.g., Commercial Impact — Brand systems engineered for conversion]
3. Education / Degree: [e.g., Bachelor of Design, Visual Communication / Self-taught / Institute name]

### SECTION C: THE 3 CONCEPT BRANDS (TEXT COPY CUSTOMIZATION)
1. Brand 1: COCONA (Organic Brews & Packaging)
   - Updated Subtitle / Tagline: [e.g., Regenerative coconut cold-brew beverages & bio-packaging]
   - Client Brief / Core Story: [Brief 1-2 sentence description]
   - Key Metric / Highlight: [e.g., 200k+ Units Distributed in Launch Quarter]

2. Brand 2: SETH DHANRAJ (Heritage Luxury Jewelry)
   - Updated Subtitle / Tagline: [e.g., Royal Marwari goldsmith heritage & bespoke velvet packaging]
   - Client Brief / Core Story: [Brief 1-2 sentence description]
   - Key Metric / Highlight: [e.g., Featured in Luxury Connoisseur Archive]

3. Brand 3: SHARPIX (Precision Grooming & Hardware)
   - Updated Subtitle / Tagline: [e.g., Aerospace-grade titanium grooming instruments]
   - Client Brief / Core Story: [Brief 1-2 sentence description]
   - Key Metric / Highlight: [e.g., 4.9★ Average Rating Across 14,000 Reviews]

### SECTION D: CAREER TIMELINE & WORK EXPERIENCE
(List up to 3-4 roles/milestones)
Role 1:
- Period: [e.g., 2023 – Present]
- Position & Company: [e.g., Senior Brand Designer @ Studio XYZ / Freelance]
- Location & Type: [e.g., Remote / On-site • Full-time / Retainer]
- Key Highlights (2-3 bullets): [Impact bullets]

Role 2:
- Period: [e.g., 2021 – 2023]
- Position & Company: [e.g., Motion & Visual Designer @ Agency ABC]
- Key Highlights (2-3 bullets): [Impact bullets]

### SECTION E: TOOLS & SKILLS MATRIX
1. Primary Software Tools: [e.g., Figma, After Effects, Cinema 4D, Illustrator, Photoshop, Blender]
2. Generative AI Tools: [e.g., Midjourney v6, Runway Gen-3, ComfyUI, ElevenLabs]
3. Core Disciplines: [e.g., Brand Identity, Motion Design, Packaging Dielines, 3D Rendering, Social Reels]
```

---

## 3. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│               Data Architecture & Stores               │
└────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
┌───────────────────────────┐     ┌──────────────────────────┐
│ src/data/portfolioData.ts │     │ src/data/brandSlideDecks │
│ - PERSONAL_INFO           │     │ - Slide headers & copy   │
│ - FEATURED_PROJECTS       │     │ - Slide bullet points    │
│ - CONCEPT_BRANDS_DEEPDIVE │     │ - Dieline spec text      │
│ - EXPERIENCE_ITEMS        │     └──────────────────────────┘
│ - TOOL_ECOSYSTEM          │
└───────────────────────────┘
         │
         ├───────────────────────────────────┐
         ▼                                   ▼
┌───────────────────────────┐     ┌──────────────────────────┐
│ Active Screens & Modals   │     │ Static PDF Generation    │
│ - HomeScreen (Hero/Dock)  │     │ - PortfolioPdfView.tsx   │
│ - WorkScreen (Dossiers)   │     │ - BrandDeckViewer.tsx    │
│ - AboutScreen (Bio/Pillar)│     │ - Print & Export modes   │
│ - ExperienceScreen        │     └──────────────────────────┘
│ - ContactScreen (Form)    │
│ - QuickHireModal          │
└───────────────────────────┘
```

### Affected Files and Update Pipeline

1. **`src/data/portfolioData.ts`**:
   - Update constants `FEATURED_PROJECTS`, `CONCEPT_BRANDS_DEEPDIVE`, `EXPERIENCE_ITEMS`, `TOOL_ECOSYSTEM`.
   - Export structured `PROFILE_DATA` (name, email, phone, location, status, social links) to centralize personal attributes.
2. **`src/screens/ContactScreen.tsx` & `src/components/QuickHireModal.tsx`**:
   - Link phone numbers and WhatsApp URLs to your provided number (`wa.me/<your-number>`).
   - Link email links and default form mailto addresses to your verified email.
   - Synchronize studio location and timezone clocks.
3. **`src/components/Header.tsx` & `src/components/Footer.tsx`**:
   - Update brand wordmark, initials logo, title, and social outbound links.
4. **`src/screens/PortfolioPdfView.tsx`**:
   - Synchronize PDF header and footer metadata with your name and credentials for press-ready export.

---

## 4. Verification & Testing Protocol

- **Data Integrity**: Verify that no placeholder emails (`hello@nayansinghrao.design`) or dummy phone numbers remain across any UI or modal.
- **Link Accuracy**: Validate that WhatsApp deep links (`https://wa.me/...`) and mailto links format phone numbers and emails correctly.
- **Theme & Dark Mode Preservation**: Ensure newly inserted text copy maintains high-contrast light and dark styling across all screens.
- **Compilation Check**: Run `compile_applet` and `lint_applet` to confirm strict TypeScript typing and zero compile errors.
