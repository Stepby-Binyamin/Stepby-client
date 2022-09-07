import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


const MoreMenuStep = ({ style = {}, CurrentStepFunc, deleteStepFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.MoreMenuStep}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/pin.svg' text={dict.REQ_STEP} onClick={CurrentStepFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text={dict.DELETE_STEP} textColor="#EF0E0E" onClick={deleteStepFunc} />      </div>
      </div>
   )
}

export default MoreMenuStep