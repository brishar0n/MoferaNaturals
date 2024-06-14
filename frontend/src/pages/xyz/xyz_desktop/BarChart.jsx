import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({barData}) => {
  const labels = ["1", "2", "3", "4", "5", "6"];
  const data = {
    labels: barData.label,
    datasets: [
      {
        label: "Weight",
        backgroundColor: "rgb(1,107,69,0.5)",
        borderColor: "rgb(1,107,69)",
        borderWidth: 2,
        data: barData.data,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="flex-grow flex-shrink" style={{ height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
