import {ScoreIndicator} from '../../../@ui/components/ScoreIndicator'

const Results = (props) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
      <ScoreIndicator value={props.totalSpeakingLevel}
                      label='Total'/>
      <ScoreIndicator value={props.speakingRate}
                      label='Speaking Rate'/>
      <ScoreIndicator value={props.articulationRate}
                      label='Articulation Rate'/>
      <ScoreIndicator value={props.pronounciationLevel}
                      label='Pronounciation Level'/>
    </div>
  )
}

export default Results;
