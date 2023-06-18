import ActionButtonsSections from "./components/ActionButtonsSections";
import Header from "./components/Header";
import ShortcutSection from "./components/ShortcutSection";
import SideBar from "./components/SideBar";
import mainLogo from "./assets/mainIcon.svg";

function App() {
  return (
    <div className="h-screen bg-mainBackground relative">
      <Header />

      <div className="flex justify-start h-full">
        <SideBar />

        <div className="mr-32">
          <ActionButtonsSections />

          <p className="text-xs ml-28 text-textInputGray mt-12 border-l border-textInputGray pl-1">
            Type or paste (⌘+V) something here.
          </p>
        </div>

        <ShortcutSection />
      </div>

      <img src={mainLogo} alt="" className="absolute right-16 bottom-16" />
    </div>
  );
}

export default App;
