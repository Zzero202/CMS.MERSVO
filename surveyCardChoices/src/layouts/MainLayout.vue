<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <!-- later we may have multiple page card -->
        <!-- <router-view /> -->
        <home-page />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HomePage from 'pages/HomePage.vue'
</script>
