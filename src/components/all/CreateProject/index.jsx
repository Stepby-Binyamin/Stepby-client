import React from 'react'
import styles from "./style.module.css"
import BtnSubmitText from '../../common/BtnSubmitText'
import { languages } from '../../../functions/languages'


const CreateProject = ({ style = {}, ...props }) => {

   const dict = languages[0].dict;

   return (
      <div className={styles.container}>
         <div className={styles.innerContainer}>
            <div className={styles.title}>{dict.START}</div>
            <div className={styles.subtitle}>{dict.START_P}</div>
            <img src='\images\createProject.svg' alt="" />
            <div className={styles.btnContainer}>
               <BtnSubmitText color={'gray'} icon={'v to text.svg'} text={dict.UNDERSTOOD} />
            </div>
         </div>
      </div>
   )
}

export default CreateProject;