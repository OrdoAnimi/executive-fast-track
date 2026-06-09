import { copilotModes, courseLevels, executiveLenses, level100Modules } from './data'

const TRACK_NAMES = ['Foundation', 'Translation', 'Simulation']

function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#home" className="nav-brand">Executive Fast Track</a>
          <ul className="nav-links">
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#foundation">Foundation</a></li>
            <li><a href="#method">Method</a></li>
            <li><a href="#lenses">Lenses</a></li>
            <li><a href="#copilot">Copilot</a></li>
            <li><a href="#simulator">Simulator</a></li>
          </ul>
          <a href="#foundation" className="nav-cta">Begin</a>
        </div>
      </nav>

      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section id="home" className="hero">
          <div className="container hero-layout">
            <div>
              <div className="hero-bar" />
              <p className="section-label">Velocity Architecture</p>
              <h1>C-suite fluency.<br />Boardroom command.</h1>
              <p className="hero-copy">
                Seven modules, eight lenses, one boardroom simulator.
              </p>
              <div className="btn-group">
                <a href="#foundation" className="btn-primary">Begin</a>
                <a href="#simulator" className="btn-outline">Open Simulator</a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Curriculum structure">
              <p className="panel-kicker">Foundation · Translation · Simulation</p>
              <h2>Three levels.</h2>
              <div className="panel-rule" />
              <p>Language first. Lenses second. Boardroom pressure third.</p>
            </div>
          </div>
        </section>

        {/* ── Curriculum ───────────────────────────────────── */}
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
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Foundation modules ───────────────────────────── */}
        <section id="foundation" className="section-alt">
          <div className="container">
            <p className="section-label">Foundation</p>
            <h2>Seven modules.</h2>
            <p className="intro-text">Each module builds one executive skill.</p>
            <div className="module-card-grid">
              {level100Modules.map((module) => (
                <article className="module-card" key={module.id}>
                  <div className="module-topline">
                    <span className="module-id">{module.id}</span>
                    <span className="badge badge-seed">{module.lens}</span>
                  </div>
                  <h3>{module.title}</h3>
                  <p className="module-outcome">{module.outcome}</p>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Method ───────────────────────────────────────── */}
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
                  <div className="step-number">{index + 1}</div>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lenses ───────────────────────────────────────── */}
        <section id="lenses" className="section-alt">
          <div className="container">
            <p className="section-label">Lenses</p>
            <h2>Eight executives.</h2>
            <p className="intro-text">
              Know what each role protects, fears, and rewards before you speak.
            </p>
            <div className="cards-grid lens-grid">
              {executiveLenses.map((lens) => (
                <article className="card lens-card" key={lens.role}>
                  <div className="card-head">
                    <h3>{lens.role}</h3>
                    <span className="badge badge-planned">Lens</span>
                  </div>
                  <p className="lens-mandate">{lens.mandate}</p>
                  <div className="lens-block">
                    <p className="mini-label">Protects</p>
                    <p>{lens.values}</p>
                  </div>
                  <div className="lens-block">
                    <p className="mini-label">Fears</p>
                    <p>{lens.fear}</p>
                  </div>
                  <div className="term-row">
                    {lens.language.slice(0, 3).map((term) => <span key={term}>{term}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Copilot ──────────────────────────────────────── */}
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Resources ────────────────────────────────────── */}
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

        {/* ── Simulator ────────────────────────────────────── */}
        <section id="simulator" className="section-alt">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Bring a live proposal.</h2>
              <p className="intro-text">
                Seven executives. Competing value systems. Real room pressure.
              </p>
            </div>
            <div className="dash-summary simulator-summary">
              <div className="dash-summary-score">
                <div className="dash-summary-count">7</div>
                <div className="dash-summary-label">executive roles</div>
              </div>
              <div className="dash-summary-next">
                <p className="dash-summary-text">
                  CEO, CFO, CIO, COO, CMO, CISO/CRO, and Chair — each testing your proposal from a different value system.
                </p>
                <div className="dash-progress-bar dash-summary-bar">
                  <div className="dash-progress-fill" style={{ width: '66%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-brand">Executive Fast Track</p>
          <p className="footer-sub">A Velocity Architecture program.</p>
          <div className="footer-links">
            <a href="#curriculum">Curriculum</a>
            <a href="#foundation">Foundation</a>
            <a href="#method">Method</a>
            <a href="#lenses">Lenses</a>
            <a href="#copilot">Copilot</a>
            <a href="#simulator">Simulator</a>
          </div>
          <p className="footer-bottom">© 2026 Velocity Architecture.</p>
        </div>
      </footer>
    </>
  )
}

export default App
