import React from "react";
import useSideBarMiddleSection from "./useSideBarMiddleSection";

const SidebarMiddleSection = () => {
  const { setSidebarMiddleSectionItems, sidebarMiddleSectionItems } =
    useSideBarMiddleSection();
  return (
    <div className="mt-96 border-y py-10 border-white">
      SidebarMiddleSection
    </div>
  );
};

export default SidebarMiddleSection;
