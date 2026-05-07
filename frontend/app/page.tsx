import Link from "next/link";

const phases = [
  {
    title: "Phase I",
    subtitle: "Extract and Create",
    description:
      "Turn text, images, and URLs into verified Excel tables with schema inference and a mandatory preview.",
    bullets: [
      "OCR + web extraction with confidence scoring",
      "Zero overwrite guarantee with safe placement",
      "User confirm before writing to Excel"
    ]
  },
  {
    title: "Phase II",
    subtitle: "Calculate and Derive",
    description:
      "Generate transparent formulas, Power Query steps, or Python logic based on data complexity.",
    bullets: [
      "Structured references and checksum validation",
      "Cross-table joins with guardrails",
      "Audit trail of formulas and logic"
    ]
  },
  {
    title: "Phase III",
    subtitle: "Visualize and Explain",
    description:
      "Create dynamic charts that remain linked to tables, styled for executive-ready reporting.",
    bullets: [
      "Intelligent chart defaults and layout",
      "Brand palette and labeling control",
      "Chart data stays live and synced"
    ]
  }
];

const safeguards = [
  {
    title: "Preview-first workflow",
    description: "Every table is validated and approved before Excel writes occur."
  },
  {
    title: "Audit-ready actions",
    description: "All steps are logged with sources, formulas, and timestamps."
  },
  {
    title: "Rollback always available",
    description: "Undo actions restore the workbook to a safe state instantly."
  }
];

const milestones = [
  {
    title: "Foundation",
    timeline: "Sprints 1-2",
    description: "Desktop shell, file permissioning, chat UI, Excel connection."
  },
  {
    title: "Phase I MVP",
    timeline: "Sprints 3-6",
    description: "Text, image, and URL extraction with preview and validation."
  },
  {
    title: "Phase II",
    timeline: "Sprints 7-9",
    description: "Formula engine, derived tables, cross-table logic."
  },
  {
    title: "Phase III",
    timeline: "Sprints 10-12",
    description: "Charting engine, dynamic linking, presentation polish."
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container">
          <div className="logo">Excel Copilot Studio</div>
          <nav className="nav-links">
            <a href="#phases">Phases</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#architecture">Architecture</a>
            <a href="#roadmap">Roadmap</a>
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" href="/login">
              Login
            </Link>
            <Link className="btn primary" href="/demo">
              Open Demo
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="tag reveal">Prototype v1.0</span>
            <h1 className="hero-title reveal reveal-1">
              A conversational copilot that builds Excel reports for you.
            </h1>
            <p className="hero-subtitle reveal reveal-2">
              Give it text, screenshots, or URLs. The AI extracts clean tables,
              runs calculations, and produces charts, all with a mandatory
              preview and full auditability. Designed for non-technical teams
              that need reliable Excel output.
            </p>
            <div className="hero-actions reveal reveal-3">
              <Link className="btn primary" href="/demo">
                Explore the workflow
              </Link>
              <Link className="btn secondary" href="/login">
                Sign in to prototype
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <h3>99.5%</h3>
                <p>Target cell accuracy for Phase I extraction.</p>
              </div>
              <div className="stat-card">
                <h3>3 Phases</h3>
                <p>Extraction, calculation, and visualization flow.</p>
              </div>
              <div className="stat-card">
                <h3>Local-first</h3>
                <p>Optional cloud, default stays on device.</p>
              </div>
            </div>
          </div>

          <div className="hero-preview float">
            <div className="chat-card">
              <div className="chat-bubble user">
                Create a table of 2025 tech revenues with Rank, Company,
                Revenue, HQ Country.
              </div>
              <div className="chat-bubble ai">
                Found a match from public sources. Preview ready with
                validation checks. Approve to write into a new sheet?
              </div>
              <div className="chat-bubble user">Approve and format currency.</div>
            </div>
            <div className="sheet-card">
              <div className="sheet-header">
                <span>Preview: Tech Revenue 2025</span>
                <span>Phase I</span>
              </div>
              <div className="sheet-grid">
                <div>Rank</div>
                <div>Company</div>
                <div>Revenue</div>
                <div>1</div>
                <div>Alpha Systems</div>
                <div>$410B</div>
                <div>2</div>
                <div>Northbridge</div>
                <div>$388B</div>
                <div>3</div>
                <div>Skyline Labs</div>
                <div>$360B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phases" className="section">
        <div className="container">
          <h2 className="section-title">Three-phase execution pipeline</h2>
          <p className="section-lead">
            Each phase must be completed with verified accuracy before the
            system unlocks the next. This protects calculations and charts from
            polluted data.
          </p>
          <div className="phase-grid">
            {phases.map((phase) => (
              <div className="card" key={phase.title}>
                <h3>{phase.title}</h3>
                <p>{phase.subtitle}</p>
                <p>{phase.description}</p>
                <ul>
                  {phase.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="container">
          <h2 className="section-title">Prototype capabilities</h2>
          <p className="section-lead">
            Built for non-technical users with guardrails, friendly language,
            and simple preview actions.
          </p>
          <div className="cap-grid">
            <div className="card">
              <h3>Multi-modal intake</h3>
              <p>
                Accepts text prompts, screenshots, PDF snippets, or web links
                without requiring manual formatting.
              </p>
            </div>
            <div className="card">
              <h3>Conversation memory</h3>
              <p>
                Remembers table context, sheet locations, and the latest user
                preferences across the session.
              </p>
            </div>
            <div className="card">
              <h3>Transparent calculations</h3>
              <p>
                Uses Excel formulas by default, with Power Query or Python only
                when logic becomes complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="section">
        <div className="container">
          <h2 className="section-title">Architecture snapshot</h2>
          <p className="section-lead">
            A desktop shell orchestrates a local AI microservice and the Excel
            automation engine. Cloud LLMs remain optional and consent-based.
          </p>
          <div className="arch-list">
            <div className="arch-item">
              <div className="arch-step">1</div>
              <div>
                <h3>Conversation manager</h3>
                <p>
                  Classifies intent, triggers the right phase, and asks
                  clarifying questions when ambiguity appears.
                </p>
              </div>
            </div>
            <div className="arch-item">
              <div className="arch-step">2</div>
              <div>
                <h3>Extraction pipeline</h3>
                <p>
                  OCR, web scraping, and structured parsing with confidence
                  scoring and column type inference.
                </p>
              </div>
            </div>
            <div className="arch-item">
              <div className="arch-step">3</div>
              <div>
                <h3>Excel engine</h3>
                <p>
                  Creates tables, formulas, and charts using COM and Open XML
                  with rollback and audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Trust and safeguards</h2>
          <p className="section-lead">
            Reliability is the product. Every output is verified, explained,
            and reversible.
          </p>
          <div className="risk-grid">
            {safeguards.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="section">
        <div className="container">
          <h2 className="section-title">Delivery roadmap</h2>
          <p className="section-lead">
            Phase-gated sprints to ensure Phase I accuracy is locked before
            calculations and visualization begin.
          </p>
          <div className="roadmap-grid">
            {milestones.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.timeline}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Ready for stakeholder review</h2>
          <p className="section-lead">
            This prototype focuses on the user experience, visual language, and
            core flow. The next step is wiring it to live Excel automation and
            local AI orchestration.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/demo">
              Walk through the workflow
            </Link>
            <Link className="btn secondary" href="/login">
              Secure prototype access
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Prototype UI for AI Excel Chatbot. Built for stakeholder alignment
          and early usability feedback.
        </div>
      </footer>
    </main>
  );
}
