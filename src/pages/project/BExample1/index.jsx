import styles from "./style.module.css"
import React, { useContext, useEffect, useState } from 'react'

import HeaderTitle from "../../../components/common/HeaderTitle"
import StatusStep from "../../../components/all/StatusStep"

import dataBEx1 from "./dataBEx1.js"
import BtnConfirm from "../../../components/common/BtnSubmitIcon"
import Answer from "../../../components/all/Answer"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import mainContext from "../../../context/mainContext"
import Confirm from "../../../components/all/Confirm"

const BExample1 = () => {
    const {header,drawer} = useContext(mainContext)

    useEffect(() => {
        header.setIsTitle(false)
        // header.setDrawerContent(<Confirm/>)
        // header.setTitle("אתר מרכז הצדקה")
        // header.setSubTitle("מורדי איזנשטיין")
        // header.setIsArrow(true)
        // header.setIsHamburguer(false)
    }, [])

    return (
        <div className={styles.page}>
            <StatusStep numOfStage="5" user="לעמרם" time="1W" />
            <div className={styles.title}>{dataBEx1[0].title}</div>
            <div className={styles.text}>{dataBEx1[0].text}</div>

            <div className={styles.pdf} onClick={()=>alert("click")}>
                <Answer src="/images/icon-btns/filePDF.svg" 
                title="אפיון ודוגמאות ששווה לראות" 
                p="לצפייה בקובץ לוחצים כאן" 
                isTitleFirst={true} 
                isAdmin={false} 
                 />
            </div>

            <div className={styles.btns}>
                {/* <div className={styles.boxHolder}></div> */}
                <BtnHolder color="lite" icon="pencil"/>
                <BtnConfirm icon="v.svg" color="gray" />
            </div>
        </div>
    )
}

export default BExample1