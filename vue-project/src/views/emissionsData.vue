<template>
  <div>
    <h2>{{ emission.scenario }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
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

<style scoped></style>
