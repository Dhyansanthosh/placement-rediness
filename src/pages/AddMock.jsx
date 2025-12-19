import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

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
    <form onSubmit={submitMock}>
      <h2>Add Mock Test Score</h2>

      <input
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
