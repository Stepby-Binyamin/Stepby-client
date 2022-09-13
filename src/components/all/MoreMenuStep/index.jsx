import React, { useContext} from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"


const MoreMenuStep = ({ style = {}, CurrentStepFunc, deleteStepFunc, ...props }) => {
  
   const {language}= useContext(mainContext)

   return (
      <div className={styles.MoreMenuStep}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/pin.svg' text={language.REQ_STEP} onClick={CurrentStepFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text={language.DELETE_STEP} textColor="#EF0E0E" onClick={deleteStepFunc} />      </div>
      </div>
   )
}

export default MoreMenuStep