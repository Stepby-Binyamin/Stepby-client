import React from 'react';
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import {useState} from 'react';

const keyboardPlaceholder = 'שם השלב';
const subKeyboardPlaceholder = 'תיאור'
const text = 'לאחר שמירה אפשר בקלות להעשיר את השלב בתמונות וקבצים (ובעתיד הקרוב - בעוד ברבה יותר...)'
const StepBasics = ({ style = {}, ...props }) => {

   const [data,setData] = useState({});

   const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({ ...values, [name]: value }));
  }

  const btnSubmitAndCreateHandler = ()=> {
      console.log(data);
      console.log("Submint And Create");
  }
  const btnSubmitHandler = ()=> {
      console.log("Submit");
  }


   return (
      <div className={styles.StepBasicsContainer} >
         <div className={styles.StepBasicsInnerContainer} >

            <Keyboard name={"stepName"} placeholder={keyboardPlaceholder} onChange={onChangeHandler}/>
            <div className={styles.radioButton}>
               <div className={styles.rightContainer}>
                  <img src='/images/icons/menWithV.svg' alt="" />
                  <div className={styles.radioText}>בטיפול...</div>
               </div>
               <RadioBtnWithIcon changeFunc={onChangeHandler} obj={[{ name: "שלי", icon: "triangle" }, { name: "הלקוח", icon: "circle" }]} />
            </div>
            <SubKeyboard name={"description"} onChange={onChangeHandler} iconSrc={'/images/icons/description.svg'} placeholder={subKeyboardPlaceholder} />
            <div className={styles.text}>{text}</div>

            <div className={styles.buttonsContainer}>
               <div className={styles.saveButton}>
                  <BtnSubmitText icon={'v to text.svg'} color={"gray"} text={"שמירה"} func={btnSubmitHandler} />
               </div>
               <div className={styles.saveAndCreateButton}>
                  <BtnSubmitText text={"שמירה + יצירת שלב נוסף"} func={btnSubmitAndCreateHandler}/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default StepBasics;