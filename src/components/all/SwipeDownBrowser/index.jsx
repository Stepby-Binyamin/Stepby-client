import React, { useState } from 'react'
import styles from "./style.module.css"

const SwipeDownBrowser = ({ style = {}, onSwipe, children, ...props }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [swipe, setSwipe] = useState(true)


    const handleTouchStart = (e) => {
        console.log(e.clientY)
        // setSwipe(true)
        // setTouchStart(e.targetTouches[0].clientY);
    }

    const handleTouchMove = (e) => {
        console.log(e.clientY)
        if ((touchStart - e.targetTouches[0].clientY) < -30 && swipe) {
            // setSwipe(false)
            onSwipe()
        }
    }




    return (
        <div className={styles.Name} onClickCapture={handleTouchStart} onGotPointerCapture={handleTouchMove}  >
            {children}
        </div>
    )
}

export default SwipeDownBrowser