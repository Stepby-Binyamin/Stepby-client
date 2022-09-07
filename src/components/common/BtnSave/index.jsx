import React from 'react'
import styles from "./style.module.css"

export default function BtnSave ({text, func, ...props}) {
    return(<div className={styles.con} >
        <button className={styles.btn} onClick={()=> alert("ass")}>
        <img className={styles.img} src="./images/icon-btns/text.svg" alt="✔" />    
{text}
      </button>
    </div>
      );
}