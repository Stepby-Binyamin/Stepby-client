import { useState, useContext } from "react";

import mainContext from "../context/mainContext";
import styles from "./style.module.css";

export default function MainDrawer({ children }) {
  const { drawer } = useContext(mainContext);
  const [touchStart, setTouchStart] = useState(0);
  const [swipe, setSwipe] = useState(true);

  const handleTouchStart = (e) => {
    setSwipe(true);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (touchStart - e.targetTouches[0].clientY < -80 && swipe) {
      setSwipe(false);
      drawer.setDrawer(false);
    }
  };

  return (
    <>
      <div className={styles[drawer.drawer ? "containerOn" : "containerOff"]} 
      onClick={()=> drawer.setDrawer('') }>
        <div className={styles[drawer.drawer ? "popUp" : "popDown"]} onClick={(e) => {e.stopPropagation();}}>
          <div id="lower"
            className={styles.drewerTop}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className={styles.lower} />
          </div>
          <div id="drawerContent">
            {drawer.drawerContent ?? drawer.drawer}
          </div>
        </div>
      </div>
    </>
  );
}
