---
name: Clinical Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffb877'
  on-secondary: '#4b2700'
  secondary-container: '#915101'
  on-secondary-container: '#ffd4b1'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdcc0'
  secondary-fixed-dim: '#ffb877'
  on-secondary-fixed: '#2e1600'
  on-secondary-fixed-variant: '#6c3b00'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-padding: 2rem
  card-gap: 1rem
  stack-space: 0.75rem
  grid-gutter: 1.5rem
  table-row-padding: 1rem
---

## Brand & Style

The design system is a high-density, utility-focused framework designed for medical and pharmaceutical data visualization. It prioritizes rapid information retrieval and absolute legibility within complex data sets. 

The aesthetic is **Modern Corporate** with a focus on **Clinical Precision**. It utilizes a deep charcoal environment to reduce eye strain during long-form data review. The visual personality is authoritative, reliable, and sober, utilizing high-contrast information cards and refined table structures to organize dense categorical data without overwhelming the user.

## Colors

The palette is built on a "charcoal-and-ink" foundation. The primary background uses a deep neutral, while interactive surfaces and cards utilize a slightly lighter gray to create depth without relying on heavy shadows.

- **Primary:** Pure white is used for critical headlines and primary actions to ensure maximum contrast against the dark background.
- **Secondary (Warning):** A vibrant, sophisticated orange (#F3A152) is reserved exclusively for warnings, contraindications, and critical alerts.
- **Accents:** Muted earth tones (like the taupe used for status chips) provide categorical distinction without competing with high-priority warnings.
- **Data Grids:** Horizontal rules use a subtle low-opacity white to maintain table structure while keeping the focus on the text.

## Typography

This design system uses **Hanken Grotesk** across all levels. It is a clean, contemporary sans-serif that maintains high legibility at small scales, which is vital for dosage instructions and manufacturer details.

The typographic hierarchy relies heavily on weight contrast. Headlines and labels use Bold (700) weights to anchor the eye, while secondary data points use Regular (400) weights to facilitate scanning. Uppercase styling is applied to labels to denote category headers within information cards.

## Layout & Spacing

The layout utilizes a **fixed-width central container** for desktop viewing to ensure line lengths for data tables remain readable. 

- **Grid System:** A 12-column grid is used for the main layout, but internal card sections often use a 4-column sub-grid for "Quick Stats" blocks.
- **Rhythm:** A tight 4px baseline shift governs the vertical rhythm, ensuring dense data remains organized.
- **Responsive Behavior:** On mobile, the 4-column stats cards reflow into a single-column stack, and tables become horizontally scrollable to preserve the integrity of the data columns.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering**. 

1. **Level 0 (Base):** The darkest neutral background (#121212).
2. **Level 1 (Cards/Containers):** A slightly lighter gray (#1E1E1E) used for the main drug summary cards and table backgrounds.
3. **Level 2 (In-Card Highlights):** Sub-containers or hover states that use a subtle border or a secondary tonal shift to indicate focus.

Depth is further communicated through high-contrast borders (1px) on warning banners to ensure they "pop" forward from the UI plane.

## Shapes

The design system uses **Soft (Level 1)** roundedness. 

A 4px border radius is applied to standard buttons, chips, and input fields to soften the clinical look without losing the professional, structured feel. Main information cards use a slightly larger 8px radius (rounded-lg) to distinguish them as primary layout blocks.

## Components

### Information Cards
High-contrast blocks with a background color of #1E1E1E. They feature an uppercase label at the top, followed by a bold primary value and smaller supporting metadata.

### Data Tables
Tables should not have vertical borders. Use thin, low-opacity horizontal separators (#FFFFFF at 10% opacity). The header row uses uppercase labels with high contrast to separate the header from the data body.

### Status Chips
Small, rounded-pill containers with muted background colors (e.g., taupe for "OTC + Rx"). Text inside should be bold and centered.

### Warning Banners
A full-width component with a distinct secondary border (#F3A152) and a light tint of the same color for the background. It must include a warning icon and bold lead-in text.

### Typography Scales
- **Primary Header:** Large, bold, white text for the main subject.
- **Sub-header:** Muted gray, regular weight for secondary context or scientific names.