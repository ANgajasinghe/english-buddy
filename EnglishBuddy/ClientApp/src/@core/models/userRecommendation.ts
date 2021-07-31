import {ActivityModel} from './activity';

export interface UserRecommendationModel {
  introduction: string;
  activity1: ActivityModel;
  activity2: ActivityModel;
  samplesQuestion: SampleQuestionModel;
  extraLesson: ExtraLessonModel;
  activities: ActivityModel[];
  lessons?: LessonModel[];
  sampleQuestions: any[];
  message?: any;
  steps: number[];
  typeName: string;
}

export interface SampleQuestionModel {
  id: number;
  questions: string;
  answers: string;
  rating: number;
}

export interface LessonModel {
  id: number;
  title: string;
  rating: number;
}

export interface ExtraLessonModel {
  id: number;
  title: string;
  rating: number;
  html: string;
}
