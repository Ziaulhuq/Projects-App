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
      const newData = {
        ...projectsData,
        id: Math.random(),
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

  let content = <SelectedProjects />;
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
