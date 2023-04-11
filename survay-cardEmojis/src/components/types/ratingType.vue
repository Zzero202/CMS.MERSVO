<template>
  <div class="flex justify-center">
    <q-rating
      v-model="rates"
      class="q-py-sm q-mb-md"
      icon="star_border"
      icon-selected="star"
      size="2em"
      color="orange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rates = ref(0)

</script>
