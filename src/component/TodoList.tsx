import { FC } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { FaMicrophone } from "react-icons/fa";
import {
  Todo,
  selectedTodos,
  selectedCurrentPage,
  selectedItemsPerPage,
} from "./Redux/Slices/todosSlice";
import { setSelectedTodo, setCurrentPage } from "./Redux/Slices/todosSlice";
import { openTodoModal } from "./Redux/Slices/modalToggleSlice";
import ReactPaginate from "react-paginate";

interface Props {
  handleAddModal: () => void;
}

const TodoList: FC<Props> = ({ handleAddModal }) => {
  const todos = useSelector(selectedTodos);
  const currentPage = useSelector(selectedCurrentPage);
  const itemsPerPage = useSelector(selectedItemsPerPage);

  const dispatch = useDispatch();

  const handleOpenTodoModal = (todo: Todo | null) => {
    dispatch(openTodoModal());
    dispatch(setSelectedTodo(todo));
  };
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    dispatch(setCurrentPage(selectedPage.selected + 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const todosToDisplay = todos.slice(startIndex, endIndex);

  return (
    <div className="px-2 mt-5 ">
      <h1 className="text-lg font-bold mb-3">My Task</h1>
      <div className="flex flex-col gap-4">
        {todosToDisplay
          .slice(0)
          .reverse()
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleOpenTodoModal={() => handleOpenTodoModal(todo)}
            />
          ))}
      </div>
      <div className="md:hidden flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg h-full bg-gray-50 mt-4">
        <input
          onFocus={handleAddModal}
          type="text"
          placeholder="Input task"
          className="bg-gray-50 p-2 outline-none w-full"
        />
        <FaMicrophone className="text-2xl text-blue-600 " />
      </div>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        nextLabel="Next >"
        previousLabel="< Previous"
        containerClassName={
          "pagination flex justify-center list-none p-2 text-gray-500"
        }
        pageClassName={"mx-1 md:mx-2 cursor-pointer p-2 text-xs md:text-base"}
        activeClassName={
          "bg-gray-100 inline-block font-bold rounded-full text-xs md:text-base"
        }
        previousClassName={
          "mx-1 cursor-pointer inline-block p-2 text-xs md:text-base font-bold"
        }
        nextClassName={
          "mx-1 cursor-pointer inline-block p-2 text-xs md:text-base font-bold"
        }
      />
    </div>
  );
};

export default TodoList;
