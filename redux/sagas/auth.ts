import { takeLatest, call, put } from 'redux-saga/effects';
import {authSlice} from '../slices/auth';
import axios from 'axios'
import { setLocalStorageWithExpiry } from "../../helpers/storage";

export function* watcherAuth() {
  yield takeLatest(authSlice.actions.login.type, workerLogin);
  yield takeLatest(authSlice.actions.register.type, workerRegister);
}

async function login(data: {email: string; password: string;}) {
  return await axios.post('http://localhost:3001/api/auth/login', data);
}
function* workerLogin(action: any): any {
  try {
    const response = yield call(login, action.payload);
    const date = new Date();
    const ttl = date.getTime();
    setLocalStorageWithExpiry('token', response.data.token, ttl);
    setLocalStorageWithExpiry('userInfo', response.data.user, ttl);
    yield put(authSlice.actions.loginSuccess(response.data));
  } catch (error) {
    yield put(authSlice.actions.loginFailure());
    console.log(error);
  }
}

interface RegisterDataInterface {
  username: string,
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  date?: string,
  address?: string,
};
function register(data: RegisterDataInterface) {
  return axios.post('http://localhost:3001/api/auth/register', data);
}
function* workerRegister(action: any): any {
  try {
    const response = yield call(register, action.payload);
    const date = new Date();
    const ttl = date.getTime();
    setLocalStorageWithExpiry('token', response.data.token, ttl);
    setLocalStorageWithExpiry('userInfo', response.data.user, ttl);
    yield put(authSlice.actions.registerSuccess(response.data));
  } catch (error) {
    if (error && error.response) {
      yield put(authSlice.actions.registerFailure(error.response.data));
    } else {
      yield put(authSlice.actions.registerFailure({ message: 'Something went wrong!' }));
    }
  }
}
