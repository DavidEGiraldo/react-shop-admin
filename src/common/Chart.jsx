import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ chartData, className }) {
  return (
    <Bar
      className={className}
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Categories',
            font: {
              size: 20,
            },
          },
          legend: {
            display: false,
            position: 'right',
          },
        },
        layout: {
          padding: {
            top: 8,
            right: 12,
            bottom: 32,
            left: 12,
          },
        },
      }}
    />
  );
}
