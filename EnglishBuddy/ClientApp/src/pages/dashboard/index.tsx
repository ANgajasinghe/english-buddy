import Slider from "react-slick";
import UserProfile from "../../@ui/components/UserProfile";
import {DashboardStatsCard, MyCourseCard} from "../../@ui/components/Cards";
import {useAppSelector} from "../../@core/app-store/hooks";
import {useEffect, useState} from "react";
import {CourseModel} from "../../@core/models/course";
import {Get} from "../../@core/api-base";
import {Link} from "react-router-dom";

export default function Dashboard() {
  const appUser = useAppSelector((state) => state.auth.applicationUser);

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="row mb-6 mt-0.5 g-5">
        <div className="col-sm-3">
          <UserProfile/>
        </div>
        <div className="col-sm-9">
          <h5 className="text-2xl">
            <b className="font-poppins">Dashboard</b>
          </h5>
          <div className="grid lg:grid-cols-4 mt-4 gap-5">
            <DashboardStatsCard
              backgroundColor="bg-purple"
              fontColorClass="text-purple"
              font="fa-star"
              value={appUser.points}
              subtitle="Total Points"
            />
            <DashboardStatsCard
              backgroundColor="bg-green"
              fontColorClass="text-green"
              font="fa-crown"
              value={appUser.rank}
              subtitle="My Rank"
            />
            <DashboardStatsCard
              backgroundColor="bg-red"
              fontColorClass="text-red"
              font="fa-book"
              value={appUser.courseCount}
              subtitle="My Courses"
            />
            <DashboardStatsCard
              backgroundColor="bg-yellow"
              fontColorClass="text-yellow"
              font="fa-coins"
              value={appUser.coins}
              subtitle="My Coins"
            />
          </div>
          <h5 className="text-xl mt-5">
            <b className="font-poppins">My Courses</b>
          </h5>
          <div className="row mt-4">
            <Slider {...settings}>
              {courses.map((course) => (
                <Link to={`my-course-details/${course.id}`}>
                  <MyCourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    imageUrl={course.imageUrl}
                    rating={course.rating}
                    difficulty={course.difficulty}
                    isBestSeller={course.isBestSeller}
                  />
                </Link>
              ))}
            </Slider>
          </div>
          <h5 className="text-xl mt-5">
            <b className="font-poppins">Recommended for You</b>
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              <MyCourseCard
                title={"Learn Summarization Quickly"}
                description={"Learn summarization easily"}
                imageUrl="assets/english.jpg"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
              <MyCourseCard
                title={"Learn Summarization Quickly"}
                description={"Learn summarization easily"}
                imageUrl="assets/english.jpg"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
              <MyCourseCard
                title={"Learn Summarization Quickly"}
                description={"Learn summarization easily"}
                imageUrl="assets/english.jpg"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
              <MyCourseCard
                title={"Learn Summarization Quickly"}
                description={"Learn summarization easily"}
                imageUrl="assets/english.jpg"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
}
