import React from 'react';
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import { languages } from '../../../functions/languages'


const StepBasics = ({ style = {}, ...props }) => {
   const dict = languages[0].dict;


   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >

            <Keyboard placeholder={dict.STEP_NAME} />
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>{dict.CARE}</div>
               </div>
               <RadioBtnWithIcon obj={[{ name: dict.ME, icon: "triangle" }, { name: dict.CUSTOMER, icon: "circle" }]} />
            </div>
            <SubKeyboard iconSrc={'/images/icons/description.svg'} placeholder={dict.DESCRIPTION} />
            <div className={styles.text}>{dict.TEXT_STEP}</div>

            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText icon={'v to text.svg'} color={"gray"} text={dict.SAVE} />
               </div>
               <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText text={dict.SAVE_AND_CREATE} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default StepBasics;