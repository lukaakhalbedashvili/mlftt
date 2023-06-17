import React from "react";
import useSideBar from "./useSideBarTopSection";
import SpeechToTextIcon from "../../Elements/TextToSpeechIcon";
import SpellCheckerIcon from "../../Elements/SpellCheckerIcon";
import TextToSpeechIcon from "../../Elements/SpeechToText";
import edgeForSidebarItem from "../../assets/edgeForSidebarItem.svg";
import edgeForSidebarItem2 from "../../assets/edgeForSidebarItem2.svg";
import {
  IconColors,
  SideBarItemsEnum,
} from "../../components/SideBar/sideBar.interface";

const SidebarTopSection = () => {
  const { setSideBarItems, sidebarItems } = useSideBar();
  return (
    <div className="flex flex-col justify-start items-start">
      {sidebarItems.map((item) => {
        return (
          <div
            key={item.text}
            className={`${
              item.isActive ? "bg-white" : ""
            } flex items-center rounded-l-full pl-4 h-10 w-full relative cursor-pointer`}
            onClick={() =>
              setSideBarItems((state) => {
                return state.map((item2) => {
                  if (item2 === item) {
                    return { ...item2, isActive: true };
                  }
                  return { ...item2, isActive: false };
                });
              })
            }
          >
            <span className="mr-3">
              {item.text === SideBarItemsEnum.SPELL_CHECKER && (
                <SpellCheckerIcon
                  color={item.isActive ? IconColors.PRIMARY : IconColors.WHITE}
                />
              )}

              {item.text === SideBarItemsEnum.TEXT_TO_SPEECH && (
                <SpeechToTextIcon
                  color={item.isActive ? IconColors.PRIMARY : IconColors.WHITE}
                />
              )}

              {item.text === SideBarItemsEnum.SPEECH_TO_TEXT && (
                <TextToSpeechIcon
                  color={item.isActive ? IconColors.PRIMARY : IconColors.WHITE}
                />
              )}
            </span>

            <p className="text-xs">{item.text}</p>

            {item.isActive && (
              <>
                <img
                  src={edgeForSidebarItem}
                  alt=""
                  className="absolute right-0 -top-[9.5px]"
                />

                <img
                  src={edgeForSidebarItem2}
                  alt=""
                  className="absolute right-0 -bottom-[9.5px]"
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarTopSection;
