import React, {  useContext} from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"

const MoreTemp = ({ style = {}, duplicateFunc, deleteFunc, ...props }) => {

   const {language}= useContext(mainContext)

   return (
      <div className={styles.MoreTemp}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/duplicate.svg' text={language.DUPLICATE_TEMPLATE} onClick={duplicateFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text={language.DELETE_TEMPLATE} textColor="#EF0E0E" onClick={deleteFunc} />      </div>
      </div>
   )
}

export default MoreTemp