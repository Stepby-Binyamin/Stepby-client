import React, { useState } from 'react'
import styles from "./style.module.css"

const Swipe = ({ style = {}, onSwipe, children, ...props }) => {
    const [touchStart, setTouchStart] = useState(0);


    const handleTouchStart = (e) => {
        // onSwipe(false)
        console.log(e.targetTouches[0].clientX)
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        console.log(touchStart - e.targetTouches[0].clientX)
        if (touchStart - e.targetTouches[0].clientX > 250) {
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