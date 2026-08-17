# Elizabeth Wang Portfolio — Design System

A design system for a personal UX/communication-design portfolio, built from one reference screenshot: Elizabeth Wang's homepage (`uploads/be14c95976a369be12abaf2a133b41c2.jpg`). No codebase or Figma file was provided — everything here is derived from that single image plus new pages designed to match its style.

**Source material:** one screenshot only. No GitHub repo, no Figma link. If more screenshots, a live site URL, or a Figma file become available, re-run this system against them for higher fidelity.

## Index

- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — portrait photo and 6 project thumbnails, cropped directly from the source screenshot.
- `components/navigation/` — `NavBar`, `Footer`.
- `components/core/` — `ProjectCard`, `AnnotatedWord`, `ArrowLink`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand imagery).
- `templates/homepage/`, `templates/case-study/`, `templates/about/` — the homepage recreation plus two new pages designed in the same style (only the homepage was in the source).
- `thumbnail.html` — project tile.

## Components

- **NavBar** — wordmark + text nav links.
- **Footer** — single-line copyright.
- **ProjectCard** — grid tile: thumbnail image + caption strip.
- **AnnotatedWord** — hand-drawn circle emphasis around one word (the "designer" detail from the bio line).
- **ArrowLink** — caption-sized link with a directional arrow, used as a scroll cue.

### Intentional additions
This is a small, content-first personal site, not an app — there's no form/feedback/data-display inventory to draw from. The 5 components above are exactly what the one reference screen uses. Nothing else was invented.

## Content fundamentals

- **Voice:** first-person-adjacent but written in third person about herself, lowercase, plain and understated: "elizabeth wang is a communication designer—a storyteller passionate about making product experiences and visuals with a human-centered approach."
- **Casing:** sentence starts are lowercase ("elizabeth wang is...", "currently studying..."). Proper nouns and @handles keep normal casing.
- **Structure:** short, declarative sentences. No headlines-as-taglines, no marketing language, no calls to action beyond a single soft prompt ("Explore a few featured projects ↓").
- **@mentions as credentials:** affiliations are written like social handles — "@cmu", "@microsoft" — understated instead of "Carnegie Mellon University" / "Microsoft" spelled out.
- **Captions:** project captions follow a strict "Title—Description" pattern, e.g. "Recap—Learning tool for project-based courses". Always an em dash, no period.
- **No emoji.** No exclamation points. No superlatives ("amazing", "innovative").

## Visual foundations

- **Palette:** near-monochrome. Off-white/warm-gray page background (`--bg-page`, #eeeeeb), near-black ink for text (`--ink-1`), two muted gray steps for secondary text. One accent blue (`--accent`, #0a66c2) sampled from the Microsoft-project thumbnails — used sparingly (link hover, one active nav state), never as a background.
- **Type:** a single grotesque sans (Inter, substituted — see Caveats) for everything; no serif, no display face. Size does the hierarchy work, not weight — most text is regular weight.
- **Spacing:** generous, airy vertical rhythm; wide left/right page margins; content sits in a single centered column, not full-width.
- **Backgrounds:** flat color fields only. No gradients, no textures, no patterns. Project thumbnails carry their own (varied) background colors — purple, cream, black, blue — while the site chrome around them stays neutral.
- **Imagery:** the profile photo is desaturated (grayscale, slightly high-contrast) — a deliberate departure from the colorful project thumbnails, which are full-color product screenshots and illustrations.
- **Animation:** none observed in the source. Treat this as a static, low-motion brand; if adding interaction, keep it instant or a very fast fade — nothing bouncy.
- **Hover/press states:** not visible in a static screenshot — this system defines a conservative default (text darkens to the accent blue on hover) rather than inventing something unobserved.
- **Borders:** thin 1px hairlines in light gray separate the nav from content and each project cell from its neighbors — a strict grid, not cards with shadow.
- **Corners:** square. No rounded corners anywhere in the source.
- **Cards:** the "project card" is a flat rectangle — no shadow, no radius, just a thumbnail with a bordered caption strip beneath it. It reads as a grid cell, not a floating card.
- **Layout rule:** a fixed top nav; a single bio column; a strict 2-column project grid below it, each cell a fixed aspect ratio.
- **Transparency/blur:** none observed.
- **One hand-drawn detail:** a loose, sketchy circle drawn around the word "designer" in the bio line — the system's single illustrative flourish, isolated in `AnnotatedWord`. Use it once per page, on the key self-description word, not as a recurring pattern.

## Iconography

No icon system, icon font, or SVG icon set is visible in the source — the homepage uses only text, underlines, and one arrow glyph (↓) as its entire "iconographic" vocabulary. `ArrowLink` reflects that: plain Unicode arrow characters, not icon glyphs. If future pages need real icons (e.g. social links), match the stroke-based, minimal feel — do not introduce a filled/colorful icon set.

## Caveats — please help me iterate

- **Font substitution:** the source screenshot doesn't expose the actual typeface. I used **Inter** (a close, common grotesque match) as a placeholder. If you know the real font (or have the actual site's CSS/webfonts), send it and I'll swap it in.
- **Single source image:** only the homepage was available. `case-study.html` and `about.html` are new pages I designed to extend the system, not recreations — they're my best guess at how this style extends to more content, not verified against a real case-study or about page. If real ones exist, share them so I can correct these.
- **No logo:** there's no logomark in the source, just the plain-text name. I kept it as text everywhere a mark would go.
- **Exact colors/spacing:** sampled visually from a JPEG screenshot, not measured from code — treat hex values and pixel spacing as close approximations, not exact.

**What would help most:** the live site URL, the actual project pages (Recap, Tote, Impressions, etc.), or the site's source/Figma file — any of these would let me replace the guesses above with exact values.
