import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreProject = ({ style = {}, func1, func2, ...props }) => {

   return (
      <div className={styles.MoreProject}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/completed.svg' text='סימון הפרויקט כ"הושלם"' onClick={func1} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text='מחיקת פרויקט' textColor="#EF0E0E" onClick={func2} />      </div>
      </div>
   )
}

export default MoreProject