import { Line } from "react-chartjs-2";
import "./MockC.css"
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
    <div className="mock-chart-container">
    <h2>Mock Test Progress Chart</h2>
    {scores.length === 0 ? (
      <p className="no-data">No mock test data available</p>
    ) : (
      <div className="chart-container">
        <Line 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: '#e2e8f0'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
    )}
  </div>
  );
}
