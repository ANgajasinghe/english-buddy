export default function VoiceQuestion(props) {
  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="col-start-2 col-span-6 grid text-lg font-semibold">
        {props.title}
      </div>
    </div>
  )
}
