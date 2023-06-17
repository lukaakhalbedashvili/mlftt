import { useState } from "react";
import { SideBarTopSectionItemsEnum } from "../../components/SideBar/sideBar.interface";

const sideBarItems = [
  {
    text: SideBarTopSectionItemsEnum.SPELL_CHECKER,
    isActive: true,
    onclick: () => {},
  },
  {
    text: SideBarTopSectionItemsEnum.TEXT_TO_SPEECH,
    isActive: false,
    onclick: () => {},
  },
  {
    text: SideBarTopSectionItemsEnum.SPEECH_TO_TEXT,
    isActive: false,
    onclick: () => {},
  },
];

const useSideBarTopSection = () => {
  const [sidebarTopSectionItems, setSidebarTopSectionItems] =
    useState(sideBarItems);

  return { sidebarTopSectionItems, setSidebarTopSectionItems };
};

export default useSideBarTopSection;
