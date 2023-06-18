import ActionButtonsSections from "./components/ActionButtonsSections";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex justify-start h-full">
        <SideBar />

        <div className="mr-32">
          <ActionButtonsSections />

          <p className="text-xs ml-28 text-textInputGray mt-12 border-l border-textInputGray pl-1">
            Type or paste (⌘+V) something here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
