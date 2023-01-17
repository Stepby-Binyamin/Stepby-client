import React, { useState, useContext } from 'react'
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import mainContext from "../../../context/mainContext"

const StepBasics = ({ isNew, fetchDataFunc, stepName, isCreatorApprove, description, style = {}, ...props }) => {
   const { drawer, language } = useContext(mainContext)
   const [data, setData] = useState({ radio: isCreatorApprove ? language.MY : language.THE_CUSTOMER });

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
      fetchDataFunc(data);
      console.log("🚀 ~ file: index.jsx:28 ~ saveStep ~ data", data)
      addStep ? newStep() : drawer.setDrawer();
   }

   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >
            <Keyboard
               name={"stepName"}
               placeholder={language.STEP_NAME}
               onChange={onChangeHandler}
               defaultValue={stepName} />
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
               defaultValue={description} />
            <div className={styles.text}>{language.TEXT_STEP}</div>
            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText
                     icon={'v to text.svg'}
                     color={"gray"}
                     text={language.SAVE}
                     func={() => saveStep(false)} />
               </div>
               {isNew && <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText
                     text={language.SAVE_AND_CREATE}
                     func={() => saveStep(true)} />
               </div>}
            </div>
         </div>
      </div>
   )
}
export default StepBasics;