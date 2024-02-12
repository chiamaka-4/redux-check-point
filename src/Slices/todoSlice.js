import { createSlice } from "@reduxjs/toolkit";
// store the initial state in a variable

const initialState = {
  todos: [],
};
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      state.todos.push(payload);
      if (payload.description === "") {
        return;
      }
    },
    removeTodoIitem: () => {},
  },
});
// export the reducers functions (addtodoitem and removetodoitem)
// this is used where we want to dispatch the action/function
export const { addTodoItem, removeTodoIitem } = todosSlice.actions;
// export the reducers as default
// this is used to cong=figure our store
export default todosSlice.reducer;
