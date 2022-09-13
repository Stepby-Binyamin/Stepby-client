import React, { useContext} from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"

const VerifyProblem = ({ style = {}, wrongPhonFunc, newCodeFunc, ...props }) => {

   const {language}= useContext(mainContext)

   return (
      <div className={styles.VerifyProblem}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/phone.svg' text={language.WRONG_PONE} onClick={wrongPhonFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/again.svg' text={language.SEND_CODE_AGAIN} onClick={newCodeFunc} />      </div>
      </div>
   )
}

export default VerifyProblem