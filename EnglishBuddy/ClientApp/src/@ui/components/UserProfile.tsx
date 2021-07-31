import {Card} from '@material-ui/core';
import ProfileImage from './ProfileImage';
import {NormalText, SecondaryText} from './Text';
import ProgressBar from './ProgressBar';
import {Line} from 'react-chartjs-2';
import {useAppSelector} from '../../@core/app-store/hooks';

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
    <Card className='me-2 link-behavior p-3'
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
        <hr className='mt-4'/>
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
        </div>
        <hr className='mt-4'/>
        <div className='text-md font-bold text-gray-500 text-left mt-3'>
          Leaderboard
        </div>
        <div className='mt-3'>
          Leaderboard
        </div>
      </div>
    </Card>
  );
}
