import UserProfile from "../../@ui/components/UserProfile";
import { MyCourseCard } from "../../@ui/components/Cards";
import { useAppSelector } from "../../@core/app-store/hooks";
import { useEffect, useState } from "react";
import { CourseModel } from "../../@core/models/course";
import { Get } from "../../@core/api-base";
import { Link } from "react-router-dom";
import ProgressBar from "../../@ui/components/ProgressBar";
import { Line } from "react-chartjs-2";

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


  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Activities',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(253, 114, 109)',
        borderColor: 'rgba(253, 114, 109, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='mb-5'>
      <Notifications />
      <div className="row mb-6 mt-0.5 g-5">
        <div className="col-sm-9">
          <p className="text-2xl font-poppins font-semibold m-1">
            Dashboard
          </p>
          {/*<div className="flex">*/}
          {/*  <div className="py-1 px-4 rounded-sm w-56 text-gray-300 bg-gray-100">Search Something</div>*/}
          {/*  <i className=" text-xl py-1 px-3 rounded-lg bg-purple-200 text-purple-900 lab la-searchengin"/>*/}
          {/*</div>*/}
          <div className="relative">
            <div className="absolute right-10 top-0">
              <img width="250" src="./assets/undraw_social_friends_nsbv.svg" alt="" />
            </div>
          </div>
          <div className="bg-red-100 mt-12 h-48 rounded-xl p-4 "
            style={{
              borderRadius: '10px',
              backgroundColor: '#FEE2E2'
            }}>
            <p className="f-secondary font-Nunito font-bold text-2xl">
              Hello {appUser.firstName}, Welcome Back!
            </p>
            <div className="w-75 mt-10 text-lg pr-5 text-gray-600">
              Join with the next revolution in English learning!
              <br />
              Enroll to the newest courses by our best authors and make a difference...
            </div>
          </div>

          <div className='grid sm:grid-cols-2 gap-4 mt-5'>
            <div className="bg-white p-4 rounded-2xl "
              style={{
                borderRadius: '10px',
              }}>
              <div className='font-semibold text-gray-800 text-left mb-3'>
                Progress Report
              </div>
              <div className='mt-3'>
                <Line type={'line'}
                  data={data}
                  options={options} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl"
              style={{
                borderRadius: '10px'
              }}>

              <div className='font-semibold text-gray-800 text-left mb-3'>
                Skills
              </div>
              <div className='mt-4'>
                <ProgressBar name={'Spelling'}
                  value={appUser.spelling + 1} />
                <ProgressBar name={'Grammar'}
                  value={appUser.grammar + 1} />
                <ProgressBar name={'English Speaking'}
                  value={appUser.speaking + 1} />
                <ProgressBar name={'Academic Writing'}
                  value={appUser.writing + 1} />
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
          
            <div className="font-poppins text-lg m-1 font-semibold">
              Your Courses
            </div>

            <div className="mt-3 
            mr-4 
            text-purple-700 
            font-semibold 
            text-sm 
            cursor-pointer">
              View More
            </div>
          </div>

          <div className="row">
            {/* <Slider {...settings}> */}
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              {
                courses.slice(0, 4).map((course) => (
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
            {/* </Slider> */}
          </div>

          {/* <h5 className="text-xl mt-5">
            <div className="text-xl mt-5 flex justify-between">
              <div className="font-poppins text-xl m-1">Recommended Courses</div>
              <div className="mt-3 mr-4 text-purple-700 font-semibold text-sm cursor-pointer">View More</div>
            </div>
            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              <MyCourseCard key={1}
                title={"Learn Summarization Quickly"}
                author={'Saman Kumara'}
                description={"Learn summarization easily and quickly!"}
                imageUrl="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/02/1cover1.jpg"
                rating={4}
                difficulty={"Advanced"}
                isBestSeller={true} />
              <MyCourseCard key={2}
                title={"Face Interviews Fearlessly - I"}
                author={'Saman Kumara'}
                description={"Get ready to ace in interviews!"}
                imageUrl="https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png"
                rating={5}
                difficulty={"Intermediate"}
                isBestSeller={true} />
              <MyCourseCard key={3}
                title={"Face Interviews Fearlessly - II"}
                author={'Saman Kumara'}
                description={"Get ready to ace in interviews!"}
                imageUrl="https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png"
                rating={5}
                difficulty={"Advanced"}
                isBestSeller={true} />
              <MyCourseCard key={4}
                title={"Intermediate Essay Writing"}
                author={'Saman Kumara'}
                description={"Brush up your essay writing skills!"}
                imageUrl="https://www.balochistanvoices.com/wp-content/uploads/2019/09/essay-1021x580.jpg"
                rating={2}
                difficulty={"Intermediate"}
                isBestSeller={true} />
              <MyCourseCard key={5}
                title={"Face Interviews Fearlessly - III"}
                author={'Saman Kumara'}
                description={"Get ready to ace in interviews!"}
                imageUrl="https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png"
                rating={5}
                difficulty={"Advanced"}
                isBestSeller={true} />
            </div>
          </h5> */}
        </div>
        <div className="col-sm-3">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export function Notifications() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-0 z-50">
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
          <i className="far fa-envelope" />
        </button>
        <div className="flex absolute left-0 h-4 w-4">
          <span className="animate-ping  absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </div>
        {/* <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
      </div>
    </div>
  )
}
