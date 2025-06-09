import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectsSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  const handleNewProjectSelection = () => {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProject: null };
    });
  };

  const handleAddProject = (title, description, dueDate) => {
    setProjectState((prevProjectState) => {
      const newProject = {
        title: title,
        description: description,
        dueDate: dueDate,
        id: Math.random()
      }
      return { ...prevProjectState, projects: [...prevProjectState.projects, newProject] };
    });
  };
  console.log(projectState)
  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject handleAddProject={handleAddProject}/>;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected handleClick={handleNewProjectSelection} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClick={handleNewProjectSelection} />
      {content}
    </main>
  );
}

export default App;
