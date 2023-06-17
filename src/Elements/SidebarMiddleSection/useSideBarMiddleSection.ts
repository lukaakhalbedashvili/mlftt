import { useState } from "react";
import { SideBarMiddleSectionItemsEnum } from "../../components/SideBar/sideBar.interface";

const sideBarItems = [
  {
    text: SideBarMiddleSectionItemsEnum.SETTING,
    isActive: true,
    onclick: () => {},
  },
  {
    text: SideBarMiddleSectionItemsEnum.FACEBOOK,
    isActive: false,
    onclick: () => {},
  },
  {
    text: SideBarMiddleSectionItemsEnum.CONTACT_SUPPORT,
    isActive: false,
    onclick: () => {},
  },
];

const useSideBarMiddleSection = () => {
  const [sidebarMiddleSectionItems, setSidebarMiddleSectionItems] =
    useState(sideBarItems);

  return { sidebarMiddleSectionItems, setSidebarMiddleSectionItems };
};

export default useSideBarMiddleSection;
