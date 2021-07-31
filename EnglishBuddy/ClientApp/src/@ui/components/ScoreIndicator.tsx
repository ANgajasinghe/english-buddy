import React from 'react'
// @ts-ignore
import ReactStoreIndicator from 'react-score-indicator'
import {stepColors} from '../../styles/colors'

export function ScoreIndicator(props: {
  value: number
  label: string
}) {
  return (
    <div>
      <ReactStoreIndicator value={props.value}
                           maxValue={10}
                           lineWidth={8}
                           lineGap={2}
                           fadedOpacity={25}
                           width={90}
                           stepColors={stepColors}/>
      <label className='flex justify-center font-semibold sm:text-xs md:text-sm text-uppercase text-blue-800'>
        {props.label}
      </label>
    </div>
  )
}
