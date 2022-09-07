import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'

const VerifyProblem = ({ style = {}, wrongPhonFunc, newCodeFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.VerifyProblem}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/phone.svg' text={dict.WRONG_PONE} onClick={wrongPhonFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/again.svg' text={dict.NEW_CODE} onClick={newCodeFunc} />      </div>
      </div>
   )
}

export default VerifyProblem