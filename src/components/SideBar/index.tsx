import SidebarMiddleSection from "../../Elements/SidebarMiddleSection";
import SidebarTopSection from "../../Elements/SidebarTopSection";

const SideBar = () => {
  return (
    <div className="w-44 bg-primary h-full pt-32">
      <SidebarTopSection />

      <SidebarMiddleSection />
    </div>
  );
};

export default SideBar;
