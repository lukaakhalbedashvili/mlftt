import React, { FC } from "react";
import { IconColors } from "../../components/SideBar/sideBar.interface";

interface SpellCheckerIconProps {
  color?: IconColors;
}

const SpellCheckerIcon: FC<SpellCheckerIconProps> = ({
  color = IconColors.PRIMARY,
}) => {
  return (
    <svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.97244 9.39906C7.35983 9.77262 7.97338 9.7726 8.36075 9.39902L17.6967 0.395501C18.084 0.0220193 18.6973 0.0218942 19.0848 0.395218L19.2944 0.597234C19.7025 0.99044 19.7026 1.64382 19.2947 2.03717L8.36075 12.5806C7.97337 12.9541 7.35985 12.9541 6.97247 12.5806L0.988448 6.81029C0.580629 6.41703 0.58063 5.76385 0.988449 5.3706L1.19747 5.16904C1.58485 4.7955 2.19837 4.7955 2.58575 5.16904L6.97244 9.39906Z"
        fill={color}
      />
    </svg>
  );
};

export default SpellCheckerIcon;
