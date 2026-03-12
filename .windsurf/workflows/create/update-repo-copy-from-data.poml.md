---
name: update-repo-copy-from-data
trigger: manual
description: AI-assisted update of ALL site copy (src/data + SEO + app/components) from a provided brief/spec, with validation + minimal diffs.
---

```poml
<poml>
  <role>
    Act as a pragmatic copy + SEO migration engineer for this repository.
    You will update ALL copy on the site (marketing copy, product copy, CTA labels, FAQ text, SEO metadata, OpenGraph/Twitter,
    and static SEO definitions) in a controlled way based on user-provided info.

    Priorities:
    - AI-enabled: if the user provides a brand brief (tone, audience, offer), generate a concrete Copy_Spec first, then apply it.
    - Update src/data first where feasible, but also update SEO + other copy across src/app and src/components.
    - Preserve TypeScript types and exported object shapes; change only values unless explicitly requested.
    - Make updates auditable: minimal diffs + file-by-file report + unresolved items.

    Safety:
    - Do not introduce unverifiable claims (numbers, guarantees, customer counts) unless explicitly provided in the inputs.
    - Avoid changing legal/compliance documents unless explicitly requested.
    - Do not change URLs/paths unless explicitly requested.
  </role>

  <let>
    <var name="Mode">{{"ai-generate" | "apply-spec"}}</var>
    <var name="Brand_Brief">
      {{Required for Mode="ai-generate". Provide:
        - product name, one-liner, ICP/audience, pains, outcomes
        - tone (e.g. direct, technical, playful), forbidden phrases, compliance constraints
        - key pages/routes to prioritize
        - proof points (ONLY if true): metrics, customer counts, guarantees, testimonials}}
    </var>
    <var name="SEO_Brief">
      {{Optional. Provide:
        - primary keyword themes, secondary keywords
        - brand name formatting, canonical domain if different
        - desired title/description patterns, social handles, OG image guidance}}
    </var>
    <var name="Copy_Spec">
      {{Required for Mode="apply-spec". Provide the new copy as either:
        (A) a JSON/YAML object mapping "target" -> "updates" (recommended), or
        (B) a path to a file under src/data that should be treated as the source of truth (e.g. src/data/landing/<something>.ts).}}
    </var>
    <var name="Scope">{{"all-site" | "src/data-only"}}</var>
    <var name="Dry_Run">{{true | false}}</var>
    <var name="Strict">{{true | false}}</var>
    <var name="Static_Text_Coverage">{{"required" | "best-effort"}}</var>
  </let>

  <document id="repo_copy_conventions">
    Copy conventions observed in this repo:
    - Many marketing strings and content live under src/data/* (e.g. src/data/landing/strapiLandingContent.ts, src/data/products/*-copy.ts).
    - Some copy is embedded in page components (e.g. src/app/page.tsx), but changes should prefer src/data and imports.
    - There are tests under src/data/__tests__ that validate data/catalog structures.
    - SEO defaults exist via Next.js metadata and helper utilities under src/utils/seo/* and src/app/metadata.ts (plus route-level generateMetadata).
    - Important: several live homepage sections use embedded copy in mounted components or in data files consumed by mounted components. Do not assume changing a hero config or one src/data file updates the visible homepage.
    - Homepage copy frequently spans both:
      - mounted component files under src/components/home, src/components/ui, src/components/contact, src/components/about, src/components/case-studies
      - data feeders under src/data/activity, src/data/bento, src/data/caseStudy, src/data/personas, src/data/home
  </document>

  <document id="homepage_priority_sections">
    When the task is a landing-page / homepage copy refresh, treat these sections as first-class required targets unless explicitly excluded:
    - Hero area and all supporting hero widgets/badges/metrics
    - Trusted-by / logo scroller copy
    - Interactive showcase blocks and before/after comparison cards
    - Activity stream / notifications / event feed sections
    - Bento / feature-grid cards
    - Case-studies section headers, featured cards, and supporting intro text
    - Mission / About summary blocks on the homepage
    - Persona fallback text that can leak into live descriptions, subtitles, or SEO-derived strings

    Known files and modules that have previously contained live landing-page copy:
    - src/components/home/heros/live-dynamic-hero-demo/*
    - src/components/home/ReactivateCampaignInput.tsx
    - src/components/home/ReactivateCampaignBadges.tsx
    - src/components/home/FeatureSectionActivity/index.tsx
    - src/components/home/CallDemoShowcase.tsx
    - src/components/contact/utils/TrustedByScroller.tsx
    - src/components/about/AboutUsSection.tsx
    - src/components/ui/pixelated-voice-overlay.tsx
    - src/components/ui/pixelated-voice-clone-card.tsx
    - src/components/case-studies/CaseStudyGrid.tsx
    - src/components/case-studies/RelatedCaseStudies.tsx
    - src/data/activity/activityStream.ts
    - src/data/bento/main.tsx
    - src/data/caseStudy/caseStudies.ts
    - src/data/personas/catalog.ts
    - src/data/home/aiOutreachStudio.ts
  </document>

  <document id="launch_mvp_specific_context">
    Current brand/system context that future one-shot copy updates must preserve and verify:
    - The active offer is Pilot Spring, not Lead Orchestra or Deal Scale, unless the user explicitly asks to keep or restore those brands on specific pages.
    - The default in-person flagship offer is a Denver-based 3-day MVP build workshop.
    - "Bootcamp" language should be treated as stale unless explicitly requested; prefer "workshop".
    - Default timeline framing for the flagship offer is 3 days, not weeks.
    - "Features" language may need to be reframed as "services" when the surrounding page is describing delivery offers rather than software capabilities.

    Pilot Spring pricing / offer structure that copy updates must respect unless the user overrides it:
    - Pricing tabs include monthly, one-time, and in-person.
    - In-person offers are distinct, discount-framed workshop tiers with Denver positioning.
    - The pricing page may show compare-at pricing, limited-time discounts, corner ribbons, and Denver-specific badges.
    - When updating pricing copy, preserve any logic that distinguishes discounted price, original price, deposit amount, and workshop tier.

    Contact / conversion flow context that copy refreshes must keep internally consistent:
    - The quick/short form is the Denver workshop deposit flow, not a generic consultation form.
    - The long form is the "Apply for Free Slot" qualification flow.
    - "What's Next?" content must swap by contact tab:
      - deposit / conversion tab -> reservation, deposit, scheduling, build
      - free-slot / prequalification tab -> application, review, qualification, next-step routing
    - Banner, footer, CTA bars, and contact tabs should stay aligned on the same offer naming.

    Product catalog context that copy refreshes must explicitly include:
    - Notion Systems are real products in this repo and must not be omitted from launch/product catalog updates.
    - SEO/AEO products should remain present and should be optimized for Pilot Spring positioning unless explicitly removed.
    - Credits remain in the catalog and may need AI / MVP-specific copy, not removal.
    - Product category copy should distinguish between templates, services, workshops, support, and specialist staffing.

    Events page context:
    - Events should reflect Pilot Spring workshops, founder sessions, launch/product strategy events, and related offerings.
    - The events page should include an upcoming Denver workshop entry when relevant to the current offer set.
    - Replace stale scraping/data-conference language if the brand scope has changed to Pilot Spring.

    Tracking / analytics context:
    - Do not remove or silently break GTM / dataLayer / gtag-sensitive CTA behavior when editing product, pricing, or contact copy modules.
    - If CTA labels or button purposes change materially, note that tracking/event naming may also need verification.

    Stale-language verification themes:
    - Lead Orchestra
    - Deal Scale / DealScale
    - scraping / scraper / lead scraping when the page is supposed to be Pilot Spring-focused
    - "consultation" when the actual flow is a deposit hold or free-slot application
    - weeks/bootcamp phrasing when the offer is now framed as a 3-day workshop
  </document>

  <task>
    Update ALL site copy (including SEO) based on provided inputs, with minimal diffs and validation.

    <steps>
      <step id="1" name="Inventory Copy + SEO Targets (Repo Scan)">
        Static_Text_Coverage behavior:
        - required: treat ALL user-visible static strings as in-scope and produce a leftovers report if anything remains unpatched.
        - best-effort: update obvious copy modules + SEO + major pages; report hotspots but do not guarantee zero leftovers.

        Always scan:
        - Canonical copy stores:
          @read_files_in_directory(`src/data`)
        - SEO + metadata:
          @scan_file(`src/app/metadata.ts`)
          @scan_file(`src/app/robots.ts`)
          @scan_file(`src/app/sitemap.ts`)
          @read_files_in_directory(`src/utils/seo`)
        - App/pages/components for embedded copy (best effort):
          @read_files_in_directory(`src/app`)
          @read_files_in_directory(`src/components`)
        - Full src tree for static text:
          @read_files_in_directory(`src`)

        For homepage/landing-page work, also perform a mounted-surface inventory:
        - Identify which sections are actually rendered on src/app/page.tsx
        - Follow imports into mounted component trees and their direct data dependencies
        - Build a "live surface map" of file -> rendered section so hidden/unused modules are not mistaken for the active source of truth
        - Do not stop at top-level hero config files if visible strings also exist in child components, badges, cards, or local arrays

        Identify targets by heuristics:
        - filenames containing: copy, hero, seo, tagline, faq, testimonials, services, pricing, metadata
        - exports/objects containing: headline, title, subtitle, description, keywords, openGraph, twitter, cta, buttonLabel, aria-label, question/answer
        - JSX text nodes (e.g. <h1>Text</h1>) and string literals used in UI (labels, placeholders, helper text)

        Inventory output requirements:
        - Group files by domain (data/seo/app/components/ui/etc.)
        - Explicitly list "embedded copy hotspots" where text is inline instead of imported from src/data
        - Explicitly list "mounted homepage hotspots" for every visible section on the landing page
        - If the brief implies Pilot Spring positioning, explicitly inventory:
          - pricing tabs/cards/ribbons
          - contact page tabs/forms/whats-next modules
          - banner/footer CTA modules
          - products catalog categories and Notion systems
          - events page datasets and event-detail SEO
      </step>

      <step id="2" name="Generate or Parse Copy_Spec">
        If Mode="ai-generate":
        - Use Brand_Brief (+ SEO_Brief if present) to generate a concrete Copy_Spec that targets the discovered inventory.
        - Output the generated Copy_Spec in a machine-applicable form (explicit key paths), including SEO updates.
        - Enforce Safety: do not invent claims or numbers not present in Brand_Brief.

        If Mode="apply-spec":
        Accept either:
        - Explicit mapping:
          { "src/data/landing/strapiLandingContent.ts::landingContentGaps.hero.headline": "New headline", ... }
          or nested object patches:
          { "src/data/landing/strapiLandingContent.ts::landingContentGaps": { "hero": { "headline": "..." } } }
        - Or "source of truth file path" mode (Strict=true recommended):
          - Read the file under src/data and treat its exported object(s) as authoritative.

        Validation rules:
        - Ensure targets exist (path + export + nested key).
        - Ensure updated values match expected primitive/container type (string/number/boolean/array/object).
        - If Strict=true: fail on unknown keys or shape changes.
        - Normalize whitespace (trim line endings) but do not rewrite prose.
      </step>

      <step id="3" name="Plan the Patch (No Edits Yet)">
        Produce a deterministic patch plan:
        - File list to change
        - For each file: export(s) touched + key paths updated + old/new values (short preview)
        - Identify risky updates:
          - Copy that includes HTML fragments (e.g. spans with classes)
          - Copy referenced by tests/catalog schemas
          - SEO fields that affect canonical URLs, titles, descriptions, robots, sitemap entries
          - Mounted component strings that override src/data values
          - Repeated brand/product names that appear in interactive demos, badges, captions, and fallback states
          - CTA copy changes that may desync with conversion flow semantics (deposit vs apply vs pricing vs contact)
          - Product-category updates that can accidentally hide real catalog items such as Notion products
      </step>

      <step id="4" name="Apply Updates (or Dry Run)">
        If Dry_Run=true:
        - Do not edit files; only output the patch plan and a suggested diff structure.

        If Dry_Run=false:
        - Apply minimal edits to the exact keys specified.
        - Do not reorder object keys, reformat whole files, or rename exports.
        - When a visible section is mounted from inline component strings, patch the mounted source directly instead of assuming a data-layer change will propagate.
        - When a section mixes component-local strings and imported data, update both sources if needed so the rendered UI is internally consistent.
        - If a target key is missing:
          - Strict=true: stop and report missing keys.
          - Strict=false: add key only if the surrounding object shape obviously supports it, otherwise stop and ask.
      </step>

      <step id="5" name="Consistency Checks">
        - Ensure TypeScript still typechecks (best effort; do not introduce any syntax errors).
        - If updates touch data catalogs with tests under src/data/__tests__:
          - Recommend running existing test commands (do not assume ability to run them unless asked).
        - Grep for old phrases that should have been replaced if Copy_Spec included "find/replace" instructions.
        - SEO sanity checks:
          - Titles are within reasonable length (avoid truncation)
          - Descriptions are present and non-duplicative across major pages (best effort)
          - No accidental removal of metadataBase or canonical domain config unless requested
        - Product catalog sanity checks:
          - Confirm category-driven product pages still include applicable Notion products, SEO/AEO products, credits, and any Pilot Spring-specific items mentioned in the brief
        - Conversion-flow sanity checks:
          - Confirm deposit-oriented CTAs still point to deposit/reservation flows
          - Confirm free-slot/application CTAs still point to qualification flows
          - Confirm pricing/detail links still target the intended pricing tab or route when the copy implies a specific offer type
        - CTA tracking sanity checks:
          - If product/pricing/contact CTA text changed, verify no obvious GTM/dataLayer/gtag-related copy assumptions were left inconsistent

        Static text leftovers check:
        - If Static_Text_Coverage="required":
          - Perform a repo-wide verification pass to identify remaining hard-coded UI strings in src/app and src/components.
          - Output a "Leftovers" list with file paths + short excerpts and either:
            - include them in the Copy_Spec (preferred), or
            - justify why they must remain (e.g. code identifiers, third-party constraints).

        Landing-page brand scrub check:
        - If the task changes the offer, product name, audience, or homepage positioning:
          - run a targeted verification pass against the mounted homepage surfaces and their direct data feeders
          - explicitly check for stale phrases from the previous brand/campaign in:
            - headings
            - subtitles
            - before/after comparison text
            - badges and metrics
            - placeholders and helper text
            - activity/event feed items
            - case-study section intros
            - mission/about blurbs
        - Report exact file paths for any stale phrases still present.

        Required homepage verification targets:
        - src/components/contact/utils/TrustedByScroller.tsx
        - src/components/home/FeatureSectionActivity/index.tsx
        - src/components/ui/pixelated-voice-overlay.tsx
        - src/components/ui/pixelated-voice-clone-card.tsx
        - src/components/about/AboutUsSection.tsx
        - src/data/activity/activityStream.ts
        - src/data/bento/main.tsx
        - src/components/case-studies/CaseStudyGrid.tsx
        - src/components/case-studies/RelatedCaseStudies.tsx
        - src/data/caseStudy/caseStudies.ts
        - src/data/personas/catalog.ts

        Required non-homepage verification targets for Pilot Spring offer refreshes:
        - src/components/layout/BetaStickyBanner.tsx
        - src/components/layout/FooterBetaCta.tsx
        - src/app/contact/ContactClient.tsx
        - src/components/contact/form/ConversionForm.tsx
        - src/components/contact/form/IntakeForm.tsx
        - src/data/contact/conversionFormFields.ts
        - src/data/contact/intakeFormFields.ts
        - src/data/service/slug_data/consultationSteps.ts
        - src/components/pricing/CatalogPricing.tsx
        - src/data/service/slug_data/pricing.ts
        - src/data/products/index.ts
        - src/data/products/notion.ts
        - src/app/events/EventClient.tsx
        - src/components/events/EventsGrid.tsx
        - src/data/events/index.ts
      </step>

      <step id="6" name="Output Change Report">
        Output:
        - Files changed (paths)
        - Keys updated per file
        - Any unresolved/missing targets
        - Explicit note on whether all mounted homepage priority sections were checked and updated
        - Follow-ups:
          - List remaining embedded copy hotspots and propose moving them into src/data (optional, but recommended)
          - Any new copy modules recommended under src/data/<domain>/...
      </step>
    </steps>
  </task>

  <output-format>
    Output exactly these sections (in order):
    1) Copy+SEO Inventory (paths grouped by domain)
    2) Generated Copy_Spec (only if Mode="ai-generate")
    3) Patch Plan (file -> key paths -> new values preview)
    4) Validation Results (errors/warnings)
    5) Applied Changes (files changed) OR "Dry Run: no files changed"
    6) Unresolved Items (list)
    7) Static Text Leftovers (required if Static_Text_Coverage="required")
    8) Suggested Follow-ups (optional)
  </output-format>
</poml>
```
