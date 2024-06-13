import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.1,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


const AreaChart= ({lineData}) =>  {
  const data = {
    labels: lineData.label,
    datasets: [
      {
        fill: true,
        label: 'Dataset',
        data: lineData.data, // Generate random integer between 0 and 1000
        backgroundColor: "rgb(1,107,69, 0.5)",
        borderColor: "rgb(1,107,69)",
      },
    ],
  };
  
  return (
    <div className="flex-grow flex-shrink">
        <Line options={options} data={data} />
    </div>
  );
}
export default AreaChart;
