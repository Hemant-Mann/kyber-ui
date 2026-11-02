---
version: alpha
name: Kyber UI Dashboard
description: Warm-neutral fintech dashboard system with amber-accented actions, compact data views, and a density toggle.
colors:
  primary: "#BA7308"
  secondary: "#E3E0DD"
  tertiary: "#171717"
  neutral: "#FBFAF9"
  surface: "#FFFFFF"
  on-surface: "#171717"
  border: "#E3E0DD"
  muted: "#EEEBE8"
  muted-foreground: "#666666"
  accent-soft: "#F5EBDB"
  danger: "#E86359"
  success: "#60CF54"
  warning: "#F39A0B"
  info: "#2496E6"
  dark-neutral: "#121212"
  dark-surface: "#171717"
  dark-on-surface: "#F2F2F2"
  dark-border: "#2E2E2E"
  dark-muted: "#262626"
  dark-muted-foreground: "#999999"
  dark-accent-soft: "#563A10"
typography:
  headline-xl:
    fontFamily: Overpass
    fontSize: 36px
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Overpass
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.014em
  body-md:
    fontFamily: Overpass
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Overpass
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
  label-md:
    fontFamily: Overpass
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.1
  label-sm:
    fontFamily: Overpass
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.04em
rounded:
  sm: 10px
  md: 13px
  lg: 15px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  control-height: 40px
  control-height-compact: 36px
  topbar-height: 56px
  topbar-height-compact: 52px
  sidebar-width: 268px
  sidebar-width-compact: 242px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: "{spacing.control-height}"
    padding: 16px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: "{spacing.control-height}"
    padding: 16px
  nav-item-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: 11px
    height: "{spacing.control-height}"
    padding: 9px
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: 12px
    height: 42px
    padding: 12px
---

## Overview
Kyber UI is a warm, practical dashboard style tuned for subscription and analytics workflows. The visual tone is calm and utility-first: soft neutrals for surfaces, high-contrast ink text for readability, and a single amber accent for actions and active states.

Density is part of the system, not a one-off variant. The same components should work in both standard and compact modes by scaling spacing, control heights, and sidebar width without changing hierarchy or color semantics.

## Colors
The palette is intentionally constrained to keep large data-heavy views scannable.

- **Primary (`#BA7308`)**: reserved for primary actions and active navigation.
- **Secondary (`#E3E0DD`)**: border and separator role.
- **Tertiary (`#171717`)**: primary text and high-emphasis iconography.
- **Neutral (`#FBFAF9`)**: default app background and soft control surfaces.
- **Surface (`#FFFFFF`)**: elevated cards and dialogs in light mode.
- **State colors**: `danger`, `success`, `warning` and `info` are status-only colors, not brand accents. Status pills use the color as text on a 16% tint of itself.

Dark mode keeps the same semantic mapping and accent hue, switching only surface and text luminance. Dark surfaces are pure neutral greys (no blue tint), matching Vexly.

## Typography
Overpass is the only type family for both display and body text, with weight and size carrying hierarchy.

- Headlines use tight leading and slight negative tracking for compact, dashboard-like density.
- Body text defaults to 14px to 16px depending on context.
- Labels are heavier than body copy to improve scan speed in controls, nav, and table headers.

Avoid introducing secondary type families unless there is a product-level brand change.

## Layout
The layout model is a two-column app shell: persistent sidebar plus fluid content panel.

- Use the 4/8/12/16/24 spacing scale for intra-component rhythm and section grouping.
- Keep primary controls on 40px height in standard density and 36px in compact density.
- Preserve sidebar width semantics (`268px` standard, `242px` compact, `70px` collapsed).
- Content is center-aligned with bounded horizontal padding rather than full-bleed panels.

Responsive behavior should collapse complexity before reducing legibility, especially in modal and table-heavy views.

## Elevation & Depth
Depth is subtle and functional:

- Primary separation comes from border contrast and surface tone shifts.
- Shadows are low-amplitude and used mainly for cards and modals.
- Backdrops and blur are reserved for focus-taking overlays (dialogs/search).

Avoid heavy multi-layer shadows or glow effects that compete with data content.

## Shapes
The shape language is soft-rectangular and consistent:

- Core radii: `10px`, `13px`, `15px`.
- Pill-like controls and badges use `999px` radius.
- Navigation items and inputs may use nearby fixed values (`11px`, `12px`) to match current implementation.

Do not mix sharp-corner containers with rounded controls in the same view.

## Components
Component behavior should follow existing role boundaries:

- **Buttons**: primary uses amber fill; secondary uses neutral surface with border.
- **Cards**: white (light) or dark-surface (dark) containers with border-first hierarchy.
- **Inputs/Search**: neutral fill, muted placeholder tone, strong focus readability.
- **Navigation items**: active state uses `accent-soft` background + `primary` foreground.
- **Modals**: large headline, stepped forms, and sticky footer actions for long flows.

When adding variants, define them as explicit tokens (for example `button-primary-hover`) instead of ad hoc color values in component CSS.

## Do's and Don'ts
- Do keep amber as the single interaction accent in a given screen.
- Do preserve density scaling through tokens rather than component-by-component overrides.
- Do maintain strong text contrast on all card and modal surfaces.
- Don't introduce new one-off spacing values outside the current scale unless required by layout breakpoints.
- Don't use vivid status colors (`danger`, `success`) for neutral navigation or decoration.
- Don't replace Overpass or mix additional font families without an intentional system update.
