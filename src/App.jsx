import styles from "./App.module.css";
import { useState } from "react";
import MainPage from "./Components/MainPage/MainPage.jsx";
import NoPageSelected from "./Components/NoPageSelected/NoPageSelected";
import SideBar from "./Components/SideBar/SideBar.jsx";
import SelectedProjects from "./Components/SelectedProjects/SelectedProjects";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartProjects() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  function handleAddProjects(projectsData) {
    setProjectState((prevState) => {
      let projectId = Math.random();
      const newData = {
        ...projectsData,
        id: projectId,
      };
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...prevState.projects, newData],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      };
    });
  }

  function handleSelectProjects(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  }

  const selectedProjects = projectState.projects.find(
    (project) => project.id === projectState.projectSelectedId
  );

  let content = <SelectedProjects project={selectedProjects} />;
  if (projectState.projectSelectedId === null) {
    content = (
      <MainPage onAddData={handleAddProjects} onCancel={handleCancel} />
    );
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoPageSelected onAddProjects={handleStartProjects} />;
  }

  return (
    <div className={styles.container}>
      <SideBar
        onAddProjects={handleStartProjects}
        projects={projectState.projects}
        onSelectProjects={handleSelectProjects}
      />
      {content}
    </div>
  );
}

export default App;
