import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  navbarIsShown: false,
};
const UIslice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    toggleNavbar(state) {
      state.navbarIsShown = !state.navbarIsShown;
    },
  },
});

const UIReducer = UIslice.reducer;
export const UIAction = UIslice.actions;
export const navbarState = (state) => state.UI.navbarIsShown;

export default UIReducer;
