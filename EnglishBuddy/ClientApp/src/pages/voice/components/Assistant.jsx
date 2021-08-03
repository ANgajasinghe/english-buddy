import React from 'react';
import a1 from './a1.png'

export default function Assistant(props) {
  return (
    <div className="py-1 px-3 ">
      <div className="grid grid-cols-3 gap-4 shadow-sm bg-blue-400 py-3 px-4 rounded-lg bg-opacity-31">
        <div className="col-span-2">
          <div className="text-white font-semibold text-lg">{props.description}</div>
        </div>
        <div>
          <img src={a1} alt='' width="100px" height="100px"/>
        </div>
      </div>
      <div className="mt-5 shadow-sm bg-purple-400 py-3 px-4  rounded-lg bg-opacity-31">
        <div className="text-white text-lg">{props.modelAnswer}</div>
      </div>
    </div>
  );
}
