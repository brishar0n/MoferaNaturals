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
  // tension: 0.8,
  // bezierCurve : true,
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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  // elements: {
  //   point:{
  //       radius: 3
  //   }
  // }
};

// Generate random data between 0 and 1000

const AreaChart= ({lineData}) =>  {
  const data = {
    labels: lineData.label,
    datasets: [
      {
        fill: true,
        label: 'Weight',
        data: lineData.data, // Generate random integer between 0 and 1000
        // backgroundColor: "rgb(1,107,69, 0.5)",
        backgroundColor: (context) => {
          const bgColor = [
            'rgba(1, 107, 69, 0.2)',
            'rgba(255, 255, 255, 0)'
          ]
          console.log(context.chart.chartArea);
          if (!context.chart.chartArea) {
            return;
          }
          const {ctx, data, chartArea: {top, bottom}} = context.chart;
          const chartHeight = bottom - top;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
          gradientBg.addColorStop(0, 'rgba(1, 107, 69, 0.4)'); // Transparent green
          gradientBg.addColorStop(1, 'rgba(1, 107, 69, 0.05)'); // Transparent white

          return gradientBg;
        },
        fill: true,
        borderColor: "rgb(1,107,69)",
        cubicInterpolationMode: 'monotone',
        pointRadius: 3,
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
