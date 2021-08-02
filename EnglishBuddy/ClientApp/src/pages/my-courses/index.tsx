import React, { useEffect, useState } from "react";
import { CourseModel } from "../../@core/models/course";
import { Get } from "../../@core/api-base";
import { Link } from "react-router-dom";
import { MyCourseCard } from "../../@ui/components/Cards";

export default function MyCourses() {

  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    if (courses.length <= 0) {
      getMyCourses().then(() => {
      });
    }
  }, [courses.length]);
  const getMyCourses = async () => {
    try {
      setCourses(
        (await Get(["ApplicationUserCourses", "my-courses"])) as CourseModel[]
      );
    } catch (e) {
      alert("error");
    }
  };


  return (
    <div>
      <div className="grid lg:grid-cols-2 mt-4 gap-2">
              {
                courses.map((course) => (
                  <Link to={`my-course-details/${course.id}`}>
                    <MyCourseCard key={course.id}
                      title={course.title}
                      author={'Saman Kumara'}
                      description={course.description}
                      imageUrl={course.imageUrl}
                      rating={course.rating}
                      difficulty={course.difficulty}
                      isBestSeller={course.isBestSeller} />
                  </Link>
                ))
              }
            </div>
    </div>
  );

}