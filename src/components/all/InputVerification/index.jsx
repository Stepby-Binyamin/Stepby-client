import React from 'react'
import { useState } from 'react'
import styles from './style.module.css'


export default function InputVerification() {
    const [clicked, setClicked] = useState(),
    [input1, setInput1] = useState('')


    const handleClick = (num)=>{
        setClicked(num)
    }

    const handleInput = (e)=>{
        const numRgx = /^[+-]?\d*(?:[.,]\d*)?$/;
        if(numRgx.test(e.target.value)){
        const value = e.target.value.replace(('e'/'E'), '')
        setInput1(value)
    }
        console.log(1234, e.target.value);
    }

    const handleChange = (e)=>{
        const numRgx = /^[+-]?\d*(?:[.,]\d*)?$/;
        if(!numRgx.test(e.target.value)){
        const value = e.target.value.replace(numRgx,'')
        setInput1(value)
    }
        console.log(1234, e.target.value);
    }

    const handlePress = (e)=>{
        setClicked(clicked+1)
        console.log(clicked, e.key);
        if(e.length>=1){
            // onfocus
        }
    }

    return (
        <div className={styles.container}>
                <input className={styles.input} onChange={handleChange} value={input1}maxLength={1} className={clicked === 4? styles.active : ''} onInput={handleInput} onKeyPress={()=>handlePress(window.event)} onClick={()=>handleClick(4)}  type='number'/>
                {/* <input maxLength={1} className={clicked === 3? styles.active : ''} onChange={()=>handleChange()} onKeyPress={()=>handlePress(window.event)} onClick={()=>handleClick(3)} type='number'/>
                <input maxLength={1} className={clicked === 2? styles.active : ''} onChange={()=>handleChange()} onKeyPress={()=>handlePress(window.event)} onClick={()=>handleClick(2)} type='number'/>
                <input maxLength={1} className={clicked === 1? styles.active : ''} onChange={()=>handleChange()} onKeyPress={()=>handlePress(window.event)} onClick={()=>handleClick(1)} type='number'/> */}
        </div>
    )
}
