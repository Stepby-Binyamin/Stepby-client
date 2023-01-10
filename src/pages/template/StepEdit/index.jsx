import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import styles from "./style.module.css"
import mainContext from '../../../context/mainContext'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import UiDirectionText from '../../../components/all/UiDirectionText'
import StepBasics from '../../../components/all/StepBasics'
import AddWidget from '../../../components/all/AddWidget'
import StepEditListItem from '../../../components/common/StepEditListItem'
import MoreStep from '../../../components/all/MoreStep'
import TempPDF from '../../../components/common/TempPDF'
import TempFile from '../../../components/common/TempFile'
import TempIMG from '../../../components/common/TempIMG'
import TempSimpleAnswer from '../../../components/common/TempSimpleAnswer'
import apiCalls from '../../../functions/apiRequest'

const StepEdit = ({ mode }) => {
   const navigate = useNavigate()
   const { state } = useLocation()
   const { stepId, templateId } = useParams()
   const { header, drawer, language } = useContext(mainContext)

   const [information, setInformation] = useState()

   useEffect(() => {
      state ?
         setInformation(state)
         :
         apiCalls("get", `/template/getStepById/${templateId}/${stepId}`)
            .then(response => { setInformation(response) })
            .catch(error => { console.log(error) });

      header.setIsArrow(true)
      drawer.setDrawerContentHeader(<MoreStep duplicateFunc={duplicateStep} CurrentStepFunc={''} deleteFunc={deleteStep} isTemplate={mode === "template"} />)
      console.log("🚀 ~ file: index.jsx ~ StepEdit ~ state", state)
      console.log("🚀 ~ file: index.jsx ~ StepEdit ~ mode", mode)
   }, [state, stepId])

   useEffect(() => {
      header.setTitle(information?.step?.name)
      header.setSubTitle(information?.tempName)
   }, [information])

   const onClickItem = (type, data_) => {
      const data = {
         ...data_,
         stepId: stepId,
         templateId: templateId,
         // owner: information?.step.isCreatorApprove ? "biz" : "client",
         type
      }
      switch (type) {
         case 'file': drawer.setDrawer(<TempFile data={data} />);
            break;
         case 'img': drawer.setDrawer(<TempIMG data={data} />);
            break;
         case 'pdf': drawer.setDrawer(<TempPDF data={data} />);
            break;
         case 'answer': drawer.setDrawer(<TempSimpleAnswer fetchDataFunc={addAnswerToStep} data={data} />);
            break;
         default:
            break;
      }
   }
   const editStep = (data) => {
      if (data === undefined) return
      const { radio } = data;
      const isCreatorApprove = radio === language.THE_CUSTOMER ? false : true
      const dataToServer = { ...data, stepId, isCreatorApprove }
      console.log("🚀 ~ file: index.jsx:64 ~ editStep ~ dataToServer", dataToServer)
      apiCalls("put", "/template/edit-step/" + templateId, dataToServer)
         .then((result) => { setInformation((current) => ({ ...current, step: result })) }
         )
   }
   const addAnswerToStep = (data) => {
      const dataToServer = { ...data, stepId }
      console.log("🚀 ~ file: index.jsx:70 ~ addAnswerToStep ~ dataToServer", dataToServer)
      apiCalls("put", "/template/dataToStep/" + templateId, dataToServer)
         .then((result) => {
            console.log("🚀 ~ file: index.jsx:79 ~ .then ~ result", result)
            setInformation((current) => ({ ...current, step: result }))
         });
      drawer.setDrawer()
   }
   const openDrawer = (e) => {
      e.target.id === "display" ?
         drawer.setDrawer(<StepBasics
            fetchDataFunc={editStep}
            stepName={information?.step?.name}
            isCreatorApprove={information?.step.isCreatorApprove}
            description={information?.step?.description} />)
         :
         drawer.setDrawer(<AddWidget func={onClickItem} />)
   }
   const viewStep = () => {
      mode === "biz" ?
         navigate(`/project/${mode}/${templateId}/step/${information.step._id}`, { state: information })
         :
         navigate(`/${mode}/${templateId}/step/${information.step._id}`, { state: information })
   }
   const duplicateStep = () => {
      apiCalls("put", "/template/duplicateStep/" + templateId, { stepId })
         .then((stepId) => {
            // console.log({ ...information, step: { ...information?.step, _id: stepId } });  //state in navigate?
            navigate(`/template/${templateId}/edit-step/${stepId}`);
            drawer.setDrawer();
         });
   }
   const deleteStep = () => {
      apiCalls("delete", "/template/deleteStep/" + templateId, { stepId })
         .then((result) => { console.log(result); });
      navigate(`/template/${templateId}`);
      drawer.setDrawer();
   }

   return (
      <div className={styles.StepEdit}  >
         <div className={styles.preView} >
            <div className={styles.raw1} >
               <img src='/images/icons/incareMan.svg' alt="" />
               <div className={styles.inTreatTitle}>
                  {language.TREATMENT}
               </div>
               <div className={styles.inTreatBox} >
                  {information?.step && information?.step.isCreatorApprove ?
                     <img src='/images/icons/triangleOrange.svg' alt="" />
                     :
                     <img src='/images/icons/circleOrange.svg' alt="" />
                  }
                  <div className={styles.inTreatOf}>
                     {information?.step && information?.step.isCreatorApprove ? language.MY : language.CUSTOMER}
                  </div>
               </div>
            </div>
            <div className={styles.raw2} >
               <img src='/images/icons/textPrewIcon.svg' alt="" />
               <div className={styles.desContainer} >
                  <div className={styles.desText}>
                     {information?.step && information?.step.description}
                  </div>
                  <div className={styles.displayAll} onClick={(e) => openDrawer(e)} id="display">
                     {language.DISPLAY_ALL}
                  </div>
               </div>
            </div>
         </div>
         {information?.step && information?.step.data && (information?.step.data.length > 0 ?
            information?.step.data.map(item =>
               <StepEditListItem
                  key={item.index}
                  title={item.title}
                  text={item.content}
                  type={item.type}
                  // onClickItem={() => onClickItem(item.type, { title: item.title })}
                  data={{ ...item }} />
            ) :
            <UiDirectionText
               mainTitle={language.MORE_TO_ADD}
               text1={language.PRESS_ON}
               text2={language.SHOW_MORE_DATA} />
         )}
         <BtnHolder
            buttons={[{ color: "lite", icon: "V", func: viewStep },
            { color: "gray", icon: "+", func: openDrawer }]} />

      </div>
   )
}
export default StepEdit