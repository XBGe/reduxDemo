import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodos: (state, action) => {
        return state = initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleCompleted, deleteTodo, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;