import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const VerifyProblem = ({ style = {}, func1, func2, ...props }) => {

   return (
      <div className={styles.VerifyProblem}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/phone.svg' text='מספר הטלפון לא נכון' onClick={func1} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/again.svg' text='שלח קוד שוב' onClick={func2} />      </div>
      </div>
   )
}

export default VerifyProblem