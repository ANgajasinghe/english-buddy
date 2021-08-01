import {CircularIndicator} from '../../../@ui/components/CircularIndicator'

const Results = (props) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
      <CircularIndicator value={props.totalSpeakingLevel}
                      label='Total'/>
      <CircularIndicator value={props.speakingRate}
                      label='Speaking Rate'/>
      <CircularIndicator value={props.articulationRate}
                      label='Articulation Rate'/>
      <CircularIndicator value={props.pronounciationLevel}
                      label='Pronounciation Level'/>
    </div>
  )
}

export default Results;
