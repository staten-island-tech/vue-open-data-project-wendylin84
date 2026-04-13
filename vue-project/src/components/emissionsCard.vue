<template>
  <div class="card">
    <router-link :to="emissionsPath">
      <h2>{{ emission.scenario }}</h2>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  emission: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
const emissionsPath = computed(() => {
  return `/emissions/${encodeURIComponent(props.emission.scenario)}`
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 300px;
  background-color: rgb(247, 237, 248);
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>
