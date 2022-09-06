import React, { useState } from 'react'
import styles from "./style.module.css"

const SwipeDown = ({ style = {}, onSwipe, children, ...props }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [swipe, setSwipe] = useState(true)


    const handleTouchStart = (e) => {
        setSwipe(true)
        setTouchStart(e.targetTouches[0].clientY);
    }

    const handleTouchMove = (e) => {

        if ((touchStart - e.targetTouches[0].clientY) < -30 && swipe) {
            setSwipe(false)
            onSwipe()
        }
    }




    return (
        <div className={styles.Name} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}  >
            {children}
        </div>
    )
}

export default SwipeDown