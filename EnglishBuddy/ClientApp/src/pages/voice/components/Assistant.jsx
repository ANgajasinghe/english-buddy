import React from 'react';
import a1 from './a1.png'
import { useAppSelector } from "../../../@core/app-store/hooks";

export default function Assistant(props) {
  return (
    <div className="py-1 px-3 ">
      <div className="grid grid-cols-3 gap-1 px-4 rounded-lg bg-opacity-31">
          <div className=" font-bold text-lg">{props.description}</div>
      </div>
      <div className="mt-5 px-4  rounded-lg bg-opacity-31">
        <div className="text-lg font-semibold py-2">Hints</div>
        <div className="text-lg">{props.modelAnswer}</div>
      </div>
    </div>
  );
}
