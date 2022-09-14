import React, {  useContext} from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"


const MoreMenuTemplate = ({ style = {}, duplicateTempFunc, CurrentStepFunc, deleteTempFunc, ...props }) => {
   
   const {language}= useContext(mainContext)

   return (
      <div className={styles.MoreMenuTemplate}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text={language.DUPLICATE_TEMPLATE} onClick={duplicateTempFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/pin.svg' text={language.REQ_STEP} onClick={CurrentStepFunc} />      </div>
         <div><BtnIcon icon='/images/icons/delete.svg' text={language.DELETE_TEMPLATE} textColor="#EF0E0E" onClick={deleteTempFunc} />      </div>
      </div>
   )
}

export default MoreMenuTemplate