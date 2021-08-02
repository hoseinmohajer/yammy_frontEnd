import { all } from 'redux-saga/effects';

import { watcherFeeds } from './feeds';
import {watcherCategories} from "./categories";
import {watcherAuth} from "./auth";
import {watcherRecipe} from "./recipe";

export default function* rootSaga() {
  yield all([
    watcherFeeds(),
    watcherCategories(),
    watcherAuth(),
    watcherRecipe(),
  ]);
}
