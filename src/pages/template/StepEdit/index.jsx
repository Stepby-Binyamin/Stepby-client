import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from "./style.module.css"
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
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

const StepEdit = ({ style = {}, ...props }) => {


   const { header, drawer, language} = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [stepData, setStepData] = useState(data.projects[3].steps[1])
   const [template, setTemplate] = useState(data.projects[3])
   const { MORE_TO_ADD, PRESS_ON, SHOW_MORE_DATA, DISPLAY_ALL, TREATMENT, CUSTOMER, MY } = language
   const navigate = useNavigate()
   const {state} = useLocation() 

   useEffect(() => {
      header.setTitle(stepData.name)
      header.setSubTitle(template.name)
      drawer.setDrawerContentHeader(<MoreStep duplicateFunc={''} CurrentStepFunc={''} deleteFunc={''} />)
   }, [])

   const openDrawer = (e) => {
      e.target.id === "display" ?
         drawer.setDrawer(<StepBasics stepName={stepData.name} status={stepData.status} des={stepData.des} />) :  //give this step as props and fill
         drawer.setDrawer(<AddWidget />)     //give this step as props
   }

   const viewStep = () => {
      navigate(`/template/${template._id}/step/${stepData._id}`, { state: stepData })
   }

   const onClickItem = (data, type) => {
      switch (type) {
         case 'file' : drawer.setDrawer(<TempFile data={data} />);
         break;
         case 'img' : drawer.setDrawer(<TempIMG data={data} />);
         break;
         case 'pdf' : drawer.setDrawer(<TempPDF data={data} />);
         break;
         case 'answer' : drawer.setDrawer(<TempSimpleAnswer data={data} />);
         break;
      }
   }

   return (
      <div className={styles.StepEdit} style={style} {...props} >

         <div className={styles.preView} >

            <div className={styles.raw1} >
               <img src='/images/icons/incareMan.svg' />
               <div className={styles.inTreatTitle}>{TREATMENT}</div>
               <div className={styles.inTreatBox} >
                  {stepData.status === "biz" ?                    //get fake data status
                     <img src='/images/icons/triangleOrange.svg' /> :
                     <img src='/images/icons/circleOrange.svg' />
                  }
                  <div className={styles.inTreatOf} >{stepData.status === "biz" ? MY : CUSTOMER}</div>
               </div>
            </div>

            <div className={styles.raw2} >
               <img src='/images/icons/textPrewIcon.svg' />
               <div className={styles.desContainer} >
                  <div className={styles.desText}>{stepData.des}</div>
                  <div className={styles.displayAll} onClick={(e) => openDrawer(e)} id="display">{DISPLAY_ALL}</div>
               </div>
            </div>

         </div>

         {stepData && (stepData.data.length > 0 ?
            stepData.data.map(item =>
               <StepEditListItem key={item.index} title={item.title} text={item.content} type={item.type} onClickItem={onClickItem} data={item} />
            ) :
            <UiDirectionText mainTitle={MORE_TO_ADD} text1={PRESS_ON} text2={SHOW_MORE_DATA} />
         )}

         <BtnHolder buttons={[{ color: "lite", icon: "V", func: viewStep }, { color: "gray", icon: "+", func: openDrawer }]} />

      </div>
   )
}

export default StepEdit