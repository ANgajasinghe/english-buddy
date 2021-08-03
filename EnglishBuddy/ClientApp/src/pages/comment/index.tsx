import React from 'react';
import {Box, TextareaAutosize} from '@material-ui/core';
import {useAppDispatch, useAppSelector} from '../../@core/app-store/hooks';
import Rating, {IconContainerProps} from '@material-ui/lab/Rating';
import {setComment} from './commentSlice';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import './style.css';

export default function Comment() {
  const dispatch = useAppDispatch();

  const commentHandler = (val: string) => {
    dispatch(setComment(val));
  };

  const customIcons: {
    [index: string]: { icon: React.ReactElement; label: string };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon/>,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon/>,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon/>,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon/>,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon/>,
      label: 'Very Satisfied',
    },
  };

  function IconContainer(props: IconContainerProps) {
    const {value, ...other} = props;
    return (
      <span {...other}>{customIcons[value].icon}</span>
    );
  }

  return (
    <div className='mt-4'>
      <h3 className="text-md font-semibold">Hey, don't forget to add your feedback :)</h3>
      <div className='row mt-4 mb-4'>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='customized-icons'
                  readOnly
                  defaultValue={0}
                  value={+useAppSelector((state) => state.comment.review)?.prediction}
                  getLabelText={(value: number) => customIcons[value]?.label}
                  IconContainerComponent={IconContainer}/>
        </Box>
        <TextareaAutosize className='w-100 mt-2 focus:outline-none bg-gray-100'
                          aria-label='minimum height'
                          rowsMin={5}
                          onChange={(e) => commentHandler(e.target.value)}
                          placeholder='Add your comment'/>
      </div>
    </div>
  );
}
