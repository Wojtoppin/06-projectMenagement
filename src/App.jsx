import CustomizeProject from "./components/CustomizeProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar/>
      <CustomizeProject/>
    </main>
  );
}

export default App;
