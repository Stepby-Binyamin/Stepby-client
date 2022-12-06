import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'

const MoreMenuTemplate = ({ style = {}, templateId, creatorIdPermissions, ...props }) => {
   const navigate = useNavigate()
   const { userData } = useContext(userContext)
   const { language, drawer } = useContext(mainContext)

   const duplicateTempFunc = () => {
      apiCalls("post", `/template/duplicateTemplate/${templateId}`)
         .then((newTemplateId) => {
            navigate(`/template/${newTemplateId}`)
            drawer.setDrawer()
         })
   }
   const deleteTempFunc = () => {
      apiCalls("delete", `/template/deleteTemplate/${templateId}`)
         .then((res) => {
            navigate("/templates")
            drawer.setDrawer()
         })
   }
   return (
      <div className={styles.MoreMenuTemplate}>
         <div className={styles.btn}>
            <BtnIcon icon='/images/icons/duplicate.svg'
               text={language.DUPLICATE_TEMPLATE}
               onClick={duplicateTempFunc} />
         </div>
         {/* <div className={styles.btn1}>
            <BtnIcon icon='/images/icons/pin.svg' text={language.REQ_STEP} onClick={CurrentStepFunc} />
         </div> */}
         {!(userData.permissions === "biz" && creatorIdPermissions === "admin") &&
            <div>
               <BtnIcon icon='/images/icons/delete.svg'
                  text={language.DELETE_TEMPLATE}
                  textColor="#EF0E0E"
                  onClick={deleteTempFunc} />
            </div>}
      </div>
   )
}

export default MoreMenuTemplate