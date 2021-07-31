export interface ActivityModel {
  id: number;
  title: string;
  modelAnswer: string;
  wordLimit: number;
  course?: any;
  description: string;
  difficultyLevel: number;
  rating: number;
  createdUserId?: any;
  modifiedUserId?: any;
  modifiedDate: Date;
  createdDate: Date;
}
