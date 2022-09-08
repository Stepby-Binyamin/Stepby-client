import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


const MoreMenuTemplate = ({ style = {}, duplicateTempFunc, CurrentStepFunc, deleteTempFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.MoreMenuTemplate}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text={dict.DUPLICATE_TEMPLATE} onClick={duplicateTempFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/pin.svg' text={dict.REQ_STEP} onClick={CurrentStepFunc} />      </div>
         <div><BtnIcon icon='/images/icons/delete.svg' text={dict.DELETE_TEMPLATE} textColor="#EF0E0E" onClick={deleteTempFunc} />      </div>
      </div>
   )
}

export default MoreMenuTemplate