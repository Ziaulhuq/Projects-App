import styles from "./App.module.css";

import MainPage from "./Components/MainPage/MainPage.jsx";
import NoPageSelected from "./Components/NoPageSelected/NoPageSelected";
import SideBar from "./Components/SideBar/SideBar.jsx";

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <NoPageSelected />
    </div>
  );
}

export default App;
