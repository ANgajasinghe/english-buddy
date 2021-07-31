import ReactTooltip from 'react-tooltip'
import {EssayModel} from '../../../@core/models/essay'

export default function EssayCorrections(props: {
  answer: string
  results: EssayModel
  suggestions: string
}) {
  let count = 0

  return (
    <div className='px-3'>
      <label className='font-semibold text-lg'>
        Your Essay
      </label>
      <div className='mt-3 text-justify'>
        {
          props.answer.trim().split(' ').map((word, index) => {
            let data = `${props.results.matches[0]?.message}.`
            if (props.results.matches[0]?.replacements[0])
              data = `${props.results.matches[0]?.message}. <br> May be replace this with
               '${props.results.matches[0]?.replacements[0]?.value}' instead.`
            if (props.results.matches?.length > 0 && props.results.matches[0]?.offset === count) {
              count += word.length + 1
              if (index === props.answer.trim().split(' ').length - 1) {
                if (props.results.matches[0]?.rule.issueType === 'misspelling') {
                  props.results.matches.shift()
                  return (
                    <label key={index}
                           className='text-red-400'
                           data-tip={data}
                           data-multiline={true}
                           data-text-color='white'
                           data-background-color='black'>
                      <ReactTooltip/>
                      {word}
                    </label>
                  )
                } else {
                  props.results.matches.shift()
                  return (
                    <label key={index}
                           className='text-red-700'
                           data-tip={data}
                           data-multiline={true}
                           data-text-color='white'
                           data-background-color='black'>
                      <ReactTooltip/>
                      {word}
                    </label>
                  )
                }
              } else {
                if (props.results.matches[0]?.rule.issueType === 'misspelling') {
                  props.results.matches.shift()
                  return (
                    <label key={index}
                           className='text-red-400'
                           data-tip={data}
                           data-multiline={true}
                           data-text-color='white'
                           data-background-color='black'>
                      <ReactTooltip/>
                      {word}&nbsp;
                    </label>
                  )
                } else {
                  props.results.matches.shift()
                  return (
                    <label key={index}
                           className='text-red-700'
                           data-tip={data}
                           data-multiline={true}
                           data-text-color='white'
                           data-background-color='black'>
                      <ReactTooltip/>
                      {word}&nbsp;
                    </label>
                  )
                }
              }
            } else {
              count += word.length + 1
              if (index === props.answer.trim().split(' ').length - 1) {
                return (
                  <label key={index}>
                    {word}
                  </label>
                )
              } else {
                return (
                  <label key={index}>
                    {word}&nbsp;
                  </label>
                )
              }
            }
          })
        }
      </div>
      <div className='mt-5'>
        <label className='font-semibold text-lg'>
          Feedback
        </label>
        <div className='mt-3 text-justify'>
          <label>{props.suggestions}</label>
        </div>
      </div>
    </div>
  )
}
