/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface MyChartProps {
  data: {
    labels?: string[];
    datasets: {
      label?: string;
      data: number[];
      borderColor?: any;
      backgroundColor?: any;
    }[];
  };
  options?: any;
}

export const MyChartLine: React.FC<MyChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export const MyChartDoughnut: React.FC<MyChartProps> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};
