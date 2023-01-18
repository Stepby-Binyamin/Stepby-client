import React from 'react'
import styles from './style.module.css'

function Loading() {
    return (
        <div class={styles.lds_spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Loading

