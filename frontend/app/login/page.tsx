import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-side">
        <span className="tag">Private prototype</span>
        <h2>Welcome back to Excel Copilot Studio</h2>
        <p>
          Sign in to access your approved workbooks, session history, and
          personalized extraction settings.
        </p>
        <div className="auth-feature">
          <strong>Local-first privacy</strong>
          <p>Default processing stays on device unless you opt in to cloud.</p>
        </div>
        <div className="auth-feature">
          <strong>Full audit trail</strong>
          <p>Every write is logged with source, formula, and timestamp.</p>
        </div>
        <div className="auth-feature">
          <strong>Rollback ready</strong>
          <p>Undo actions restore your workbook state instantly.</p>
        </div>
        <Link className="btn ghost" href="/">
          Back to overview
        </Link>
      </section>

      <section className="auth-panel">
        <div>
          <span className="tag">Sign in</span>
          <h1>Continue to the prototype</h1>
          <p>
            Use your approved team account. This prototype is for stakeholder
            review and internal testing only.
          </p>
        </div>
        <form className="auth-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="row">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <span>Forgot password?</span>
          </div>
          <button className="btn primary" type="submit">
            Sign in
          </button>
          <button className="btn secondary" type="button">
            Continue with Microsoft
          </button>
        </form>
        <p>
          Need access? Contact your program owner or request an invite from the
          admin console.
        </p>
      </section>
    </main>
  );
}
