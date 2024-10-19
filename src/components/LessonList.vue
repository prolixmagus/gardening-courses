<script setup>

import { useCoursesStore } from '../stores/courses';
import { useRoute } from 'vue-router';

const coursesStore = useCoursesStore();
const route = useRoute();

const courseId = route.params.courseId;
const moduleId = route.params.moduleId;

const foundCourse = coursesStore.getCourseById(courseId);
const foundModule = coursesStore.getModuleById(courseId, moduleId)

const lessonList = coursesStore.getLessonsList(courseId, moduleId);

</script>

<template>

  <h2 class="attention-voice"> {{ foundModule.title }}</h2>

  <ul class="module-list">
    <li v-for="lesson in lessonList":key="lesson.id">
      <RouterLink :to="`/courses/${foundCourse.id}/modules/${foundModule.id}/lessons/${lesson.id}`" class='course-link'>
        <h2 class="strong-voice">{{ lesson.title }} </h2>
      </RouterLink>
      <p class="calm-voice"> {{ lesson.paragraph }}</p>
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
