import styles from "./style.module.css"
import React, { useContext, useEffect, useState } from 'react'

import { headerTitleContext } from '../../helper/Context'

import HeaderTitle from "../../components/common/HeaderTitle"
import StatusStep from "../../components/all/StatusStep"

import dataBEx1 from "./dataBEx1.js"
import BtnIcon from "../../components/common/BtnIcon"
import BtnsBox from "../../components/common/BtnsBox"
import BtnConfirm from "../../components/common/BtnSubmitIcon"
import Answer from "../../components/all/Answer"
import BtnHolder from "../../components/common/BtnHolder/BtnHolder"

const BExample1 = () => {
    const headerTitleContextLocal = useContext(headerTitleContext)

    const [isArrow, setIsArrow] = useState(true)
    const [isHamburguer, setIsHamburguer] = useState(false)

    useEffect(() => {
        headerTitleContextLocal.setTitle("אתר מרכז הצדקה")
        headerTitleContextLocal.setSubtitle("מורדי איזנשטיין")
    }, [])

    return (
        <div className={styles.page}>
            <HeaderTitle isArrow={isArrow} isHamburguer={isHamburguer} />
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