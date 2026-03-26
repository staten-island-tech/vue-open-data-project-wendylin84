<template>
  <div class="container">
    <emissionsCard
      v-for="(record, index) in emissions"
      :key="record.scenario"
      :emission="record"
      :id="index + 1"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emissionsCard from '@/components/emissionsCard.vue'
const emissions = ref([])
async function getEmissions() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/czei-7bxd.json')
    const data = await response.json()
    emissions.value = data.filter((emission) => emission.scenario)
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getEmissions()
})

async function getEmissions() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/czei-7bxd.json')
    const data = await response.json()

    const uniqueScenarios = {}

    data.forEach((item) => {
      if (item.scenario && !uniqueScenarios[item.scenario]) {
        uniqueScenarios[item.scenario] = item
      }
    })

    emissions.value = Object.values(uniqueScenarios)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
