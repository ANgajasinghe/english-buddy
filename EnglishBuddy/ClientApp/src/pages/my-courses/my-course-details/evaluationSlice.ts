// noinspection JSUnusedGlobalSymbols

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../../@core/app-store/store'
import {ActivityResultModel} from '../../../@core/models/activityResult'

interface EvaluationState {
  isEvaluated: boolean
  activityResult: ActivityResultModel
}

const initialState: EvaluationState = {
  isEvaluated: false,
  activityResult: {} as ActivityResultModel
}

export const evaluationSlice = createSlice({
  name: 'evaluation',
  initialState,
  reducers: {
    setEvaluated: (state, action: PayloadAction<ActivityResultModel>) => {
      state.isEvaluated = true
      state.activityResult = action.payload
    },
    removeEvaluated: (state) => {
      state.isEvaluated = false
      state.activityResult = {} as ActivityResultModel
    }
  }
})

export const {
  setEvaluated,
  removeEvaluated
} = evaluationSlice.actions

export default evaluationSlice.reducer

export const selectEvaluation = (state: RootState) => state.evaluation.activityResult
