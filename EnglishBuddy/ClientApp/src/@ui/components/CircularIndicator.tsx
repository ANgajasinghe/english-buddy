import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function CircularIndicator(props: {
  value: number
  label: string
}) {
  return (
    <div>
      <CircularProgressbar value={props.value}
                           text={`${props.value}`}
                           maxValue={10}
                           minValue={0}/>
      <label className='flex justify-center font-semibold text-uppercase text-blue-800 mt-2'>
        {props.label}
      </label>
    </div>
  )
}
