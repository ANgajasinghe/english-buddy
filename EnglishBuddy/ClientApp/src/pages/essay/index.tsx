import {useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {EssaySuggestions} from '../../util/suggestions'
import {Add} from '../../@core/api-base'
import {Utility} from '../../@core/utility'
import {useAppDispatch, useAppSelector} from '../../@core/app-store/hooks'
import {EssayModel} from '../../@core/models/essay'
import {ActivityModel} from '../../@core/models/activity'
import {ActivityResultModel} from '../../@core/models/activityResult'
import {setEvaluated} from '../my-courses/my-course-details/evaluationSlice'
import EssayQuestion from './components/EssayQuestion'
import EssayEvaluation from './components/EssayEvaluation'
import EssayCorrections from './components/EssayCorrections'

export default function Essay(props: {
  activity: ActivityModel
}) {
  const {
    width,
    height
  } = useWindowSize()

  const dispatch = useAppDispatch();

  const appUser = useAppSelector((state) => state.auth.applicationUser)

  const [wordCount, setWordCount] = useState(0)
  const [answer, setAnswer] = useState('')
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [suggestions, setSuggestions] = useState('')
  const [results, setResults] = useState({
    score: 0,
    essay_score: 0,
    grammar: 0,
    spelling: 0,
    matches: null
  })

  const handleSubmit: (event: any) => void = async (event: any) => {
    event.preventDefault()
    setSubmitted(true)
    const data = {
      essay: answer
    }
    try {
      const response = await Add([Utility.ESSAY_API_URL, 'essay'], data) as EssayModel
      setResults(response)
      if (response.score >= 7)
        setSuggestions(EssaySuggestions.GOOD)
      else if (response.grammar < response.spelling)
        setSuggestions(EssaySuggestions.GRAMMAR)
      else if (response.spelling < response.grammar)
        setSuggestions(EssaySuggestions.SPELLING)
      else
        setSuggestions(EssaySuggestions.COMMON)
      const activityResult = {
        applicationUserId: appUser.id,
        activityId: props.activity.id,
        studentAnswer: answer,
        spellingGrammarMistakes: JSON.stringify(response.matches),
        suggestions: suggestions,
        spellingScore: response.spelling,
        grammarScore: response.grammar,
        essayScore: response.essay_score,
        overallScore: response.score,
        createdUserId: appUser.id,
        modifiedUserId: appUser.id
      } as ActivityResultModel
      dispatch(setEvaluated(activityResult))
      setLoaded(true)
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
      {
        results.score >= 8 && (
          <Confetti width={width}
                    height={height}/>
        )
      }
      <div>
        <EssayQuestion title={props.activity.title}
                       wordLimit={props.activity.wordLimit}
                       wordCount={wordCount}
                       answer={answer}
                       valid={valid}
                       submitted={submitted}
                       handleChange={handleChange}
                       handleSubmit={handleSubmit}/>
      </div>
      {
        loaded && (
          <div>
            <div className='mt-5 bg-secondary py-5 px-3 rounded-3xl'>
              <EssayEvaluation results={results}/>
            </div>
            <div className='my-5 bg-blue-100 py-5 px-3 rounded-3xl'>
              <EssayCorrections answer={answer}
                                results={results}
                                suggestions={suggestions}/>
            </div>
          </div>
        )
      }
    </div>
  )
}
