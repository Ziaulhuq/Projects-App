import styles from "./App.module.css";
import { useState } from "react";
import MainPage from "./Components/MainPage/MainPage.jsx";
import NoPageSelected from "./Components/NoPageSelected/NoPageSelected";
import SideBar from "./Components/SideBar/SideBar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
  });

  function HandleStartProjects() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  let content;
  if (projectState.projectSelectedId === null) {
    content = <MainPage />;
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoPageSelected onAddProjects={HandleStartProjects} />;
  }

  return (
    <div className={styles.container}>
      <SideBar onAddProjects={HandleStartProjects} />
      {content}
    </div>
  );
}

export default App;
