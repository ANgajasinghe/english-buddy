import React from 'react';
import {Link} from 'react-router-dom';
import {CourseModel} from '../../@core/models/course';

export default function CourseCard(props: { courseDetail: CourseModel }) {
  const {courseDetail} = props;

  return (
    <div className='card mb-3 link-behaviour'
         style={{
           width: '100%'
         }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={courseDetail.imageUrl}
               alt='...'/>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>
              {courseDetail.title}
            </h5>
            <p className='card-text'>
              <small className='text-muted'>
                Last updated 3 mins ago
              </small>
            </p>
            <Link to={`course/${courseDetail.id}`}
                  className='btn btn-primary'>
              {' '}
              View{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
