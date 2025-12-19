import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function UpdateProgress() {
  const navigate = useNavigate();

  const [dsaCompleted, setDsaCompleted] = useState(0);
  const [dsaTotal, setDsaTotal] = useState(0);
  const [mockScore, setMockScore] = useState(0);
  const [coreStatus, setCoreStatus] = useState("LEARNING");

  const submitProgress = async (e) => {
    e.preventDefault();

    if (dsaCompleted > dsaTotal) {
  alert("DSA completed cannot exceed total");
  return;
}

if (dsaTotal <= 0) {
  alert("DSA total must be greater than 0");
  return;
}

     api.put("/api/progress", {
      dsaCompleted: Number(dsaCompleted),
      dsaTotal: Number(dsaTotal),
      mockScore: Number(mockScore),
      coreStatus: coreStatus
    })
    .then(() => {
      alert("Progress updated");
      navigate("/dashboard");
    })
    .catch(() => {
      alert("Failed to update progress");
    });
  };

  return (
    <div>
      <h2>Update Progress</h2>

      <form onSubmit={submitProgress}>
        <div>
          <label>DSA Completed:</label>
          <input
            type="number"
            value={dsaCompleted}
            onChange={(e) => setDsaCompleted(Number(e.target.value))}
          />
        </div>

        <div>
          <label>DSA Total:</label>
          <input
            type="number"
            value={dsaTotal}
            onChange={(e) => setDsaTotal(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Mock Score:</label>
          <input
            type="number"
            value={mockScore}
            onChange={(e) => setMockScore(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Core Status:</label>
          <select
            value={coreStatus}
            onChange={(e) => setCoreStatus(e.target.value)}
          >
            <option value="LEARNING">LEARNING</option>
            <option value="REVISING">REVISING</option>
            <option value="CONFIDENT">CONFIDENT</option>
          </select>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
