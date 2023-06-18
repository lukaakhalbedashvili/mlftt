import React from "react";
import useSideBarMiddleSection from "./useSideBarMiddleSection";

const SidebarMiddleSection = () => {
  const { sidebarMiddleSectionItems } = useSideBarMiddleSection();
  return (
    <div className="mt-96 border-y py-10 border-white mx-3 px-2">
      {sidebarMiddleSectionItems.map((item) => (
        <div key={item.text} className="flex items-center cursor-pointer my-4">
          <img src={item.icon} alt="" className="w-fit h-fit mr-2" />

          <p className="text-xs text-white">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarMiddleSection;
