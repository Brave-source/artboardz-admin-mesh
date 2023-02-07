import UIReducer from "./redux-slices/UI-slice";
const { configureStore } = require("@reduxjs/toolkit");
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: { UI: UIReducer },
  });

export const store = createWrapper(makeStore);