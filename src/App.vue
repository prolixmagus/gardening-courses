<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

//computed continuously updates the values if the parameters change

const courseId = computed(() => parseInt(route.params.courseId));
const moduleId = computed(() => parseInt(route.params.moduleId));
const lessonId = computed(() => parseInt(route.params.lessonId));

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
      <nav>
        <ul class="search-options">
          <li>
            <RouterLink to="/">Courses</RouterLink>
          </li>
          <li v-if="moduleId">
            <RouterLink :to="`/courses/${courseId}`">Course Modules</RouterLink>
          </li>
          <li v-if="lessonId">
            <RouterLink :to="`/courses/${courseId}/modules/${moduleId}`">Module Lessons</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="outlet">
    <RouterView />
  </main>

  <footer>
    <div class="inner-column">
      <h2>Placeholder</h2>
    </div>
  </footer>

</template>

<style scoped>

.search-options {
  display: flex;
  gap: 15px;
}

.svg-logo {
  max-width: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
