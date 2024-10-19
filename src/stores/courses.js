import { reactive } from 'vue';
import { defineStore } from 'pinia';
import courseData from '../assets/data/courses.json';

export const useCoursesStore = defineStore('courses', () => {
	let courses = reactive(courseData[0].courses);

	function getCourseById(id) {
		return courses.find((course) => course.id == parseInt(id));
	}

	function getModulesList(id) {
		const foundCourse = getCourseById(id);
		return foundCourse?.modules || [];
	}

	function getModuleById(courseId, moduleId) {
		const modulesList = getModulesList(courseId);
		return modulesList.find((module) => module.id == parseInt(moduleId));
	}

	function getLessonsList(courseId, moduleId) {
		const foundModule = getModuleById(courseId, moduleId);
		return foundModule?.lessons || [];
	}

	function getLessonById(courseId, moduleId, lessonId) {
		const lessonsList = getLessonsList(courseId, moduleId);
		return lessonsList.find((lesson) => lesson.id === parseInt(lessonId));
	}

	return {
		courses,
		getCourseById,
		getModulesList,
		getModuleById,
		getLessonsList,
		getLessonById,
	};
});
