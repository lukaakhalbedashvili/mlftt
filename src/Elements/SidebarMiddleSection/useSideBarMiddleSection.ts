import { useState } from "react";
import { SideBarMiddleSectionItemsEnum } from "../../components/SideBar/sideBar.interface";
import settingsIcon from "../../assets/settings.svg";
import facebookIcon from "../../assets/facebook.svg";
import contactSupportIcon from "../../assets/contactSupportIcon.svg";

const sideBarMiddleItems = [
  {
    text: SideBarMiddleSectionItemsEnum.SETTING,
    icon: settingsIcon,
  },
  {
    text: SideBarMiddleSectionItemsEnum.FACEBOOK,
    icon: facebookIcon,
  },
  {
    text: SideBarMiddleSectionItemsEnum.CONTACT_SUPPORT,
    icon: contactSupportIcon,
  },
];

const useSideBarMiddleSection = () => {
  const [sidebarMiddleSectionItems, setSidebarMiddleSectionItems] =
    useState(sideBarMiddleItems);

  return { sidebarMiddleSectionItems, setSidebarMiddleSectionItems };
};

export default useSideBarMiddleSection;
