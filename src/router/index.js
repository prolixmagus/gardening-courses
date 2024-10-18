import { createRouter, createWebHistory } from 'vue-router';
import CourseList from '../views/CourseList.vue';
import CourseDetail from '../views/CourseDetail.vue';
import ModuleDetail from '../views/ModuleDetail.vue';
import LessonDetail from '../views/LessonDetail.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: CourseList,
		},
		{
			path: '/courses/:courseId',
			component: CourseDetail, // list of modules
		},
		{
			path: '/courses/:courseId/modules/:moduleId',
			component: ModuleDetail, // list of lessons
		},
		{
			path: '/courses/:courseId/modules/:moduleId/lessons/:lessonId',
			component: LessonDetail,
		},
	],
});

export default router;
