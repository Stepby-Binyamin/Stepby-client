import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreMenuTemplate = ({ style = {}, func1, func2, func3, ...props }) => {

   return (
      <div className={styles.MoreMenuTemplate}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text='שכפול תבנית' onClick={func1} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/pin.svg' text='הגדרה כ"צעד נוכחי"' onClick={func2} />      </div>
         <div><BtnIcon icon='/images/icons/delete.svg' text='מחיקת תבנית' textColor="#EF0E0E" onClick={func3} />      </div>
      </div>
   )
}

export default MoreMenuTemplate