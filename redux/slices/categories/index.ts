import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SuccessPayloadInterface {
  id: string,
  title: string,
  description: string,
  image: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  }
}
const initialState: { data: string[] | SuccessPayloadInterface } = { data: [] };
export const categoriesListSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getList: () => {
      // some code
    },
    getListSuccess: (state, { payload }: PayloadAction<SuccessPayloadInterface>) => {
      return { ...state, data: payload };
    },
    getListFailure: (state) => {

    }
  }
});

export const {
  getList,
  getListSuccess,
  getListFailure
} = categoriesListSlice.actions;
