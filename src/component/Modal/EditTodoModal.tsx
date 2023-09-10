import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/Slices/todosSlice";
import TimeRangePicker from "../TimeRangePicker"; 
import Button from "../Button";
import { Todo } from "../Redux/Slices/todosSlice";

interface Props {
  todo: Todo | null;
  handleCloseAllModal: () => void;
}

const EditTodoModal: FC<Props> = ({ handleCloseAllModal, todo }) => {
  const [formValues, setFormValues] = useState({
    title: todo?.title || "",
    selectedDate: todo?.date,
    timeStart: todo?.timeStart || "",
    timeEnd: todo?.timeEnd || "",
  });

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formValues.title.trim() !== "" &&
      formValues.selectedDate &&
      formValues.timeStart
    ) {
      if (todo) {
        dispatch(
          updateTodo({
            ...todo,
            title: formValues.title,
            date: formValues.selectedDate,
            timeStart: formValues.timeStart,
            timeEnd: formValues.timeEnd,
          })
        );
      }
      handleCloseAllModal();
    }
  };

  return (
    <div className="w-full md:h-auto md:w-2/6 h-full absolute top-0 z-50 pt-32 md:p-0  md:static bg-black bg-opacity-60 md:bg-white md:bg-opacity-100">
      <div className="h-full md:h-auto bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-gray-900 text-lg font-semibold">Edit Task</h1>
          <Button
            buttonText={"x"}
            onClick={handleCloseAllModal}
            type={"button"}
            className="text-gray-500 text-lg font-semibold"
          />
        </div>
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            className="rounded-lg bg-gray-50 border border-gray-300 w-full h-36 outline-none text-gray-500 text-2xl p-8"
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
          />
          <div className="flex items-center gap-4 my-4 w-full">
            <DatePicker
              selectedDate={formValues.selectedDate || ""}
              onChange={(date) => {
                console.log("New Date:", date);
                setFormValues({ ...formValues, selectedDate: date || "" });
              }}
            />
            <TimeRangePicker
              timeStart={formValues.timeStart}
              timeEnd={formValues.timeEnd}
              setTimeStart={(time) =>
                setFormValues({ ...formValues, timeStart: time || "" })
              }
              setTimeEnd={(time) =>
                setFormValues({ ...formValues, timeEnd: time || "" })
              }
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              buttonText={"Delete"}
              onClick={handleCloseAllModal}
              type={"button"}
              className="text-sm text-gray-700 font-semibold border border-gray-300 rounded-lg px-3 py-2 w-2/4"
            />
            <Button
              buttonText="Save"
              type={"submit"}
              className="bg-blue-600 hover:bg-blue-800 text-sm font-semibold text-white rounded-lg py-2 px-3 w-2/4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoModal;
