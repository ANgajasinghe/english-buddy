import React from 'react';
import {Card, CardActionArea} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CountUp from 'react-countup';

export function DashboardStatsCard(props: {
  backgroundColor: string;
  fontColorClass: string;
  font: string;
  subtitle: string;
  value: number;
}) {
  return (
    <Card className='mb-2 relative'>
      <span className={`${props.backgroundColor}-700 absolute h-100 p-0.5`}/>
      <div className='card-body p-4 flex justify-between align-items-center'>
        <div className={`${props.backgroundColor}-100 p-3 ps-4 pe-4 rounded-lg`}>
          <i className={`fas ${props.font} text-lg ${props.fontColorClass}-700`}/>
        </div>
        <div>
          <div className='text-right'>
            <CountUp className='text-3xl text-right'
                     end={props.value}/>
          </div>
          <div className='text-gray-400 p-0 m-0 text-md'>
            {props.subtitle}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function MyCourseCard(props: {
  title: string;
  description: string;
  imageUrl: string;
  isBestSeller: boolean;
  difficulty: string;
  rating: number;
}) {
  return (
    <div className='col-sm-12'>
      <Card className='me-2 p-3 cursor-pointer'>
        <CardActionArea>
          <div className='row g-0'>
            <div className='col-sm-5'>
              <img className='w-full object-cover h-full transform cursor-pointer'
                   height='150'
                   width='100%'
                   alt='Foo eating a sandwich.'
                   src='assets/english.jpg'/>
            </div>
            <div className='col-sm-7'>
              <div className='card-body'>
                <h6 className='text-lg font-bold'>
                  {props.title}
                </h6>
                <small className='text-sm'>
                  <i>{props.description}</i>
                </small>
                <div className='text-sm'>
                  <p>jason placeholder, Saman Kumara</p>
                  <div className='flex mt-1'>
                    <p className='font-bold text-yellow-600'>
                      {props.rating}.0
                    </p>
                    <Rating className='ms-2'
                            name='read-only'
                            size='small'
                            value={props.rating}
                            readOnly/>
                  </div>
                  <div className='flex justify-between mt-1'>
                    <p className='text-blue-700 mt-1 font-bold'>
                      #{props.difficulty}
                    </p>
                    {props.isBestSeller ? <p className='bg-yellow-200 p-1 rounded-2'> Best Seller </p> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}