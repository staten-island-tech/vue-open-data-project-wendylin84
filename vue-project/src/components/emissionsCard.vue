<template>
  <div class="card">
    <router-link :to="emissionsPath">
      <h2>{{ emission.source }}</h2>
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
  return `/emissions/${props.emission.source}`
})
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
