import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import UiDirectionText from '../../../components/all/UiDirectionText'
import StepBasics from '../../../components/all/StepBasics'
import { AddWidget } from '../../../components/all/AddWidget'

const StepEdit = ({ style = {}, ...props }) => {

   const { header, drawer } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [stepData, setStepData] = useState(data.projects[3].steps[2])
   const [template, setTemplate] = useState(data.projects[3])
   const { MORE_TO_ADD, PRESS_ON, SHOW_MORE_DATA, DISPLAY_ALL, TREATMENT, CUSTOMER, MY } = languages[0].dict
   const navigate = useNavigate()
   // console.log(stepData);
   useEffect(() => {
      header.setTitle(stepData.name)
      header.setSubTitle(template.name)
   }, [])

   const openDrawer = (e) => {
      e.target.id === "display" ?
         drawer.setDrawer(<StepBasics />) :  //give this step as props and fill
         drawer.setDrawer(<AddWidget />)     //give this step as props
   }

   const viewStep = () => {
      navigate(`/template/${template._id}/step/${stepData._id}`, { state: stepData })
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

         <UiDirectionText mainTitle={MORE_TO_ADD} text1={PRESS_ON} text2={SHOW_MORE_DATA} />

         <BtnHolder buttons={[{ color: "lite", icon: "V", func: viewStep }, { color: "gray", icon: "+", func: openDrawer }]} />

      </div>
   )
}

export default StepEdit