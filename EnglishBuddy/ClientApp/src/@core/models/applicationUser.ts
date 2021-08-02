export interface ApplicationUserModel {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  roleName: string;
  profilePictureUrl: string;
  resident: string;
  city: string;
  age: number;
  language: string;
  spelling: number;
  grammar: number;
  speaking: number;
  writing: number;
  rank: number;
  points: number;
  courseCount: number;
  coins: number;
  createdUserId?: any;
  modifiedUserId?: any;
  modifiedDate: Date;
  createdDate: Date;
}
