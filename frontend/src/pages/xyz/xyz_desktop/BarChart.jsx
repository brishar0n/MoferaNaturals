import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({barData}) => {
  const data = {
    labels: barData.label,
    datasets: [
      {
        label: "Weight",
        backgroundColor: "#016B45",
        borderColor: "rgb(1,107,69)",
        borderWidth: 2,
        data: barData.data,
        cubicInterpolationMode: 'monotone'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        grid: {
        drawBorder: false,
        display: false,
      },
      }
    },
 
  };

  return (
    <div className="flex-grow flex-shrink" style={{ height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
