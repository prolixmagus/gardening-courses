<script setup>

import { useCoursesStore } from '../stores/courses';

const coursesStore = useCoursesStore();
let courseData = coursesStore.courses;


</script>

<template>
  <h2 class="attention-voice">Courses</h2>

  <ul class="full-course-list">
    <li v-for="course in courseData"
    :key="course.id">
      <RouterLink :to="`/courses/${course.id}`" class='course-link'>
        <h2 class="strong-voice">{{ course.title }} </h2>
      </RouterLink>
      <p class="calm-voice"> {{ course.description }}</p>
    </li>
  </ul>

</template>

<style scoped>

.full-course-list {
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
