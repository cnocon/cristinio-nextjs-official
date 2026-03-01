# Refactoring Plan
## Current State
The site is a Next.js 16 personal portfolio/blog with 4 pages (home, blog, portfolio, resume), 7 UI components, and MDX-powered blog posts. It works but has duplicated logic, a monolithic resume page, inconsistent patterns, and several small bugs.
## 1. Bug Fixes
**Files:** `src/app/ui/connect-row.jsx`, `src/app/ui/header.jsx`, `src/app/ui/tag.jsx`, `src/app/ui/global.module.scss`, `src/app/page.module.scss`, `src/lib/data/resume.js`
* `connect-row.jsx:11` — `class` → `className`
* `header.jsx:1` — Remove dead react-router-dom import comment
* `tag.jsx:5` — Remove redundant `key={slug}` (parent already provides `key`)
* `global.module.scss:83` — Stray `s` in `--rainbow-gradient-alt` value
* `global.module.scss (87-101)` — `--rainbow-gradient-light` is defined twice; second declaration silently overrides the first. Rename the second (lighter variant) to `--rainbow-gradient-lighter`
* `page.module.scss:89` — `--spacd-4` typo → `--space-4`
* `resume.js:110` — `categoryof` typo → `category`
* `resume.js` — Inconsistent property name: some skills use `type`, others use `category` for the same concept. Standardize to `category`
## 2. Extract Shared Blog Data Layer
**Current:** `post-list.jsx` and `blog/[slug]/page.jsx` both independently define `contentDir` and duplicate