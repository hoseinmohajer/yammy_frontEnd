import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterface {
  showSidebar: boolean
}
const initialState: InitialStateInterface = {
  showSidebar: false
};
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, { payload }: PayloadAction<boolean>) => ({
    ...initialState, showSidebar: payload
    }),
  }
});
export type SidebarSlice = typeof sidebarSlice;
export const {
  toggleSidebar
} = sidebarSlice.actions;
