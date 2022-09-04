import React from 'react'
import { useState } from 'react'
import styles from './style.module.css'


export default function NavLink({onClick, firstText, secondText}){
    const [whoClicked, setWhoClicked] = useState()
    firstText = 'פרויקטים'
    secondText = 'תבניות'
    onClick = (text)=>{
        setWhoClicked(text)
    }
    return(
        <div className={styles.main}>
        <div className={whoClicked === firstText? styles.active: ''} onClick={()=>onClick(firstText)}>{firstText}</div>
        <div className={whoClicked === secondText? styles.active: ''} onClick={()=>onClick(secondText)}>{secondText}</div>
        </div>
    )
}