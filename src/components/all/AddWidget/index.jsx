import React, { useContext } from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import mainContext from "../../../context/mainContext" 
export const AddWidget = () => {

    const { drawer, language} = useContext(mainContext)
    const onClick= (index)=>{
        switch (index) {
            case 0: drawer.setDrawer();
            break;
            case 1: drawer.setDrawer();
            break;
            case 2: drawer.setDrawer();
            break;
            case 3: drawer.setDrawer();
            break;
            case 4: drawer.setDrawer();
            break;
            case 5: drawer.setDrawer();
            break;
            case 6: drawer.setDrawer();
            break;
            case 7: drawer.setDrawer();
            break;
        }
        
    }

    return (
        <div className={styles.addWidget}>
            <div><label>איסוף מידע מהלקוח</label></div>
            <BtnIcon index={0} onClick={onClick} text={"תשובה פשוטה"} icon={"/images/icon-btns/answer.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={1} onClick={onClick} text={"העלאת קובץ / צילום"} icon={"/images/icon-btns/Upload.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={2} onClick={onClick} text={"בחירה מרשימה"} icon={"/images/icon-btns/list.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={3} onClick={onClick} text={"דירוג"} icon={"/images/icon-btns/grading.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={4} onClick={onClick} text={"דרישת תשלום"} icon={"/images/icon-btns/payment.svg"} isSoon={true} style={{ "marginBottom": "32px" }} />
            <div><label>הצגת מידע נוסף ללקוח</label></div>
            <BtnIcon index={5} onClick={onClick} text={"תמונה"} icon={"/images/icon-btns/image.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={6} onClick={onClick} text={"PDF קובץ "} icon={"/images/icon-btns/filePDF.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon index={7} onClick={onClick} text={"סרטון"} icon={"/images/icon-btns/video.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
        </div>
    )
}

