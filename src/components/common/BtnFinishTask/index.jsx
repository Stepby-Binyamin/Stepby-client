import React from 'react'
import styles from "./style.module.css"
import BtnConfirm from "../BtnConfirm"

export default function BtnFinishTask({btn, ...props}) {
    return(
        <div className={styles.pos}>
          <div className={styles.pos2}>
           {btn}
         <BtnConfirm/>
          </div>
        </div>
      );
}