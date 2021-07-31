import React from 'react';
import a1 from './a1.png'
import {useAppSelector} from "../../../@core/app-store/hooks";

export default function Assistant(props) {
  const appUser = useAppSelector((state) => state.auth.applicationUser);
  // const topic = "speaking basics"
  // const arr = ["test", "test", "test"]

  // useEffect(() => {
  //     stateChange(-1)
  //   }, [])

  // function stateChange(newState) {

  //     setTimeout(function () {
  //         if (newState == -1) {
  //             alert('VIDEO HAS STOPPED');
  //         }
  //     }, 5000);
  // }

  return (
    <div>
      <div className="shadow-sm bg-blue-400 py-6 px-9 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl">
        <div className="text-white">Hello {appUser.firstName}. My name is E.B. I'm your new buddy.</div>
        <div className="text-white">{props.description}</div>
      </div>
      <img src={a1} alt=''/>
    </div>
  );
}
