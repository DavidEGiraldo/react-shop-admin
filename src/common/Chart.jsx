import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function Chart({ chartData, className }) {
  return (
    <Pie
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
            display: true,
            position: 'top',
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
