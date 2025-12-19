import { useEffect, useState } from "react";
import api from "../api/api";
import "./MockH.css"
export default function MockHistory() {

  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    api.get("/api/mocks")
      .then(res => setMocks(res.data))
      .catch(() => alert("Failed to load mock history"));
  }, []);

 return (
  <div className="mock-history-container">
    <h2>Mock Test History</h2>

    {mocks.length === 0 && <p className="no-mocks">No mock tests yet</p>}

    <ul className="mock-list">
      {mocks.map((m, index) => (
        <li key={index} className="mock-item">
          <span className="mock-score">Score: {m.score}</span>
          <span className="mock-date">Date: {new Date(m.takenAt).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  </div>
);
}
