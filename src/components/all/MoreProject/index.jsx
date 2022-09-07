import React, { version } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


const MoreProject = ({ style = {}, completeProjectFunc, deleteProjectFunc, ...props }) => {
   const dict = languages[0].dict;

   return (
      <div className={styles.MoreProject}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/completed.svg' text={dict.COMPLET_PROJECT} onClick={completeProjectFunc} />      </div>
         <div className={styles.btn}><BtnIcon icon='/images/icons/delete.svg' text={dict.DEL_PROJECT} textColor="#EF0E0E" onClick={deleteProjectFunc} />      </div>
      </div>
   )
}

export default MoreProject