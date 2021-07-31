export interface SimilarityModel {
  answers: {
    question: string
    word_limit: number
    word_count: number
    model_answer: string
    student_answer: string
  }
  sentiment: {
    polarity: number
    subjectivity: number
  }
  matches: any
  scores: {
    spelling: number
    grammar: number
    similarity: number
    comprehensiveness: number
    objectivity: number
  }
  overall: number
  ratio: number
  suggestion: string
}
