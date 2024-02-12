import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./Slices/todoSlice";
// configure store
const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});
export { store };
