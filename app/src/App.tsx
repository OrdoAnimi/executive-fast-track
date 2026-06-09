import { useState, useEffect } from 'react'
import { courseLevels, executiveLenses, level100Modules } from './data'

const TRACK_NAMES = ['Foundation', 'Translation', 'Simulation']
const NAV_SECTIONS = ['curriculum', 'foundation', 'method', 'lenses', 'valour', 'simulator']

const VALOUR_LOOP = [
  { n: '01', label: 'Orient', desc: 'Read the room. Know who\'s in it and what they protect.' },
  { n: '02', label: 'Frame', desc: 'Translate your proposal into their language before you speak.' },
  { n: '03', label: 'Pressure-test', desc: 'Enter VALOUR and defend it against all eight executives.' },
  { n: '04', label: 'Refine', desc: 'Take the resistance back to the field guide. Adjust. Re-enter.' },
]

const VALOUR_ENTRIES = [
  {
    mode: 'Quick brief',
    when: '10 minutes before a meeting',
    desc: 'Read one executive lens. Pick your boardroom sentence. Walk in with the right language.',
    cta: 'Open VALOUR™ →',
  },
  {
    mode: 'Full prep',
    when: 'Before a board presentation',
    desc: 'Read all seven mindframes. Build your narrative across each value system. Enter the room ready.',
    cta: 'Open VALOUR™ →',
  },
  {
    mode: 'Live rehearsal',
    when: 'Any time',
    desc: 'Bring a real proposal. Eight executives will test it. Pressure reveals what polish hides.',
    cta: 'Open VALOUR™ →',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())
  const [expandedLenses, setExpandedLenses] = useState<Set<string>>(new Set())

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-82px 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  function toggleModule(id: string) {
    setExpandedModules(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  function toggleLens(role: string) {
    setExpandedLenses(prev => {
      const next = new Set(prev)
      if (next.has(role)) { next.delete(role) } else { next.add(role) }
      return next
    })
  }

  return (
    <>
      {/* ── Ecosystem strip ───────────────── */}
      <div className="eco-strip">
        <span className="eco-strip-label">ZenCloud ecosystem</span>
        <div className="eco-links">
          <a href="https://www.ordoanimi.com" target="_blank" rel="noreferrer">VALOUR™</a>
          <a href="https://velocityarchitectureframework.com" target="_blank" rel="noreferrer">Velocity™</a>
          <a href="https://www.zencloud.com.au" target="_blank" rel="noreferrer">ZenCloud™</a>
        </div>
      </div>

      {/* ── Navigation ────────────────────── */}
      <nav>
        <div className="nav-inner">
          <a href="#home" className="nav-brand">
            Executive Fast Track
            <small>by Ordo Animi</small>
          </a>
          <ul className="nav-links">
            {NAV_SECTIONS.map(s => (
              <li key={s}>
                <a href={`#${s}`} className={activeSection === s ? 'nav-active' : ''}>
                  {s === 'valour' ? 'How to Use VALOUR' : s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://www.ordoanimi.com" className="nav-cta" target="_blank" rel="noreferrer">
            Open VALOUR™
          </a>
        </div>
      </nav>

      <main>

        {/* ── Hero ──────────────────────────── */}
        <section id="home" className="hero">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">Executive Fast Track</p>
              <h1>Know the room<br /><em>before you enter it.</em></h1>
              <p className="hero-copy-text">
                Seven executive mindframes. Eight role lenses. One boardroom simulator.
              </p>
              <div className="btn-group">
                <a href="https://www.ordoanimi.com" className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOUR™ →
                </a>
                <a href="#foundation" className="btn-outline">Read the field guide</a>
              </div>
              <div className="hero-proof">
                <span>Field guide — free</span>
                <span>Eight executive lenses</span>
                <span>VALOUR rehearsal</span>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-panel-card">
                <div className="hero-panel-kicker">
                  <span>The VALOUR Loop</span>
                  <span>4 steps</span>
                </div>
                <h2>Orient · Frame · Pressure-test · Refine</h2>
                <p>Read the room. Translate your proposal. Defend it. Refine it.</p>
                <div className="hero-panel-divider">
                  <p className="hero-panel-live-label">Field guide live now</p>
                  <p className="hero-panel-live-text">Seven executive mindframes — free to read</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Curriculum ────────────────────── */}
        <section id="curriculum">
          <div className="container">
            <p className="section-label">Curriculum</p>
            <h2>Three levels in sequence.</h2>
            <p className="intro-text">Foundation is live. Translation and Simulation follow.</p>
            <div className="track-row">
              {courseLevels.map((level, i) => {
                const tc = level.status === 'Live' ? 'track-active' : level.status === 'Planned' ? 'track-future' : 'track-coming'
                return (
                  <div className={`track-stage ${tc}`} key={level.level}>
                    <div className="track-stage-name">{TRACK_NAMES[i]}</div>
                    <div className="track-stage-level">{level.level}</div>
                    <span className="track-stage-status">{level.status}</span>
                  </div>
                )
              })}
            </div>
            <div className="level-grid">
              {courseLevels.map((level, index) => {
                const lc = level.status === 'Live' ? 'level-live' : level.status === 'Planned' ? 'level-planned' : 'level-coming'
                return (
                  <article className={`dash-course ${lc}`} key={level.level}>
                    <div className="dash-course-header">
                      <div className="dash-course-header-left">
                        <div className="dash-course-n">{String(index + 1).padStart(2, '0')}</div>
                        <div>
                          <p className="level-eyebrow">{level.level}</p>
                          <h3 className="dash-course-title">{level.title}</h3>
                          <p className="dash-course-meta">{level.purpose}</p>
                        </div>
                      </div>
                      <span className={`badge ${level.status === 'Live' ? 'badge-seed' : 'badge-planned'}`}>
                        {level.status}
                      </span>
                    </div>
                    <ul className="module-list">
                      {level.modules.map((mod) => <li key={mod}>{mod}</li>)}
                    </ul>
                    <div className="dash-cert">
                      <p className="dash-cert-label">You leave with</p>
                      <strong>{level.outcome}</strong>
                    </div>
                    {level.status === 'Live' && (
                      <a href="#foundation" className="level-cta">
                        Read the field guide ↓
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Foundation mindframes ──────────── */}
        <section id="foundation" className="section-alt">
          <div className="container">
            <p className="section-label">Field Guide</p>
            <h2>Seven mindframes.</h2>
            <p className="intro-text">
              Each mindframe maps how an executive thinks under pressure — what they protect, fear, and reward.
              Open one to read the full briefing.
            </p>
            <div className="module-card-grid">
              {level100Modules.map((module) => {
                const isExpanded = expandedModules.has(module.id)
                return (
                  <article className="module-card" key={module.id}>
                    <div className="module-topline">
                      <span className="module-id">{module.id}</span>
                      <span className="badge badge-seed">{module.lens}</span>
                    </div>
                    <h3>{module.title}</h3>
                    <p className="module-outcome">{module.outcome}</p>
                    {isExpanded && (
                      <>
                        <div className="module-section">
                          <p className="mini-label">Key insight</p>
                          <p>{module.coolNote}</p>
                        </div>
                        <div className="module-section boardroom-sentence">
                          <p className="mini-label">Boardroom sentence</p>
                          <strong>{module.boardroomSentence}</strong>
                        </div>
                        <div className="module-terms">
                          <div>
                            <p className="mini-label">Deploy</p>
                            <div className="term-row">
                              {module.termsToSteal.map((term) => <span key={term}>{term}</span>)}
                            </div>
                          </div>
                          <div>
                            <p className="mini-label avoid-label">Retire</p>
                            <div className="term-row avoid-row">
                              {module.termsToAvoid.map((term) => <span key={term}>{term}</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="drill-box">
                          <p className="mini-label">Practice prompt</p>
                          <p>{module.drill}</p>
                        </div>
                      </>
                    )}
                    <button
                      className="module-card-btn btn-open"
                      onClick={() => toggleModule(module.id)}
                    >
                      {isExpanded ? 'Collapse ↑' : 'Open →'}
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Method / VALOUR Loop ──────────── */}
        <section id="method">
          <div className="container">
            <p className="section-label">Method</p>
            <h2>The VALOUR Loop.</h2>
            <p className="intro-text">
              Four steps from cold preparation to boardroom confidence.
            </p>
            <div className="loop-steps">
              {VALOUR_LOOP.map((step) => (
                <div className="loop-step" key={step.n}>
                  <span className="loop-step-n">{step.n}</span>
                  <div className="loop-step-body">
                    <strong className="loop-step-label">{step.label}</strong>
                    <p className="loop-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lenses ────────────────────────── */}
        <section id="lenses" className="section-alt">
          <div className="container">
            <p className="section-label">Executive Lenses</p>
            <h2>Eight roles. Eight value systems.</h2>
            <p className="intro-text">
              Know what each role protects, fears, and rewards before you speak.
            </p>
            <div className="cards-grid">
              {executiveLenses.map((lens) => {
                const isExpanded = expandedLenses.has(lens.role)
                return (
                  <article className="card" key={lens.role}>
                    <div className="card-head">
                      <h3>{lens.role}</h3>
                      <span className="badge badge-planned">Lens</span>
                    </div>
                    <p className="lens-mandate">{lens.mandate}</p>
                    {isExpanded && (
                      <>
                        <div className="lens-block">
                          <p className="mini-label">Protects</p>
                          <p>{lens.values}</p>
                        </div>
                        <div className="lens-block">
                          <p className="mini-label">Fears</p>
                          <p>{lens.fear}</p>
                        </div>
                        <div className="lens-block">
                          <p className="mini-label">Response pattern</p>
                          <p>{lens.responsePattern}</p>
                        </div>
                        <div className="lens-block">
                          <p className="mini-label avoid-label">Avoid saying</p>
                          <div className="term-row avoid-row">
                            {lens.weakLanguage.slice(0, 3).map((term) => <span key={term}>{term}</span>)}
                          </div>
                        </div>
                      </>
                    )}
                    <div className="term-row" style={{ marginTop: '0.75rem' }}>
                      {lens.language.slice(0, 3).map((term) => <span key={term}>{term}</span>)}
                    </div>
                    <button className="lens-toggle-btn" onClick={() => toggleLens(lens.role)}>
                      {isExpanded ? 'Less ↑' : 'Full lens →'}
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── How to Use VALOUR ─────────────── */}
        <section id="valour" className="section-dark">
          <div className="container">
            <p className="section-label">How to Use VALOUR</p>
            <h2>Three entry points.</h2>
            <p className="intro-text">
              Pick the one that matches where you are right now.
            </p>
            <div className="lib-grid">
              {VALOUR_ENTRIES.map((entry) => (
                <article className="book-card" key={entry.mode}>
                  <p className="book-track">{entry.when}</p>
                  <h3>{entry.mode}</h3>
                  <p>{entry.desc}</p>
                  <a
                    href="https://www.ordoanimi.com"
                    className="mode-cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entry.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Simulator ─────────────────────── */}
        <section id="simulator" className="section-dark">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Bring a live proposal.</h2>
              <p className="intro-text">
                Eight executives. Competing value systems. Real room pressure.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '15px', color: 'rgba(247,242,232,.48)' }}>
                Read the field guide first — then take your language into VALOUR™ and defend a real proposal.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://www.ordoanimi.com" className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOUR™ →
                </a>
              </div>
            </div>
            <div className="dash-summary">
              <div className="dash-summary-score">
                <div className="dash-summary-count">8</div>
                <div className="dash-summary-label">executive roles</div>
              </div>
              <div className="dash-summary-next">
                <p className="dash-summary-text">
                  CEO, CFO, CIO, COO, CMO, CISO/CRO, Chair — each testing your proposal from a different value system.
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(247,242,232,.36)', marginTop: '0.75rem', letterSpacing: '.04em' }}>
                  Read all seven mindframes before you enter.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand-block">
              <span className="footer-brand">
                Executive Fast Track
                <small>by Ordo Animi</small>
              </span>
              <p className="footer-sub">Know the room before you enter it.</p>
              <div className="footer-links" style={{ marginTop: '1.25rem' }}>
                <a href="#curriculum">Curriculum</a>
                <a href="#foundation">Field Guide</a>
                <a href="#method">The Loop</a>
                <a href="#lenses">Lenses</a>
                <a href="#valour">How to Use VALOUR</a>
                <a href="#simulator">Simulator</a>
              </div>
            </div>
            <div className="footer-cta-block">
              <p className="footer-cta-label">Ready to rehearse?</p>
              <a href="https://www.ordoanimi.com" className="footer-cta" target="_blank" rel="noreferrer">
                Open VALOUR™
              </a>
            </div>
          </div>
          <p className="footer-bottom">© 2026 Ordo Animi · ZenCloud Global Consultants</p>
        </div>
      </footer>
    </>
  )
}

export default App
