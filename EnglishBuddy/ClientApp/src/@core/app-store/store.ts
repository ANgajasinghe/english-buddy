import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from '../../@ui/components/loading/loadingSlice';
import authReducer from '../../+auth/authSlice';
import commentReducer from '../../pages/comment/commentSlice';
import evaluationReducer from '../../pages/my-courses/my-course-details/evaluationSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    comment: commentReducer,
    evaluation: evaluationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
