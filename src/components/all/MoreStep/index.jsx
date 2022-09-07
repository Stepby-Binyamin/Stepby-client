import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


const MoreStep = ({ style = {}, duplicateFunc, CurrentStepFunc, deleteFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.MoreStep}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text={dict.DUPLICATE_STEP} onClick={duplicateFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/pin.svg' text={dict.REQ_STEP} onClick={CurrentStepFunc} />      </div>
         <div><BtnIcon icon='/images/icons/delete.svg' text={dict.DELETE_STEP} textColor="#EF0E0E" onClick={deleteFunc} />      </div>
      </div>
   )
}

export default MoreStep