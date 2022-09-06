import React from 'react'
import styles from './style.module.css'
import { languages } from '../../../functions/languages'

export default function SomethingWentWrong() {
    const somethingWrong= languages[0].dict.SOMETHINGS_WRONG
 return (<div className={styles.box}>
    <div>{somethingWrong}</div>
  </div>
  )
}
