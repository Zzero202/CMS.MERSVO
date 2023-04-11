<template>
  <q-list class="q-mb-md">
    <q-item
      class="q-px-none q-ma-none"
      v-for="item in items"
      :key="item.choice"
    >
      <q-item-section class="text-body1">
        {{ item.choice.text }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
defineProps({
  items: {
    type: [Object]
  },
  title: {
    type: [String]
  }
})
</script>

<style lang="scss" scoped>
</style>
