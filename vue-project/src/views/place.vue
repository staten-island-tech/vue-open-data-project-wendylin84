<template>
  <div class="container">
    <emissionsCard
      v-for="(mon, index) in record"
      :key="mon.scenario"
      :record="mon"
      :id="index + 1"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emissionsCard from '@/components/emissionsCard.vue'
const record = ref([])
async function getRecord() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/czei-7bxd.json')
    const data = await response.json()
    record.value = data.results
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getRecord()
})
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
