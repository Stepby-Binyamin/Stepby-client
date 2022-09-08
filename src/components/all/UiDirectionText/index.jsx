import React from 'react'
import styles from "./style.module.css"

const UiDirectionText = ({mainTitle, text1, text2, style = {}, ...props }) => {

   return (
      <div className={styles.UiDirectionText} style={style} {...props} >
         <div className={styles.noProjectsContainer}>
            <div className={styles.letStart} >{mainTitle}</div>
            <div className={styles.iconCall} >
               {text1}
               <img src='/images/icons/iconCallYou.svg' alt="iconCallYou" className={styles.iconCallIcon} />
               {text2}
            </div>
         </div>
      </div>

   )
}

export default UiDirectionText