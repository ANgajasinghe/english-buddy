import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Get, Update} from "../../../@core/api-base";
import {CourseModel} from "../../../@core/models/course";
import IntroductionLesson from "./components/IntroductionLesson";
import {CourseRecommendation} from "./components/CourseRecommendation";

export default function MyCourseDetails() {
  const {courseId}: any = useParams();

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
      <div className="flex 
      mt-5 p-0 px-3 
      rounded-xl 
      bg-purple-100
      border-purple-500 
      mb-2 border-2">
        <h1 className="text-xl mb-3 mt-3 font-poppins text-center "> {course.title} </h1>
      </div>

      <IntroductionLesson introduction={course.introduction}
                          isCompletedIntroduction={course.isCompletedIntroduction}
                          onCourseComplete={onCourseComplete}/>
      {course.isCompletedIntroduction ? (
        <CourseRecommendation courseId={courseId}/>
      ) : null}
    </div>
  );
}
