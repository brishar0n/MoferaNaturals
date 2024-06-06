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
        backgroundColor: "rgb(1,107,69,0.5)",
        borderColor: "rgb(1,107,69)",
        borderWidth: 2,
        //data: [27, 14, 47, 33, 20, 5, 50],
        data: labels.map(() => Math.floor(Math.random() * 100)),
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