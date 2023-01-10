import styles from "./style.module.css"
import React, { useContext, useEffect, useState } from 'react'
import StatusStep from "../../../components/all/StatusStep"
import Answer from "../../../components/all/Answer"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import BtnConfirm from "../../../components/common/BtnSubmitIcon"
import Confirm from "../../../components/all/Confirm"
import mainContext from "../../../context/mainContext"

const BExample1 = () => {
    const { header, drawer, language } = useContext(mainContext)

    const dataBEx1 = [{
        title: "אפיון מרכיבי ניווט ודף ראשי",
        text: "בשלב זה אני מתמקד ביסודות של כל האתר - הניווט והדף הראשי. בהתאם לנקודות שעלו בפגישת ההתנעה שקיימנו, אני מוודא שמרכיבי הניווט יניעו את הגולשים למקום הנכון ויאפשרו גישה נוחה לניווט החופשי.השלב הזה צפוי לקחת בין 6-8 ימי עבודה, אלא אם דיברנו בפירוש על לוחות זמנים אחרים.בקובץ המצורף תוכלו לראות דוגמא לאפיון והסבר על 3 הנקודות שחשוב שתתמקדו בהן כשאשלח את לכם את קבצי האפיון."
    }]

    useEffect(() => {
        header.setIsTitle(false)
        header.setDrawerContentHeader(<Confirm />)
        header.setTitle("2אתר מרכז הצדקה")
        header.setSubTitle("מורדי איזנשטיין")
        header.setIsArrow(true)
        header.setIsHamburguer(false)
    }, [])

    return (
        <div className={styles.page}>
            <StatusStep numOfStage="5" user="לעמרם" time="1W" />
            <div className={styles.title}>{dataBEx1[0].title}</div>
            <div className={styles.text}>{dataBEx1[0].text}</div>
            <div className={styles.pdf} onClick={() => alert("click")}>
                <Answer src="/images/icon-btns/filePDF.svg"
                    title="אפיון ודוגמאות ששווה לראות"
                    p="לצפייה בקובץ לוחצים כאן"
                    isTitleFirst={true}
                    isAdmin={false}
                />
            </div>
            <div className={styles.btns}>
                <BtnHolder color="lite" icon="pencil" />
                <BtnConfirm icon="v.svg" color="gray" />
            </div>
        </div>
    )
}
export default BExample1