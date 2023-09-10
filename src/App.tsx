import MobileNavbar from "./component/MobileNavbar";
import Calendar from "./component/Calender";
import TodoList from "./component/TodoList";
import Greeting from "./component/Greeting";
import Button from "./component/Button";
import CreateTodo from "./component/Modal/CreateTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  openAddModal,
  closeAllModals,
} from "./component/Redux/Slices/modalToggleSlice";
import TodoModal from "./component/Modal/TodoModal";
import { RootState } from "./component/Redux/store";
import { selectSelectedTodo } from "./component/Redux/Slices/todosSlice";
import EditTodoModal from "./component/Modal/EditTodoModal";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector(selectSelectedTodo);
  const { isAddModal, isEditModal, isTodoModal } = useSelector(
    (state: RootState) => state.modalToggle
  );

  const handleAddModal = () => {
    dispatch(openAddModal());
  };
  const handleCloseAllModal = () => {
    dispatch(closeAllModals());
  };
  return (
    <div className="relative w-full">
      <div className="md:px-12 w-full border-b border-gray-300">
        <MobileNavbar />
      </div>
      <div className="flex items-center justify-between md:p-10">
        <Greeting />
        <Button
          buttonText={"+ Create New Task"}
          type={"button"}
          onClick={handleAddModal}
          className="hidden md:block bg-blue-600 hover:bg-blue-800 text-sm font-semibold text-white rounded-lg py-2 px-3"
        />
      </div>
      <div className="md:flex md:justify-betweens md:gap-8 md:px-10">
        <div className=" md:w-4/6 md:border-r border-gray-300">
          <Calendar />
          <TodoList handleAddModal={handleAddModal} />
        </div>
        {isAddModal && <CreateTodo handleCloseAllModal={handleCloseAllModal} />}
        {isTodoModal && (
          <TodoModal handleCloseAllModal={handleCloseAllModal} todo={todo} />
        )}
        {isEditModal && (
          <EditTodoModal
            handleCloseAllModal={handleCloseAllModal}
            todo={todo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
