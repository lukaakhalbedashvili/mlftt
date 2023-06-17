import { useState } from "react";
import { SideBarItemsEnum } from "./sideBar.interface";

const sideBarItems = [
  { text: SideBarItemsEnum.SPELL_CHECKER, isActive: true, onclick: () => {} },
  { text: SideBarItemsEnum.TEXT_TO_SPEECH, isActive: false, onclick: () => {} },
  { text: SideBarItemsEnum.SPEECH_TO_TEXT, isActive: false, onclick: () => {} },
];

const useSideBar = () => {
  const [sidebarItems, setSideBarItems] = useState(sideBarItems);
  return { sidebarItems, setSideBarItems };
};

export default useSideBar;
