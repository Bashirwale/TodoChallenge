import React from "react";

interface TimeRangePickerProps {
  timeStart: string | null;
  timeEnd: string | null;
  setTimeStart: (timeRange: string | null) => void;
  setTimeEnd: (timeRange: string | null) => void;
}

const TimeRangePicker = ({
  timeStart,
  timeEnd,
  setTimeStart,
  setTimeEnd,
}: TimeRangePickerProps) => {
  return (
    <div className="flex items-center gap-4 w-4/6">
      <input
        type="time"
        value={timeStart || "00:00"}
        className="border border-gray-300 p-1 rounded-lg w-1/2 outline-none"
        onChange={(e) => setTimeStart(e.target.value || null)}
      />
      <input
        type="time"
        value={timeEnd || "00:00"}
        className="border border-gray-300 p-1 rounded-lg w-1/2 outline-none focus:outline-none"
        onChange={(e) => setTimeEnd(e.target.value || null)}
      />
    </div>
  );
};

export default TimeRangePicker;
