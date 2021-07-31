import VoiceEvaluation from "./components/VoiceEvaluation"
import VoiceQuestion from "./components/VoiceQuestion"

export default function Voice(props) {
  return (
    <div>
      <br/>
      <VoiceQuestion title={props.activity.title}/>
      <br/>
      <VoiceEvaluation activity={props.activity}/>
    </div>
  )
}
