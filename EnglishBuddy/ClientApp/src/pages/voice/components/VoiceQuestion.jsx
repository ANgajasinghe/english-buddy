export default function VoiceQuestion(props) {
  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="shadow-sm col-start-2 col-span-6">

        <b>{props.title}</b>
        <br/>
        <div>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  )
}