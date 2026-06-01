import { copilotModes, courseLevels, executiveLenses, level100Modules } from './data'

function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#home" className="nav-brand">Executive Fast Track</a>
          <ul className="nav-links">
            <li><a href="#course">Course</a></li>
            <li><a href="#level-100">Level 100</a></li>
            <li><a href="#learning-model">Learning Model</a></li>
            <li><a href="#lenses">Executive Lenses</a></li>
            <li><a href="#copilot">Copilot</a></li>
            <li><a href="#simulator">Simulator</a></li>
          </ul>
          <a href="#level-100" className="nav-cta">Start Level 100</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="container hero-layout">
            <div>
              <div className="hero-bar" />
              <p className="section-label hero-label">Velocity Academy stream</p>
              <h1>C-suite fluency and boardroom engagement for serious operators.</h1>
              <p className="hero-sub">Learn to enter any executive room, read the decision landscape, and translate complex work into business value.</p>
              <p className="hero-copy">Executive Fast Track is product-agnostic. It trains the engagement layer: CEO, CFO, CIO, COO, CMO, CISO, CRO, Chair, board, investor, procurement, and transformation sponsor language.</p>
              <div className="btn-group">
                <a href="#level-100" className="btn-primary">Start Level 100</a>
                <a href="#copilot" className="btn-outline">Open the Copilot model</a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Executive Fast Track operating model">
              <p className="panel-kicker">Release 2 live</p>
              <h2>Seven foundation modules now wired.</h2>
              <div className="panel-rule" />
              <p>Level 100 covers executive thinking, strategy, finance, boardroom awareness, market narrative, risk/security, and operating rhythm.</p>
            </div>
          </div>
        </section>

        <section id="course">
          <div className="container">
            <p className="section-label">Course architecture</p>
            <h2>Three levels. One executive translation skill.</h2>
            <p className="intro-text">The first version is a private learning cockpit. Release 2 makes Level 100 usable as a practical foundation path.</p>
            <div className="level-grid">
              {courseLevels.map((level, index) => (
                <article className="dash-course state-inprogress" key={level.level}>
                  <div className="dash-course-header">
                    <div className="dash-course-header-left">
                      <div className="dash-course-n">{String(index + 1).padStart(2, '0')}</div>
                      <div>
                        <p className="level-eyebrow">{level.level}</p>
                        <h3 className="dash-course-title">{level.title}</h3>
                        <p className="dash-course-meta">{level.purpose}</p>
                      </div>
                    </div>
                    <span className="badge badge-seed">{level.status}</span>
                  </div>
                  <ul className="module-list">
                    {level.modules.map((module) => <li key={module}>{module}</li>)}
                  </ul>
                  <div className="dash-cert">
                    <p className="dash-cert-label">Completion outcome</p>
                    <strong>{level.outcome}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="level-100" className="section-alt">
          <div className="container">
            <p className="section-label">Level 100 live path</p>
            <h2>Foundation modules for executive language acquisition.</h2>
            <p className="intro-text">Each module has a learning anchor, cool note, boardroom sentence, vocabulary to steal, language to avoid, and an optional practice prompt.</p>
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
                    <p className="mini-label">Cool note</p>
                    <p>{module.coolNote}</p>
                  </div>
                  <div className="module-section boardroom-sentence">
                    <p className="mini-label">Boardroom sentence</p>
                    <strong>{module.boardroomSentence}</strong>
                  </div>
                  <div className="module-terms">
                    <div>
                      <p className="mini-label">Steal</p>
                      <div className="term-row">{module.termsToSteal.map((term) => <span key={term}>{term}</span>)}</div>
                    </div>
                    <div>
                      <p className="mini-label avoid-label">Avoid</p>
                      <div className="term-row avoid-row">{module.termsToAvoid.map((term) => <span key={term}>{term}</span>)}</div>
                    </div>
                  </div>
                  <div className="module-section drill-box">
                    <p className="mini-label">Practice prompt</p>
                    <p>{module.drill}</p>
                  </div>
                  {module.sourceUrl ? (
                    <a className="module-link" href={module.sourceUrl} target="_blank" rel="noreferrer">Open learning anchor</a>
                  ) : (
                    <span className="module-link muted-link">Learning anchor pending final curation</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-model">
          <div className="container split-layout">
            <div>
              <p className="section-label">Learning model</p>
              <h2>Video-first, not video-only.</h2>
              <p className="intro-text">Executive Fast Track uses the Multimodal Immersion Loop: video, transcript, PDF notes, optional reading, cool notes, executive vocabulary, Feynman replay, and scenario application.</p>
            </div>
            <div className="learning-steps">
              {['Watch', 'Read beside it', 'Capture rough notes', 'Generate cool notes', 'Translate into executive language', 'Apply in a scenario'].map((step, index) => (
                <div className="teach-item" key={step}>
                  <div className="step-number">{index + 1}</div>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lenses" className="section-alt">
          <div className="container">
            <p className="section-label">Executive lenses</p>
            <h2>Understand what each person in the room is protecting.</h2>
            <p className="intro-text">The course teaches enough of each executive value system to frame recommendations in language the room recognises.</p>
            <div className="cards-grid lens-grid">
              {executiveLenses.map((lens) => (
                <article className="card lens-card" key={lens.role}>
                  <div className="card-head">
                    <h3>{lens.role}</h3>
                    <span className="badge badge-planned">Lens</span>
                  </div>
                  <p className="lens-mandate">{lens.mandate}</p>
                  <div className="lens-block">
                    <p className="mini-label">Values</p>
                    <p>{lens.values}</p>
                  </div>
                  <div className="lens-block">
                    <p className="mini-label">Fear</p>
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

        <section id="copilot" className="section-dark">
          <div className="container">
            <p className="section-label">Executive Fast Track Copilot</p>
            <h2>The agent is a simulator, not a chatbot tutor.</h2>
            <p className="intro-text">The Copilot supports low-energy completion, study consolidation, and boardroom practice. It does not force quizzes or reward vague executive language.</p>
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

        <section id="resources">
          <div className="container">
            <p className="section-label">Resources</p>
            <h2>Curated global executive education patterns, not copied courses.</h2>
            <p className="intro-text">Release 2 adds module-level anchors and reading references. The next pass will refine exact videos, transcripts, PDF notes, and external pathway references.</p>
            <div className="res-grid">
              {['Video anchors', 'Transcript sidecars', 'PDF notes', 'Optional readings', 'Cool notes', 'Pathway references'].map((item) => (
                <div className="res-card" key={item}>
                  <div className="res-icon">•</div>
                  <h3>{item}</h3>
                  <p>Level 100 now has a first-pass resource structure for this category.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="simulator" className="section-alt">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Bring a real proposal. Defend it against the room.</h2>
              <p className="intro-text">The capstone trains decision clarity, commercial value, risk ownership, funding logic, evidence, timing, and next action. The output is a boardroom-ready one-pager, objection map, and decision memo.</p>
            </div>
            <div className="dash-summary simulator-summary">
              <div className="dash-summary-score">
                <div className="dash-summary-count">7</div>
                <div className="dash-summary-label">default roles</div>
              </div>
              <div className="dash-summary-next">
                <p className="dash-summary-text">CEO, CFO, CIO, COO, CMO, CISO/CRO, and Chair test the same proposal from different value systems.</p>
                <div className="dash-progress-bar dash-summary-bar"><div className="dash-progress-fill" style={{ width: '66%' }} /></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-brand">Executive Fast Track</p>
          <p className="footer-sub">A Velocity Academy stream for C-suite fluency, executive translation, and boardroom engagement.</p>
          <div className="footer-links">
            <a href="#course">Course</a>
            <a href="#level-100">Level 100</a>
            <a href="#learning-model">Learning Model</a>
            <a href="#lenses">Executive Lenses</a>
            <a href="#copilot">Copilot</a>
            <a href="#simulator">Simulator</a>
          </div>
          <p className="footer-bottom">Private build. Product-agnostic by design. Velocity Academy hosts the learning stream; the capability remains portable.</p>
        </div>
      </footer>
    </>
  )
}

export default App
