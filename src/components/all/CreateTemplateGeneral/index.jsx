import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import mainContext from '../../../context/mainContext'
import apiCalls from '../../../functions/apiRequest';
import RadioBtnWithIcon from '../radioBtn/WithIcon';

const CreateTemplateGeneral = () => {
    const navigate = useNavigate();
    const { drawer, language } = useContext(mainContext)

    const [categories, setCategories] = useState({});
    const [isGeneral, setIsGeneral] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await apiCalls("get", "/category/")
            console.log("🚀 ~ file: index.jsx ~ line 23 ~ getData ~ res", res)
            setCategories((current) => ({ ...current, res }))
        }
        getData()
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        value === language.GENERAL && setIsGeneral(true)
        value === language.SOME_CUSTOMER && setIsGeneral(false);
        setCategories(values => ({ ...values, [name]: value }));
    }
    const btnUpdateCategories = (name) => {
        const categoriesUpdate = categories?.res.map(elem => elem.categoryName === name ?
            ({ ...elem, isActive: !elem.isActive }) : elem)
        setCategories((current) => ({ ...current, res: categoriesUpdate }))
    }
    const btnCreateTemplate = () => {
        drawer.setDrawer()
        apiCalls("post", "/template/createTemplateAdmin", { ...categories, isGeneral: isGeneral })
            .then((res) => {
                navigate(`/template/${res.message._id}`)
            })
    }
    return (
        <div className={styles.container}>
            <Keyboard onChange={handleChange} placeholder={language.TEMPLATES_NAME} name={"templateName"} />
            <div className={styles.subContainer}>
                <div className={styles.radioButton}>
                    <RadioBtnWithIcon
                        changeFunc={handleChange}
                        obj={[{ name: language.GENERAL }, { name: language.SOME_CUSTOMER }]}
                    />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/target.svg' alt="" />
                        <div className={styles.text}>{language.DISPERSTION}</div>
                    </div>
                </div>
                {isGeneral &&
                    <div className={styles.categories}>
                        {categories.res?.map(elem => <BtnCheckBox handleClick={btnUpdateCategories}
                            name={elem.categoryName}
                            id={elem._id}
                            isActive={elem.isActive}
                            key={elem._id} />)}
                    </div>}
                {!isGeneral &&
                    <SubKeyboard iconSrc={'/images/icons/tell.svg'}
                        placeholder={language.USER_PHONE}
                        onChange={handleChange}
                        name={"phoneNumber"}
                        type={"number"} />}
            </div>
            <div className={isGeneral ? styles.btn : styles.btnFix}>
                <BtnSubmitText func={btnCreateTemplate} color={"gray"} text={language.SAVE} icon={"v to text.svg"} />
            </div>
        </div>

    )
}
export default CreateTemplateGeneral;