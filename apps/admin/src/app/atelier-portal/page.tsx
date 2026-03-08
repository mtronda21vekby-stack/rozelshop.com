export default function AdminLoginPage() {
  return (
    <main className="card stack">
      <p className="meta">ROZEL / Internal Access</p>
      <h1>Admin entry surface</h1>
      <p className="copy">
        This page is a foundation only. Wire it to real authentication, MFA, session storage, rate limiting, and audit logs before launch.
      </p>

      <form className="stack">
        <label className="field">
          <span className="label">Email</span>
          <input className="input" type="email" placeholder="internal@rozelshop.com" />
        </label>

        <label className="field">
          <span className="label">Password</span>
          <input className="input" type="password" placeholder="••••••••••••" />
        </label>

        <button className="button" type="button">Continue</button>
      </form>
    </main>
  );
}
