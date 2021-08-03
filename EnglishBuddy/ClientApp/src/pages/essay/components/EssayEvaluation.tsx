import {EssayModel} from '../../../@core/models/essay'
import {CircularIndicator} from '../../../@ui/components/CircularIndicator'

export default function EssayEvaluation(props: {
  results: EssayModel
}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5 px-2'>
      <CircularIndicator value={props.results.score}
                         label='Total'/>
      <CircularIndicator value={props.results.essay_score}
                         label='Essay'/>
      <CircularIndicator value={props.results.spelling}
                         label='Spelling'/>
      <CircularIndicator value={props.results.grammar}
                         label='Grammar'/>
    </div>
  )
}
