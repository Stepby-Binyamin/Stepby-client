import React from 'react';
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';

const keyboardPlaceholder = 'שם השלב';
const subKeyboardPlaceholder = 'תיאור'
const text = 'לאחר שמירה אפשר בקלות להעשיר את השלב בתמונות וקבצים (ובעתיד הקרוב - בעוד ברבה יותר...)'
const StepBasics = ({ style = {}, ...props }) => {

   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >

            <Keyboard placeholder={keyboardPlaceholder} />
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>בטיפול...</div>
               </div>
               <RadioBtnWithIcon obj={[{ name: "שלי", icon: "triangle" }, { name: "הלקוח", icon: "circle" }]} />
            </div>
            <SubKeyboard iconSrc={'/images/icons/description.svg'} placeholder={subKeyboardPlaceholder} />
            <div className={styles.text}>{text}</div>

            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText icon={'v to text.svg'} color={"gray"} text={"שמירה"} />
               </div>
               <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText text={"שמירה + יצירת שלב נוסף"} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default StepBasics;