import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCoursesStore = (courseData, courseId) => {
  return defineStore('course', () => {
    let courses = reactive(courseData.courses);

    const course = courses.find((course) => course.id == courseId);

    function getModulesList() {
      return course?.modules || [];
    }

    function getModuleByModuleId(moduleId) {
      return getModulesList().find((module) => module.id == moduleId);
    }

    function getLessonsListForModuleId(moduleId) {
      const foundModule = getModuleByModuleId(moduleId);
      return foundModule?.lessons || [];
    }

    function getLessonByModuleAndLessonId(moduleId, lessonId) {
      const lessonsList = getLessonsListForModuleId(moduleId);
      return lessonsList.find((lesson) => lesson.id === lessonId);
    }

    return {
      course,
      getModulesList,
      getModuleByModuleId,
      getLessonsListForModuleId,
      getLessonByModuleAndLessonId,
    };
  });
}
