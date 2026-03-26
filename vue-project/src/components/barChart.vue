<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

const loaded = ref(false)
const chartData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/czei-7bxd.json')
    const data = await response.json()

    const sectorTotals = {}

    data.forEach((item) => {
      const sector = item.sector || 'Unknown'
      const emissions = parseFloat(item.metric_tons_of_co2e) || 0

      if (sectorTotals[sector]) {
        sectorTotals[sector] += emissions
      } else {
        sectorTotals[sector] = emissions
      }
    })

    chartData.value = {
      labels: Object.keys(sectorTotals),
      datasets: [
        {
          label: 'Total CO₂ Emissions by Sector',
          data: Object.values(sectorTotals),
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
        },
      ],
    }

    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})
</script>
