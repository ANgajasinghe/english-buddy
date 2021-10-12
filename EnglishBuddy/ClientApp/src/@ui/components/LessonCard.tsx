import {LessonModel} from "../../@core/models/course";
// import ReactHtmlParser,{convertNodeToElement} from "react-html-parser";
import { Link } from "react-router-dom";

export default function LessonCard(props: {lesson: LessonModel, isCompleted: boolean}) {
    const {lesson,isCompleted} = props;
    
    return(
        <div className='col-sm-4 mt-3' >
            
            <Link to={'/lesson/'+lesson.id}>
                <div className='bg-blue-100 p-3 rounded-md text-center cursor-pointer transform duration-300 ease-in-out hover:scale-110 motion-reduce:transform-none' >
                    <h5 className='text-transform-non'> {lesson.title} </h5>
                    { isCompleted ? <small> <i> This lesson already compleated </i> </small> : null }
                </div>
            </Link>
            
           
            
            
            {/*<div className='mt-4'>*/}
            {/*    {parse(lesson.html)}*/}
            {/*</div>*/}
        </div>
    )
}