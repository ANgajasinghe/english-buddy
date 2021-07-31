import React from 'react';

export default function Loading(props: any) {
  return (
    <div>
      {
        props.loading &&
        <div className='loading d-flex justify-content-center align-items-center'>
          <div className='spinner-grow text-primary loader-style'
               role='status'>
            <span className='visually-hidden'>
              Loading...
            </span>
          </div>
        </div>
      }
    </div>
  );
}
