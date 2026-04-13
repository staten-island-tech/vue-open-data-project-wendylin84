<template>
  <div class="emissions-page">
    <h1>{{ scenario }}</h1>
    <div class="format">
      <div class="chartcard">
        <h2>Bar Graph</h2>
        <BarChart :scenario="scenario" />
      </div>
      <div class="chartcard">
        <h2>Pie Chart</h2>
        <PieChart :scenario="scenario" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BarChart from '@/components/barChart.vue'
import PieChart from '@/components/pieChart.vue'

const route = useRoute()
const scenario = computed(() => route.params.scenario || '')
</script>

<style scoped>
h1 {
  color: #5f346e;
  font-size: 35px;
}
.emissions-page {
  width: 90vw;
  margin: 30px auto;
  text-align: center;
}

.format {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.chartcard {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.chartcard h2 {
  margin-bottom: 12px;
  font-size: 1.2rem;
}
</style>
