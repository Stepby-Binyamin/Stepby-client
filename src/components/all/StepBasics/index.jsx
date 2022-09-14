import React, { useState, useContext} from 'react'
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import mainContext from "../../../context/mainContext"


const StepBasics = ({ stepName, status, des, style = {}, ...props }) => {
   
   const {language}= useContext(mainContext)


   const [data, setData] = useState({});

   const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({ ...values, [name]: value }));
   }

   const btnSubmitAndCreateHandler = () => {
      console.log(data);
      console.log("Submint And Create");
   }
   const btnSubmitHandler = () => {
      console.log("Submit");
   }


   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >


            <Keyboard name={"stepName"} placeholder={language.STEP_NAME} onChange={onChangeHandler} defaultValue={stepName} />
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>{language.CARE}</div>
               </div>

               <RadioBtnWithIcon changeFunc={onChangeHandler} obj={[{ name: language.MY, icon: "triangle" }, { name: language.CUSTOMER, icon: "circle" }]} />
            </div>
            <SubKeyboard name={"description"} onChange={onChangeHandler} iconSrc={'/images/icons/description.svg'} placeholder={language.DESCRIPTION} defaultValue={des} />
            <div className={styles.text}>{language.TEXT_STEP}</div>

            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText icon={'v to text.svg'} color={"gray"} text={language.SAVE} func={btnSubmitHandler} />
               </div>
               <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText text={language.SAVE_AND_CREATE} func={btnSubmitAndCreateHandler} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default StepBasics;