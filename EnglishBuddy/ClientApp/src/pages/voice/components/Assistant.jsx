import React from 'react';
import a1 from './a1.png'
import {useAppSelector} from "../../../@core/app-store/hooks";

export default function Assistant(props) {
  const appUser = useAppSelector((state) => state.auth.applicationUser);
  

  return (
    // <div>
    //   <div className="shadow-sm bg-blue-400 py-6 px-9 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl">
    //     <div className="text-white">Hello {appUser.firstName}. My name is E.B. I'm your new buddy.</div>
    //     <div className="text-white">{props.description}</div>
    //     <div className="text-white">{props.modelAnswer}</div>
    //   </div>
    //   <img src={a1} alt=''/>
    // </div>
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
