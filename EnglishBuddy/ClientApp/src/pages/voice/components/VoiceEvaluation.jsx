import React, {useState} from 'react';
import PopUpBox from '../models/PopUpBox';
import AudioAnalyzer from './AudioAnalyzer';
import Button from '@material-ui/core/Button';
import {Utility} from '../../../@core/utility';
import {Get} from "../../../@core/api-base";
import Assistant from './Assistant';
import Results from './Results';
import { ActivityResultModel } from '../../../@core/models/activityResult';
import {useAppDispatch, useAppSelector} from '../../../@core/app-store/hooks';
import {setEvaluated} from '../../my-courses/my-course-details/evaluationSlice';

export default function VoiceEvaluation(props) {

  const dispatch = useAppDispatch()
  const appUser = useAppSelector((state) => state.auth.applicationUser)

  const [textTranscription, setTextTranscription] = useState('')
  const [audioURL] = useState('')
  const [speakingRate, setSpeakingRate] = useState(0)
  const [articulationRate, setArticulationRate] = useState(0)
  const [pronounciationLevel, setPronounciationLevel] = useState(0)
  const [totalSpeakingLevel, setTotalSpeakingLevel] = useState(0)

  const childToParent = (childdata) => {
    setTextTranscription(childdata);
  }

  async function selectWord(textTranscription) {
    // console.log(textTranscription)
  }

  function clear() {
    setTextTranscription(null)
    setTextTranscription(null)
    setTotalSpeakingLevel(null)
    setPronounciationLevel(null)
    setArticulationRate(null)
  }

  async function getSpeechRate() {


    try {
      const response = await Get([Utility.AUDIO_TEXT_TRANSCRIPTION_API_URL, 'getSpeechRate']);
      console.log(response)
      let speakingRateTemp = Math.round((10 * response.speechrate) / 5)
      let articualtionRateTemp = Math.round((10 * response.articulationrate) / 5)

      setSpeakingRate(speakingRateTemp)
      setArticulationRate(articualtionRateTemp)


      let wordArray = []
      let phonemeArray = []

      if (textTranscription) {
        let correctWordCount = 0
        let incorrectWordCount = 0
        for (let key in textTranscription) {
          console.log(textTranscription[key])
          if (textTranscription[key].result.correctness[0] === 1) {
            correctWordCount++
          } else {
            incorrectWordCount++
          }
        }

        let pronounciationLevelTemp = Math.round((correctWordCount * 10) / (correctWordCount + incorrectWordCount))
        let totalSpeakingTemp = Math.round((pronounciationLevelTemp + articualtionRateTemp + speakingRateTemp) / 3)
     

        setPronounciationLevel(pronounciationLevelTemp)
        setTotalSpeakingLevel(totalSpeakingTemp)

        const activityResult = {
          applicationUserId: appUser.id,
          activityId: props.activity.id,
          studentAnswer: "audio recording",
          suggestions: "suggestions",
          overallScore: totalSpeakingTemp,
          pronunciationLevel: pronounciationLevelTemp,
          mispronouncedWords: JSON.stringify(wordArray),
          mispronouncedPhonemes: JSON.stringify(phonemeArray),
          articulationRate: articualtionRateTemp,
          speakingRate: speakingRateTemp,
          createdUserId: appUser.id,
          modifiedUserId: appUser.id
        }
        dispatch(setEvaluated(activityResult))
      }

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="shadow-sm col-start-2 col-span-6">

        <div className="grid grid-cols-2 gap-4">
          <div className="shadow-sm m-3">
            <br/>
            <AudioAnalyzer childToParent={childToParent}/>
          </div>
          <div className="shadow-sm m-3">
            <br/>
            {!textTranscription && (
              <div>
                <Assistant description={props.activity.description}/>
              </div>
            )}
            {
              textTranscription && (
                <React.Fragment>
                  <Button variant="contained" size="large" color="secondary" onClick={() => clear()}>CLEAR</Button>
                  <br/>
                  <br/>
                  <div className="flex flex-wrap gap-2  mx-4">
                    {textTranscription.map(textData => {
                      if (textData.result.correctness[0] === 1) {
                        return (
                          <div className="text-green-500 m-0.5 cursor-pointer" onClick={() => {
                            selectWord(textData).then(() => {
                            })
                          }}><PopUpBox name={textData.word} result={textData.result} audioStart={textData.start}
                                       audioEnd={textData.end}/>
                          </div>)
                      } else {
                        return (
                          <div className="text-yellow-500 m-0.5 cursor-pointer" onClick={() => {
                            selectWord(textData).then(() => {
                            })
                          }}><PopUpBox name={textData.word} result={textData.result} audio={audioURL}/>
                          </div>)
                      }
                    })}
                  </div>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </div>
      <br/>
      {(textTranscription && !speakingRate) && (
        <div className="shadow-sm col-start-2 col-span-6 flex justify-center">
          <div className='mt-3 bg-white py-5 px-3 rounded-3xl'>
            <Button variant="contained" size="large" color="primary" onClick={() => getSpeechRate()}>GET
              RESULTS</Button>
          </div>
        </div>

      )}
      {(textTranscription && speakingRate) && (
        <div className="shadow-sm col-start-2 col-span-6">
          <div className='mt-3 bg-white py-5 px-3 rounded-3xl'>
            <Results speakingRate={speakingRate} articulationRate={articulationRate}
                     pronounciationLevel={pronounciationLevel} totalSpeakingLevel={totalSpeakingLevel}/>
          </div>
        </div>
      )}
    </div>
  )
}
