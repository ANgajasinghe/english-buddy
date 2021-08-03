import {ExtraLessonModel} from '../../../../@core/models/userRecommendation';
import ReactHtmlParser from "react-html-parser";

export default function ExtraLessons(props: { extraLesson: ExtraLessonModel }) {
  return (
    <div className="p-2">
      <h1 className="text-lg mb-3 font-bold"> {props.extraLesson?.title} </h1>
      {ReactHtmlParser(props.extraLesson?.html)}
    </div>
  )
}

