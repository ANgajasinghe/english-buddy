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
    <Card className='mb-2'>
      <span className={`${props.backgroundColor}-700 absolute h-100 p-0.5`}/>
      <div className='card-body p-4 flex justify-between align-items-center'>
        <div className={`${props.backgroundColor}-100 p-3 ps-4 pe-4 rounded-lg`}>
          <i className={`fas ${props.font} text-lg ${props.fontColorClass}-700`}/>
        </div>
        <div>
          <div className='text-right'>
            <CountUp className='text-3xl font-semibold text-right'
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

export function DashboardStatsCardCircular(props: {
  backgroundColor: string;
  fontColorClass: string;
  subtitle: string;
  value: number;
}) {
  return (
    <div className={`${props.backgroundColor}-200 mb-0.5 relative card-body p-1 rounded-xl`}>
      <div>
        <CountUp className={`text-sm font-semibold font-Josefin text-right ${props.fontColorClass}-600`}
                 end={props.value}/>
        <div className={`text-gray-400 font-Josefin text-sm p-0 ${props.fontColorClass}-500`}>
          {props.subtitle}
        </div>
      </div>
    </div>
  );
}

export function MyCourseCard(props: {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  isBestSeller: boolean;
  difficulty: string;
  rating: number;
}) {
  return (
    <div className='bg-white col-sm-12 rounded-lg'>
      <div className='me-2 p-3 cursor-pointer'
            style={{
              borderRadius: '10px'
            }}>
        <CardActionArea>
          <div className='row g-0'>
            <div className='col-sm-4'>
              <img className='transform cursor-pointer h-36 w-36'
               
                   alt=''
                   src={props.imageUrl}/>
            </div>
            <div className='col-sm-8'>
              <div className='card-body'>
                <h6 className='text-lg font-bold'>
                  {props.title}
                </h6>
                <small className='text-sm'>
                  <i>{props.description}</i>
                </small>
                <div className='text-sm'>
                  <p className='font-semibold'>
                    {props.author}
                  </p>
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
                    {
                      props.isBestSeller ? (
                        <p className='bg-yellow-200 px-2 py-1 rounded-2'>
                          Best Seller
                        </p>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardActionArea>
      </div>
    </div>
  );
}
