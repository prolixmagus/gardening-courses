import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

export const useCoursesStore = defineStore('courses', () => {
	const courses = reactive([]);
	const course = ref(null);

	function setCourses(courseData, courseId) {
		courses.value = courseData[0].courses;
		course.value = courses.value.find((course) => course.id == courseId);
	}

	const getModulesList = computed(() => {
		return course.value?.modules || [];
	});

	const getModuleByModuleId = (moduleId) => {
		return getModulesList.value.find((module) => module.id == moduleId);
	};

	const getLessonsListForModuleId = (moduleId) => {
		const foundModule = getModuleByModuleId(moduleId);
		return foundModule?.lessons || [];
	};

	const getLessonByModuleIdAndLessonId = (moduleId, lessonId) => {
		const lessonsList = getLessonsListForModuleId(moduleId);
		return lessonsList.find((lesson) => lesson.id == lessonId);
	};

	return {
		courses,
		course,
		setCourses,
		getModulesList,
		getModuleByModuleId,
		getLessonsListForModuleId,
		getLessonByModuleIdAndLessonId,
	};
});
