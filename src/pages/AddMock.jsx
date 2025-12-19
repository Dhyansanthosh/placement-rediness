import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./AddMs.css";
export default function AddMock() {

  const [score, setScore] = useState("");
  const navigate = useNavigate();

  const submitMock = (e) => {
    e.preventDefault();

    if (!score) {
      alert("Enter mock score");
      return;
    }

    api.post(`/api/mocks?score=${score}`)
      .then(() => {
        alert("Mock score saved");
        navigate("/dashboard");
      })
      .catch(() => {
        alert("Failed to save mock score");
      });
  };

  return (
  <div className="add-mock-container">
    <form className="mock-form" onSubmit={submitMock}>
      <h2 className="form-title">Add Mock Test Score</h2>

      <input
        className="mock-input"
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button className="mock-submit-btn" type="submit">Save</button>
    </form>
  </div>
);
}
