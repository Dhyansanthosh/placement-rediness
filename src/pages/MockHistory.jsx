import { useEffect, useState } from "react";
import api from "../api/api";

export default function MockHistory() {

  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    api.get("/api/mocks")
      .then(res => setMocks(res.data))
      .catch(() => alert("Failed to load mock history"));
  }, []);

  return (
    <div>
      <h2>Mock Test History</h2>

      {mocks.length === 0 && <p>No mock tests yet</p>}

      <ul>
        {mocks.map((m, index) => (
          <li key={index}>
            Score: {m.score} | Date: {m.takenAt}
          </li>
        ))}
      </ul>
    </div>
  );
}
