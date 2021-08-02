import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterface {
  login: {
    loading: boolean;
    data: object
  },
  register: {
    loading: boolean;
    data: object
  },
}
const initialState: InitialStateInterface = {
  login: {
    loading: false,
    data: []
  },
  register: {
    loading: false,
    data: []
  },
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<{ email: string, password: string }>) => ({
      ...initialState, login: {loading: true, data: payload}
    }),
    loginSuccess: (state, { payload }: PayloadAction<{ data: {token: string} }>) => ({
      ...initialState, login: {loading: false, data: payload}
    }),
    loginFailure: () => {},
    register: (state, { payload }: PayloadAction<{ email: string, password: string, username: string }>) => ({
      ...initialState, register: {loading: true, data: payload}
    }),
    registerSuccess: (state, { payload }: PayloadAction<{ token: string; user: {date: string; email: string; password: string; username: string; _id: string;} }>) => ({
      ...initialState, register: {loading: false, data: payload}
    }),
    registerFailure: (state, { payload }: PayloadAction<{ message: string | null }>) => ({...initialState, register: {loading: false, data: payload}}),
  }
});
export type AuthSlice = typeof authSlice;
export const {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure
} = authSlice.actions;
