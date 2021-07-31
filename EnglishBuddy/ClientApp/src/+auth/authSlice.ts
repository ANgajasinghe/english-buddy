import {ApplicationUserModel} from '../@core/models/applicationUser';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../@core/app-store/store';

interface State {
  isAuthenticated: boolean,
  applicationUser: ApplicationUserModel
}

const initialState: State = {
  isAuthenticated: false,
  applicationUser: {} as ApplicationUserModel
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<ApplicationUserModel>) => {
      const user = localStorage.getItem('user') ?? null;
      if (user != null && Object.keys(user).length > 0) {
        state.isAuthenticated = true;
        state.applicationUser = JSON.parse(user);
      } else {
        if (Object.keys(action.payload).length > 0) {
          state.applicationUser = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem('userId', action.payload.id);
          localStorage.setItem('user', JSON.stringify(action.payload));
        }
      }
    },
    removeAuth: (state) => {
      state.applicationUser = {} as ApplicationUserModel;
      state.isAuthenticated = false;
      localStorage.removeItem('userId')
    }
  }
})

export const {setAuth, removeAuth} = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.applicationUser
