import {ScoreIndicator} from '../../../@ui/components/ScoreIndicator'
import {EssayModel} from '../../../@core/models/essay'

export default function EssayEvaluation(props: {
  results: EssayModel
}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
      <ScoreIndicator value={props.results.score}
                      label='Total'/>
      <ScoreIndicator value={props.results.essay_score}
                      label='Essay'/>
      <ScoreIndicator value={props.results.spelling}
                      label='Spelling'/>
      <ScoreIndicator value={props.results.grammar}
                      label='Grammar'/>
    </div>
  )
}
