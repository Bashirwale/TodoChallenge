import React, { useState } from "react";
import { LuCalendar } from "react-icons/lu";

interface DatePickerProps {
  selectedDate: string | null;
  onChange: (date: string | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  const today = new Date().toISOString().split("T")[0];
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const getDateLabel = (date: string | null) => {
    if (!date) return "";

    const dateObj = new Date(date);
    const todayDate = new Date(today);
    const diffInDays = Math.floor(
      (dateObj.getTime() - todayDate.getTime()) / (1000 * 3600 * 24)
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === -1) return "Yesterday";
    if (diffInDays === 1) return "Tomorrow";

    return "Another day";
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the selected date from the event
    const newDate = event.target.value || null;
    onChange(newDate);
  };

  return (
    <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-lg w-2/6">
      {!isDatePickerVisible && (
        <LuCalendar className="text-lg" onClick={toggleDatePicker} />
      )}

      {isDatePickerVisible ? (
        <input
          type="date"
          value={selectedDate || ""}
          onChange={handleDateChange}
        />
      ) : (
        <span className="text-xs">{getDateLabel(selectedDate)}</span>
      )}
    </div>
  );
};

export default DatePicker;
