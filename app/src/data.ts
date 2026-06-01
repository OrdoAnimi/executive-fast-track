export type CourseLevel = {
  level: string
  title: string
  purpose: string
  modules: string[]
  outcome: string
  status: 'Foundation' | 'Designed' | 'Planned'
}

export type ExecutiveLens = {
  role: string
  mandate: string
  values: string
  fear: string
  language: string[]
  weakLanguage: string[]
  responsePattern: string
}

export type CopilotMode = {
  mode: string
  trigger: string
  purpose: string
  output: string[]
}

export const courseLevels: CourseLevel[] = [
  {
    level: 'Level 100',
    title: 'Executive Language Foundations',
    purpose:
      'Build recognition and basic fluency across strategy, finance, market, risk, operations, governance, and decision-making.',
    modules: [
      'Executive Thinking',
      'Strategy Without Architecture Jargon',
      'Finance for Non-Finance Leaders',
      'Boardroom Awareness',
      'Market Narrative and Commercial Positioning',
      'Risk, Security, and Assurance',
      'Operating Model and Execution Rhythm',
    ],
    outcome:
      'Explain a complex idea without hiding inside technical, architecture, or framework-first language.',
    status: 'Designed',
  },
  {
    level: 'Level 200',
    title: 'Executive Lens Translation',
    purpose:
      'Rotate the same idea through CEO, CFO, CIO, COO, CMO, CISO, CRO, Chair, board, investor, and sponsor lenses.',
    modules: [
      'CEO: Growth, Timing, and Strategic Risk',
      'CFO: Capital, Margin, and Investment Confidence',
      'CIO: Platform, Resilience, and Enterprise Control',
      'COO: Operating Rhythm and Execution',
      'CMO: Market Narrative and Demand',
      'CISO/CRO: Exposure, Assurance, and Risk Appetite',
      'Chair: Oversight, Duty, and Confidence',
    ],
    outcome:
      'Translate one proposal into role-specific executive language that can survive a senior room.',
    status: 'Foundation',
  },
  {
    level: 'Level 300',
    title: 'Boardroom Simulation',
    purpose:
      'Pressure-test a real proposal, product, transformation, consulting offer, or interview response in a simulated executive room.',
    modules: [
      'Scenario Intake',
      'Decision Framing',
      'Commercial Value Defence',
      'Risk and Trade-off Challenge',
      'Executive Objection Round',
      'Decision Memo and One-Pager',
    ],
    outcome:
      'Present a concise recommendation, defend it against executive objections, and leave with a boardroom-ready artefact.',
    status: 'Planned',
  },
]

