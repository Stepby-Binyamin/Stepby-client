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

    const [data, setData] = useState({ projectName: '' });
    const [select, setSelect] = useState(true);

    const [missingProjectName, setMissingProjectName] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await apiCalls("get", "/user/get-my-clients")
            const clients = response.map(e => ({ ...e, isActive: false }))
            console.log("🚀 ~ file: index.jsx ~ line 26 ~ getData ~ clients", clients)
            setData((current) => ({ ...current, clients }))
        }
        getData();
    }, [])

    const clientMode = (e) => {
        const value = e.target.value;
        value === language.NEW && setSelect(true);
        value === language.EXIST && setSelect(false);
        setData(values => ({ ...values, radio: value }));
    }
    const btnSelectClient = (name) => {
        const clients = data.clients?.map(elem => elem.fullName === name ?
            ({ ...elem, isActive: !elem.isActive })
            : ({ ...elem, isActive: false }))
        setData((current) => ({ ...current, clients }))
    }
    const newProject = (dataToServer) => {
        apiCalls('post', `/project/createProject/${templateId}`, dataToServer)
            .then(project => {
                apiCalls("post", "/files/create-project", { bizId: project.creatorId, projectId: project._id })
                    .then(() => navigate(`/project/biz/${project._id}`))
            })
            .catch(error => {
                console.log("🚀 ~ file: index.jsx ~ line 42 ~ newProject ~ error", error)
            });
    }
    const btnCreateProject = () => {
        if (data.projectName === '') {
            setMissingProjectName(true)
            return
        }
        data.clients = data.clients?.filter(e => e.isActive === true)
        newProject({ projectName: data.projectName, clientId: data.clients[0]._id, isNewClient: false })
        drawer.setDrawer()
    }
    const btnNext = () => {
        if (data.projectName === '') {
            setMissingProjectName(true)
            return
        }
        drawer.setDrawer(<CreateClient createProject={true} data_={data} templateId={templateId} />)
    }

    return (
        <div className={styles.container}>
            <Keyboard
                onChange={(e) => setData(values => ({ ...values, projectName: e.target.value }))}
                placeholder={language.NAME_NEW_PROJECT}
                name={"projectName"}
                missingData={missingProjectName} />
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
                        changeFunc={clientMode}
                        obj={[{ name: language.NEW, disable: false }, { name: language.EXIST, disable: !data?.clients?.length }]} />
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