import { takeLatest, call, put } from 'redux-saga/effects';
import {feedsListSlice} from '../slices/feeds';
import axios from 'axios'

export function* watcherFeeds() {
  yield takeLatest(feedsListSlice.actions.autoComplete.type, workerAutocomplete);
}

function autoComplete() {
  // const config = {
  //   params: {q: 'chicken soup'},
  //   headers: {
  //     'x-rapidapi-key': '3f867784f9mshf368792fb0f0a61p11b640jsn4a3dadcde8dc',
  //     'x-rapidapi-host': 'yummly2.p.rapidapi.com'
  //   }
  // };
  // return axios.get('https://yummly2.p.rapidapi.com/feeds/auto-complete', config);
  return {message: 'there is some error'};
}
function* workerAutocomplete(action: any): any {
  try {
    const response = yield call(autoComplete);
    // yield put(listSlice.actions.autoComplete({...response}));
  } catch (error) {
    // should call failure action there.
    console.log(error);
  }
}
