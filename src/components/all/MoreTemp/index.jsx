import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'

const MoreTemp = ({ style = {}, duplicateFunc, deleteFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.MoreTemp}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text={dict.DUPLICATE_TEMPLATE} onClick={duplicateFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text={dict.DELETE_TEMPLATE} textColor="#EF0E0E" onClick={deleteFunc} />      </div>
      </div>
   )
}

export default MoreTemp