---
name: NASC Website
description: Bilingual oil and gas field-services website focused on trust and direct contact.
colors:
  primary: "#123356"
  secondary: "#1a2a3a"
  accent: "#c0944b"
  text-light: "#ccd6f6"
  text-dark: "#1a1a1b"
  surface-base: "#ffffff"
  surface-muted: "#f8f9fa"
typography:
  display:
    fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-ar:
    fontFamily: "Amiri, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-base}"
    rounded: "{rounded.sm}"
    padding: "15px 40px"
  card-service:
    backgroundColor: "{colors.surface-base}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
    padding: "30px"
---

# Design System: NASC Website

## 1. Overview

**Creative North Star: "Operational Confidence, Human Voice"**

The visual system communicates execution discipline first, then warmth. This is a credibility-led bilingual brand surface, not a generic corporate brochure and not a startup-style promotional page.

The page should feel premium through restraint: strong typography, controlled spacing rhythm, and selective motion that confirms hierarchy and interaction. It should not rely on decorative effects to signal quality.

**Key Characteristics:**
- Clear bilingual hierarchy with equal intent in English and Arabic
- Navy-gold trust palette with restrained contrast accents
- Section rhythm that alternates dense proof blocks with breathing space
- Purposeful interaction feedback and subtle motion

## 2. Colors

The palette is confidence-first: deep technical navy foundations, warm metallic accent, and readable neutrals for long-form bilingual content.

### Primary
- **Field Navy** (`#123356`): Primary brand surface color for navigation, dark sections, and key structural anchors.

### Secondary
- **Deep Ops Slate** (`#1a2a3a`): Supporting dark tone for contrast layering and fallback dark surfaces.

### Neutral
- **Clear Base White** (`#ffffff`): Primary light background for readability and signal clarity.
- **Muted Surface Gray** (`#f8f9fa`): Low-emphasis containers and leadership strip surfaces.
- **Body Ink** (`#1a1a1b`): Default body text on light backgrounds.
- **Soft Signal Light** (`#ccd6f6`): Light-on-dark supporting copy in contact and footer zones.

### Tertiary (optional)
- **Execution Gold** (`#c0944b`): Accent for calls-to-action, section tags, and key emphasis.

### Named Rules (optional, powerful)
**The Trust Accent Rule.** Accent gold is for emphasis and action cues, not large decorative surfaces.

## 3. Typography

**Display Font:** Montserrat (with system sans fallback stack)  
**Body Font:** Montserrat (with system sans fallback stack)  
**Label/Mono Font:** Inherit from body stack unless tabular numeric alignment is required.

**Character:** Clean, modern, and operationally serious in English, paired with a dignified readable Arabic voice via Amiri.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 5vw, 3.8rem)`, 1.15): Hero headlines and primary section entries.
- **Headline** (700, `2.2rem-2.5rem`, 1.2): Section titles and high-level statements.
- **Title** (600, `1.25rem-1.5rem`, 1.35): Service titles, leadership role labels.
- **Body** (400, `1rem`, 1.7): Paragraphs with a target readable line length near 65ch.
- **Label** (600, `0.85rem-0.95rem`, slight tracking, uppercase where needed): Navigation and tags.

### Named Rules (optional)
**The Bilingual Parity Rule.** Arabic and English content must preserve equivalent visual weight and readability.

## 4. Elevation

The system is mostly flat at rest with restrained depth on interaction states. Elevation exists to confirm interactivity and hierarchy, not as constant decoration.

### Shadow Vocabulary (if applicable)
- **Interactive Lift** (`0 10px 30px rgba(0, 0, 0, 0.1)`): Hover state for service cards.
- **Subtle Focus Lift** (`0 0 0 3px rgba(192, 148, 75, 0.28)`): Focus-visible ring for keyboard navigation.

### Named Rules (optional)
**The Flat-by-Default Rule.** Surfaces remain calm until user interaction demands feedback.

## 5. Components

Component styling should prioritize clarity and trust signals with consistent bilingual behavior.

### Buttons
- **Shape:** Slightly rounded with disciplined edges (`4px`).
- **Primary:** Gold background with white text (`#c0944b` on `#ffffff`) and generous horizontal padding.
- **Hover / Focus:** Slight elevation, controlled transform, visible focus ring.
- **Secondary / Ghost / Tertiary (if applicable):** Keep minimal and role-based, never ornamental.

### Cards / Containers
- **Corner Style:** Slightly rounded (`4px`) for calm surfaces.
- **Background:** White or muted neutral based on section contrast.
- **Shadow Strategy:** Flat by default, lifted on hover only.
- **Border:** Subtle boundary line where needed for separation.
- **Internal Padding:** Medium to large spacing scale values (`20px-30px`) for readability.

### Inputs / Fields
- **Style:** Clear stroke, high legibility, and accessible spacing.
- **Focus:** Accent-tinted focus ring with clear keyboard visibility.
- **Error / Disabled:** Distinct visual states should be explicit in future form hardening.

### Navigation
- **Style, typography, default/hover/active states, mobile treatment:** Fixed top bar with high-contrast labels, accent hover state, and language switch prominence.

## 6. Do's and Don'ts

### Do:
- **Do** preserve bilingual parity in spacing, hierarchy, and interaction behavior.
- **Do** use accent gold for intentional emphasis and action states.
- **Do** keep motion subtle and functional, especially around content reveals and feedback.
- **Do** prioritize direct contact pathways in every major section.

### Don't:
- **Don't** use a generic corporate template look with interchangeable section patterns.
- **Don't** replace evidence-led copy with abstract marketing language.
- **Don't** introduce decorative motion that competes with content comprehension.
- **Don't** use side-stripe border accents as visual shortcuts.
