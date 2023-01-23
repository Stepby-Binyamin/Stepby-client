import React, { useState, useContext } from 'react'
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import mainContext from "../../../context/mainContext"

const StepBasics = ({ isNew, fetchDataFunc, stepName, isCreatorApprove, description, style = {}, ...props }) => {
   console.log("🚀 ~ file: index.jsx:10 ~ StepBasics ~ description", description)
   const { drawer, language } = useContext(mainContext)
   const [data, setData] = useState({
      radio: isCreatorApprove ? language.MY : language.THE_CUSTOMER,
      stepName: stepName ? stepName : '',
      description: description ? description : ''
   });

   const [missingStepName, setMissingStepName] = useState(false)
   const [missingDescription, setMissingDescription] = useState(false)

   const [loadingBtnSave, setLoadingBtnSave] = useState(false)
   const [loadingBtnSaveAndCreate, setLoadingBtnSaveAndCreate] = useState(false)


   const sort = isCreatorApprove ?
      [{ name: language.MY, icon: "triangle" }, { name: language.THE_CUSTOMER, icon: "circle" }] :
      [{ name: language.THE_CUSTOMER, icon: "circle" }, { name: language.MY, icon: "triangle" }]

   const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({ ...values, [name]: value }));
   }
   const newStep = () => {
      console.log("🚀 ~ file: index.jsx ~ line 33 ~ newStep ~ newStep")
      //TODO delete stepName and description
   }
   const saveStep = (addStep) => {
      console.log("🚀 ~ file: index.jsx:34 ~ saveStep ~ saveStep")
      console.log("🚀 ~ file: index.jsx:36 ~ saveStep ~ data.stepName === ''", data.stepName === '')
      console.log("🚀 ~ file: index.jsx:42 ~ saveStep ~ data.description === ''", data.description === '')

      if (data.stepName === '') {
         setMissingStepName(true)
         return
      }
      if (data.description === '') {
         setMissingDescription(true)
         return
      }
      addStep ? setLoadingBtnSaveAndCreate(true) : setLoadingBtnSave(true)
      fetchDataFunc(data);
      addStep ? newStep() : drawer.setDrawer();
      setTimeout(() => {
         setLoadingBtnSaveAndCreate(false)
      }, 1000);
   }

   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >
            <Keyboard
               name={"stepName"}
               placeholder={language.STEP_NAME}
               onChange={onChangeHandler}
               defaultValue={stepName}
               missingData={missingStepName} />
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>{language.CARE}</div>
               </div>
               <RadioBtnWithIcon
                  changeFunc={onChangeHandler}
                  obj={sort}
                  data={data} />
            </div>
            <SubKeyboard
               name={"description"}
               onChange={onChangeHandler}
               iconSrc={'/images/icons/description.svg'}
               placeholder={language.DESCRIPTION}
               defaultValue={description}
               missingData={missingDescription} />
            <div className={styles.text}>{language.TEXT_STEP}</div>
            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText
                     icon={'v to text.svg'}
                     color={"gray"}
                     text={language.SAVE}
                     func={() => saveStep(false)}
                     isLoading={loadingBtnSave}
                  />
               </div>
               {isNew && <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText
                     text={language.SAVE_AND_CREATE}
                     func={() => saveStep(true)}
                     isLoading={loadingBtnSaveAndCreate} />
               </div>}
            </div>
         </div>
      </div>
   )
}
export default StepBasics;