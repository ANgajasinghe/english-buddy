import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Get} from "../../../../@core/api-base";
import {CourseModel, LessonModel} from "../../../../@core/models/course";
import ReactHtmlParser from "react-html-parser";
import {CourseRecommendation} from "../components/CourseRecommendation";


export default function Lesson() {

    const {lessonId}: any = useParams();
    
    const [lesson,setLesson] = useState({} as LessonModel);
    
    useEffect(()=> {
        const asyncHub = async () => {
            await getLessonAsync(lessonId);
        };
        asyncHub().then(() => {

        });
    },[lessonId])

    const getLessonAsync = async (lessonId: number) => {
        try {
            const response = (await Get([
                "Lessons", lessonId?.toString(),
            ])) as LessonModel;
            // set lesson
            setLesson(response);
        } catch (err) {
            alert("Error");
        }
    };
    
    

    return(
        <div className='container mt-5'>
            <h3> {lesson.title} </h3>
            <div>
                {ReactHtmlParser(lesson.html)}
            </div>
            
            <CourseRecommendation id={lessonId} type={'lesson'}/>
        </div>
    )
}