import React, { useContext } from 'react'
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import styles from "./style.module.css"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from '../../common/BtnSubmitText';
import mainContext from "../../../context/mainContext"
import RadioBtnWithIcon from '../radioBtn/WithIcon';

//TODO: language
const UserOnly = ({ style = {}, ...props }) => {
   const { language } = useContext(mainContext)
   const keyboardPlaceholder = 'שם התבנית החדשה...'
   const subKeyboardPlaceholder = 'אימייל או ID'
   return (
      <div className={styles.UserOnlyContainer}>
         <div className={styles.inputContainer}>
            <Keyboard placeholder={keyboardPlaceholder} />

            <div className={styles.radioButton}>
               {/* <RadioBtn arr={['כללי','לקוח מסוים']}/> */}
               <RadioBtnWithIcon
                  changeFunc={(e) => { console.log("????????"); }}
                  obj={[{ name: language.GENERAL }, { name: language.SOME_CUSTOMER }]}
               />
               <div className={styles.rightContainer}>
                  <img src='/images/icons/target.svg' alt="" />
                  <div className={styles.text}>תפוצה</div>
               </div>
            </div>
            <SubKeyboard iconSrc={'/images/icons/userOnly.svg'} placeholder={subKeyboardPlaceholder} />
         </div>
         <BtnSubmitText text={'שמירה'} color={'gray'} icon={'v to text.svg'} />
      </div>
   )
}

export default UserOnly;