import {SampleQuestionModel} from "../../../../@core/models/userRecommendation";
import ReactHtmlParser from "react-html-parser";

export default function SampleQandA(props: { data: SampleQuestionModel }) {
  return (
    <div className="container img-fluid p-2">
      {ReactHtmlParser(props.data?.answers)}

    </div>)
}
