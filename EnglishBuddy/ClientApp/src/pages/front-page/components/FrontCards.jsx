import React from 'react';
import {Card, CardActionArea} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CountUp from 'react-countup';


export function FrontCards(props) {
    return (
      <div className='col-sm-2'>
        <Card className='me-2 p-3 cursor-pointer'>
          <CardActionArea>
            <div className='col'>
              <div className='col-sm-12'>
                <img className='w-full object-cover h-full transform cursor-pointer'
                     height='150'
                     width='100%'
                     alt=''
                     src='assets/english.jpg'/>
              </div>
              <div className='col-sm-12'>
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
