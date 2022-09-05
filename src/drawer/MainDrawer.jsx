import { useContext } from "react"
import styles from "./style.module.css"

export default function MainDrawer(){
    // const popUpCompState = useContext(PopupContext);
    // const popUpComp = popUpCompState[0];
    // const setpopUpComp = popUpCompState[1];
    return(
        <>
        <div className={ popUpComp? styles.containerOn : styles.containerOff} onClick={setpopUpComp(false)} >
        <div className={ popUpComp? styles.popUp : styles.popDown}>
            <div onClick={setpopUpComp(false)} className={styles.lower}></div>
            {popUpComp}
        </div>
        </div>
        </>
    )
}