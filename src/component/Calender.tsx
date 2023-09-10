import { useState, useEffect } from "react";

const Calendar: React.FC = () => {
  const [calendarDates, setCalendarDates] = useState<Date[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  useEffect(() => {
    const generateCalendarDates = () => {
      const daysBefore = 1;
      const daysAfter = 9;

      const dates: Date[] = [];

      for (let i = daysBefore; i > 0; i--) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        dates.push(date);
      }

      dates.push(currentDate);

      for (let i = 1; i <= daysAfter; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        dates.push(date);
      }

      return dates;
    };

    const next11Days = generateCalendarDates();

    // Set the calendarDates state with the generated dates
    setCalendarDates(next11Days);
  }, [currentDate]);

  return (
    <div className="px-2 w-full">
      <h1 className="text-base font-semibold mb-3">{formattedDate}</h1>
      <div className="flex item-center scroll-container overflow-x-scroll gap-2 md:gap-4">
        {calendarDates.map((date, index) => (
          <div
            key={index}
            className={`inline-block text-sm font-semibold p-4 text-center rounded-md ${
              date.toDateString() === new Date().toDateString()
                ? "bg-blue-600 hover:bg-blue-800 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            <div className="mb-1">
              {date.toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <div>{date.getDate()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
