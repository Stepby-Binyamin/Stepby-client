import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"

const MoreStep = ({ duplicateFunc, CurrentStepFunc, deleteFunc, isTemplate = true, style = {}, ...props }) => {
   const { language } = useContext(mainContext)

   return (
      <div className={styles.MoreStep}>
         {isTemplate ?
            <div className={styles.btn}>
               <BtnIcon icon='/images/icons/duplicate.svg' text={language.DUPLICATE_STEP} onClick={duplicateFunc} />
            </div>
            :
            <div className={styles.btn1}>
               <BtnIcon icon='/images/icons/pin.svg' text={language.REQ_STEP} onClick={CurrentStepFunc} />
            </div>}
         <div>
            <BtnIcon icon='/images/icons/delete.svg' text={language.DELETE_STEP} textColor="#EF0E0E" onClick={deleteFunc} />
         </div>
      </div>
   )
}
export default MoreStep