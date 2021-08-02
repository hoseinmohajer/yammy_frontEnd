import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterface {
  recipes: {
    loading: boolean;
    data: object
  },
  recipe: {
    loading: boolean;
    data: object
  },
}
const initialState: InitialStateInterface = {
  recipes: {
    loading: false,
    data: []
  },
  recipe: {
    loading: false,
    data: []
  },
};
export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    getRecipes: () => {
      // some code here
    },
    getRecipesSuccess: (state, { payload }: PayloadAction<{ data: {cookingTime: number; description: string; servings: string; title: string; _id: string; __v: number} }>) => ({
      ...initialState, recipes: {loading: false, data: payload}
    }),
    getRecipesFailure: () => {},
    getRecipe: (state, { payload }: PayloadAction<{ id: string }>) => ({
      ...initialState, recipe: {loading: true, data: payload}
    }),
    getRecipeSuccess: (state, { payload }: PayloadAction<{ data: {cookingTime: number; description: string; servings: string; title: string; _id: string; __v: number} }>) => ({
      ...initialState, recipe: {loading: false, data: payload}
    }),
    getRecipeFailure: () => {},
  }
});
export type RecipeSlice = typeof recipeSlice;
export const {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  getRecipe,
  getRecipeSuccess,
  getRecipeFailure
} = recipeSlice.actions;
