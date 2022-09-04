import React from 'react'
import styles from "./style.module.css"

const ListItem = ({
   style = {},
   inTreatmentOf = "me",
   title = "איסוף הרשאות",
   firstStep = true,
   current = true,
   status = "onHold",
   name,
   time = "0d",
   ...props
}) => {

   return (
      <li className={styles.ListItem} style={style} {...props} >

         {inTreatmentOf === "me" ?
            <img src={`/images/icons/triangle.svg`} alt="triangle" style={{ "margin-left": "11.5px" }} /> :
            <img src={`/images/icons/circle.svg`} alt="circle" style={{ "margin-left": "12px" }} />}
         {current ?
            <div className={styles.col}>
               <div className={styles.row}>

                  <div className={styles.current}>{title}</div>

                  {firstStep && <div className={styles.firstStep}>יוצאים לדרך!</div>}
               </div>

               {status === "complete" ?
                  <div className={styles.complete}>
                     <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "margin-left": "4px" }}  />
                     {/* <div></div> */}
                     הושלם
                     </div> :
                  <div className={styles.row}>
                     <div className={styles.onHold}>בהמתנה ל{name || "ך"} כבר</div>
                     <div className={styles.time}>{time}</div>
                  </div>}

            </div> :
            <div className={styles.grey}>{title}</div>
         }

      </li>
   )
}

export default ListItem