import React, { useState } from 'react'
import styles from "./style.module.css"

const ListItem = ({
   style = {},
   inTreatmentOf = "me",  //"client"
   stepName = "איסוף הרשאות",
   firstStep = true,
   current = true,
   status = "בהמתנה ל",  //"בטיפול " "complete"
   clientName,
   projectName,
   templateName,
   time = "0d",
   up,
   down,
   ...props
}) => {

   const [showMoveArrow, setShowMoveArrow] = useState(false);

   const moveItem = () => {
      setShowMoveArrow(!showMoveArrow);
   }


   return (
      <li className={styles.ListItem} onClick={moveItem} style={style} {...props} >

         {showMoveArrow && <>
            <img src={`/images/icons/listArrowDown.svg`} onClick={()=>down()} alt="move down" style={{ "marginLeft": "4px" }} />
            <img src={`/images/icons/listArrowUp.svg`} onClick={()=>up()} alt="move up" style={{ "marginLeft": "7.5px" }} /> </>
         }

         {inTreatmentOf === "me" ?
            <img src={`/images/icons/triangle.svg`} alt="triangle" style={{ "marginLeft": "11.5px" }} /> :
            <img src={`/images/icons/circle.svg`} alt="circle" style={{ "marginLeft": "12px" }} />
         }

         {current ?
            <div className={styles.col}>
               <div className={styles.row}>

                  <div className={styles.current}>{stepName}</div>

                  {firstStep &&
                     <div className={styles.firstStep}>יוצאים לדרך!</div>
                  }

               </div>

               {status === "complete" ?
                  <div className={styles.complete}>
                     <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "marginLeft": "4px" }} />
                     הושלם
                  </div> :

                  <div className={styles.row}>
                     <div className={styles.onHold}>{status}{clientName || "ך"} כבר</div>
                     <div className={styles.time}>{time}</div>
                  </div>
               }

            </div> :
            <div className={styles.grey}>{stepName}</div>
         }

      </li>
   )
}

export default ListItem