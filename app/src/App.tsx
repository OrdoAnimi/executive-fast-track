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
    content: 'quick-brief',
  },
  {
    mode: 'Full prep',
    when: 'Before a board presentation',
    desc: 'Read all seven mindframes. Build your narrative across each value system. Enter the room ready.',
    content: 'full-prep',
  },
  {
    mode: 'Live session',
    when: 'Any time',
    desc: 'Bring a real proposal. Eight executives will test it. Pressure reveals what polish hides.',
    content: 'live-rehearsal',
  },
]

const CLUSTERS = [
  {
    name: 'Growth & Market',
    accent: 'growth',
    roles: ['CEO', 'CMO'],
    theme: 'Win and sustain relevance.',
    signal: 'These roles ask: does it matter to the market, and will it move?',
  },
  {
    name: 'Capital & Risk',
    accent: 'capital',
    roles: ['CFO', 'CISO', 'CRO'],
    theme: 'Protect the balance sheet. Evidence the exposure.',
    signal: 'These roles ask: can we afford it, and can we evidence the risk we are accepting?',
  },
  {
    name: 'Operations & Delivery',
    accent: 'ops',
    roles: ['COO', 'CIO'],
    theme: 'Make it work. Make it scale.',
    signal: 'These roles ask: who owns it, how does it run, and can it survive at scale?',
  },
  {
    name: 'Governance',
    accent: 'gov',
    roles: ['Chair'],
    theme: 'Oversight, accountability, and stakeholder confidence.',
    signal: 'This role asks: is the decision clear, the risk owned, and the accountability explicit?',
  },
]

function valourUrl(campaign: string, content?: string): string {
  const params: Record<string, string> = {
    utm_source: 'eft',
    utm_medium: 'referral',
    utm_campaign: campaign,
  }
  if (content) params.utm_content = content
  return `https://www.ordoanimi.com?${new URLSearchParams(params).toString()}`
}

