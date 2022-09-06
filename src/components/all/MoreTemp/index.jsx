import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const MoreTemp = ({ style = {}, duplicateFunc, deleteFunc, ...props }) => {

   return (
      <div className={styles.MoreTemp}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text='שכפול תבנית זו' onClick={duplicateFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text='מחיקת תבנית' textColor="#EF0E0E" onClick={deleteFunc} />      </div>
      </div>
   )
}

export default MoreTemp