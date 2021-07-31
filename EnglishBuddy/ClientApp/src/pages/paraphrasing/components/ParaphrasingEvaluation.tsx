import {ScoreIndicator} from '../../../@ui/components/ScoreIndicator'
import {SimilarityModel} from '../../../@core/models/similarity'

export default function ParaphrasingEvaluation(props: {
  results: SimilarityModel
}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-6 gap-4'>
      <ScoreIndicator value={props.results.overall}
                      label='Total'/>
      <ScoreIndicator value={Math.round(props.results.scores.spelling)}
                      label='Spelling'/>
      <ScoreIndicator value={Math.round(props.results.scores.grammar)}
                      label='Grammar'/>
      <ScoreIndicator value={Math.round(props.results.scores.similarity)}
                      label='Relevancy'/>
      <ScoreIndicator value={Math.round(props.results.scores.comprehensiveness)}
                      label='Completeness'/>
      <ScoreIndicator value={Math.round(props.results.scores.objectivity)}
                      label='Objectivity'/>
    </div>
  )
}
