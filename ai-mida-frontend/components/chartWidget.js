import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend} from 'chart.js';



Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ChartWidget = ({ history = [] }) => {
    const data = {
        labels: history.map((item, i) => `Gen ${i + 1}`),
        datasets: [
            {
                label: 'Text Length',
                data: history.map((item) => item.result.length),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
            }
        ]
    };

    const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#fff' 
      }
    },
    title: {
      display: true,
      text: 'AI Text Generation Length Over Time',
      color: '#fff'
    }
  },
  scales: {
    x: {
      ticks: { color: '#fff' },
      grid: { color: '#444' }
    },
    y: {
      ticks: { color: '#fff' },
      grid: { color: '#444' }
    }
  }
};




    return (
        <div className='mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow'>
      <h3 className='text-lg font-bold mb-2'>Text Generation Chart</h3>
      {history.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p className='text-gray-500 dark:text-gray-300'>No data available</p>
      )}
    </div>
    )
}

export default ChartWidget;