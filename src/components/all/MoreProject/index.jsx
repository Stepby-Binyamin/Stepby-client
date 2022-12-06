import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"

const MoreProject = ({ style = {}, completeProjectFunc, deleteProjectFunc, ...props }) => {
   const { language } = useContext(mainContext)

   return (
      <div className={styles.MoreProject}>
         <div className={styles.btn}>
            <BtnIcon icon='/images/icons/completed.svg' text={language.COMPLET_PROJECT} onClick={completeProjectFunc} />
         </div>
         <div className={styles.btn}>
            <BtnIcon icon='/images/icons/delete.svg' text={language.DEL_PROJECT} textColor="#EF0E0E" onClick={deleteProjectFunc} />
         </div>
      </div>
   )
}
export default MoreProject