import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { useEffect, useState } from "react";
import api from "../api/api";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function MockChart() {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    api.get("/api/mocks")
      .then(res => setScores(res.data))
      .catch(() => alert("Failed to load chart data"));
  }, []);

  const data = {
    labels: scores.map((_, i) => `Mock ${scores.length - i}`),
    datasets: [
      {
        label: "Mock Score Trend",
        data: scores.map(s => s.score).reverse(),
        borderColor: "blue",
        fill: false
      }
    ]
  };

  return (
    <div>
      <h2>Mock Test Progress Chart</h2>
      {scores.length === 0 ? (
        <p>No mock data</p>
      ) : (
        <Line data={data} />
      )}
    </div>
  );
}
