export default function EssayQuestion(props: {
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
      <textarea className='w-100 px-4 py-3 mt-4 focus:outline-none bg-gray-50 border-solid border-2 border-gray-200 rounded'
                value={props.answer}
                onChange={props.handleChange}
                rows={15}
                disabled={props.submitted}/>
      <div className='text-end mt-4'>
        <button className='text-white text-uppercase bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg'
                value='Evaluate'
                type='submit'>
          Evaluate
        </button>
      </div>
    </form>
  )
}
