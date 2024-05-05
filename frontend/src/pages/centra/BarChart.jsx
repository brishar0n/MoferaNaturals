import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["1", "2", "3", "4", "5", "6"];
  const data = {
    responsive: true,
    maintainAspecRatio: false,
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        backgroundColor: "rgb(134, 183, 105)",
        borderColor: "rgb(134, 183, 105)",
        data: [27, 14, 47, 33, 20, 5, 50],
      },
    ],
  };
  return (
    <div style={{ height: '150%', width: '100%'}}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;