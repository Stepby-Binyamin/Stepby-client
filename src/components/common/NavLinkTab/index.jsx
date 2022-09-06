import React from 'react'
import styles from './style.module.css'

export default function NavLinkTab({firstText, secondText, thirdText, counter, state, setState }) {

    counter = counter > 0 ? `(${counter})` : counter


    return (
        <div className={styles.main}>
            <div className={state === firstText ? styles.active : ''} onClick={() => setState(firstText)}>{firstText} {counter && counter}</div>
            <div className={state === secondText ? styles.active : ''} onClick={() => setState(secondText)}>{secondText} {counter && counter}</div>
            {thirdText &&
                <div className={state === thirdText ? styles.active : ''} onClick={() => setState(thirdText)}>{thirdText} {counter && counter}</div>
            }
        </div>
    )
}