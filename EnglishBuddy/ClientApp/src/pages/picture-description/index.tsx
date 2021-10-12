import {useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {Add} from '../../@core/api-base'
import {Utility} from '../../@core/utility'
import {useAppDispatch, useAppSelector} from '../../@core/app-store/hooks'
import {SimilarityModel} from '../../@core/models/similarity'
import {ActivityModel} from '../../@core/models/activity'
import {ActivityResultModel} from '../../@core/models/activityResult'
import {setEvaluated} from '../my-courses/my-course-details/evaluationSlice'
import PictureDescriptionQuestion from './components/PictureDescriptionQuestion'
import PictureDescriptionEvaluation from './components/PictureDescriptionEvaluation'
import PictureDescriptionCorrections from './components/PictureDescriptionCorrections'

export default function PictureDescription(props: {
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

  const handleSubmit: (event: any) => void = async (event: any) => {
    event.preventDefault()
    setSubmitted(true)
    const data = {
      question: props.activity.description,
      word_limit: props.activity.wordLimit,
      word_count: wordCount,
      model_answer: props.activity.modelAnswer,
      student_answer: answer
    }
    try {
      const response = await Add([Utility.SIMILARITY_API_URL, 'summarization'], data) as SimilarityModel
      setResults(response)
      const activityResult = {
        applicationUserId: appUser.id,
        activityId: props.activity.id,
        studentAnswer: response.answers.student_answer,
        modelAnswer: response.answers.model_answer,
        wordCount: response.answers.word_count,
        spellingGrammarMistakes: JSON.stringify(response.matches),
        suggestions: response.suggestion,
        ratio: response.ratio,
        spellingScore: response.scores.spelling,
        grammarScore: response.scores.grammar,
        objectivityScore: response.scores.objectivity,
        subjectivityScore: response.sentiment.subjectivity,
        polarityScore: response.sentiment.polarity,
        similarityScore: response.scores.similarity,
        comprehensivenessScore: response.scores.comprehensiveness,
        overallScore: response.overall,
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
        results.overall >= 8 && (
          <Confetti width={width}
                    height={height}/>
        )
      }
      <div>
        <PictureDescriptionQuestion title={props.activity.title}
                                    description={props.activity.description}
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
              <PictureDescriptionEvaluation results={results}/>
            </div>
            <div className='my-5 bg-blue-100 py-5 px-3 rounded-3xl'>
              <PictureDescriptionCorrections results={results}/>
            </div>
          </div>
        )
      }
    </div>
  )
}
