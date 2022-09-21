import React, { useState, useContext } from 'react'
import styles from "./style.module.css";
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import RadioBtnWithIcon from '../radioBtn/WithIcon';
import BtnSubmitText from '../../common/BtnSubmitText';
import mainContext from "../../../context/mainContext"


const StepBasics = ({ fetchDataFunc, stepName, isCreatorApprove, description, style = {}, ...props }) => {

   const { drawer, language } = useContext(mainContext)

   const sort = isCreatorApprove ?
      [{ name: language.MY, icon: "triangle" }, { name: language.CUSTOMER, icon: "circle" }] :
      [{ name: language.CUSTOMER, icon: "circle" }, { name: language.MY, icon: "triangle" }]

   const [data, setData] = useState({ radio: "שלי" });

   console.log(data);

   const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log('name: ', name, 'value: ', value);
      setData(values => ({ ...values, [name]: value }));
   }

   const btnSubmitAndCreateHandler = () => {
      document.querySelector("#keyboard").value = "";
      document.querySelector("#subKeyboard").value = "";
      console.log("Submint And Create");
      fetchDataFunc(data);
   }

   const btnSubmitHandler = () => {
      fetchDataFunc(data);
      drawer.setDrawer();
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

               <RadioBtnWithIcon changeFunc={onChangeHandler} obj={sort} data={data} />
            </div>
            <SubKeyboard name={"description"} onChange={onChangeHandler} iconSrc={'/images/icons/description.svg'} placeholder={language.DESCRIPTION} defaultValue={description} />
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