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
    {
      userId: 2,
      id: 21,
      title: "suscipit repellat esse quibusdam voluptatem incidunt",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 22,
      title: "distinctio vitae autem nihil ut molestias quo",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 23,
      title: "et itaque necessitatibus maxime molestiae qui quas velit",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 24,
      title: "adipisci non ad dicta qui amet quaerat doloribus ea",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 25,
      title: "voluptas quo tenetur perspiciatis explicabo natus",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 26,
      title: "aliquam aut quasi",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 27,
      title: "veritatis pariatur delectus",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 28,
      title: "nesciunt totam sit blanditiis sit",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 29,
      title: "laborum aut in quam",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 30,
      title:
        "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 31,
      title: "repudiandae totam in est sint facere fuga",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 32,
      title: "earum doloribus ea doloremque quis",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 33,
      title: "sint sit aut vero",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 34,
      title: "porro aut necessitatibus eaque distinctio",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 35,
      title: "repellendus veritatis molestias dicta incidunt",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 36,
      title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      completed: true,

      date: Date(),
    },
    {
      userId: 2,
      id: 37,
      title: "sunt cum tempora",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 38,
      title: "totam quia non",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 39,
      title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      completed: false,
      date: Date(),
    },
    {
      userId: 2,
      id: 40,
      title: "totam atque quo nesciunt",
      completed: true,

      date: Date(),
    },
    {
      userId: 3,
      id: 41,
      title:
        "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 42,
      title: "rerum perferendis error quia ut eveniet",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 43,
      title: "tempore ut sint quis recusandae",
      completed: true,

      date: Date(),
    },
    {
      userId: 3,
      id: 44,
      title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      completed: true,

      date: Date(),
    },
    {
      userId: 3,
      id: 45,
      title: "velit soluta adipisci molestias reiciendis harum",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 46,
      title: "vel voluptatem repellat nihil placeat corporis",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 47,
      title: "nam qui rerum fugiat accusamus",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 48,
      title: "sit reprehenderit omnis quia",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 49,
      title:
        "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      completed: false,
      date: Date(),
    },
    {
      userId: 3,
      id: 50,
      title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
      completed: true,

      date: Date(),
    },
  ],
  selectedTodo: null,
  currentPage: 1,
  itemsPerPage: 10,
  totalTodos: 0,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    setSelectedTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
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
