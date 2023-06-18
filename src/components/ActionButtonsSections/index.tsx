import SpellCheckerIcon from "../../Elements/SpellCheckerIcon";
import { IconColors } from "../SideBar/sideBar.interface";
import copyIcon from "../../assets/copy.svg";
import binIcon from "../../assets/bin.svg";
import ukIcon from "../../assets/uk.svg";
import arrow from "../../assets/arrow.svg";

const ActionButtonsSections = () => {
  return (
    <div className="border-actionBtnsBorder border-b h-fit pb-3 w-full pt-16 pl-28 flex items-center">
      <button className="bg-primary flex items-center px-5 py-2 rounded-md">
        <SpellCheckerIcon color={IconColors.WHITE} />

        <p className="text-sm text-white font-medium ml-2">Check</p>
      </button>

      <div className="ml-[505px] flex items-center">
        <button className="bg-actionBtnsBorder flex items-center w-[90px] h-[36px] rounded justify-center mr-8">
          <img src={copyIcon} alt="" />

          <p className="text-xs ml-2">Copy</p>
        </button>

        <button className="flex items-center rounded justify-center pr-8 border-r border-actionBtnsBorder">
          <img src={binIcon} alt="" />

          <p className="text-xs ml-2">Delete</p>
        </button>

        <button className="pl-8 flex items-center">
          <img src={ukIcon} alt="" />

          <p className="text-xs ml-2">Language</p>

          <img src={arrow} alt="" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ActionButtonsSections;
