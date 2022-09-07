import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


const Confirm = ({ clientName, stepName, btnYes, btnNo, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.Confirm}>

         <div className={styles.areYouSure}>{dict.WE_SAFE}</div>
         <div className={styles.user}> {dict.EMAIL_UPDATE} {clientName}</div>
         <div className={styles.step}> {dict.NEXT_STEP}'{stepName}' </div>
         <div className={styles.buttons}>
            <button className={styles.button} onClick={btnYes}>
               <img className={styles.img} src="./images/icon-btns/Vector.svg" alt="✔" />
               {dict.DONE}
            </button>
            <button className={styles.buttonNo} onClick={btnNo}>{dict.NO}</button>
         </div>
      </div>
   )
}

export default Confirm