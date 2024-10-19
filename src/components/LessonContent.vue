<script setup>

import { computed } from 'vue';
import { useCoursesStore } from '../stores/courses';
import { useRoute } from 'vue-router';

const coursesStore = useCoursesStore();
const route = useRoute();

const courseId = parseInt(route.params.courseId);
const moduleId = parseInt(route.params.moduleId);
const lessonId = parseInt(route.params.lessonId);

const lesson = coursesStore.getLessonById(courseId, moduleId, lessonId);

const paragraphs = computed(() => lesson?.content?.text || []);

const imagePath = lesson?.image ? new URL(`../assets/images/${lesson.image}`, import.meta.url).href : '';

</script>

<template>

    <h2 class="attention-voice">{{ lesson.title }}</h2>

    <figure v-if="imagePath" class="headline">
        <img :src="imagePath" alt="placeholder-image" />
    </figure>

    <p v-for="p in paragraphs" :key="p.id" > 
        {{ p.paragraph }}
    </p>

</template>

<style scoped>
.headline {
    margin-block: 1em 2em;
    max-width: 600px;
}


</style>