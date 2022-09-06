import { useContext } from "react"
import mainContext from "../context/mainContext"
import styles from "./style.module.css"

export default function MainDrawer({ children }) {
    const {drawer} = useContext(mainContext)
  
    // const [popup, setpopup] = useState('popDown')
    // const [container, setcontainer] = useState('containerOff')
    // function popUpAndDown() {
    //     if (drawer === 'popDown') {
    //         return (
    //             setpopup('popUp'),
    //             setcontainer('containerOn')
    //         )
    //     }
    //     return (setpopup('popDown'), setcontainer('containerOff'))
    // }

    return (
        <>
            <div className={styles[drawer.drawer ? 'containerOn' : 'containerOff']} onClick={() => drawer.setDrawer('')} >
                <div className={styles[drawer.drawer ? 'popUp' : 'popDown']}>
                    <div onClick={() => drawer.setDrawer()} className={styles.lower}></div>
                    {children}
                </div>
            </div>
        </>
    )
}