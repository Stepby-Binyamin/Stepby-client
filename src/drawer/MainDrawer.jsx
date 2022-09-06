import { useState ,useContext } from "react";
import mainContext from "../context/mainContext";
import styles from "./style.module.css";

export default function MainDrawer({ children }) {
  const { drawer } = useContext(mainContext);
  const [touchStart, setTouchStart] = useState(0);
  const [swipe, setSwipe] = useState(true)


  const handleTouchStart = (e) => {
      setSwipe(true)
      setTouchStart(e.targetTouches[0].clientY);
  }

  const handleTouchMove = (e) => {

      if ((touchStart - e.targetTouches[0].clientY) < -40 && swipe) {
          setSwipe(false)
          drawer.setDrawer(false)
      }
  }


  return (
    <>
      <div
        className={styles[drawer.drawer ? "containerOn" : "containerOff"]} onTouchStart ={handleTouchStart} onTouchMove={handleTouchMove}
      >
        <div className={styles[drawer.drawer ? "popUp" : "popDown"]} onTouchStart ={(e)=>{console.log('here') ;e.stopPropagation() }} >
          <div style={{'width': '100%', 'height': '36px'}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
          <div className={styles.lower} />
          </div>
          {drawer.drawerContent}  
        </div>
      </div>
    </>
  );
}
