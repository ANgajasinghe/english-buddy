import {LinearProgress} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {NormalText} from './Text';

export default function ProgressBar(props: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.value; index++) {
      setProgress(index);
    }
    return () => {
    };
  }, [props.value]);

  return (
    <div className='mb-4'>
      <div className='d-flex justify-content-between mb-2'>
        <NormalText>
          <small className='text-sm font-bold'>
            {props.name}
          </small>
        </NormalText>
        <NormalText>
          <small className='text-sm font-bold'>
            {progress}%
          </small>
        </NormalText>
      </div>
      <LinearProgress variant='determinate'
                      value={progress}/>
    </div>
  );
}
