export default function SummarizationQuestion(props: {
  title: string
  description: string
  wordLimit: number
  wordCount: number
  answer: string
  valid: boolean
  submitted: boolean
  handleChange: any
  handleSubmit: any
}) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label className='font-semibold mt-5 text-lg'>
        {props.title}
      </label>
      <label className='mt-3'>
        {props.description}
      </label>
      <textarea className='w-100 px-4 py-3 mt-4 focus:outline-none bg-gray-100'
                value={props.answer}
                onChange={props.handleChange}
                rows={8}
                disabled={props.submitted}/>
      {
        props.wordLimit - props.wordCount < 10 ? (
          <p className='text-end mt-1'>
            <span className='text-red-700'>{props.wordCount}</span> / {props.wordLimit}
          </p>
        ) : (
          <p className='text-end mt-1'>
            <span className='text-green-700'>{props.wordCount}</span> / {props.wordLimit}
          </p>
        )
      }
      <div className='text-end mt-4'>
        {
          props.submitted || !props.valid || props.wordLimit < props.wordCount ? (
            <button className='text-white text-uppercase bg-blue-800 px-4 py-2 rounded-lg bg-opacity-50
             cursor-not-allowed'
                    value='Evaluate'
                    type='submit'
                    disabled>
              Evaluate
            </button>
          ) : (
            <button className='text-white text-uppercase bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg'
                    value='Evaluate'
                    type='submit'>
              Evaluate
            </button>
          )
        }
      </div>
    </form>
  )
}
