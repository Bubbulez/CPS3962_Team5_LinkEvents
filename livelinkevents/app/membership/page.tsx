import "../../styles/main.css";
import "../../styles/membership.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1>Create Account</h1>
        <p className="page-description">
          Register to purchase tickets and manage your account.
        </p>

        <form className="membership-form">
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}