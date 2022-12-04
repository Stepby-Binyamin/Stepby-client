import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import mainContext from '../../../context/mainContext'
import apiCalls from "../../../functions/apiRequest"
import CreateClient from '../CreateClient';
import RadioBtnWithIcon from '../radioBtn/WithIcon';

const CreateProjectNewUser = ({ placeholder, templateName, templateId, ...props }) => {
    const navigate = useNavigate();
    const { drawer, language } = useContext(mainContext)

    const [data, setData] = useState({});
    const [select, setSelect] = useState(true);
    // const [change, setChange] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await apiCalls("get", "/user/get-my-clients")
            const clients = response.map(e => ({ ...e, isActive: false }))
            console.log("🚀 ~ file: index.jsx ~ line 26 ~ getData ~ clients", clients)
            setData((current) => ({ ...current, clients }))
        }
        getData();
    }, [])

    useEffect(() => {
        data.radio === language.NEW && setSelect(true);
        data.radio === language.EXIST && setSelect(false);
    }, [data])

    const newProject = (data) => {
        apiCalls('post', `/project/createProject/${templateId}`, data)
            .then(projectId => {
                console.log("🚀 ~ file: index.jsx ~ line 40 ~ newProject ~ projectId", projectId)
                navigate(`/project/biz/${projectId}`)
            })
            .catch(error => {
                console.log("🚀 ~ file: index.jsx ~ line 42 ~ newProject ~ error", error)
            });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));
    }
    const btnSelectClient = (name) => {
        const clients = data.clients?.map(elem => elem.fullName === name ?
            ({ ...elem, isActive: !elem.isActive })
            : ({ ...elem, isActive: false }))
        setData((current) => ({ ...current, clients }))
    }
    const btnCreateProject = () => {
        data.clients = data.clients?.filter(e => e.isActive === true)
        newProject({ projectName: data.projectName, clientId: data.clients[0]._id, isNewClient: false })
        // setChange(data.projectName)
        drawer.setDrawer()
    }
    const btnNext = () => {
        drawer.setDrawer(<CreateClient createProject={true} data_={data} templateId={templateId} />)
    }

    return (
        <div className={styles.container}>
            <Keyboard
                onChange={handleChange}
                placeholder={language.NAME_NEW_PROJECT}
                name={"projectName"} />
            <div className={styles.subContainer}>
                <div className={styles.sub}>
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/template.svg' alt="" />
                        <div className={styles.text}>{language.TEMPLATE}: '{templateName}'</div>
                    </div>
                </div>
            </div>

            <div className={styles.subContainer}>
                <div className={styles.radioButton}>
                    <RadioBtnWithIcon
                        changeFunc={handleChange}
                        obj={[{ name: language.NEW }, { name: language.EXIST }]} />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/menWithV.svg' alt="" />
                        <div className={styles.text}>{language.CUSTOMER}</div>
                    </div>
                </div>
                {!select &&
                    <div className={styles.categories}>
                        {data.clients?.map(elem => <BtnCheckBox
                            handleClick={btnSelectClient}
                            name={elem.fullName}
                            isActive={elem.isActive}
                            id={elem._id}
                            key={elem.fullName} />)}
                    </div>
                }
            </div>
            {!select &&
                <div className={styles.btn}>
                    <BtnSubmitText
                        func={btnCreateProject}
                        color={"gray"}
                        text={language.CREATE_PROJECT}
                        icon={"v to text.svg"} />
                </div>}
            {select &&
                <div className={styles.btnFix}>
                    <BtnSubmitText
                        func={btnNext}
                        color={"gray"}
                        text={language.CONTINUED} />
                </div>}
        </div>

    )
}

export default CreateProjectNewUser;