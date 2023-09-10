import { FC, useState, useEffect } from "react";

const Greeting: FC = () => {
  const [greetings, setGreetings] = useState<string>("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings("Good Morning!");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreetings("Good Afternoon!");
    } else {
      setGreetings("Good Evening!");
    }
  }, []);

  return (
    <div className="p-2 ">
      <h1 className="text-2xl font-semibold text-gray-900">{greetings}</h1>
      <h2 className="text-base font-normal text-gray-600">
        You got some task to do.
      </h2>
    </div>
  );
};

export default Greeting;
