import React from 'react';
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import { languages } from '../../../functions/languages'
import { useState } from 'react';

const StepBasics = ({ style = {}, ...props }) => {
   const dict = languages[0].dict;


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


            <Keyboard name={"stepName"} placeholder={dict.STEP_NAME} onChange={onChangeHandler} />
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>{dict.CARE}</div>
               </div>

               <RadioBtnWithIcon changeFunc={onChangeHandler} obj={[{ name: dict.MY, icon: "triangle" }, { name: dict.CUSTOMER, icon: "circle" }]} />
            </div>
            <SubKeyboard name={"description"} onChange={onChangeHandler} iconSrc={'/images/icons/description.svg'} placeholder={dict.DESCRIPTION} />
            <div className={styles.text}>{dict.TEXT_STEP}</div>

            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText icon={'v to text.svg'} color={"gray"} text={dict.SAVE} func={btnSubmitHandler} />
               </div>
               <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText text={dict.SAVE_AND_CREATE} func={btnSubmitAndCreateHandler} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default StepBasics;