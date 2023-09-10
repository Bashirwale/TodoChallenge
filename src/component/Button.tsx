import { FC } from "react";
interface ButtonProps {
  buttonText: string;
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ buttonText, className, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
