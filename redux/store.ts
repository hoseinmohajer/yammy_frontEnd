import {configureStore, getDefaultMiddleware, combineReducers} from "@reduxjs/toolkit";
import {feedsListSlice} from "./slices/feeds";
import {categoriesListSlice} from "./slices/categories";
import {authSlice} from "./slices/auth";
import {recipeSlice} from "./slices/recipes";
import {sidebarSlice} from "./slices/sidebar";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  feedList: feedsListSlice.reducer,
  categoriesList: categoriesListSlice.reducer,
  auth: authSlice.reducer,
  recipe: recipeSlice.reducer,
  sidebar: sidebarSlice.reducer
});
export type RootState = ReturnType<typeof rootReducer>;

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});
sagaMiddleware.run(rootSaga);


export default store;
