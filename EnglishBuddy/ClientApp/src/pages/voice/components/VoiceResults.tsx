// noinspection JSUnusedGlobalSymbols

import {ScoreIndicator} from '../../../@ui/components/ScoreIndicator'

export default function VoiceResults() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
      <ScoreIndicator value={5}
                      label='Total'/>
      <ScoreIndicator value={9}
                      label='Speaking Rate'/>
      <ScoreIndicator value={7}
                      label='Articulation Rate'/>
      <ScoreIndicator value={5}
                      label='Pronunciation Level'/>
    </div>
  )
}
