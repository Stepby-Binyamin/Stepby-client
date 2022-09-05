import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreMenuStep = ({ style = {}, func1, func2, ...props }) => {

   return (
      <div className={styles.MoreMenuStep}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/pin.svg' text='הגדרה כ"צעד נוכחי"' onClick={func1} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text='מחיקת שלב' textColor="#EF0E0E" onClick={func2} />      </div>
      </div>
   )
}

export default MoreMenuStep