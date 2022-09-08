import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './style.module.css'


export default function InputVerification() {
    const [inputData, setInputData] = useState({ inputOne: "", inputTwo: "", inputThree: "", inputFour: "" })

    const inputOne = useRef(null)
    const inputTwo = useRef(null)
    const inputThree = useRef(null)
    const inputFour = useRef(null)

    useEffect(() => {
        inputOne.current.focus();
    }, [])

    const handlePress = (e) => {

        if (e.target.name === 'inputOne' && e.target.value !== 0) {
            inputTwo.current.focus();
            setInputData({ ...inputData, inputOne: e.target.value[e.target.value.length - 1] })
        }
        if (e.target.name === 'inputTwo' && e.target.value !== 0) {
            inputThree.current.focus();
            setInputData({ ...inputData, inputTwo: e.target.value[e.target.value.length - 1] })
        }
        if (e.target.name === 'inputThree' && e.target.value !== 0) {
            inputFour.current.focus();
            setInputData({ ...inputData, inputThree: e.target.value[e.target.value.length - 1] })
        }
        if (e.target.name === 'inputFour' && e.target.value !== 0) {
            setInputData({ ...inputData, inputFour: e.target.value[e.target.value.length - 1] })
            // console.log("in theory here i go to button");
        }

        if (e.target.name === 'inputOne' && e.key === "Backspace") {
            // console.log("123 mashu");
            // setInputData({ ...inputData, inputOne:"" })
            // console.log(inputOne);
            // inputOne.current.focus()
        }

    }

    return (
        <div className={styles.container} >
            <input className={styles.input} name='inputOne' value={inputData.inputOne} ref={inputOne} min={0} max={9} onChange={handlePress} type='number' />
            <input className={styles.input} name='inputTwo' value={inputData.inputTwo} ref={inputTwo} min={0} max={9} onChange={handlePress} type='number' />
            <input className={styles.input} name='inputThree' value={inputData.inputThree} ref={inputThree} min={0} max={9} onChange={handlePress} type='number' />
            <input className={styles.input} name='inputFour' value={inputData.inputFour} ref={inputFour} min={0} max={9} onChange={handlePress} type='number' />
        </div>
    )
}
