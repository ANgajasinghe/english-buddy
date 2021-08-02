import {Avatar, Card} from '@material-ui/core';
import ProfileImage from './ProfileImage';
import {NormalText, SecondaryText} from './Text';
import {useAppSelector} from '../../@core/app-store/hooks';
import {DashboardStatsCardCircular} from "./Cards";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
// }));

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

export default function UserProfile() {
  const appUser = useAppSelector((state) => state.auth.applicationUser);

  return (
    <div className='bg-white me-2 link-behavior p-3'
          style={{
            height: '100%',
            borderRadius: '10px',
          }}>
      <div className='text-end'>
        <i className='fa fa-pencil-square-o text-green-600'
           aria-hidden='true'/>
      </div>
      <div className='text-center'>
        <ProfileImage/>
        <NormalText>
          <div className='mt-2'>
            <b>{appUser.firstName} {appUser.lastName}</b>
          </div>
        </NormalText>
        <SecondaryText>
          {appUser.email}
        </SecondaryText>
        <div className='m-2 mt-4'>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              Country:
            </div>
            <div className='text-sm'>
              {appUser.resident}
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              City:
            </div>
            <div className='text-sm'>
              {appUser.city}
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              Age:
            </div>
            <div className='text-sm'>
              {appUser.age}
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              Gender:
            </div>
            <div className='text-sm'>
              {appUser.gender}
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              Language:
            </div>
            <div className='text-sm'>
              {appUser.language}
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-bold'>
              Role:
            </div>
            <div className='text-sm'>
              {appUser.roleName}
            </div>
          </div>
        </div>
        {/* <hr className='mt-4'/>
        <div className='text-md font-bold text-gray-500 text-left mt-3'>
          Statistics
        </div>
        <div className='mt-3'>
          <Line type={'line'}
                data={data}
                options={options}/>
        </div>
        <hr className='mt-4'/>
        <div className='text-md font-bold text-gray-500 text-left mt-3'>
          Skills
        </div>
        <div className='mt-3'>
          <ProgressBar name={'Grammar'}
                       value={appUser.grammar + 1}/>
          <ProgressBar name={'Speaking'}
                       value={appUser.speaking + 1}/>
          <ProgressBar name={'Writing'}
                       value={appUser.writing + 1}/>
        </div> */}
        <hr className='mt-4'/>
        <div className='text-md font-bold text-gray-500 text-left mt-3'>
          Stats
        </div>
        <div className='mt-3'>
          <div className="grid lg:grid-cols-2 mt-3 gap-3">
            <DashboardStatsCardCircular backgroundColor="bg-purple"
                                        fontColorClass="text-purple"
                                        value={appUser.points}
                                        subtitle="Total Points"/>
            <DashboardStatsCardCircular backgroundColor="bg-green"
                                        fontColorClass="text-green"
                                        value={appUser.rank}
                                        subtitle="My Rank"/>
            <DashboardStatsCardCircular backgroundColor="bg-red"
                                        fontColorClass="text-red"
                                        value={appUser.courseCount}
                                        subtitle="My Courses"/>
            <DashboardStatsCardCircular backgroundColor="bg-yellow"
                                        fontColorClass="text-yellow"
                                        value={appUser.coins}
                                        subtitle="My Coins"/>
          </div>
        </div>
        <hr className='mt-4'/>
        <div className='text-md font-bold text-gray-500 text-left mt-3'>
          Leaderboard
        </div>
        <div className='mt-3'>
          <LeaderBoard name="Kasuni Senanayake"
                       imageUrl="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
                       value={962}/>
          <LeaderBoard name="Kaveesha Jayawardene"
                       imageUrl="https://i.pinimg.com/originals/78/b9/c8/78b9c84e6c2f1a052ccca947546a069a.jpg"
                       value={875}/>
          <LeaderBoard name="Thisuri Gamage"
                       imageUrl="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.edu.dailymirror.lk/uploads/articles_14_c6e5bb9dd4.jpg"
                       value={744}/>
          <LeaderBoard name="Ravindu Jeewantha"
                       imageUrl="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiMTIw/MCJ9LCJ3Ijp7InR4Ijoi/R2F5YW4gUm9zaGl0aGFc/bm1vZGVsbWFuYWdlbWVu/dC5jb21cL21vZGVsXC9n/YXlhbi1yb3NoaXRoYSIs/InR4byI6eyJsIjoiNDc5/IiwiaCI6IjcyMCJ9fSwi/MCI6eyJ3Ijp7ImxnIjoi/MSIsImxnaCI6IjE5MSIs/ImxnZyI6Im0ifX19LCJp/ZCI6Imk0ODM1NjE2Iiwi/ZiI6ImpwZyJ9.jpg"
                       value={740}/>
          <LeaderBoard name="Tharinda Rajapaksha"
                       imageUrl="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/49074705_1435767239887914_8682894099650445312_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=91dNpgj5VooAX9QY9Pc&_nc_ht=scontent.fcmb1-2.fna&oh=719f8b291180142231459c42fa93336b&oe=6122646C"
                       value={735}/>
          <LeaderBoard name="Nuvindu Nirmana"
                       imageUrl="https://image.shutterstock.com/image-photo/portrait-handsome-indian-man-holding-600w-1628914090.jpg"
                       value={620}/>
          <LeaderBoard name="Nehan Ilangakoon"
                       imageUrl="https://lankafriends.com/wp-content/uploads/rtMedia/users/28286/2019/07/images.jpg?1627913755"
                       value={555}/>
          <LeaderBoard name="Akalanka Gajasinghe"
                       imageUrl="https://images.thestar.com/m5RtOiOjzqh4LToac37BBGUV46I=/1086x815/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/gta/2013/06/04/14yearold_heading_to_mcmaster_university_in_fall/ciprodigy3.jpg"
                       value={412}/>
          <LeaderBoard name="Pasan Madusara"
                       imageUrl="https://d1ac9zce9817ms.cloudfront.net/images/Indian%20man%20graduating-1592547580555.jpg"
                       value={410}/>
          <LeaderBoard name="Thisura Pamuditha"
                       imageUrl="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/media/images/image_1536128626-6765813bf1.jpg"
                       value={399}/>
        </div>
      </div>
    </div>
  );
}

export function LeaderBoard(prop: {
  imageUrl: string,
  name: string,
  value: number,
}) {
  return (
    <Card className='p-2 m-2 bg-purple-200 flex justify-between'>
      <div className="flex">
        <Avatar alt=''
                src={prop.imageUrl}
                style={{
                  width: '30px',
                  height: '30px',
                  border: '2px',
                  borderStyle: 'solid',
                  borderColor: '#fd726d',
                }}/>
        <span className="ml-2">
          {prop.name}
        </span>
      </div>
      <div>
        <span className="font-bold text-xl text-green-600"> {prop.value} </span>
      </div>

    </Card>
  )
}
