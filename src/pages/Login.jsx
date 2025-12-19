import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import api from "../api/api";
import "./Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    api.post("/api/login", { email, password })
  .then(res => {
    localStorage.setItem("token", res.data);
    localStorage.setItem("isAuth", "true");
    navigate("/dashboard");
  })
  .catch(() => {
    alert("Invalid email or password");
  });

  }
return (
  <div className="login-container">
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <div style={{textAlign:"center"}}><p>or</p>
      <Link to="/register">Register</Link></div>
      
    </form>
  </div>
  );
}
