import { copilotModes, courseLevels, executiveLenses, level100Modules } from './data'

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
              <p className="section-label hero-label">Velocity Architecture</p>
              <h1>Walk into any executive room. Change the outcome.</h1>
              <p className="hero-sub">
                Built for senior operators who can solve hard problems — and need to own the room where the decisions land.
              </p>
              <p className="hero-copy">
                Seven foundation modules. Eight executive lenses. A boardroom simulator that puts your live proposal under real room pressure.
              </p>
              <div className="btn-group">
                <a href="#foundation" className="btn-primary">Open Curriculum</a>
                <a href="#simulator" className="btn-outline">Explore Simulator</a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Curriculum structure">
              <p className="panel-kicker">Foundation · Translation · Simulation</p>
              <h2>Three levels in sequence.</h2>
              <div className="panel-rule" />
              <p>
                Start with the language. Rotate it through every executive lens.
                Then defend a live proposal under boardroom pressure.
              </p>
            </div>
          </div>
        </section>

        {/* ── Curriculum ───────────────────────────────────── */}
        <section id="curriculum">
          <div className="container">
            <p className="section-label">Curriculum</p>
            <h2>Foundation, translation, simulation.</h2>
            <p className="intro-text">
              Three levels in sequence. Each builds on the last. Most operators enter at Foundation and are surprised how much shifts.
            </p>
            <div className="level-grid">
              {courseLevels.map((level, index) => (
                <article
                  className={`dash-course${level.status === 'Live' ? ' state-inprogress' : ''}`}
                  key={level.level}
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* ── Foundation modules ───────────────────────────── */}
        <section id="foundation" className="section-alt">
          <div className="container">
            <p className="section-label">Foundation</p>
            <h2>Seven modules. Seven shifts in how you speak.</h2>
            <p className="intro-text">
              Each module delivers a boardroom sentence that works, vocabulary to deploy immediately, and a practice prompt to test your language under pressure.
            </p>
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
              <h2>Watch it. Translate it. Say it.</h2>
              <p className="intro-text">
                The Multimodal Immersion Loop keeps you moving without school-mode friction. Video anchors the concept. Notes build the vocabulary. Scenario application tests whether the language holds under pressure.
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
            <p className="section-label">Executive lenses</p>
            <h2>Read the room before you open your mouth.</h2>
            <p className="intro-text">
              Know what each person protects, fears, and rewards before you speak. The language that lands with the CEO loses with the CFO. Knowing the difference changes what you say first.
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
            <p className="section-label">Executive Copilot</p>
            <h2>Practice in the room before you're in the room.</h2>
            <p className="intro-text">
              Three modes, depending on where you are — moving fast, deep in a study block, or ready to be pressure-tested. The Copilot meets you there.
            </p>
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
            <h2>Everything the module needs. Nothing it doesn't.</h2>
            <p className="intro-text">
              Each module is anchored to real material. Six resource types keep the learning moving without adding overhead.
            </p>
            <div className="res-grid">
              {[
                {
                  icon: '▶',
                  title: 'Video anchors',
                  desc: 'High-signal videos from global business schools and practitioner content. Each one anchors a module to executive thinking in practice.',
                },
                {
                  icon: '≡',
                  title: 'Transcript sidecars',
                  desc: 'Full transcripts sit beside every video. Annotate, underline, and build your executive vocabulary in context.',
                },
                {
                  icon: '↓',
                  title: 'PDF notes',
                  desc: 'Module-level PDFs distil key ideas, boardroom sentences, and vocabulary into a format you can scan before any room.',
                },
                {
                  icon: '◎',
                  title: 'Optional readings',
                  desc: 'Two or three curated external references for operators who want to go deeper without following a syllabus.',
                },
                {
                  icon: '✦',
                  title: 'Cool notes',
                  desc: 'The one insight that makes a module stick — the framing shift that changes how you walk into a room.',
                },
                {
                  icon: '→',
                  title: 'Pathway references',
                  desc: 'Curated pointers to external programs and communities where this language is already in use.',
                },
              ].map((item) => (
                <div className="res-card" key={item.title}>
                  <div className="res-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Simulator ────────────────────────────────────── */}
        <section id="simulator" className="section-alt">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Put your real proposal under room pressure.</h2>
              <p className="intro-text">
                Bring a live proposal, transformation, or recommendation. Seven executives test it from competing value systems simultaneously. You leave with a boardroom-ready brief, an objection map, and a decision memo.
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
          <p className="footer-sub">C-suite fluency and boardroom command. A Velocity Architecture program.</p>
          <div className="footer-links">
            <a href="#curriculum">Curriculum</a>
            <a href="#foundation">Foundation</a>
            <a href="#method">Method</a>
            <a href="#lenses">Lenses</a>
            <a href="#copilot">Copilot</a>
            <a href="#simulator">Simulator</a>
          </div>
          <p className="footer-bottom">
            © 2026 Velocity Architecture. Executive Fast Track is a Velocity Architecture program for C-suite fluency, executive translation, and boardroom engagement.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
