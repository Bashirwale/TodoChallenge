import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav className="py-4 px-2">
      <div className="flex justify-between items-center transition-all">
        <h1 className="text-black text-2xl font-bold">ToDo</h1>
        <ul className="hidden md:flex items-center gap-4">
          <li className="text-black">
            <FiSettings className="text-gray-500 text-2xl" />
          </li>
          <li className="text-black">
            <BiBell className="text-gray-500 text-2xl" />
          </li>
          <li className="text-black">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile pic"
              className="h-8 w-8 rounded-full"
            />
          </li>
        </ul>
        <button
          onClick={toggle}
          className="md:hidden text-2xl font-bold text-gray-500"
        >
          {isOpen ? (
            "X"
          ) : (
            <HiOutlineMenuAlt1 className="text-gray-500 font-bold text-2xl" />
          )}
        </button>
      </div>
      {/* {isOpen && (
        <ul className="mt-4">
          <li className="text-black">Home</li>
        </ul>
      )} */}
    </nav>
  );
};

export default MobileNavbar;
