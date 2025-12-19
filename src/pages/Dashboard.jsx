import { useEffect, useState } from "react";
import api from "../api/api";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const navigate=useNavigate();
  const [dsa, setDsa] = useState(0);
const [core, setCore] = useState("");
const [mock, setMock] = useState(0);

  const logout = () => {
    localStorage.clear();     // remove token + isAuth
    navigate("/login");       // redirect
  };
  useEffect(() => {
  api.get("/api/dashboard/score")
    .then(res => {
     setScore(res.data.score);
setStatus(res.data.status);
setDsa(res.data.dsaScore);
setCore(res.data.coreStatus);
setMock(res.data.mockScore);
    })
    .catch(err => {
      alert("Session expired. Login again.");
      localStorage.clear();
      navigate("/login");
    });
}, []);

  return (
   <div className="dashboard-container">
  <h1>Dashboard</h1>
  
  <h2>Score: <span className="score">{score}</span></h2>
  
  <div className="status-indicator">
    Status: {status}
  </div>
  
  <div className="dashboard-stats">
    <div className="stat-card">
      <div>📘 DSA</div>
      <div>{dsa}</div>
    </div>
    <div className="stat-card">
      <div>🧠 Core</div>
      <div>{core}</div>
    </div>
    <div className="stat-card">
      <div>📝 Mock</div>
      <div>{mock}</div>
    </div>
  </div>

  <div className="actions-container">
    <button className="action-button primary" onClick={() => navigate("/update-progress")}>
      Update Progress
    </button>
    <button className="action-button primary" onClick={() => navigate("/add-mock")}>
      Add Mock Score
    </button>
    <button className="action-button" onClick={() => navigate("/mock-history")}>
      View Mock History
    </button>
    <button className="action-button" onClick={() => navigate("/mock-chart")}>
      View Mock Chart
    </button>
    <button className="action-button" onClick={() => navigate("/profile")}>
      Profile
    </button>
    <button className="action-button logout" onClick={logout}>
      Logout
    </button>
  </div>
</div>
  );
}
