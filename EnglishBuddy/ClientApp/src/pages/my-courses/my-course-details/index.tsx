import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Get, Update} from "../../../@core/api-base";
import {CourseModel} from "../../../@core/models/course";
import IntroductionLesson from "./components/IntroductionLesson";
import {CourseRecommendation} from "./components/CourseRecommendation";
import ReactHtmlParser from "react-html-parser";
import LessonCard from "../../../@ui/components/LessonCard";

export default function MyCourseDetails() {
  const {courseId}: any = useParams();
  const {lessonId}: any = useParams();
  
  console.log(useParams());

  const [course, setCourse] = useState<CourseModel>({} as CourseModel);

  const onCourseComplete = async () => {
    try {
      const response = (await Update(
        ["ApplicationUserCourses", "complete-intro", courseId?.toString()],
        null
      )) as CourseModel;
      // set course
      setCourse(response);
    } catch (err) {
      alert("Error");
    }
  };

  const getCourseDetailAsync = async (courseId: number) => {
    try {
      const response = (await Get([
        "ApplicationUserCourses",
        "my-courses-intro",
        courseId?.toString(),
      ])) as CourseModel;
      // set course
      setCourse(response);
    } catch (err) {
      alert("Error");
    }
  };

  useEffect(() => {
    const asyncHub = async () => {
      await getCourseDetailAsync(courseId);
    };
    asyncHub().then(() => {
      
    });
  }, [courseId]);

  return (
    <div>
      <div className="mt-3 bg-blue-900 py-3 px-2 rounded-xl">
        <label className="ml-3 text-2xl font-poppins text-white font-semibold">
          {course.title}
        </label>
      </div>
      
      <div className='mt-3 bg-gray-100 p-5 rounded-5'>
        {ReactHtmlParser(course.description)}
      </div>
      
      
      <div className="rounded-xl row mt-4">

        {course.lessons?.map(x=> {

          
          const isLessonCompleted = course.applicationUserCourseLessons?.some(c=>c.lessonId === x.id) ?? false;
          
          
          return <LessonCard key={x.id} lesson={x} isCompleted={isLessonCompleted} />
        })}
        
        
        {/*<IntroductionLesson introduction={course.introduction}*/}
        {/*                    isCompletedIntroduction={course.isCompletedIntroduction}*/}
        {/*                    onCourseComplete={onCourseComplete}/>*/}
        {/*{*/}
        {/*  course.isCompletedIntroduction ? (*/}
        {/*    <CourseRecommendation courseId={courseId}/>*/}
        {/*  ) : null*/}
        {/*}*/}
        
        
      </div>
    </div>
  );
}
