import { FC, useEffect, useState } from "react";
import { Todo } from "./Redux/Slices/todosSlice";

interface TodoItemProps {
  todo: Todo;
  handleOpenTodoModal: () => void;
}
const TodoItem: FC<TodoItemProps> = ({ todo, handleOpenTodoModal }) => {
  const [taskDay, setTaskDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const todoDate = new Date(todo.date);
    const todoDayOfMonth = todoDate.getDate();
    const todoMonth = todoDate.getMonth();
    const todoYear = todoDate.getFullYear();

    if (
      currentYear === todoYear &&
      currentMonth === todoMonth &&
      currentDayOfMonth === todoDayOfMonth
    ) {
      setTaskDay("Today");
    } else if (
      currentYear === todoYear &&
      currentMonth === todoMonth &&
      currentDayOfMonth === todoDayOfMonth + 1
    ) {
      setTaskDay("Yesterday");
    } else if (
      currentYear === todoYear &&
      currentMonth === todoMonth &&
      currentDayOfMonth === todoDayOfMonth - 1
    ) {
      setTaskDay("Tomorrow");
    } else {
      setTaskDay("Another Day");
    }
  }, [todo.date]);
  return (
    <div
      className="flex flex-col gap-4 cursor-pointer"
      onClick={handleOpenTodoModal}
    >
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-sm border-b border-gray-200">
        <div className="flex items-center gap-4">
          <input className="text-2xl" type="checkbox" name="check" id="check" />
          <div>
            <p className="text-gray-900 capitalize font-medium">{todo.title}</p>
            <p className="text-gray-600 font-medium">
              {todo.timeStart} - {todo.timeEnd}
            </p>
          </div>
        </div>
        <p className="font-medium">{taskDay}</p>
      </div>
    </div>
  );
};

export default TodoItem;
