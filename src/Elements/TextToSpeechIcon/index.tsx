import React, { FC } from "react";
import { IconColors } from "../../components/SideBar/sideBar.interface";

interface TextToSpeechIconProps {
  color?: IconColors;
}

const TextToSpeech: FC<TextToSpeechIconProps> = ({
  color = IconColors.PRIMARY,
}) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z"
        fill={color}
      />
    </svg>
  );
};

export default TextToSpeech;
