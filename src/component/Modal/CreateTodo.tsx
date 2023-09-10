import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/todosSlice";
import DatePicker from "../DatePicker"; // You'll need to create a DatePicker component
import TimeRangePicker from "../TimeRangePicker"; // You'll need to create a TimeRangePicker
import Button from "../Button";

interface Props {
  handleCloseAllModal: () => void;
}
const CreateTodo: FC<Props> = ({ handleCloseAllModal }) => {
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(
    new Date().toISOString().split("T")[0]
  );
  const [timeStart, setTimeStart] = useState<string | null>(null);
  const [timeEnd, setTimeEnd] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "" && selectedDate && timeStart) {
      dispatch(
        addTodo({
          id: Date.now(),
          title,
          completed: false,
          date: selectedDate,
          timeStart: timeStart,
          timeEnd: timeEnd,
          userId: 1,
        })
      );
      setTitle("");
      setSelectedDate(null);
      setTimeStart(null);
      setTimeEnd(null);
    }
  };

  return (
    <div className="w-full md:h-auto md:w-2/6 h-full absolute top-0 z-50 pt-72 md:p-0  md:static bg-black bg-opacity-60 md:bg-white md:bg-opacity-100">
      <div className="h-full md:h-auto bg-white rounded-t-3xl rounded-b-none md:rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-gray-900 text-lg font-semibold">Add Task</h1>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center gap-4 my-4 w-full">
            <DatePicker
              selectedDate={selectedDate}
              onChange={setSelectedDate}
            />
            <TimeRangePicker
              timeStart={timeStart}
              timeEnd={timeEnd}
              setTimeStart={setTimeStart}
              setTimeEnd={setTimeEnd}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              buttonText={"Cancel"}
              onClick={handleCloseAllModal}
              type={"button"}
              className="text-sm text-gray-700 font-semibold border border-gray-300 rounded-lg px-3 py-2 w-2/4"
            />
            <Button
              buttonText="Add"
              type={"submit"}
              className="bg-blue-600 hover:bg-blue-800 text-sm font-semibold text-white rounded-lg py-2 px-3 w-2/4 hover:bg-blue-800s"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
