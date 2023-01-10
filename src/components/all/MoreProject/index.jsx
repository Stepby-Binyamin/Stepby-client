import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'
import { useNavigate } from 'react-router-dom'

const MoreProject = ({ templateId, completeProjectFunc, deleteProjectFunc, style = {}, ...props }) => {
   const navigate = useNavigate()
   const { language, drawer } = useContext(mainContext)

   const editProjectNameFunc = () => {

   }



   return (
      <div className={styles.MoreProject}>
         <div className={styles.btn_upper}>
            <BtnIcon icon='/images/icons/edit.svg' text={language.EDIT_NAME} onClick={editProjectNameFunc} />
         </div>
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