import { useContext } from "react";
import mainContext from "../context/mainContext";
import styles from "./style.module.css";

export default function MainDrawer({ children }) {
  const { drawer } = useContext(mainContext);

  return (
    <>
      <div
        className={styles[drawer.drawer ? "containerOn" : "containerOff"]}
        onClick={() => drawer.setDrawer("")}
      >
        <div className={styles[drawer.drawer ? "popUp" : "popDown"]} onClick={(e)=>e.stopPropagation()}>
          <div style={{'width': '100%', 'height': '36px'}} onClick={() => drawer.setDrawer()}>
          <div className={styles.lower} />
          </div>
          {drawer.drawerContent}
        </div>
      </div>
    </>
  );
}
