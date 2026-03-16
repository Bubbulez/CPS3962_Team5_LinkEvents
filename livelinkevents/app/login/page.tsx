import "../../styles/main.css";
import "../../styles/login.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1>User Login</h1>
        <p className="page-description">
          Log in to access your account and manage your tickets.
        </p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="login-links">
          <p>
            Don’t have an account? <a href="/membership">Create Account</a>
          </p>
        </div>
      </div>
    </main>
  );
}