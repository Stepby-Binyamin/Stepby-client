import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import styles from "./style.module.css"
import mainContext from '../../../context/mainContext'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import UiDirectionText from '../../../components/all/UiDirectionText'
import StepBasics from '../../../components/all/StepBasics'
import { AddWidget } from '../../../components/all/AddWidget'
import StepEditListItem from '../../../components/common/StepEditListItem'
import MoreStep from '../../../components/all/MoreStep'
import TempPDF from '../../../components/common/TempPDF'
import TempFile from '../../../components/common/TempFile'
import TempIMG from '../../../components/common/TempIMG'
import TempSimpleAnswer from '../../../components/common/TempSimpleAnswer'
import apiCalls from '../../../functions/apiRequest'

const StepEdit = ({ style = {}, ...props }) => {


   const { header, drawer, language } = useContext(mainContext)
   const { state } = useLocation()
   const { stepId, templateId } = useParams()
   const [stepData, setStepData] = useState()
   const { MORE_TO_ADD, PRESS_ON, SHOW_MORE_DATA, DISPLAY_ALL, TREATMENT, CUSTOMER, MY } = language
   const navigate = useNavigate()
   // console.log(state);
   // console.log('stepData:', stepData);

   useEffect(() => {
      (state && state.step) ?
         setStepData(state.step) :
         apiCalls("get", `/template/getStepById/${templateId}/${stepId}`)
            .then(response => {
               setStepData(response)
               console.log(response);
            })
            .catch(error => {
               console.log(error)
            });

      if (state && state.tempName)
         localStorage.setItem("tempName", JSON.stringify(state.tempName));


      stepData && header.setTitle(stepData.name)
      header.setIsArrow(true)
      header.setSubTitle((state.tempName) || (localStorage.tempName && JSON.parse(localStorage.tempName)))
      drawer.setDrawerContentHeader(<MoreStep duplicateFunc={duplicateStep} CurrentStepFunc={''} deleteFunc={deleteStep} />)
   }, [])

   const onClickItem = (type, data = { stepId: stepData._id, tempId: templateId }) => {
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

   const openDrawer = (e) => {
      e.target.id === "display" ?
         drawer.setDrawer(<StepBasics fetchDataFunc={editStep} stepName={stepData.name} isCreatorApprove={stepData.isCreatorApprove} description={stepData.description} />) :
         drawer.setDrawer(<AddWidget func={onClickItem} />)
   }

   const viewStep = () => {
      navigate(`/template/${templateId}/step/${stepData._id}`, { state: { stepData, stepId: stepData._id, tempId: templateId } })
   }

   const editStep = (data) => {
      // console.log('stepData: ', stepData);
      const { radio } = data;
      // console.log('radio: ', radio);
      const dataToServer = { ...data, stepId, isCreatorApprove: radio === 'הלקוח' ? false : true }
      console.log('dataToServer: ', dataToServer);
      apiCalls("put", "/template/edit-step/" + templateId, dataToServer).then((result) => {
         const res = result.filter(v => v._id === stepId)[0];
         setStepData(res);
      }
      )
   }
   const duplicateStep = () => { // steps list won't re-render when user go back to the list! need to be fixed.
      apiCalls("put", "/template/duplicateStep/" + templateId, {stepId}).then((result) => {
         console.log(result);
      });
      navigate(-1);
      drawer.setDrawer();
   }
   const deleteStep = () => {
      apiCalls("delete", "/template/deleteStep/" + templateId, {stepId}).then((result) => {
         console.log(result);
      });
      navigate(-1);
      drawer.setDrawer();
   }

   const addAnswerToStep = (data) => {

      const dataToServer = {...data, stepId}
      apiCalls("put", "/template/dataToStep/" + templateId, dataToServer).then((result) => {
         setStepData((current)=> ({...current, data: result }));
      });
      console.log("stepData.data: ",  stepData.data);
      
   }

   return (
      <div className={styles.StepEdit} style={style} {...props} >
         <div className={styles.preView} >

            <div className={styles.raw1} >
               <img src='/images/icons/incareMan.svg' alt="" />
               <div className={styles.inTreatTitle}>{TREATMENT}</div>
               <div className={styles.inTreatBox} >
                  {stepData && stepData.isCreatorApprove ?
                     <img src='/images/icons/triangleOrange.svg' alt="" /> :
                     <img src='/images/icons/circleOrange.svg' alt="" />
                  }
                  <div className={styles.inTreatOf} >{stepData && stepData.isCreatorApprove ? MY : CUSTOMER}</div>
               </div>
            </div>

            <div className={styles.raw2} >
               <img src='/images/icons/textPrewIcon.svg' alt="" />
               <div className={styles.desContainer} >
                  <div className={styles.desText}>{stepData && stepData.description}</div>
                  <div className={styles.displayAll} onClick={(e) => openDrawer(e)} id="display">{DISPLAY_ALL}</div>
               </div>
            </div>

         </div>

         {stepData && stepData.data && (stepData.data.length > 0 ?
              stepData.data.map(item =>
               <StepEditListItem key={item.index} title={item.title} text={item.content} type={item.type} onClickItem={onClickItem} data={{ ...item, stepId: stepData._id, tempId: templateId }} />
            ) :
            <UiDirectionText mainTitle={MORE_TO_ADD} text1={PRESS_ON} text2={SHOW_MORE_DATA} />
         )}

         <BtnHolder buttons={[{ color: "lite", icon: "V", func: viewStep }, { color: "gray", icon: "+", func: openDrawer }]} />

      </div>
   )
}

export default StepEdit