import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectsSelected";
import SelectedProject from "./components/SelectedProject";

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

  const handleSelectProject = (id) => {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProject: id };
    });
  };

  const handleAddProject = (title, description, dueDate) => {
    setProjectState((prevProjectState) => {
      const newProject = {
        title: title,
        description: description,
        dueDate: dueDate,
        id: Math.random(),
      };
      return {
        ...prevProjectState,
        projects: [...prevProjectState.projects, newProject],
        selectedProject: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== prevProjectState.selectedProject
        ),
      };
    });
  };

  const handleCancelProject = () => {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProject: undefined };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );
  let content = (
    <SelectedProject onDelete={handleDeleteProject} project={selectedProject} />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancelProject={handleCancelProject}
      />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected handleClick={handleNewProjectSelection} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        selectedProjectId={projectState.selectedProject}
        onSelectProject={handleSelectProject}
        handleClick={handleNewProjectSelection}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
