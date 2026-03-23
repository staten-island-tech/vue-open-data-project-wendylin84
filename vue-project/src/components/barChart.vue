<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Electricity', 'Fuel Oil', 'Natural Gas', 'Steam'],
        datasets: [{ data: [14078243.0, 2538997.0, 14043872.0, 748113.0] }],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
}
</script>
