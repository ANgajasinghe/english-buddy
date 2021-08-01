import {SimilarityModel} from '../../../@core/models/similarity'
import {CircularIndicator} from '../../../@ui/components/CircularIndicator'

export default function SummarizationEvaluation(props: {
  results: SimilarityModel
}) {
  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-6 gap-4'>
      <CircularIndicator value={props.results.overall}
                         label='Total'/>
      <CircularIndicator value={Math.round(props.results.scores.spelling)}
                         label='Spelling'/>
      <CircularIndicator value={Math.round(props.results.scores.grammar)}
                         label='Grammar'/>
      <CircularIndicator value={Math.round(props.results.scores.similarity)}
                         label='Relevancy'/>
      <CircularIndicator value={Math.round(props.results.scores.comprehensiveness)}
                         label='Completeness'/>
      <CircularIndicator value={Math.round(props.results.scores.objectivity)}
                         label='Objectivity'/>
    </div>
  )
}
