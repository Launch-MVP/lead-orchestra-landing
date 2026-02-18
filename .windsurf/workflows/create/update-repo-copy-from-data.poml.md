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

        Identify targets by heuristics:
        - filenames containing: copy, hero, seo, tagline, faq, testimonials, services, pricing, metadata
        - exports/objects containing: headline, title, subtitle, description, keywords, openGraph, twitter, cta, buttonLabel, aria-label, question/answer
        - JSX text nodes (e.g. <h1>Text</h1>) and string literals used in UI (labels, placeholders, helper text)

        Inventory output requirements:
        - Group files by domain (data/seo/app/components/ui/etc.)
        - Explicitly list "embedded copy hotspots" where text is inline instead of imported from src/data
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
      </step>

      <step id="4" name="Apply Updates (or Dry Run)">
        If Dry_Run=true:
        - Do not edit files; only output the patch plan and a suggested diff structure.

        If Dry_Run=false:
        - Apply minimal edits to the exact keys specified.
        - Do not reorder object keys, reformat whole files, or rename exports.
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

        Static text leftovers check:
        - If Static_Text_Coverage="required":
          - Perform a repo-wide verification pass to identify remaining hard-coded UI strings in src/app and src/components.
          - Output a "Leftovers" list with file paths + short excerpts and either:
            - include them in the Copy_Spec (preferred), or
            - justify why they must remain (e.g. code identifiers, third-party constraints).
      </step>

      <step id="6" name="Output Change Report">
        Output:
        - Files changed (paths)
        - Keys updated per file
        - Any unresolved/missing targets
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
