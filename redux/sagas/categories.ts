import { takeLatest, call, put } from 'redux-saga/effects';
import {categoriesListSlice} from '../slices/categories';
import axios from 'axios'

export function* watcherCategories() {
  yield takeLatest(categoriesListSlice.actions.getList.type, workerList);
}

function getList() {
  const config = {
    headers: {
      'enctype': 'multipart/form-data'
    }
  };
  return axios.get('http://localhost:3001/api/category', config);
}
function* workerList(action: any): any {
  try {
    const response = yield call(getList);
    yield put(categoriesListSlice.actions.getListSuccess(response.data));
  } catch (error) {
    yield put(categoriesListSlice.actions.getListFailure());
    console.log(error);
  }
}
