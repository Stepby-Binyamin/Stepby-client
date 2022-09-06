import React from 'react'
import styles from "./style.module.css"
export default function UserTitle({text}) {
  return (
    <div className={styles.box}>
    <h1>{text}</h1>
    </div>
  )
}

