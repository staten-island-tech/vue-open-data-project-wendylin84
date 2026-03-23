<template>
  <BarChart />
  <RouterView />
</template>

<script>
import BarChart from '@/components/barChart.vue'

export default {
  name: 'App',
  components: { BarChart },
}
</script>
