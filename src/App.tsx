import ActionButtonsSections from "./components/ActionButtonsSections";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex justify-start h-full">
        <SideBar />

        <ActionButtonsSections />
      </div>
    </div>
  );
}

export default App;
