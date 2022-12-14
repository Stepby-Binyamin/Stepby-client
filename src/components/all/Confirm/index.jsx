import React, { useContext } from 'react'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"

const Confirm = ({ clientName, nextStepName, btnYes, btnNo, ...props }) => {
   const { language } = useContext(mainContext)

   return (
      <div className={styles.Confirm}>
         <div className={styles.areYouSure}>{language.WE_SAFE}</div>
         <div className={styles.user}> {language.EMAIL_UPDATE} {clientName}</div>
         <div className={styles.step}> {language.NEXT_STEP}'{nextStepName}' </div>
         <div className={styles.buttons}>
            <button className={styles.button} onClick={btnYes}>
               <img className={styles.img} src="./images/icon-btns/Vector.svg" alt="✔" />
               {language.DONE}
            </button>
            <button className={styles.buttonNo} onClick={btnNo}>{language.NO}</button>
         </div>
      </div>
   )
}
export default Confirm