export const executiveLenses: ExecutiveLens[] = [
  {
    role: 'CEO',
    mandate: 'Direction, growth, timing, execution confidence, reputation, capital, people, and strategic movement.',
    values: 'Market window, competitive pressure, strategic clarity, leadership alignment, and commercial movement.',
    fear: 'The organisation moves too slowly, backs the wrong bet, or cannot execute without damaging trust.',
    language: ['growth', 'timing', 'execution confidence', 'decision speed', 'market window', 'strategic risk'],
    weakLanguage: ['framework adoption', 'artefact maturity', 'architecture model detail', 'methodology-first explanation'],
    responsePattern:
      'State the decision, why now, what changes commercially, what risk is accepted, and what action is required.',
  },
  {
    role: 'CFO',
    mandate: 'Capital allocation, margin, cash flow, cost control, investment confidence, financial risk, and commercial discipline.',
    values: 'Funding logic, payback, spend control, margin protection, financial visibility, and risk-adjusted return.',
    fear: 'Another transformation consumes budget without measurable return or financial control.',
    language: ['investment case', 'cost-to-serve', 'payback', 'opex', 'capex', 'risk-adjusted return'],
    weakLanguage: ['better platform', 'modern architecture', 'cleaner design', 'transformation ambition without financial logic'],
    responsePattern:
      'Connect the proposal to spend control, risk reduction, investment sequencing, and measurable business value.',
  },
  {
    role: 'CIO',
    mandate: 'Technology strategy, enterprise platforms, resilience, delivery confidence, integration, security alignment, and business enablement.',
    values: 'Business speed with platform control, integration discipline, resilience, delivery credibility, and reduced fragmentation.',
    fear: 'The business promises speed while creating technical debt, cyber exposure, vendor lock-in, or delivery chaos.',
    language: ['platform resilience', 'integration risk', 'enterprise control', 'delivery confidence', 'technical debt'],
    weakLanguage: ['isolated pilots', 'tool-first answers', 'architecture theory without execution', 'business promise without platform reality'],
    responsePattern:
      'Show how the proposal increases business pace while preserving control, resilience, and delivery credibility.',
  },
  {
    role: 'COO',
    mandate: 'Operating rhythm, execution, repeatability, process performance, accountability, handoffs, scale, and service delivery.',
    values: 'Repeatable execution, role clarity, process control, throughput, reduced friction, and operating cadence.',
    fear: 'Strategy looks credible in the room but breaks across handoffs, ownership gaps, and operational scale.',
    language: ['operating rhythm', 'throughput', 'handoff', 'friction', 'accountability', 'repeatability'],
    weakLanguage: ['strategy without mechanics', 'governance theatre', 'technology change without adoption'],
    responsePattern:
      'Translate the proposal into repeatable execution, role clarity, operating cadence, and measurable performance improvement.',
  },
  {
    role: 'CMO',
    mandate: 'Market position, demand, brand trust, customer insight, differentiation, conversion, narrative, and growth campaigns.',
    values: 'Audience relevance, market narrative, differentiation, trust, demand creation, and conversion.',
    fear: 'The organisation builds something internally impressive that the market does not understand or care about.',
    language: ['market narrative', 'differentiation', 'audience', 'trust', 'demand', 'conversion'],
    weakLanguage: ['internal capability language', 'abstract value proposition', 'technical superiority with no buyer relevance'],
    responsePattern:
      'Show how the proposal creates a clearer market story, sharper differentiation, stronger trust, or better conversion.',
  },
  {
    role: 'CISO',
    mandate: 'Cyber resilience, exposure reduction, control maturity, incident readiness, identity, vulnerability, and board-visible security risk.',
    values: 'Exposure visibility, control maturity, prioritisation evidence, incident readiness, and defensible reporting.',
    fear: 'The business accepts security risk without visibility, evidence, funding, ownership, or incident readiness.',
    language: ['exposure', 'control maturity', 'incident readiness', 'threat surface', 'audit evidence', 'risk visibility'],
    weakLanguage: ['security diagrams without consequence', 'compliance theatre', 'tooling-first answers'],
    responsePattern:
      'Connect the proposal to reduced exposure, clearer evidence, better prioritisation, and defensible executive decisions.',
  },
  {
    role: 'CRO',
    mandate: 'Enterprise risk, risk appetite, controls, assurance, regulatory posture, accountability, and evidence.',
    values: 'Accepted risk, residual risk, assurance, control environment, evidence, and accountable ownership.',
    fear: 'The organisation moves faster than its ability to understand, evidence, and govern the risk it is accepting.',
    language: ['risk appetite', 'assurance', 'control environment', 'residual risk', 'decision record'],
    weakLanguage: ['speed without assurance', 'transformation without risk ownership', 'undocumented decision logic'],
    responsePattern:
      'Frame risk explicitly, define ownership, show evidence, and distinguish accepted risk from unmanaged risk.',
  },
  {
    role: 'Chair',
    mandate: 'Oversight, governance, CEO performance, strategic risk, capital stewardship, reputation, accountability, and confidence.',
    values: 'Options, trade-offs, consequences, assurance, accountability, and stakeholder confidence.',
    fear: 'Management does not understand the decision, exposure, trade-off, or consequence clearly enough for the board to rely on it.',
    language: ['oversight', 'decision', 'options', 'trade-off', 'assurance', 'accountability'],
    weakLanguage: ['operational detail without decision clarity', 'technical explanation before board relevance', 'recommendation without ask'],
    responsePattern:
      'Present the decision required, options considered, recommended course, risk accepted, mitigation, evidence, and next governance checkpoint.',
  },
]

export const copilotModes: CopilotMode[] = [
  {
    mode: 'Low-energy mode',
    trigger: 'Watched. Done. I skimmed it. Give me cool notes.',
    purpose: 'Keep the learner moving without forced questioning or school-mode friction.',
    output: ['Cool notes', 'One boardroom sentence', 'Three terms to steal', 'One practical takeaway'],
  },
  {
    mode: 'Study mode',
    trigger: 'Here are my notes. Here is the transcript. Summarise this.',
    purpose: 'Convert rough material into structured executive understanding.',
    output: ['Executive summary', 'Concepts explained plainly', 'Vocabulary', 'Examples', 'Gaps', 'Optional Feynman replay'],
  },
  {
    mode: 'Performance mode',
    trigger: 'Test me. Run the boardroom. Prepare me for this interview or pitch.',
    purpose: 'Pressure-test language, recommendation quality, and executive readiness.',
    output: ['Role-specific objections', 'Stronger rewrites', 'Decision clarity', 'Risk/value challenge', 'Next repetition'],
  },
]
