import { Avatar, Card } from '@material-ui/core';
import ProfileImage from './ProfileImage';
import { NormalText, SecondaryText } from './Text';
import { useAppSelector } from '../../@core/app-store/hooks';
import { DashboardStatsCardCircular } from "./Cards";


export default function UserProfile() {
  const appUser = useAppSelector((state) => state.auth.applicationUser);

  return (
    <div>

      <div className="bg-white p-3 rounded-lg">
        <div className='text-end'>
          <i className='fa fa-pencil-square-o text-green-600'
            aria-hidden='true' />
        </div>
        <div className='text-center'>
          <ProfileImage />
          <div className='mt-3 font-semibold font-Josefin'>
            {appUser.firstName} {appUser.lastName}
          </div>
          <SecondaryText>
            Student
          </SecondaryText>

          <div className='mt-4'>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 mt-3 gap-3">
              <DashboardStatsCardCircular backgroundColor="bg-purple"
                fontColorClass="text-purple"
                value={appUser.points}
                subtitle="Points" />
              <DashboardStatsCardCircular backgroundColor="bg-green"
                fontColorClass="text-green"
                value={appUser.rank}
                subtitle="Rank" />
              <DashboardStatsCardCircular backgroundColor="bg-red"
                fontColorClass="text-red"
                value={appUser.courseCount}
                subtitle="Courses" />
              <DashboardStatsCardCircular backgroundColor="bg-yellow"
                fontColorClass="text-yellow"
                value={appUser.coins}
                subtitle="Coins" />
            </div>
          </div>

          <div className='m-2 mt-4'>
            <div className='flex justify-between mb-2'>
              <div className='text-sm font-semibold font-Josefin'>
                From:
              </div>
              <div className='text-sm font-Josefin'>
                {appUser.city}, {appUser.resident}
              </div>
            </div>
            <div className='flex justify-between mb-2'>
              <div className='text-sm font-semibold font-Josefin'>
                Age:
              </div>
              <div className='text-sm font-Josefin'>
                {appUser.age}
              </div>
            </div>
            <div className='flex justify-between mb-2'>
              <div className='text-sm font-semibold font-Josefin'>
                Gender:
              </div>
              <div className='text-sm font-Josefin'>
                {appUser.gender}
              </div>
            </div>
            <div className='flex justify-between mb-2'>
              <div className='text-sm font-semibold font-Josefin'>
                Language:
              </div>
              <div className='text-sm font-Josefin'>
                {appUser.language}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='bg-white p-3 rounded-lg mt-4 me-2'>

        <div className='text-md font-bold text-red-500 text-center mt-3'>
          Leaderboard
        </div>
        <div className='mt-3 mb-3'>
          <LeaderBoard name="Kasuni Senanayake"
            isDark={true}
            imageUrl="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
            value={962} />
          <LeaderBoard name="Kaveesha Jayawardene"
            isDark={true}
            imageUrl="https://i.pinimg.com/originals/78/b9/c8/78b9c84e6c2f1a052ccca947546a069a.jpg"
            value={875} />
          <LeaderBoard name="Thisuri Gamage"
            isDark={true}
            imageUrl="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.edu.dailymirror.lk/uploads/articles_14_c6e5bb9dd4.jpg"
            value={744} />
          <LeaderBoard name="Ravindu Jeewantha"
            isDark={true}
            imageUrl="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiMTIw/MCJ9LCJ3Ijp7InR4Ijoi/R2F5YW4gUm9zaGl0aGFc/bm1vZGVsbWFuYWdlbWVu/dC5jb21cL21vZGVsXC9n/YXlhbi1yb3NoaXRoYSIs/InR4byI6eyJsIjoiNDc5/IiwiaCI6IjcyMCJ9fSwi/MCI6eyJ3Ijp7ImxnIjoi/MSIsImxnaCI6IjE5MSIs/ImxnZyI6Im0ifX19LCJp/ZCI6Imk0ODM1NjE2Iiwi/ZiI6ImpwZyJ9.jpg"
            value={740} />
          <LeaderBoard name="Tharinda Rajapaksha"
            isDark={true}
            imageUrl="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/49074705_1435767239887914_8682894099650445312_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=91dNpgj5VooAX9QY9Pc&_nc_ht=scontent.fcmb1-2.fna&oh=719f8b291180142231459c42fa93336b&oe=6122646C"
            value={735} />

          <LeaderBoard name="Nuvindu Nirmana"
            imageUrl="https://image.shutterstock.com/image-photo/portrait-handsome-indian-man-holding-600w-1628914090.jpg"
            value={620} />
          <LeaderBoard name="Nehan Ilangakoon"
            imageUrl="https://lankafriends.com/wp-content/uploads/rtMedia/users/28286/2019/07/images.jpg?1627913755"
            value={555} />
          <LeaderBoard name="Akalanka Gajasinghe"
            imageUrl="https://images.thestar.com/m5RtOiOjzqh4LToac37BBGUV46I=/1086x815/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/gta/2013/06/04/14yearold_heading_to_mcmaster_university_in_fall/ciprodigy3.jpg"
            value={412} />
          <LeaderBoard name="Pasan Madusara"
            imageUrl="https://d1ac9zce9817ms.cloudfront.net/images/Indian%20man%20graduating-1592547580555.jpg"
            value={410} />
          <LeaderBoard name="Thisura Pamuditha"
            imageUrl="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/media/images/image_1536128626-6765813bf1.jpg"
            value={399} />
        </div>
      </div>
    </div >

  );
}

export function LeaderBoard(props: {
  imageUrl: string,
  name: string,
  value: number,
  isDark?: boolean,
}) {
  return (
    <div className={`p-2 rounded-md m-2 ${props.isDark ? 'bg-red-100' : 'bg-red-50'}  flex justify-between`}>
      <div className="flex content-center h-5">
        <Avatar alt=''
          src={props.imageUrl}
          style={{
            width: '30px',
            height: '30px',
            border: '2px',
            borderStyle: 'solid',
            borderColor: '#fd726d',
          }} />
        <div>
          <i className="ml-2 text-sm">
            {props.name}
          </i>
        </div>

      </div>
      <div>
        <div className=" font-semibold text-lg text-red-600">
          {props.value}
        </div>
      </div>

    </div>
  )
}
