<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
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

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  chartOptions: {
    type: Object,
    default: () => ({}),
  },
})
const route = useRoute()
const emission = ref({})
async function getEmissions(id) {
  const response = await fetch(`https://data.cityofnewyork.us/resource/czei-7bxd.json`)
  const data = await response.json()
  emission.value = data
}
onMounted(function () {
  getEmissions(route.params.id)
})
watch(
  () => route.params.id,
  function (id) {
    getEmissions(id)
  },
)
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
