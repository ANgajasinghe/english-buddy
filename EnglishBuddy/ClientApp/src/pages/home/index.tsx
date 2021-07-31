import {makeStyles} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {Get} from '../../@core/api-base';
import {CourseModel} from '../../@core/models/course';
import CourseCard from '../../@ui/components/CourseCard';
import Comment from '../comment';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Home() {
  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    if (courses.length <= 0) {
      getMyCourses().then(() => {
      });
    }
  }, []);

  const getMyCourses = async () => {
    try {
      setCourses(
        (await Get(['ApplicationUserCourses', 'my-courses'])) as CourseModel[]
      );
    } catch (e) {
      alert('error');
    }
  };

  return (
    <div className='mt-4'>
      <h3>My Courses Test</h3>
      <div className='row mt-4'>
        {
          courses.map((x) => (
            <CourseCard key={x.id}
                        courseDetail={x}/>
          ))
        }
      </div>
      <hr/>
      <div>
        <h3>Real Time Sentiment Analysis Test</h3>
        <Comment/>
      </div>
    </div>
  );
}
