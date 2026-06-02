# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Tech Atlas (技术知识图谱)** — a static, searchable catalog of mainstream tech capabilities, scoped to "nearly everything you'd use to build an app": on-device and cloud capabilities across capture, vision, speech/audio, generative media, language/reasoning, spatial, platform, and foundation (runtimes / algorithms / hardware) layers. Built so the maintainer and others can quickly survey "what's technically possible right now," spot combinations, and spark product ideas — explicitly an anti-information-silo (信息茧房) tool. Being open-sourced on GitHub, hosted statically (GitHub Pages): no backend, no framework.

See [README.md](README.md) for the overview and [CONTRIBUTING.md](CONTRIBUTING.md) for the full entry/category conventions.

## Current status (read before editing)

Implemented and working:

- **Built:** `build.mjs` (Node + `gray-matter`) scans `content/` and generates `index.html`; `template/base.html` is the page shell. Run `npm run build`. Preview locally via `.claude/launch.json` (`python -m http.server` on :8123) + the Claude preview tools.
- **Content:** all 17 categories populated — **111 entries**. Application layer = 14 categories / 87 entries (original 5 hand-migrated, 9 via subagents). Foundation layer = 3 categories / 24 entries: `runtime` 8, `algorithm` 8, `hardware` 8 (added via parallel subagents; for these three, `source`/`deployment` use adjusted semantics per CONTRIBUTING — e.g. hardware source = vendor-proprietary/open-standard/cloud-compute). All web-verified to 2026-06; `index.html` regenerated & DOM-verified.
- **Prototype:** moved to `archive/tech-knowledge-base.html` (superseded by the generated `index.html`).
- **Next:** review/curate entries for accuracy; decide a LICENSE; optionally `git init` + push + enable GitHub Pages. Always edit `content/**/*.md`, NOT `index.html` (it's generated).

## Decisions locked in

- **Build language: Node** (`build.mjs`, `npm run build`). Confirmed on this machine: Node v24.15.0 / npm 11.12.1 (Python 3.14 also present, but Node is used).
- **Scope: the broadest atlas** — 14 categories in 7 groups (see below).
- **Field schema: the "enhanced" model** — `provenance` is split into two orthogonal, filterable axes: `source` (native/open/cloud) and `deployment` (on-device/cloud/hybrid); plus optional `license`, `cost`, `platforms`, `updated`.

## Target architecture

Content-as-data with a generated front end:

```
index.html        # GENERATED — never hand-edit once the build exists
build.mjs         # scans content/, emits index.html
template/base.html# page shell (header, search + filter controls, footer, the JS)
content/          # single source of truth
  <category>/
    _category.md  # category metadata: group, title, zh subtitle, filter_label, order
    <slug>.md     # one technology per file (frontmatter + optional body)
```

The generated `index.html` is committed so non-Node users can browse it and GitHub Pages can serve it directly. The build derives categories, section numbers, and filter chips from `content/`, eliminating the prototype's hand-synced category slugs.

## Categories (17, in 8 groups)

`imaging`, `sensing` (group: capture) · `vision`, `multimodal` (visual) · `asr`, `tts`, `audio` (audio) · `genvisual` (generative) · `llm`, `retrieval` (reasoning) · `spatial` (spatial) · `system`, `security`, `connectivity` (platform) · `runtime`, `algorithm`, `hardware` (foundation). The application layer (groups capture→platform) is the product-facing entry; the foundation layer (runtime/algorithm/hardware) goes one level deeper — for it, `source`/`deployment` use adjusted semantics (see CONTRIBUTING). `_category.md` carries `group`, `title`, `zh`, `filter_label`, `order`.

## Entry schema (frontmatter)

Each `content/<category>/<slug>.md` maps to one card. Full template in [CONTRIBUTING.md](CONTRIBUTING.md). Core fields: `title`, `category` (= folder slug), `role`, `desc`, `capability`/`limitation`/`invocation` (the 能力/限制/调用 specs), `tags` (search aliases → `data-keywords`).

Two filterable axes (this is the key schema improvement — keep them separate):
- **`source`**: `native` | `open` | `cloud` → badge color class `t-platform` / `t-open` / `t-cloud`.
- **`deployment`**: `on-device` | `cloud` | `hybrid` → drives an on-device/cloud filter.

Optional: `badge` (display-text override; color still from `source`), `license`, `cost`, `platforms`, `repo`, `links`, `updated`, `order`. Optional Markdown body = longer notes for a future detail page; the index card uses frontmatter only.

## Rendering conventions (from the prototype, carried into the template)

- **Card anatomy:** `.card-top` (`<h3>` title + `.tag` badge), `.role` line, `.desc` paragraph, `.specs` list of 能力/限制/调用. Reuse these — all styling keys off these classes. The badge color comes from `source`; surface `deployment` as a secondary marker/filter, not the main badge.
- **Search:** the filter JS concatenates `data-keywords` with the card's text content, so `tags` exist to make a card findable by terms not printed on it.
- **Theming:** all colors flow through CSS custom properties in `:root` (`--ink`, `--paper`, `--accent`, …); change them there, not per-rule.
- **Bilingual voice:** Fraunces serif for English/headings, Noto Sans SC for Chinese body; concise Chinese descriptions with inline English technical terms.
- The header entry count is computed from the DOM (don't hardcode it); the date and category count in the header meta are hardcoded — update them when content changes.
