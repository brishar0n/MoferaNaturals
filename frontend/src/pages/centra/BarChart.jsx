import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ barData, barLabel}) => {
  const data = {
    labels: barData.label,
    datasets: [
      {
        label: barLabel,
        backgroundColor: "rgb(134, 183, 105)",
        borderColor: "rgb(134, 183, 105)",
        data: barData.data,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '250px', width: '100%' }}>
      <Bar data={data} options={options} height={400} />
    </div>
  );
};

export default BarChart;