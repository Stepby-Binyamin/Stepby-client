import React from 'react'
import styles from "./style.module.css"

const Confirm = ({clientName,stepName,btnYes,btnNo, ...props }) => {

   return (
      <div className={styles.Confirm}>
 
      <div className={styles.areYouSure}>אנחנו בטוחים?</div>
      <div className={styles.user}> {clientName}אימייל עדכון ישלח ל</div>
      <div className={styles.step}> השלב הבא:'{stepName}' </div>
      <div className={styles.buttons}>
      <button className={styles.button} onClick={btnYes}>
              <img className={styles.img} src="./images/icon-btns/Vector.svg" alt="✔" />
              כן, סיימתי!
            </button>
            <button className={styles.buttonNo} onClick={btnNo}>לא</button>
      </div>
     </div>
   )
}

export default Confirm