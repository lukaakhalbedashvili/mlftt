import SidebarMiddleSection from "../../Elements/SidebarMiddleSection";
import SidebarTopSection from "../../Elements/SidebarTopSection";

const SideBar = () => {
  return (
    <div className="w-44 bg-primary pl-3 h-full pt-32">
      <SidebarTopSection />

      <SidebarMiddleSection />
    </div>
  );
};

export default SideBar;
