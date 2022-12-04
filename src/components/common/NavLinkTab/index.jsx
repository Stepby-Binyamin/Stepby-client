import React from 'react'
import styles from './style.module.css'

const NavLinkTab = ({ firstText, secondText, thirdText, counter, state, setState, counter2, counter3 }) => {
    counter = counter > 0 ? `(${counter})` : counter
    counter2 = counter2 > 0 ? `(${counter2})` : counter2
    counter3 = counter3 > 0 ? `(${counter3})` : counter3

    return (
        <div className={styles.main}>
            <div className={state === firstText ? styles.active : ''} onClick={() => setState(firstText)}>
                {firstText} {counter && counter}
            </div>
            <div className={state === secondText ? styles.active : ''} onClick={() => setState(secondText)}>
                {secondText} {counter2 && counter2}
            </div>
            {thirdText &&
                <div className={state === thirdText ? styles.active : ''} onClick={() => setState(thirdText)}>
                    {thirdText} {counter3 && counter3}
                </div>}
        </div>
    )
}
export default NavLinkTab