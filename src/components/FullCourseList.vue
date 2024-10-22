<script setup>

import { reactive, ref, computed } from 'vue';
import courseData from '../assets/data/courses.json';
import SearchIcon from './SearchIcon.vue';

const searchQuery = ref('');
const courses = reactive(courseData[0].courses);
console.log(courses);

const filteredCourses = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return courses.filter(course =>
    course.title.toLowerCase().includes(query) ||
    course.description.toLowerCase().includes(query)
  );
});

function handleSubmit() {
  console.log("Search submitted:", searchQuery.value);
}

</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit" class="searchbar">
      <input v-model="searchQuery" type="text" id="course-search" placeholder="Search available courses">
      <label for="course-search">
        <SearchIcon />
      </label>
    </form>

    <h2 class="attention-voice">Courses</h2>
    <ul class="full-course-list" v-if="filteredCourses.length">
      <li v-for="course in filteredCourses" :key="course.id">
        <RouterLink :to="`/courses/${course.id}`" class="course-link">
          <h2 class="strong-voice">{{ course.title }}</h2>
        </RouterLink>
        <p class="calm-voice">{{ course.description }}</p>
      </li>
    </ul>
    <p v-else>No courses available.</p>
  </div>
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
