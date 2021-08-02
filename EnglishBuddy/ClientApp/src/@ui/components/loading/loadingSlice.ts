import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../../@core/app-store/store'

interface LoadingState {
  value: boolean
}

const initialState: LoadingState = {
  value: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loaderOn: (state) => {
      state.value = true;
    },
    loaderOff: (state) => {
      state.value = false;
    },
  },
})

export const {loaderOn, loaderOff} = loadingSlice.actions
export default loadingSlice.reducer

export const selectLoading = (state: RootState) => state.loading.value
