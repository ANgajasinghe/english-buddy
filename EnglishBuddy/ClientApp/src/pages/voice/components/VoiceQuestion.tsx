export default function VoiceQuestion(props: {
  title: string
}) {
  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="shadow-sm col-start-2 col-span-6">

        <b>{props.title}</b>
        <br/>
        <div>
          <br/>
          {/* <ul className="list-disc">
            <li>Lorem ipsum dolor sit amet, consecrated animistic elite</li>
          </ul> */}
          <br/>
        </div>
      </div>
    </div>
  )
}
