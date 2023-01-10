import React, { useState } from 'react'
import styles from "./style.module.css"

const Swipe = ({ style = {}, onSwipe, children, ...props }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [swipe, setSwipe] = useState(true)

    const handleTouchStart = (e) => {
        setSwipe(true)
        setTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        if ((touchStart - e.targetTouches[0].clientX) > 200 && swipe) {
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
export default Swipe