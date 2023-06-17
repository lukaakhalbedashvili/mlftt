import spellChecker from "../../assets/checked.svg";
import edgeForSidebarItem from "../../assets/edgeForSidebarItem.svg";
import edgeForSidebarItem2 from "../../assets/edgeForSidebarItem2.svg";
import useSideBar from "./useSideBar";

const SideBar = () => {
  const { sidebarItems, setSideBarItems } = useSideBar();

  return (
    <div className="w-44 bg-black pl-3 h-full">
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
              <img
                src={spellChecker}
                alt=""
                style={{ fill: "white" }}
                className={`w-5 h-3 mr-3 fill-white`}
              />

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
    </div>
  );
};

export default SideBar;
