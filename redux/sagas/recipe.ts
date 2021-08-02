import { takeLatest, call, put } from 'redux-saga/effects';
import {recipeSlice} from '../slices/recipes';
import axios from 'axios';

export function* watcherRecipe() {
  yield takeLatest(recipeSlice.actions.getRecipes.type, workerRecipes);
  yield takeLatest(recipeSlice.actions.getRecipe.type, workerRecipe);
}

async function getRecipes() {
  return await axios.get('http://localhost:3001/api/recipe');
}
function* workerRecipes(): any {
  try {
    const response = yield call(getRecipes);
    yield put(recipeSlice.actions.getRecipesSuccess(response.data));
  } catch (error) {
    yield put(recipeSlice.actions.getRecipesFailure());
    console.log(error);
  }
}
async function getRecipe(id: string) {
  return await axios.get(`http://localhost:3001/api/recipe/${id}`);
}
function* workerRecipe(action: any): any {
  try {
    const response = yield call(getRecipe, action.payload);
    yield put(recipeSlice.actions.getRecipeSuccess(response.data));
  } catch (error) {
    yield put(recipeSlice.actions.getRecipeFailure());
    console.log(error);
  }
}
