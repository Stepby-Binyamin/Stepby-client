import React from 'react'
import styles from "./style.module.css"

export default function BtnSave ({text, func, ...props}) {
    return(
        <button className={styles.button} onClick={()=> func}>
        <img className={styles.img} src="./images/icon-btns/Vector.svg" alt="✔" />
       {text}
      </button>
      );
}