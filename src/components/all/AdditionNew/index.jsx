import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreProject = ({ style = {}, ...props }) => {

   return (
      <div className={styles.MoreProject}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/completed.svg' text='סימון הפרויקט כ"הושלם"' />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text='מחיקת פרויקט' textColor="#EF0E0E" />      </div>
      </div>
   )
}

export default MoreProject