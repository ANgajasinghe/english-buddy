// noinspection JSUnusedGlobalSymbols

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../@core/app-store/store';
import {SaModel} from '../../@core/models/saModel';
import * as signalR from '@microsoft/signalr';

interface State {
  review: SaModel,
  comment: string,
  connection: signalR.HubConnection
}

const initialState: State = {
  review: {} as SaModel,
  comment: '',
  connection: {} as signalR.HubConnection
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setReview: (state, action: PayloadAction<SaModel>) => {
      console.log(action.payload);
      state.review = action.payload;
      state.comment = '';
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setConnection: (state, action: PayloadAction<signalR.HubConnection>) => {
      state.connection = action.payload;
    }
  }
})

export const {setReview, setComment, setConnection} = commentSlice.actions;
export default commentSlice.reducer;

export const selectReview = (state: RootState) => state.comment.review
