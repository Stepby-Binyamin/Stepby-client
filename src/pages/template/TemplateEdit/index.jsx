import React, { useState, useEffect, useContext } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import UiDirectionText from '../../../components/all/UiDirectionText'

const TemplateEdit = ({ style = {}, ...props }) => {

   const { header, drawer } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [stepData, setStepData] = useState(data.projects[3].steps[0])
   const [projectName, setProjectName] = useState(data.projects[3].name)
   const { MORE_TO_ADD, PRESS_ON, SHOW_MORE_DATA, DISPLAY_ALL, TREATMENT, CUSTOMER, MY } = languages[0].dict

   console.log(stepData);
   useEffect(() => {
      header.setTitle(stepData.name)
      header.setSubTitle(projectName)
   }, [])

   const openDrawer = () => {
      drawer.setDrawer("")
   }

   return (
      <div className={styles.TemplateEdit} style={style} {...props} >

         <div className={styles.preView} >
            <img src='/images/icons/incareMan.svg' />
            <div className={styles.inTreatTitle}>{TREATMENT}</div>
            <div className={styles.clientTreat} >
               <img src='/images/icons/circleOrange.svg' />
               <img src='/images/icons/triangleOrange.svg' />
               <div className={styles.treatOf} >{CUSTOMER}{MY}</div> 
            </div>
            <img src='/images/icons/textPrewIcon.svg' />
            <div className={styles.desText}>{stepData.des}</div>
            <div className={styles.displayAll}>{DISPLAY_ALL}</div>
         </div>
         <UiDirectionText mainTitle={MORE_TO_ADD} text1={PRESS_ON} text2={SHOW_MORE_DATA} />
         <BtnHolder buttons={[{ color: "lite", icon: "V" }, { color: "gray", icon: "+", func: openDrawer }]} />

      </div>
   )
}

export default TemplateEdit