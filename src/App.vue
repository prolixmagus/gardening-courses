<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router';
</script>

<template>
  <header>
    <div class="inner-column">
      <div class="logo-container">
        <div class="svg-logo">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <h1>Gardening Galore</h1>
      </div>
    </div>
  </header>

<main class="outlet">
  <RouterView />
</main>

  <footer> </footer>

</template>

<style scoped>

.svg-logo {
  max-width: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
