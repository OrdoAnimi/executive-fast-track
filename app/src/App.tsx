import { useState, useEffect } from 'react'
import { copilotModes, courseLevels, executiveLenses, level100Modules } from './data'

const TRACK_NAMES = ['Foundation', 'Translation', 'Simulation']
const NAV_SECTIONS = ['curriculum', 'foundation', 'method', 'lenses', 'copilot', 'simulator']
const REVIEWED_KEY = 'eft:reviewed-modules'

function loadReviewed(): Set<string> {
  try {
    const saved = localStorage.getItem(REVIEWED_KEY)
    return saved ? new Set(JSON.parse(saved) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

function saveReviewed(ids: Set<string>) {
  try { localStorage.setItem(REVIEWED_KEY, JSON.stringify([...ids])) } catch { /* quota */ }
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())
  const [reviewedModules, setReviewedModules] = useState<Set<string>>(loadReviewed)
  const [expandedLenses, setExpandedLenses] = useState<Set<string>>(new Set())

  const reviewedCount = reviewedModules.size
  const totalModules = level100Modules.length
  const allReviewed = reviewedCount === totalModules

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

  function toggleReviewed(id: string) {
    setReviewedModules(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      saveReviewed(next)
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
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a href="#foundation" className="nav-cta">Begin</a>
        </div>
      </nav>

      <main>

        {/* ── Hero ──────────────────────────── */}
        <section id="home" className="hero">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">Executive Fast Track</p>
              <h1>C-suite fluency.<br /><em>Boardroom command.</em></h1>
              <p className="hero-copy-text">
                Seven modules, eight lenses, one boardroom simulator.
              </p>
              <div className="btn-group">
                <a href="#foundation" className="btn-primary">Begin Foundation</a>
                <a href="#simulator" className="btn-outline">Open Simulator</a>
              </div>
              <div className="hero-proof">
                <span>Foundation live now</span>
                <span>Eight executive lenses</span>
                <span>Boardroom simulation</span>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-panel-card">
                <div className="hero-panel-kicker">
                  <span>Curriculum</span>
                  <span>3 levels</span>
                </div>
                <h2>Foundation · Translation · Simulation</h2>
                <p>Language first. Lenses second. Boardroom pressure third.</p>
                <div className="hero-panel-divider">
                  <p className="hero-panel-live-label">Currently live</p>
                  <p className="hero-panel-live-text">Level 100 — Executive Language Foundations</p>
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
                        Begin Foundation ↓
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Foundation modules ─────────────── */}
        <section id="foundation" className="section-alt">
          <div className="container">
            <p className="section-label">Foundation</p>
            <h2>Seven modules.</h2>
            <p className="intro-text">
              Open a module to read the key insight, boardroom sentence, vocabulary, and practice prompt.
            </p>

            {/* Progress strip */}
            <div className="module-progress">
              <div className="module-progress-bar">
                <div className="module-progress-fill" style={{ width: `${(reviewedCount / totalModules) * 100}%` }} />
              </div>
              <span className={`module-progress-count${allReviewed ? ' is-complete' : ''}`}>
                {allReviewed ? '✓ All modules reviewed' : `${reviewedCount} of ${totalModules} reviewed`}
              </span>
            </div>

            <div className="module-card-grid">
              {level100Modules.map((module) => {
                const isExpanded = expandedModules.has(module.id)
                const isReviewed = reviewedModules.has(module.id)
                return (
                  <article
                    className={`module-card${isReviewed ? ' is-reviewed' : ''}`}
                    key={module.id}
                  >
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
                        {module.sourceUrl ? (
                          <a className="module-link" href={module.sourceUrl} target="_blank" rel="noreferrer">
                            Open learning anchor →
                          </a>
                        ) : (
                          <span className="module-link muted-link">Learning anchor in curation</span>
                        )}
                      </>
                    )}

                    <div className="module-card-actions">
                      <button
                        className={`module-card-btn${isReviewed ? ' is-reviewed' : ''}`}
                        onClick={() => toggleReviewed(module.id)}
                      >
                        {isReviewed ? '✓ Reviewed' : 'Mark reviewed'}
                      </button>
                      <button
                        className="module-card-btn btn-open"
                        onClick={() => toggleModule(module.id)}
                      >
                        {isExpanded ? 'Collapse ↑' : 'Open →'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Completion bridge to VALOUR */}
            {allReviewed && (
              <div className="completion-cta">
                <div className="completion-cta-text">
                  <p className="completion-cta-title">Foundation complete. Take your language into the boardroom.</p>
                  <span className="completion-cta-sub">Open VALOUR™ to rehearse a live proposal with AI executives.</span>
                </div>
                <a href="https://www.ordoanimi.com" className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOUR™ →
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ── Method ────────────────────────── */}
        <section id="method">
          <div className="container split-layout">
            <div>
              <p className="section-label">Method</p>
              <h2>Watch. Translate. Apply.</h2>
              <p className="intro-text">
                Video anchors the concept. Notes build the vocabulary. Scenarios test the language.
              </p>
            </div>
            <div className="learning-steps">
              {[
                'Watch',
                'Read beside it',
                'Capture rough notes',
                'Distil into executive language',
                'Build your boardroom sentence',
                'Apply in a live scenario',
              ].map((step, index) => (
                <div className="teach-item" key={step}>
                  <span className="step-number">0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lenses ────────────────────────── */}
        <section id="lenses" className="section-alt">
          <div className="container">
            <p className="section-label">Lenses</p>
            <h2>Eight executives.</h2>
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

        {/* ── Copilot ───────────────────────── */}
        <section id="copilot" className="section-dark">
          <div className="container">
            <p className="section-label">Copilot</p>
            <h2>Three modes.</h2>
            <p className="intro-text">Fast-track, deep study, or pressure test.</p>
            <div className="lib-grid">
              {copilotModes.map((mode) => (
                <article className="book-card" key={mode.mode}>
                  <p className="book-track">{mode.mode}</p>
                  <h3>{mode.trigger}</h3>
                  <p>{mode.purpose}</p>
                  <div className="mode-output">
                    {mode.output.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a
                    href="https://www.ordoanimi.com"
                    className="mode-cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in VALOUR™ →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Resources ─────────────────────── */}
        <section id="resources">
          <div className="container">
            <p className="section-label">Resources</p>
            <h2>Six resource types.</h2>
            <ul className="res-list">
              {[
                { icon: '▶', title: 'Video anchors', desc: 'Business school and practitioner content. One per module.' },
                { icon: '≡', title: 'Transcript sidecars', desc: 'Full transcripts beside every video. Annotate and build vocabulary.' },
                { icon: '↓', title: 'PDF notes', desc: 'Key ideas, sentences, and vocabulary. Scan before any room.' },
                { icon: '◎', title: 'Optional readings', desc: 'Two or three external references for operators who want to go deeper.' },
                { icon: '✦', title: 'Cool notes', desc: 'The one insight that makes a module stick.' },
                { icon: '→', title: 'Pathway references', desc: 'Pointers to programs where this language is already in use.' },
              ].map((item) => (
                <li key={item.title}>
                  <span className="res-list-icon">{item.icon}</span>
                  <div>
                    <p className="res-list-title">{item.title}</p>
                    <p className="res-list-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Simulator ─────────────────────── */}
        <section id="simulator" className="section-dark">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Bring a live proposal.</h2>
              <p className="intro-text">
                Seven executives. Competing value systems. Real room pressure.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '15px', color: 'rgba(247,242,232,.48)' }}>
                Complete Foundation first — then take your language into VALOUR™ and defend a real proposal.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://www.ordoanimi.com" className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOUR™ →
                </a>
              </div>
            </div>
            <div className="dash-summary">
              <div className="dash-summary-score">
                <div className="dash-summary-count">7</div>
                <div className="dash-summary-label">executive roles</div>
              </div>
              <div className="dash-summary-next">
                <p className="dash-summary-text">
                  CEO, CFO, CIO, COO, CMO, CISO/CRO, and Chair — each testing your proposal from a different value system.
                </p>
                <div className="dash-progress-bar dash-summary-bar">
                  <div className="dash-progress-fill" style={{ width: `${(reviewedCount / totalModules) * 100}%` }} />
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(247,242,232,.36)', marginTop: '0.5rem', letterSpacing: '.04em' }}>
                  {reviewedCount} of {totalModules} modules reviewed
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
              <p className="footer-sub">C-suite fluency and boardroom command.</p>
              <div className="footer-links" style={{ marginTop: '1.25rem' }}>
                <a href="#curriculum">Curriculum</a>
                <a href="#foundation">Foundation</a>
                <a href="#method">Method</a>
                <a href="#lenses">Lenses</a>
                <a href="#copilot">Copilot</a>
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
