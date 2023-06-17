import React, { FC } from "react";

interface ButtonProps {
  text: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  icon,
  text,
  backgroundColor,
  textColor,
}) => {
  console.log(backgroundColor);
  return (
    <button
      className={`${backgroundColor} px-5 py-2 ${textColor} border border-borderGray rounded-lg text-sm flex items-center w-fit`}
    >
      {icon && <img src={icon} alt="" className="mr-2" />}

      <p>{text}</p>
    </button>
  );
};

export default Button;
