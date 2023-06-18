import SidebarBottomSection from "../../Elements/SidebarBottomSection";
import SidebarMiddleSection from "../../Elements/SidebarMiddleSection";
import SidebarTopSection from "../../Elements/SidebarTopSection";

const SideBar = () => {
  return (
    <div className="w-44 bg-primary h-full pt-32">
      <SidebarTopSection />

      <SidebarMiddleSection />

      <SidebarBottomSection />
    </div>
  );
};

export default SideBar;
