<template>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  scenario: {
    type: String,
    default: '',
  },
})

const loaded = ref(false)
const chartData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/czei-7bxd.json')
    const data = await response.json()

    const selectedScenario = props.scenario ? decodeURIComponent(props.scenario) : ''
    const filteredData = selectedScenario
      ? data.filter((item) => item.scenario === selectedScenario)
      : data

    const sectorTotals = {}

    filteredData.forEach((item) => {
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
          label: selectedScenario ? `CO₂ emissions for ${selectedScenario}` : 'Total CO₂ Emissions',
          data: Object.values(sectorTotals),
          backgroundColor: ['#e6beaf', '#ffc3d3', '#ffa1b1', '#bc8d80', '#fff4ec'],
        },
      ],
    }

    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})
</script>
