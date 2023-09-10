import { FC } from "react";
import Button from "../Button";
import { Todo, deleteTodo } from "../Redux/Slices/todosSlice";
import { useDispatch } from "react-redux";
import { openEditModal } from "../Redux/Slices/modalToggleSlice";
import { GoClock } from "react-icons/go";
import { LuCalendar } from "react-icons/lu";

interface Props {
  todo: Todo | null;
  handleCloseAllModal: () => void;
}

const TodoModal: FC<Props> = ({ handleCloseAllModal, todo }) => {
  const dispatch = useDispatch();
  const handleOpenEditModal = () => {
    dispatch(openEditModal());
  };
  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId)); // Dispatch the deleteTodo action with the todoId to delete
    handleCloseAllModal();
  };

  // Function to convert date format
  function formatDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }

  if (!todo) {
    return <div>No todo selected.</div>;
  }

  return (
    <div className="w-full md:h-auto h-full md:w-2/6 absolute top-0 z-50 pt-32 md:p-0  md:static bg-black bg-opacity-60 md:bg-white md:bg-opacity-100">
      <div className="h-full md:h-auto bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-end">
          <Button
            buttonText={"x"}
            onClick={handleCloseAllModal}
            type={"button"}
            className="text-gray-500 text-lg font-semibold"
          />
        </div>
        <div>
          <h1 className="text-gray-950 capitalize text-lg font-bold mb-6">
            {todo.title}
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <LuCalendar className="text-blue-600" />
            {formatDate(todo.date)}
          </div>
          <div className="flex items-center gap-2 mb-6">
            <GoClock className="text-blue-600" />
            <p>
              {todo.timeStart} - {todo.timeEnd}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              buttonText={"Delete"}
              onClick={() => handleDeleteTodo(todo.id)}
              type={"button"}
              className="text-sm text-gray-700 font-semibold border border-gray-300 rounded-lg px-3 py-2 w-2/4"
            />
            <Button
              buttonText={"Edit"}
              onClick={handleOpenEditModal}
              type={"button"}
              className="bg-blue-600 hover:bg-blue-800 text-sm font-semibold text-white rounded-lg py-2 px-3 w-2/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
