// PieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ investedSlice, returnSlice }) => {
  const data = {
    labels: ["Return", "Invested"],
    datasets: [
      {
        data: [returnSlice, investedSlice],
        backgroundColor: ["rgba(0, 208, 148, .7)", "rgba(233, 255, 248, .7)"],
        borderColor: ["rgba(0, 208, 148, 1)", "rgba(0, 208, 148, .7)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const customLabels = ["Return", "Invested"];
            const value = tooltipItem.parsed;
            return `${customLabels[tooltipItem.dataIndex]}: ₹${value}`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
