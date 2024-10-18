<script setup>

import { useCoursesStore } from '../stores/courses';
import { useRoute } from 'vue-router';

const coursesStore = useCoursesStore();
const route = useRoute();

const foundCourse = coursesStore.getCourseById(route.params.courseId);

const moduleList = coursesStore.getModulesList(route.params.courseId);



</script>

<template>

  <ul class="module-list">
    <li v-for="module in moduleList"
    :key="module.id">
      <RouterLink :to="`/courses/${foundCourse.id}/modules/${module.id}`" class='course-link'>
        <h2 class="strong-voice">{{ module.title }} </h2>
      </RouterLink>
      <p class="calm-voice"> {{ module.description }}</p>
    </li>
  </ul>

</template>

<style scoped>

.module-list {
  display: grid;
  gap: 1em;

  .course-link {
    text-decoration: underline;

    &:hover {
      color: blue;
    }
  }

  .course-link + p {
    margin-top: 4px;
  }
}

</style>
