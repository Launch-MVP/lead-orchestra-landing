---
name: ingest-vibe-landing
trigger: manual
description: Ingest a vibe-coded landing HTML into this Next.js app with strict reuse-first component mapping, theme tokenization, and copy extraction. Produces an implementation plan without editing code.
---

```poml
<poml>
  <role>
    Act as a pragmatic landing-page integration engineer for this repository.
    Primary objective: ingest a "vibe-coded" static HTML landing page and integrate it into the app while reusing existing components first and only creating new components when necessary.

    Non-negotiables:
    - Reuse-first: prefer existing components in src/components (especially src/components/ui) over creating new ones.
    - Theme-first: convert hard-coded colors/typography to the existing CSS-variable theme tokens and Tailwind utilities (tailwind.config.ts + src/index.css).
    - Copy-first: extract copy into structured data/modules; do not leave large string blobs embedded in JSX.
    - No code changes in this workflow run: output a concrete plan + file map + component mapping only.
  </role>

  <let>
    <var name="Landing_Name">{{e.g. "Leak Slayer Autopilot"}}</var>
    <var name="Route_Slug">{{e.g. "leak-slayer-autopilot"}}</var>
    <var name="Raw_HTML">{{Paste or attach the vibe-coded HTML export}}</var>
    <var name="Brand_Mode">{{"inherit" | "new-theme-class"}}</var>
    <var name="Primary_Color_Hex">{{Optional. e.g. "#12aee2"}}</var>
    <var name="Secondary_Color_Hex">{{Optional. e.g. "#ffffffff"}}</var>
    <var name="Font_Request">{{Optional. e.g. "Spline Sans"}}</var>
    <var name="Icon_Request">{{Optional. e.g. "lucide-icons"}}</var>
  </let>

  <document id="repo_theme_system">
    Repo theme system facts to anchor decisions:
    - Tailwind tokens are backed by CSS variables in src/index.css.
    - Body theme classes are synchronized by src/contexts/BodyThemeSync.tsx.
    - Root layout sets baseline theme classes in src/app/layout.tsx.
    - UI primitives live in src/components/ui.
    - Marketing page composition patterns exist in src/app/page.tsx using SectionWrapper and existing sections.
  </document>

  <task>
    Produce an integration plan for "{{Landing_Name}}" at route "/{{Route_Slug}}" using the repository's existing component system and theme tokens.

    <steps>
      <step id="1" name="Context Ingestion (Repo) - Read Only">
        - Inspect theme + Tailwind wiring:
          @scan_file(`tailwind.config.ts`)
          @scan_file(`src/index.css`)
          @scan_file(`src/app/layout.tsx`)
          @scan_file(`src/contexts/BodyThemeSync.tsx`)
          @scan_file(`src/contexts/theme-context.tsx`)
        - Inventory reuse targets:
          @read_files_in_directory(`src/components/ui`)
          @read_files_in_directory(`src/components/layout`)
          @read_files_in_directory(`src/components/faq`)
          @read_files_in_directory(`src/components/pricing`)
          @read_files_in_directory(`src/components/sections`)
        - Capture composition conventions:
          @scan_file(`src/app/page.tsx`)
      </step>

      <step id="2" name="Normalize HTML into a Section Spec">
        From Raw_HTML:
        - Split into ordered sections (Hero, Features, Trust Anchor, Use Cases, Pricing, FAQ, Final CTA, Footer).
        - For each section, extract:
          - Purpose (1 sentence)
          - Inputs/props needed (data model)
          - Repeated patterns (cards, list items, tiers, FAQ items)
          - Interactions/state (e.g. pricing toggle, accordion open behavior)
          - External deps (fonts, icon sets, images) to remove or replace
        Output a concise "Section Spec" table.
      </step>

      <step id="3" name="Reuse-First Component Mapping">
        For each section in the Section Spec:
        - Attempt mapping to existing components first:
          - UI primitives from src/components/ui (Button/Card/Badge/Input/Accordion/Tabs/ToggleGroup/etc.)
          - Existing section-level components (src/components/sections, faq, pricing)
          - Layout wrappers (Navbar/Footer/PageLayout/SectionWrapper)
        - If no close match exists, propose a NEW component only if:
          - The pattern is repeated (or likely reused)
          - The component has clear props and is not page-specific markup
          - The same behavior cannot be achieved by composing existing primitives
        Output:
        - A "Reuse Map" table: HTML section -> existing component(s) -> needed props/data
        - A "New Components" list with justification (or explicit "none")
      </step>

      <step id="4" name="Theme + Typography Tokenization Plan">
        Goal: remove hard-coded colors and CDN Tailwind config patterns from the HTML.
        - Identify hard-coded colors in Raw_HTML (hexes, slate scales, gradients).
        - Provide the mapping to repo theme tokens:
          - bg-background, text-foreground, bg-card, border-border, text-muted-foreground
          - primary/accent/focus tokens as defined in tailwind.config.ts
        - Decide theming strategy based on Brand_Mode:
          - inherit: use existing theme-lead-orchestra / theme-dealscale tokens
          - new-theme-class: propose adding `.theme-<brand>` + `.theme-<brand>-light` blocks in src/index.css (do not implement; just specify variables to add)
        - Typography:
          - Prefer Next font pipeline in src/styles/fonts.ts.
          - If Font_Request differs, propose how to add it via next/font/google and the CSS var usage.
        - Icons:
          - Prefer lucide-react (already used) or existing icon utilities in src/components/icons.tsx.
          - If Icon_Request is material-icons, propose a conversion map to lucide equivalents.
      </step>

      <step id="5" name="Copy Extraction + Data Model Plan">
        - Propose a structured copy module for the landing:
          - hero: {eyebrow, headline, subhead, bullets[], primaryCta, secondaryCta?, formFields?}
          - features: Array<{icon, title, description, bullets[]}>
          - useCases: Array<{metric, title, description, steps[]}>
          - pricing: {modes: {creator, agency}, tiers[], ctas}
          - faq: Array<{question, answer}>
          - footer: {links[], legalLine}
        - Specify where copy should live (one of):
          - src/app/{{Route_Slug}}/copy.ts
          - or src/data/landing/{{Route_Slug}}.ts
        - Call out any strings that should become config/constants (e.g. trial days, "500+ creators", etc.)
      </step>

      <step id="6" name="File Placement Plan (No Code Changes)">
        Output a file map for the eventual implementation:
        - Route entry: src/app/{{Route_Slug}}/page.tsx
        - Copy/data module: (chosen in Step 5)
        - Any new reusable components: src/components/<domain>/<Component>.tsx
        - Any assets: public/<brand>/...
        Also specify what NOT to touch:
        - Do not add Tailwind CDN scripts.
        - Do not inline <style> blocks for theme colors; use tokens.
      </step>

      <step id="7" name="Acceptance Checklist">
        Provide a checklist for merge readiness:
        - Visual parity: mobile/tablet/desktop vs reference screenshots
        - Theme parity: light + dark verified using ThemeToggle + BodyThemeSync behavior
        - Accessibility: headings order, button labels, focus states
        - Performance: no third-party font/icon CDNs unless explicitly approved; use next/image where applicable
        - Maintainability: no untyped copy blobs; repeated patterns componentized
      </step>
    </steps>
  </task>

  <output-format>
    Output exactly these sections (in order):
    1) Section Spec (table)
    2) Reuse Map (table)
    3) New Components (list, or "none")
    4) Theme/Fonts/Icons Plan (bullets)
    5) Copy/Data Model (TypeScript-ish shapes)
    6) File Map (paths)
    7) Acceptance Checklist
  </output-format>
</poml>
```

