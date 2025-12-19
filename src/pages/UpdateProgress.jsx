import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./UpdateP.css";

export default function UpdateProgress() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

    try {
      await api.put("/api/progress", {
        dsaCompleted: Number(dsaCompleted),
        dsaTotal: Number(dsaTotal),
        mockScore: Number(mockScore),
        coreStatus: coreStatus
      });
      alert("Progress updated");
      navigate("/dashboard");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update progress");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="update-progress-container">
      <h2 className="form-title">Update Progress</h2>

      <form className="progress-form" onSubmit={submitProgress}>
        <div className="form-group">
          <label className="form-label">DSA Completed:</label>
          <input
            className="form-input"
            type="number"
            min="0"
            value={dsaCompleted}
            onChange={(e) => setDsaCompleted(Number(e.target.value))}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label className="form-label">DSA Total:</label>
          <input
            className="form-input"
            type="number"
            min="1"
            value={dsaTotal}
            onChange={(e) => setDsaTotal(Number(e.target.value))}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mock Score (0-100):</label>
          <input
            className="form-input"
            type="number"
            min="0"
            max="100"
            value={mockScore}
            onChange={(e) => setMockScore(Number(e.target.value))}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Core Status:</label>
          <select
            className="form-select"
            value={coreStatus}
            onChange={(e) => setCoreStatus(e.target.value)}
            disabled={isLoading}
          >
            <option value="LEARNING">LEARNING</option>
            <option value="REVISING">REVISING</option>
            <option value="CONFIDENT">CONFIDENT</option>
          </select>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
}