function navLabel(s: string): string {
  if (s === 'valour') return 'Use VALOUR'
  if (s === 'foundation') return 'Field Guide'
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())
  const [expandedClusters, setExpandedClusters] = useState<Set<string>>(new Set())
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-82px 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function toggleModule(id: string) {
    setExpandedModules(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  function toggleCluster(name: string) {
    setExpandedClusters(prev => {
      const next = new Set(prev)
      if (next.has(name)) { next.delete(name) } else { next.add(name) }
      return next
    })
  }

  return (
    <>

      {/* Ã¢ÂÂÃ¢ÂÂ Navigation Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
      <nav aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-brand">
            Executive Fast Track
            <small>by Ordo Animi</small>
          </a>
          <ul className="nav-links" role="list">
            {NAV_SECTIONS.map(s => (
              <li key={s}>
                <a href={`#${s}`} className={activeSection === s ? 'nav-active' : ''}>
                  {navLabel(s)}
                </a>
              </li>
            ))}
          </ul>
          <a href={valourUrl('nav-cta')} className="nav-cta" target="_blank" rel="noreferrer">
            Open VALOURÃ¢ÂÂ¢
          </a>
          <button
            className={`hamburger${mobileNavOpen ? ' is-open' : ''}`}
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileNavOpen(prev => !prev)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
        <div
          id="mobile-nav"
          className={`mobile-nav${mobileNavOpen ? ' is-open' : ''}`}
          aria-hidden={!mobileNavOpen}
        >
          {NAV_SECTIONS.map(s => (
            <a
              key={s}
              href={`#${s}`}
              className={`mobile-nav-link${activeSection === s ? ' nav-active' : ''}`}
              onClick={() => setMobileNavOpen(false)}
            >
              {navLabel(s)}
            </a>
          ))}
          <a
            href={valourUrl('mobile-nav')}
            className="mobile-nav-cta"
            onClick={() => setMobileNavOpen(false)}
            target="_blank"
            rel="noreferrer"
          >
            Open VALOURÃ¢ÂÂ¢ Ã¢ÂÂ
          </a>
        </div>
      </nav>

      <main>

        {/* Ã¢ÂÂÃ¢ÂÂ Hero Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
        <section id="home" className="hero">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">Executive Fast Track</p>
              <h1>Know the room<br /><em>before you enter it.</em></h1>
              <p className="hero-copy-text">
                Seven executive mindframes. Eight role lenses. One boardroom simulator.
              </p>
              <div className="btn-group">
                <a href={valourUrl('hero-cta')} className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOURÃ¢ÂÂ¢ Ã¢ÂÂ
                </a>
                <a href="#foundation" className="btn-outline">Read the field guide</a>
              </div>
              <div className="hero-proof">
                <span>Field guide Ã¢ÂÂ free</span>
                <span>Eight executive lenses</span>
                <span>VALOUR live session</span>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-panel-card">
                <div className="hero-panel-kicker">
                  <span>The VALOUR Loop</span>
                  <span>4 steps</span>
                </div>
                <p className="hero-panel-loop">Orient ÃÂ· Frame ÃÂ· Pressure-test ÃÂ· Refine</p>
                <p>Read the room. Translate your proposal. Defend it. Refine it.</p>
                <div className="hero-panel-divider">
                  <p className="hero-panel-live-label">Field guide live now</p>
                  <p className="hero-panel-live-text">Seven executive mindframes Ã¢ÂÂ free to read</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ Curriculum Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
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
                      <a href="#foundation" className="level-cta">Read the field guide Ã¢ÂÂ</a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ Field Guide Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
        <section id="foundation" className="section-alt">
          <div className="container">
            <p className="section-label">Field Guide</p>
            <h2>Seven mindframes.</h2>
            <p className="intro-text">
              Each entry maps how an executive thinks under pressure Ã¢ÂÂ what they protect, fear, and reward.
              Open one to read the full briefing.
            </p>
            <div className="module-card-grid">
              {level100Modules.map((module) => {
                const isExpanded = expandedModules.has(module.id)
                return (
                  <article className="module-card" key={module.id}>
                    <div className="module-topline">
                      <span className="badge badge-seed">{module.lens}</span>
                    </div>
                    <h3>{module.title}</h3>
                    <p className="module-outcome">{module.outcome}</p>
                    {isExpanded && (
                      <>
                        <div className="mindframe-block">
                          <p className="mini-label">The mindframe</p>
                          <p>{module.coolNote}</p>
                        </div>
                        <div className="mindframe-block mindframe-say">
                          <p className="mini-label">Say this</p>
                          <strong className="boardroom-line">{module.boardroomSentence}</strong>
                          <div className="term-row" style={{ marginTop: '0.75rem' }}>
                            {module.termsToSteal.map((term) => <span key={term}>{term}</span>)}
                          </div>
                        </div>
                        <div className="mindframe-block">
                          <p className="mini-label avoid-label">Not this</p>
                          <div className="term-row avoid-row">
                            {module.termsToAvoid.map((term) => <span key={term}>{term}</span>)}
                          </div>
                          <p className="field-drill">{module.drill}</p>
                        </div>
                      </>
                    )}
                    <button
                      className="module-card-btn btn-open"
                      onClick={() => toggleModule(module.id)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Collapse Ã¢ÂÂ' : 'Open Ã¢ÂÂ'}
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ VALOUR Loop Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
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
                  <span className="loop-step-n" aria-hidden="true">{step.n}</span>
                  <div className="loop-step-body">
                    <strong className="loop-step-label">{step.label}</strong>
                    <p className="loop-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ Executive Clusters Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
        <section id="lenses" className="section-alt">
          <div className="container">
            <p className="section-label">Executive Lenses</p>
            <h2>Four clusters. Eight roles.</h2>
            <p className="intro-text">
              Executives share value systems within clusters. Know the cluster first Ã¢ÂÂ then the role.
            </p>
            <div className="cluster-grid">
              {CLUSTERS.map((cluster) => {
                const isExpanded = expandedClusters.has(cluster.name)
                const clusterLenses = executiveLenses.filter(l => cluster.roles.includes(l.role))
                return (
                  <article className={`cluster-card cluster-${cluster.accent}`} key={cluster.name}>
                    <div className="cluster-header">
                      <div className="cluster-header-left">
                        <h3 className="cluster-name">{cluster.name}</h3>
                        <p className="cluster-theme">{cluster.theme}</p>
                      </div>
                      <div className="cluster-roles-strip">
                        {cluster.roles.map(r => <span key={r}>{r}</span>)}
                      </div>
                    </div>
                    <p className="cluster-signal">{cluster.signal}</p>
                    {isExpanded && (
                      <div className="cluster-roles-detail">
                        {clusterLenses.map((lens, i) => (
                          <div className={`role-entry${i > 0 ? ' role-entry-ruled' : ''}`} key={lens.role}>
                            <div className="role-entry-head">
                              <strong className="role-entry-name">{lens.role}</strong>
                              <span className="role-entry-mandate">{lens.mandate}</span>
                            </div>
                            <div className="role-3block">
                              <div className="role-block">
                                <p className="mini-label">Protects</p>
                                <p>{lens.values}</p>
                              </div>
                              <div className="role-block">
                                <p className="mini-label">Fears</p>
                                <p>{lens.fear}</p>
                              </div>
                              <div className="role-block">
                                <p className="mini-label">Wins them over</p>
                                <p>{lens.responsePattern}</p>
                              </div>
                            </div>
                            <div className="role-language">
                              <div className="term-row">
                                {lens.language.slice(0, 4).map(t => <span key={t}>{t}</span>)}
                              </div>
                              <div className="term-row avoid-row" style={{ marginTop: '0.4rem' }}>
                                {lens.weakLanguage.slice(0, 2).map(t => <span key={t}>{t}</span>)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      className="cluster-toggle-btn"
                      onClick={() => toggleCluster(cluster.name)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Close cluster Ã¢ÂÂ' : `Open ${cluster.roles.length > 1 ? cluster.roles.length + ' roles' : 'lens'} Ã¢ÂÂ`}
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ How to Use VALOUR Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
        <section id="valour">
          <div className="container">
            <p className="section-label">How to Use VALOUR</p>
            <h2>Three entry points.</h2>
            <p className="intro-text">
              Pick the one that matches where you are right now.
            </p>
            <div className="lib-grid lib-grid-light">
              {VALOUR_ENTRIES.map((entry) => (
                <article className="book-card" key={entry.mode}>
                  <p className="book-track">{entry.when}</p>
                  <h3>{entry.mode}</h3>
                  <p>{entry.desc}</p>
                  <a
                    href={valourUrl('how-to-use', entry.content)}
                    className="mode-cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open VALOURÃ¢ÂÂ¢ Ã¢ÂÂ
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ã¢ÂÂÃ¢ÂÂ Simulator Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */}
        <section id="simulator" className="section-dark">
          <div className="container simulator-panel">
            <div>
              <p className="section-label">Boardroom Simulator</p>
              <h2>Bring a live proposal.</h2>
              <p className="intro-text">
                Eight executives. Competing value systems. Real room pressure.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '15px', color: 'rgba(247,242,232,.48)' }}>
                Read the field guide first Ã¢ÂÂ then take your language into VALOURÃ¢ÂÂ¢ and defend a real proposal.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href={valourUrl('simulator-cta')} className="btn-primary" target="_blank" rel="noreferrer">
                  Open VALOURÃ¢ÂÂ¢ Ã¢ÂÂ
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
                  CEO, CFO, CIO, COO, CMO, CISO, CRO, and Chair Ã¢ÂÂ each testing your proposal from a different value system.
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
              <p className="footer-sources">
                Field guide informed by McKinsey, AICD, NIST Cybersecurity Framework, and public executive education material.
              </p>
              <div className="footer-links" style={{ marginTop: '1.25rem' }}>
                <a href="#curriculum">Curriculum</a>
                <a href="#foundation">Field Guide</a>
                <a href="#method">The Loop</a>
                <a href="#lenses">Lenses</a>
                <a href="#valour">Use VALOUR</a>
                <a href="#simulator">Simulator</a>
              </div>
              <div className="footer-legal-links">
                <a href="/privacy.html" target="_blank" rel="noreferrer">Privacy Policy</a>
                <a href="mailto:phil@myintenterprises.com">Contact</a>
              </div>
            </div>
            <div className="footer-cta-block">
              <p className="footer-cta-label">Ready to rehearse?</p>
              <a href={valourUrl('footer-cta')} className="footer-cta" target="_blank" rel="noreferrer">
                Open VALOURÃ¢ÂÂ¢
              </a>
            </div>
          </div>
          <p className="footer-bottom">ÃÂ© 2026 Ordo Animi ÃÂ· The OrdoAnimi Group</p>
        </div>
      </footer>
    </>
  )
}

export default App
