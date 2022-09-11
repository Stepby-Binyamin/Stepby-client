import React from 'react'
import styles from "./style.module.css"
export default function UserTitle({text1,text2}) {
  return (
    <div className={styles.box}>
    <h1>{text1}</h1>
    <h1>{text2}</h1>
    </div>
  )
}

