import ReactHtmlParser from "react-html-parser";
import {ActivityModel} from "../../../../@core/models/activity";
import {useState} from "react";
import {ActivityResultModel} from "../../../../@core/models/activityResult";
import {setEvaluated} from "../evaluationSlice";
import {useAppDispatch, useAppSelector} from "../../../../@core/app-store/hooks";

export default function Grammar(props: {
    activity: ActivityModel
}){
    
    
    const[point,setPoints] = useState(0);

    const dispatch = useAppDispatch();

    const appUser = useAppSelector((state) => state.auth.applicationUser)
    
    const onEvaluate = ()=>{
        const activityResult = {
            activityId: props.activity.id,
            overallScore: point,
            applicationUserId: appUser.id
        } as ActivityResultModel
        dispatch(setEvaluated(activityResult))
    }
    
    return(
        <div>
            <h4> {props.activity.title} </h4>
            {ReactHtmlParser(props?.activity.description)}

            <textarea className='w-100 px-4 py-3 mt-4 focus:outline-none bg-gray-50 border-solid border-2 border-gray-200 rounded'
                      onChange={e=>setPoints(+e.target.value)}
                      rows={15}/>
            <div className='text-end mt-4'>
                <button className='text-white text-uppercase bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg'
                        value='Evaluate'
                        onClick={onEvaluate}
                        type='submit'>
                    Evaluate
                </button>
            </div>
        </div>
    )
}
