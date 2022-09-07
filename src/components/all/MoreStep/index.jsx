import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreStep = ({ style = {}, duplicateFunc, CurrentStepFunc, deleteFunc, ...props }) => {

   return (
      <div className={styles.MoreStep}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text='שכפול שלב זה' onClick={duplicateFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/pin.svg' text='הגדרה כ"צעד נוכחי"' onClick={CurrentStepFunc} />      </div>
         <div><BtnIcon icon='/images/icons/delete.svg' text='מחיקת שלב' textColor="#EF0E0E" onClick={deleteFunc} />      </div>
      </div>
   )
}

export default MoreStep