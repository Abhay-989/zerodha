// SignUpForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import this
import { useAuthStore } from "../store/useAuthStore";
import "./SignupForm.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, loading, error } = useAuthStore();
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup({name, email, password}); // <-- call store
    if (success) navigate("/Home"); // <-- redirect on successful signup
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign Up</h2>

      <div className="auth-input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="auth-input-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="auth-input-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>

      {error && <div className="form-error">{error}</div>}

      <button type="submit" className="auth-btn" disabled={loading}>
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
