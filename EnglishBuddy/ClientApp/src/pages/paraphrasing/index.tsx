import {useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import axios from 'axios'
import {Utility} from '../../@core/utility'
import {showErrors} from '../../@core/api-base'
import {useAppDispatch, useAppSelector} from '../../@core/app-store/hooks'
import {ActivityModel} from '../../@core/models/activity'
import {LoadingSubject} from '../../@core/subject-services'
import {ActivityResultModel} from '../../@core/models/activityResult'
import ConfirmationDialog from '../../@ui/components/ConfirmationDialog'
import {setEvaluated} from '../my-courses/my-course-details/evaluationSlice'
import ParaphrasingQuestion from './components/ParaphrasingQuestion'
import ParaphrasingEvaluation from './components/ParaphrasingEvaluation'
import ParaphrasingCorrections from './components/ParaphrasingCorrections'

export default function Paraphrasing(props: {
  activity: ActivityModel
}) {
  const {
    width,
    height
  } = useWindowSize()

  const dispatch = useAppDispatch()

  const appUser = useAppSelector((state) => state.auth.applicationUser)

  const [open, setOpen] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [answer, setAnswer] = useState('')
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [results, setResults] = useState({
    answers: {
      question: '',
      word_limit: 0,
      word_count: 0,
      model_answer: '',
      student_answer: ''
    },
    sentiment: {
      polarity: 0,
      subjectivity: 0
    },
    matches: null,
    scores: {
      spelling: 0,
      grammar: 0,
      similarity: 0,
      comprehensiveness: 0,
      objectivity: 0
    },
    overall: 0,
    ratio: 0,
    suggestion: ''
  })

  const handleClickOpen: (event: any) => void = (event: any) => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const data = {
      question: props.activity.description,
      word_limit: props.activity.wordLimit,
      word_count: wordCount,
      model_answer: props.activity.modelAnswer,
      student_answer: answer
    }
    try {
      LoadingSubject.next(true)
      axios.post(`${Utility.SIMILARITY_API_URL}/paraphrasing`, data).then((response: any) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response.data)
          setResults(response.data)
          LoadingSubject.next(false)
          const activityResult = {
            applicationUserId: appUser.id,
            activityId: props.activity.id,
            studentAnswer: response.data.answers.student_answer,
            modelAnswer: response.data.answers.model_answer,
            wordCount: response.data.answers.word_count,
            spellingGrammarMistakes: JSON.stringify(response.data.matches),
            suggestions: response.data.suggestion,
            ratio: response.data.ratio,
            spellingScore: response.data.scores.spelling,
            grammarScore: response.data.scores.grammar,
            objectivityScore: response.data.scores.objectivity,
            subjectivityScore: response.data.sentiment.subjectivity,
            polarityScore: response.data.sentiment.polarity,
            similarityScore: response.data.scores.similarity,
            comprehensivenessScore: response.data.scores.comprehensiveness,
            overallScore: response.data.overall,
            createdUserId: appUser.id,
            modifiedUserId: appUser.id
          } as ActivityResultModel
          dispatch(setEvaluated(activityResult))
          setLoaded(true)
          handleClose()
        } else {
          LoadingSubject.next(false);
          setSubmitted(false)
        }
      }).catch(error => {
        showErrors(error);
        LoadingSubject.next(false);
        setSubmitted(false)
        console.log(error)
      })
    } catch (error) {
      setSubmitted(false)
      console.log(error)
    }
  }

  const handleChange: (event: any) => void = (event: any) => {
    if (!!event.target.value.trim()) {
      setValid(true)
      setWordCount(event.target.value.match(/(\w+)/g).length)
    } else {
      setValid(false)
      setWordCount(0)
    }
    setAnswer(event.target.value)
  }

  return (
    <div>
      <ConfirmationDialog dialogTitle='CONFIRMATION'
                          dialogDescription='Are you sure you want to submit your answer?'
                          open={open}
                          handleClose={handleClose}
                          handleSubmit={handleSubmit}/>
      {
        results.overall >= 8 && (
          <Confetti width={width}
                    height={height}/>
        )
      }
      <div>
        <ParaphrasingQuestion title={props.activity.title}
                              description={props.activity.description}
                              wordLimit={props.activity.wordLimit}
                              wordCount={wordCount}
                              answer={answer}
                              valid={valid}
                              submitted={submitted}
                              handleChange={handleChange}
                              handleClickOpen={handleClickOpen}/>
      </div>
      {
        loaded && (
          <div>
            <div className='mt-5 bg-secondary py-5 px-3 rounded-3xl'>
              <ParaphrasingEvaluation results={results}/>
            </div>
            <div className='my-5 bg-blue-100 py-5 px-3 rounded-3xl'>
              <ParaphrasingCorrections results={results}/>
            </div>
          </div>
        )
      }
    </div>
  )
}
