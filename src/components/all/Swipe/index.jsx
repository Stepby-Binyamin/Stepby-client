import React, { Children, useState } from 'react'
import styles from "./style.module.css"

const Swipe = ({ style = {}, ...props }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        console.log(e.targetTouches[0].clientX)
        setTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        console.log(e.targetTouches[0].clientX)
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        // console.log(e.targetTouches[0].clientX)
        // if (touchStart - touchEnd > 150) {
        //     // do your stuff here for left swipe
        //     // moveSliderRight();
        // }
    }




    return (
        <div className={styles.Name} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} handleTouchMove={handleTouchMove}  >


        </div>
    )
}

export default Swipe