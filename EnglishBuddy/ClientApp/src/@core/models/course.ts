import {CourseCategoryModel} from './courseCategory';

export interface CourseModel {
  createdUserId: string;
  modifiedUserId: string;
  modifiedDate: Date;
  createdDate: Date;
  id: number;
  title: string;
  introduction: string;
  courseCategoryId: number;
  rating: number;
  courseCategory: CourseCategoryModel;
  imageUrl: string;
  isBestSeller: boolean;
  difficulty: string;
  description: string;
  isCompletedIntroduction: boolean;
  lessons: LessonModel[];
  applicationUserCourseLessons: ApplicationUserCourseLessons[];
}

export interface LessonModel {
  id: number;
  title: string;
  html: string;
  type: number;
  courseId: number;
}

export interface ApplicationUserCourseLessons {
  id:number;
  lessonId:number;
}