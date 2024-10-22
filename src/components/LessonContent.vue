<script setup>

import { computed } from 'vue';
import { useCoursesStore } from '../stores/courses';
import { useRoute } from 'vue-router';
import courseData from '../assets/data/courses.json';

const route = useRoute();

const courseId = route.params.courseId;

const coursesStore = useCoursesStore(courseData[0], courseId)();

const moduleId = route.params.moduleId;
const lessonId = route.params.lessonId;

const lesson = coursesStore.getLessonByModuleIdAndLessonId(moduleId, lessonId);

const paragraphs = computed(() => lesson?.content?.text || []);

const imagePath = lesson?.image ? new URL(`../assets/images/${lesson.image}`, import.meta.url).href : '';
</script>

<template>

    <h2 class="attention-voice">{{ lesson.title }}</h2>

    <figure v-if="imagePath" class="headline">
        <img :src="imagePath" alt="placeholder-image" />
    </figure>

    <p v-for="(p, index) in paragraphs" :key="`${p.paragraph.slice(0, 5)}-${index}`"> 
        {{ p.paragraph }}
    </p>
</template>

<style scoped>
.headline {
    margin-block: 1.5em;
    max-width: 600px;
}


</style>