import { copilotModes, courseLevels, executiveLenses } from './data'

function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#home" className="nav-brand">Executive Fast Track</a>
          <ul className="nav-links">
            <li><a href="#course">Course</a></li>
            <li><a href="#learning-model">Learning Model</a></li>
            <li><a href="#lenses">Executive Lenses</a></li>
            <li><a href="#copilot">Copilot</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#simulator">Simulator</a></li>
          </ul>
          <a href="#simulator" className="nav-cta">Boardroom Simulator</a>
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
              <p className="hero-copy">Executive Fast Track is product-agnostic. It is not a proprietary framework course. It trains the engagement layer: CEO, CFO, CIO, COO, CMO, CISO, CRO, Chair, board, investor, procurement, and transformation sponsor language.</p>
              <div className="btn-group">
                <a href="#course" className="btn-primary">Explore the course</a>
                <a href="#copilot" className="btn-outline">Open the Copilot model</a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Executive Fast Track operating model">
              <p className="panel-kicker">Operating model</p>
              <h2>Same idea. Different room. Different language.</h2>
              <div className="panel-rule" />
              <p>The course trains the ability to rotate a proposal through executive value systems: growth, capital, platform control, operating rhythm, market demand, exposure, risk appetite, and board confidence.</p>
            </div>
          </div>
        </section>

        <section id="course">
          <div className="container">
            <p className="section-label">Course architecture</p>
            <h2>Three levels. One executive translation skill.</h2>
            <p className="intro-text">The first version is a private learning cockpit. It is designed to improve real conversations before it becomes a public product.</p>
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

        <section id="learning-model" className="section-alt">
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

        <section id="lenses">
          <div className="container">
            <p className="section-label">Executive lenses</p>
            <h2>Understand what each person in the room is protecting.</h2>
            <p className="intro-text">The course does not ask the learner to become a CEO, CFO, CMO, CISO, or Chair. It teaches enough of each value system to frame recommendations in language the room recognises.</p>
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
            <p className="intro-text">The Copilot supports low-energy completion, study consolidation, and adversarial boardroom practice. It does not force quizzes or reward vague executive language.</p>
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
            <p className="intro-text">The resource library will curate public videos, readings, transcripts, notes, and pathway references from reputable executive education, governance, finance, strategy, marketing, risk, and operations sources.</p>
            <div className="res-grid">
              {['Video anchors', 'Transcript sidecars', 'PDF notes', 'Optional readings', 'Cool notes', 'Pathway references'].map((item) => (
                <div className="res-card" key={item}>
                  <div className="res-icon">•</div>
                  <h3>{item}</h3>
                  <p>Release 2 will populate this category with curated module-level resources.</p>
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
                <p className="dash-summary-text">CEO, CFO, CIO, COO, CMO, CISO/CRO, and Chair pressure-test the same proposal from different value systems.</p>
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
            <a href="#learning-model">Learning Model</a>
            <a href="#lenses">Executive Lenses</a>
            <a href="#copilot">Copilot</a>
            <a href="#resources">Resources</a>
            <a href="#simulator">Simulator</a>
          </div>
          <p className="footer-bottom">Private build. Product-agnostic by design. Velocity Academy hosts the learning stream; the capability remains portable.</p>
        </div>
      </footer>
    </>
  )
}

export default App
