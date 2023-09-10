import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Slices/todosSlice";
import toggleReducer from "./Slices/modalToggleSlice";

export interface RootState {
  todos: ReturnType<typeof todosReducer>;
  modalToggle: ReturnType<typeof toggleReducer>;
}

const store = configureStore({
  reducer: {
    todos: todosReducer,
    modalToggle: toggleReducer,
  },
  preloadedState: {} as RootState,
});

export default store;
