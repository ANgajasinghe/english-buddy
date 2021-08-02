import React, {useState} from 'react';
import AudioReactRecorder, {RecordState} from 'audio-react-recorder'
import {Utility} from '../../../@core/utility';
import {Add} from "../../../@core/api-base";
// import {makeStyles} from '@material-ui/core/styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Button from '@material-ui/core/Button';

export default function AudioAnalyzer(props) {

  const [recordState, setRecordState] = useState(null)
  const [stopAudio, setStopAudio] = useState(null)
  const [status, setStatus] = useState(null)

  const start = () => {
    setRecordState(RecordState.START)
    setStatus(1)
    setStopAudio(null)
    props.clear()
  }
  const stop = () => {
    setRecordState(RecordState.STOP)
    setStatus(null)
  }
  const onStop = (audioData) => {
    setTimeout(function () {
      setStopAudio(audioData);
    }, 3000);
  }

  async function upload(bloburl) {

    let file = await fetch(bloburl).then(r => r.blob()).then(blobFile => new File([blobFile], "record", {type: "audio/wav"}))
    const data = new FormData()
    data.append('file', file)

    try {
      const response = await Add([Utility.AUDIO_TEXT_TRANSCRIPTION_API_URL, 'uploadAudioFile'], data);
      props.childToParent(response)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <React.Fragment>
      <div className="grid justify-items-center">
        <AudioReactRecorder state={recordState} onStop={onStop} foregroundColor="rgb(65,105,225)"
                            backgroundColor="rgb(1000, 1000, 1000)"/>
        <br/>
        {!status && (
          <button onClick={start}
                  className="group bg-blue-600 bg-opacity-70 hover:shadow-lg  rounded-full h-24 w-24 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
            </svg>
          </button>
        )}
        {status && (

          <div onClick={stop}
               className="group bg-red-600 bg-opacity-70 hover:shadow-lg  rounded-full h-24 w-24 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
            </svg>
          </div>
        )}
        <br/>
        {
          stopAudio && (
            <React.Fragment>
              <AudioPlayer
                src={stopAudio.url}
                onPlay={() => console.log("onPlay")}
              />
              <div className="mt-5 mb-3">
                <Button variant="contained" size="large" color="primary"
                        onClick={() => upload(stopAudio.url)}>EVALUATE</Button>
              </div>
            </React.Fragment>
          )
        }
      </div>
    </React.Fragment>
  )

}
