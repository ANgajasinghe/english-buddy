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

      <Notifications></Notifications>


      <div className="row mb-6 mt-0.5 g-5">
        <div className="col-sm-3">
          <UserProfile/>
        </div>
        <div className="col-sm-9">
          <h5 className="text-2xl">
            <b className="font-poppins font-semibold">Dashboard</b>
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
          <div className="text-xl mt-5 flex justify-between">
            <div className="font-poppins">My Courses</div>
            <div className=" text-purple-700 font-semibold text-sm cursor-pointer"> View More</div>

          </div>
          <div className="row mt-4">
            {/* <Slider {...settings}> */}
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
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
            </div>
            {/* </Slider> */}
          </div>
          <h5 className="text-xl mt-5">

            <div className="text-xl mt-5 flex justify-between">
              <div className="font-poppins">Recommended for You</div>
              <div className=" text-purple-700 font-semibold text-sm cursor-pointer"> View More</div>
            </div>
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


export function Notifications() {

  const [open, setOpen] = useState(false);

  return (

    <div className="static">
      <div className="absolute flex right-0">
        <button
          className="border-r-0 
        border-l-2 border-b-2 border-t-2 
        rounded-l-full 
        border-purple-500 
        font-bold 
        text-purple-500 
        text-sm
        relative
        p-2
        px-3
        transition 
        duration-300 
        ease-in-out
        hover:bg-purple-500 
        hover:text-white
        "
          onClick={() => setOpen(true)}
        >
          <i className="far fa-envelope"></i>
        </button>

        <div className="flex absolute left-0 h-4 w-4">
          <span className="animate-ping  absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"/>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
        </div>
        {/* <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
      </div>

    </div>
  )
}
