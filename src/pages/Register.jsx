import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./register.css"
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitlogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Email and password are required");
      return;
    }

    api.post("/api/register", { email, password })
      .then(() => {
        alert("Registered successfully");
        navigate("/login");
      })
      .catch(err => {
  console.error(err.response?.data);
  alert(err.response?.data || "Registration failed");
});
  };

  return (
   <form onSubmit={submitlogin} className="register-form">
  <h2>Register</h2>

  <div className="form-group">
    <label>Email:</label>
    <input
      type="email"
      placeholder="enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Password:</label>
    <input
      type="password"
      placeholder="enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <button type="submit" className="register-button">Register</button>
</form>

  );
}
