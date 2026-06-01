# Build Plan

## Delivery principle

Build in controlled release cycles. Do not use one uncontrolled overnight generation run. Each cycle must define scope, files, acceptance criteria, verification steps, and commit state before moving forward.

## Release 0 — Product operating system

Status: complete.

Purpose: Establish the private product foundation.

Scope:

- Product charter.
- Learning model.
- UX principles.
- Content standards.
- Executive persona model.
- Copilot specification.
- Boardroom simulator specification.
- Curriculum shell.
- Resource placeholders.
- Prompt library shell.

Acceptance criteria:

- The repo explains what Executive Fast Track is.
- The product is explicitly product-agnostic and framework-agnostic.
- The learning model is clear: video-first, transcript-supported, note-driven, Copilot-assisted, retrieval-reinforced, scenario-applied.
- The Copilot has low-energy, study, and performance modes.
- Executive personas include at least CEO, CFO, CIO, COO, CMO, CISO, CRO, and Chair.
- The curriculum shell includes Level 100, Level 200, and Level 300.

## Release 1 — Static site MVP

Status: complete.

Purpose: Create a private course site scaffold.

Scope:

- React/Vite app under `app/`.
- Premium executive academy visual direction.
- Static pages: Home, Course, Learning Model, Executive Lenses, Copilot, Resources, Simulator.
- Static data for course levels and executive personas.

Acceptance criteria:

- `npm install` works.
- `npm run build` passes.
- Homepage communicates the product promise within ten seconds.
- Site feels credible to a senior executive, consultant, or board-facing professional.
- No authentication, payments, backend, or certification logic.

## Release 2 — Level 100 curriculum

Status: content complete; pending local build and visual verification.

Purpose: Build the first usable learning path.

Scope:

- Executive Thinking.
- Strategy Without Architecture Jargon.
- Finance for Non-Finance Leaders.
- Boardroom Awareness.
- Market Narrative and Commercial Positioning.
- Risk, Security, and Assurance.
- Operating Model and Execution Rhythm.

Acceptance criteria:

- Each module has video anchor, transcript placeholder, PDF notes placeholder, optional reading, cool notes, executive vocabulary, terms to avoid, one boardroom sentence, and optional drill.
- Learner can complete a module in low-energy mode without forced quiz behaviour.
- Level 100 modules are visible on the app homepage.
- Resources index includes first-pass video and reading anchors.

Verification required:

```bash
cd /c/Users/phill/Documents/GitHub/executive-fast-track/app
npm install
npm run build
npm run dev
```

## Release 3 — Executive lens system

Purpose: Build role-based translation patterns.

Scope:

- CEO, CFO, CIO, COO, CMO, CISO, CRO, Chair, board member, investor, procurement, transformation sponsor.
- For each role: values, fears, funded outcomes, blocked ideas, trusted evidence, language patterns, objection patterns.

Acceptance criteria:

- One idea can be translated into at least five executive languages.
- Copilot can identify audience-specific framing gaps.

## Release 4 — Copilot and simulation layer

Purpose: Convert the course into a practice engine.

Scope:

- Copilot prompt.
- Module builder prompt.
- Boardroom simulator prompt.
- Rubrics.
- Low-energy, study, and performance mode scripts.

Acceptance criteria:

- Copilot can generate cool notes from rough learner input.
- Copilot can run a simulated executive objection round.
- Copilot avoids generic coaching fluff and forces decision-level language.

## Release 5 — Boardroom simulator capstone

Purpose: Create the Shark Tank-style practice environment.

Scope:

- Scenario intake.
- Executive room composition.
- Pitch structure.
- Objection map.
- Decision memo.
- Final executive one-pager.

Acceptance criteria:

- Learner can bring a real idea and leave with a boardroom-ready framing artefact.
- Simulator pressure-tests commercial value, risk, evidence, timing, funding, and decision request.
