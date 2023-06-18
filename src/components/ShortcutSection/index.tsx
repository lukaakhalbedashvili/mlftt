import bIcon from "../../assets/BIcon.svg";
import italicIcon from "../../assets/italicIcon.svg";
import uIcon from "../../assets/UIcon.svg";
import burgerIcon from "../../assets/BurgerIcon.svg";
import h1 from "../../assets/H1Icon.svg";
import h2 from "../../assets/H2Icon.svg";
import officeIcon from "../../assets/officeThingIcon.svg";
import tIcon from "../../assets/TIcon.svg";
import arrow from "../../assets/arrowForPopup.svg";

const ShortcutSection = () => {
  return (
    <div className="absolute bottom-0 left-64 flex items-center pt-9 pb-20 border-t border-actionBtnsBorder w-full pl-8">
      <div className="mr-8 relative cursor-pointer group">
        <img src={bIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <div className="mr-8 relative cursor-pointer group">
        <img src={italicIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <div className="group relative cursor-pointer">
        <img src={uIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <span className="border-r-2 border-borderGray w-[1px] h-[18px] mx-6"></span>

      <div className="mr-8  group relative cursor-pointer">
        <img src={burgerIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <div className="group relative cursor-pointer">
        <img src={burgerIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <span className="border-r-2 border-borderGray w-[1px] h-[18px] mx-6"></span>

      <div className="group relative cursor-pointer mr-8">
        <img src={h1} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <div className="group relative cursor-pointer">
        <img src={h2} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <span className="border-r-2 border-borderGray w-[1px] h-[18px] mx-6"></span>

      <div className="group relative cursor-pointer">
        <img src={officeIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <span className="border-r-2 border-borderGray w-[1px] h-[18px] mx-6"></span>

      <div className="group relative cursor-pointer">
        <img src={tIcon} alt="" />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 flex-col justify-start items-center group-hover:flex hidden">
          <img src={arrow} alt="" className="relative top-[1px]" />

          <p className="text-xs bg-popupBlue text-white p-[6px] rounded-md whitespace-nowrap">
            Bold Ctrl+B
          </p>
        </div>
      </div>

      <div className="bg-white px-5 py-1 text-xs ml-64">
        628 characters, 103 words
      </div>
    </div>
  );
};

export default ShortcutSection;
