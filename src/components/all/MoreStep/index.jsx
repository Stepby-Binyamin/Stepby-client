import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'
import { useNavigate } from 'react-router-dom'

const MoreStep = ({ templateId, stepId, isTemplate = true, isApprove, style = {}, ...props }) => {
   console.log("🚀 ~ file: index.jsx:9 ~ MoreStep ~ isTemplate", isTemplate)
   const navigate = useNavigate()
   const { language, drawer } = useContext(mainContext)

   const duplicateStep = () => {
      apiCalls("put", "/template/duplicateStep/" + templateId, { stepId })
         .then((stepId) => {
            // console.log({ ...information, step: { ...information?.step, _id: stepId } });  //state in navigate?
            isTemplate ?
               navigate(`/template/${templateId}/edit-step/${stepId}`)
               :
               navigate(`/project/biz/${templateId}/edit-step/${stepId}`)
            drawer.setDrawer();
         });
   }

   const currentStep = () => {
      apiCalls("put", `/project/currentStep/${templateId}`, { stepId })
         .then((res) => {
            navigate(`/project/biz/${templateId}`)
            drawer.setDrawer()
         });
   }

   const deleteStep = () => {
      console.log("🚀 ~ file: index.jsx:34 ~ deleteStep ~ deleteStep", deleteStep)
      apiCalls("delete", "/template/deleteStep/" + templateId, { stepId })
         .then((result) => {
            console.log("🚀 ~ file: index.jsx:37 ~ .then ~ result", result)
            isTemplate ?
               navigate(`/template/${templateId}`)
               :
               navigate(`/project/biz/${templateId}`)
         })
         .catch(err => {
            console.log("🚀 ~ file: index.jsx:44 ~ deleteStep ~ err", err)
         })
      drawer.setDrawer();
   }

   return (
      <div className={styles.MoreStep}>
         {isTemplate ?
            <div className={styles.btn}>
               <BtnIcon icon='/images/icons/duplicate.svg' text={language.DUPLICATE_STEP} onClick={duplicateStep} />
            </div>
            :
            !isApprove && <div className={styles.btn1}>
               <BtnIcon icon='/images/icons/pin.svg' text={language.REQ_STEP} onClick={currentStep} />
            </div>}
         <div>
            <BtnIcon icon='/images/icons/delete.svg' text={language.DELETE_STEP} textColor="#EF0E0E" onClick={deleteStep} />
         </div>
      </div>
   )
}
export default MoreStep