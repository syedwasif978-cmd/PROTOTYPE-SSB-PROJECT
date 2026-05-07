import Link from "next/link";

const messages = [
  {
    role: "user",
    text: "Import the Q1 revenue table from the URL and create a clean Excel table."
  },
  {
    role: "ai",
    text: "Found two tables. Do you want the Q1 highlights or the full revenue breakdown?"
  },
  {
    role: "user",
    text: "Use the full breakdown and add currency formatting."
  },
  {
    role: "ai",
    text: "Preview ready. I flagged two low-confidence OCR cells for review. Approve to write?"
  }
];

export default function DemoPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container">
          <div className="logo">Excel Copilot Studio</div>
          <div className="nav-cta">
            <Link className="btn ghost" href="/">
              Back to overview
            </Link>
            <Link className="btn primary" href="/login">
              Sign in
            </Link>
          </div>
        </div>
      </header>

      <section className="demo-shell">
        <div className="container">
          <div className="demo-grid">
            <div className="demo-panel">
              <div className="demo-toolbar">
                <span className="pill">Phase I: Extract</span>
                <span className="pill">Preview required</span>
                <span className="pill">Accuracy checks on</span>
              </div>
              <div className="demo-chat">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`demo-message ${message.role}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="hero-actions">
                <button className="btn primary" type="button">
                  Approve and write
                </button>
                <button className="btn secondary" type="button">
                  Request changes
                </button>
              </div>
            </div>

            <div className="demo-panel">
              <div className="demo-toolbar">
                <span className="pill">Workbook: FY2025_Revenue.xlsx</span>
                <span className="pill">Sheet: Q1 Revenue</span>
              </div>
              <div className="demo-sheet">
                <div className="sheet-header">
                  <span>Preview: Revenue by Region</span>
                  <span>Confidence 98.8%</span>
                </div>
                <div className="demo-table">
                  <div>Region</div>
                  <div>Revenue</div>
                  <div>YoY</div>
                  <div>Status</div>
                  <div>North America</div>
                  <div>$124.6M</div>
                  <div>+8.4%</div>
                  <div>Verified</div>
                  <div>EMEA</div>
                  <div>$98.2M</div>
                  <div>+5.1%</div>
                  <div>Verified</div>
                  <div>APAC</div>
                  <div>$76.9M</div>
                  <div>+12.3%</div>
                  <div>Review</div>
                  <div>LATAM</div>
                  <div>$34.5M</div>
                  <div>+3.2%</div>
                  <div>Verified</div>
                </div>
              </div>
              <div className="card" style={{ marginTop: "16px" }}>
                <h3>Next action suggestions</h3>
                <p>
                  Generate a Phase II summary table with total revenue by
                  quarter and a line chart for executives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
