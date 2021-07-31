import {SampleQuestionModel} from "../../../../@core/models/userRecommendation";
import ReactHtmlParser from "react-html-parser";

export default function SampleQandA(props: { data: SampleQuestionModel }) {
  return (
    <div className="container img-fluid p-2">
      <h1 className="text-xl mb-3 font-bold"> Question - </h1>
      {ReactHtmlParser(props.data?.questions)}
      <hr className="mt-2 mb-2"/>

      <h1 className="text-xl mb-3 font-bold"> Answer - </h1>
      {ReactHtmlParser(props.data?.answers)}

    </div>)
}
