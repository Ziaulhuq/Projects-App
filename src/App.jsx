import styles from "./App.module.css";

import MainPage from "./Components/MainPage/MainPage.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <MainPage />
    </div>
  );
}

export default App;
