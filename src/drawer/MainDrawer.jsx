import { useState } from "react"
import styles from "./style.module.css"

export default function MainDrawer({Component}){
    const [popup,setpopup] = useState('popDown')
    const [container, setcontainer] = useState('containerOff')

    function poping(){
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
        <button onClick={poping}>click me</button>
        <div className={styles[container]} onClick={poping} >
        <div className={styles[popup]}>
            <div onClick={poping} className={styles.lower}></div>
            <div>b b bb b</div>
            <div>b b bb b</div>
            <div>b b bb b</div>
            <div>b b bb b</div>
            <div>b b bb b</div>
            <div>b b bb b</div>
            {Component}
        </div>
        </div>
        </>
    )
}