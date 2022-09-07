import React from 'react'
import Keyboard from '../Keyboard';
import SubKeyboard from '../SubKeyboard';
import styles from "./style.module.css"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from '../../common/BtnSubmitText';

const keyboardPlaceholder = 'שם התבנית החדשה...'
const subKeyboardPlaceholder = 'אימייל או ID'

const UserOnly = ({ style = {}, ...props }) => {
   return (
      <div className={styles.UserOnlyContainer}>
      <div className={styles.inputContainer}>
         <Keyboard placeholder={keyboardPlaceholder}/>
         
         <div className={styles.radioButton}>
         <RadioBtn arr={['כללי','לקוח מסוים']}/>
         <div className={styles.rightContainer}>
         <img src='/images/icons/target.svg'  alt=""/>
         <div className={styles.text}>תפוצה</div>
         </div>
         </div>
         <SubKeyboard iconSrc={'/images/icons/userOnly.svg'} placeholder={subKeyboardPlaceholder}/>
      </div>
         <BtnSubmitText text={'שמירה'}color={'gray'} icon={'v to text.svg'}/>
      </div>
   )
}

export default UserOnly;