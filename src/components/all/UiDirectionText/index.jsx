import React from 'react'
import styles from "./style.module.css"

const UiDirectionText = ({ mainTitle, text1, text2, style = {marginTop:"100px"}, ...props }) => {

   return (
      <div className={styles.UiDirectionText} style={style} {...props} >
         <div className={styles.innerContainer}>
            <div className={styles.mainTitle} >{mainTitle}</div>
            <div className={styles.secondRaw} >
               {/* <div> */}
                  {text1}
               {/* </div> */}
               <img src='/images/icons/plusSmall.svg' alt="iconCallYou" className={styles.iconCallIcon} />
               {/* <div> */}
                  {text2}
               {/* </div> */}
               {/* {text2} */}
            </div>
         </div>
      </div>

   )
}

export default UiDirectionText