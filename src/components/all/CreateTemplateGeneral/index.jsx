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
import userContext from '../../../context/userContext';

const CreateTemplateGeneral = () => {
    const navigate = useNavigate();
    const { drawer, language } = useContext(mainContext)
    const { userData } = useContext(userContext)

    const [data, setData] = useState({ templateName: '', phoneNumber: '' });
    const [isGeneral, setIsGeneral] = useState(true);

    const [missingTemplateName, setMissingTemplateName] = useState(false)
    const [missingUserPhone, setMissingUserPhone] = useState(false)

    const [isUserFound, setIsUserFound] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const categories = await apiCalls("get", "/category/")
            setData((current) => ({ ...current, categories }))
        }
        getData()
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        value === language.GENERAL && setIsGeneral(true)
        value === language.SOME_CUSTOMER && setIsGeneral(false);
        setData(values => ({ ...values, [name]: value }));
    }
    const btnUpdateCategories = (name) => {
        const categoriesUpdate = data?.categories.map(elem => elem.categoryName === name ?
            ({ ...elem, isActive: !elem.isActive }) : elem)
        setData((current) => ({ ...current, categories: categoriesUpdate }))
    }
    const btnCreateTemplate = () => {
        if (data.templateName === '') {
            setMissingTemplateName(true)
            return
        }
        if (!isGeneral && data.phoneNumber === '') {
            setMissingUserPhone(true)
            return
        }
        apiCalls("post", "/template/createTemplateAdmin", { templateName: data.templateName, categories: data.categories, isGeneral: isGeneral, phoneNumber: data.phoneNumber })
            .then((res) => {
                console.log("🚀 ~ file: index.jsx:56 ~ .then ~ res", res)
                apiCalls("post", "/files/create-project", { bizId: isGeneral ? userData._id : res.creatorId, projectId: res._id })
                    .then(() => {
                        navigate(`/template/${res._id}`)
                        drawer.setDrawer()
                    })
            })
            .catch((err) => {
                console.log("🚀 ~ file: index.jsx:60 ~ btnCreateTemplate ~ err", err.response.data.message === "error - user phone doesn't exist")
                err.response.data.message === "error - user phone doesn't exist" ? setIsUserFound(false) : setIsUserFound(true)
            })
    }

    return (
        <div className={styles.container}>
            <Keyboard
                onChange={handleChange}
                placeholder={language.TEMPLATES_NAME}
                name={"templateName"}
                missingData={missingTemplateName} />
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
                        {data.categories?.map(elem => <BtnCheckBox handleClick={btnUpdateCategories}
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
                        type={"number"}
                        missingData={missingUserPhone} />}
                {!isGeneral && !isUserFound && <div className={styles.user_not_found}>מספר הפלאפון לא קיים במערכת</div>}
                {/* TODO */}
            </div>
            <div className={isGeneral ? styles.btn : styles.btnFix}>
                <BtnSubmitText func={btnCreateTemplate} color={"gray"} text={language.SAVE} icon={"v to text.svg"} />
            </div>
        </div>

    )
}
export default CreateTemplateGeneral;