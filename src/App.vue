<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <RouterView />
    </div>

  </div>

</template>

<style scoped></style>
