import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  date: string;
  timeStart?: string;
  timeEnd?: string | null;
}

interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
  currentPage: number;
  itemsPerPage: number;
  totalTodos: number;
}
const initialState: TodosState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 18,
      title: "dolorum est consequatur ea mollitia in culpa",
      completed: false,
      date: Date(),
    },
    {
      userId: 1,
      id: 19,
      title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      completed: true,

      date: Date(),
    },
    {
      userId: 1,
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint",
      completed: true,

      date: Date(),
    },
  ],
  selectedTodo: null,
  currentPage: 1,
  itemsPerPage: 5,
  totalTodos: 0,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //creates new todo and push it to the todo array 
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    setSelectedTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
    // updates a todo from the state based on its ID
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    },
    deleteTodo: (state, action) => {
      // Delete a todo from the state based on its ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addTodo,
  setSelectedTodo,
  updateTodo,
  deleteTodo,
  setCurrentPage,
} = todosSlice.actions;
export default todosSlice.reducer;

export const selectedTodos = (state: RootState) => state.todos.todos;
export const selectedCurrentPage = (state: RootState) =>
  state.todos.currentPage;
export const selectedItemsPerPage = (state: RootState) =>
  state.todos.itemsPerPage;
export const selectSelectedTodo = (state: RootState) =>
  state.todos.selectedTodo;
