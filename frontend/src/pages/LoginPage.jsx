import { useState } from "react";
import { API_URL } from "../api";
import sunsetCafeBg from "../assets/sunset-cafe.webp";

/**
 * Employee login page.
 * Sends the username and password to the backend.
 */
export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Submits login credentials to POST /api/auth/login.
   */
  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      /**
       * Send staff info and JWT token back to App.jsx.
       */
      onLogin(data.staff, data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="login-page customer-page"
      style={{ backgroundImage: `url(${sunsetCafeBg})` }}
    >
      <div className="customer-overlay login-overlay"></div>
      <div className="login-content customer-content">
        <div className="customer-topbar">
          <div className="customer-brand-mark">
            <i className="bi bi-brightness-high"></i>
          </div>
          <h1>Sunset Cafe</h1>
          <p>GOOD FOOD. GOOD COFFEE. GOOD TIMES.</p>
        </div>

        <div className="login-card customer-card shadow-lg mx-auto">
          <h2 className="text-center mb-2">Employee Login</h2>
          <p className="text-center customer-subtitle mb-4">
            Waitlist Management
          </p>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                className="form-control customer-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control customer-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn customer-main-btn w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
