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
      <Notifications/>
      <div className="row mb-6 mt-0.5 g-5">
        <div className="col-sm-3">
          <UserProfile/>
        </div>
        <div className="col-sm-9">
          <h5 className="text-2xl">
            <b className="font-poppins font-semibold">Dashboard</b>
          </h5>
          <div className="grid lg:grid-cols-4 mt-4 gap-5">
            <DashboardStatsCard backgroundColor="bg-purple"
                                fontColorClass="text-purple"
                                font="fa-star"
                                value={appUser.points}
                                subtitle="Total Points"/>
            <DashboardStatsCard backgroundColor="bg-green"
                                fontColorClass="text-green"
                                font="fa-crown"
                                value={appUser.rank}
                                subtitle="My Rank"/>
            <DashboardStatsCard backgroundColor="bg-red"
                                fontColorClass="text-red"
                                font="fa-book"
                                value={appUser.courseCount}
                                subtitle="My Courses"/>
            <DashboardStatsCard backgroundColor="bg-yellow"
                                fontColorClass="text-yellow"
                                font="fa-coins"
                                value={appUser.coins}
                                subtitle="My Coins"/>
          </div>
          <div className="text-xl mt-5 flex justify-between">
            <div className="font-poppins text-xl m-1">My Courses</div>
            <div className="mt-3 mr-4 text-purple-700 font-semibold text-sm cursor-pointer">View More</div>
          </div>
          <div className="row">
            {/* <Slider {...settings}> */}
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              {courses.map((course) => (
                <Link to={`my-course-details/${course.id}`}>
                  <MyCourseCard key={course.id}
                                title={course.title}
                                author={'Saman Kumara'}
                                description={course.description}
                                imageUrl={course.imageUrl}
                                rating={course.rating}
                                difficulty={course.difficulty}
                                isBestSeller={course.isBestSeller}/>
                </Link>
              ))}
            </div>
            {/* </Slider> */}
          </div>
          <h5 className="text-xl mt-5">
            <div className="text-xl mt-5 flex justify-between">
              <div className="font-poppins text-xl m-1">Recommended Courses</div>
              <div className="mt-3 mr-4 text-purple-700 font-semibold text-sm cursor-pointer">View More</div>
            </div>
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              <MyCourseCard title={"Learn Summarization Quickly"}
                            author={'Saman Kumara'}
                            description={"Learn summarization easily and quickly!"}
                            imageUrl="assets/english.jpg"
                            rating={4}
                            difficulty={"Intermediate"}
                            isBestSeller={true}/>
              <MyCourseCard title={"Letter Writing"}
                            author={'Saman Kumara'}
                            description={"Learn how to write formal letters..."}
                            imageUrl="assets/english.jpg"
                            rating={5}
                            difficulty={"Advanced"}
                            isBestSeller={true}/>
              <MyCourseCard title={"Face Interviews Fearlessly"}
                            author={'Saman Kumara'}
                            description={"Get ready to ace in interviews!"}
                            imageUrl="assets/english.jpg"
                            rating={5}
                            difficulty={"Advanced"}
                            isBestSeller={true}/>
              <MyCourseCard title={"Intermediate Essay Writing"}
                            author={'Saman Kumara'}
                            description={"Brush up your essay writing skills!"}
                            imageUrl="assets/english.jpg"
                            rating={2}
                            difficulty={"Intermediate"}
                            isBestSeller={true}/>
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
        <button onClick={() => setOpen(true)}
                className="border-r-0
                border-l-2 border-b-2 border-t-2
                rounded-l-full
                border-purple-500
                font-bold
                text-purple-500
                text-sm
                relative
                py-2
                px-3
                transition
                duration-300
                ease-in-out
                hover:bg-purple-500
                hover:text-white">
          <i className="far fa-envelope"/>
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
