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
			name: 'course-list',
			component: CourseList,
		},
		{
			path: '/courses/:courseId',
			name: 'course-detail',
			component: CourseDetail, // list of modules
		},
		{
			path: '/courses/:courseId/modules/:moduleId',
			name: 'module-detail',
			component: ModuleDetail, // list of lessons
		},
		{
			path: '/courses/:courseId/modules/:moduleId/lessons/:lessonId',
			name: 'lesson-detail',
			component: LessonDetail,
		},
	],
});

export default router;
