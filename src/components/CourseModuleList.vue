<script setup>

import { useRoute } from 'vue-router';
import { useCoursesStore } from '../stores/courses';
import courseData from '../assets/data/courses.json';

const route = useRoute();

const courseId = route.params.courseId;
const coursesStore = useCoursesStore(courseData[0], courseId)();

const foundCourse = coursesStore.course;
const moduleList = coursesStore.getModulesList();



</script>

<template>
  <h2 class="attention-voice">{{ foundCourse.title }}</h2>

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
