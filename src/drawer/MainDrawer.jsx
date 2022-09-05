import { useState } from "react"
import styles from "./style.module.css"

export default function MainDrawer({Component}){
    const [popup,setpopup] = useState('popDown')
    const [container, setcontainer] = useState('containerOff')

    function popUpAndDown(){
        if(popup === 'popDown'){
            return (
                setpopup('popUp'),
                setcontainer('containerOn')
             )
        }
        return (setpopup('popDown'), setcontainer('containerOff') )
    }

    return(
        <>
        <div className={styles[container]} onClick={popUpAndDown} >
        <div className={styles[popup]}>
            <div onClick={popUpAndDown} className={styles.lower}></div>
            {Component}
        </div>
        </div>
        </>
    )
}