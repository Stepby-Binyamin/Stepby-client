import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function BusinessName({ newUser = true, BusinessName }) {

    const { header } = useContext(mainContext)
    const navigate = useNavigate(),
    [input, setInput] = useState()

    useEffect(() => {
        header.setIsTitle(false)
    }, [])

    const handleChange = (e)=>{
        setInput(e.target.value)
        console.log(0);
    }

    const handleClickNew = ()=>{
        navigate('/category', {state: input})
        console.log(input);

    }

    const handleClickExist = ()=>{
        console.log(input);
    }

    return (
        <div className={styles.box}>
            <div  className={styles.title}>
                <UserTitle text={languages[0].dict.BUSINESS_NAME_HEADER}/>
            </div>
            <div className={styles.input}>
                <Input type='text' onChange={handleChange} placeholder={newUser ? languages[0].dict.YOUR_BUSINESS_NAME : ''} defaultValue={!newUser ? BusinessName : ''} />
            </div>
            <div className={styles.btn}>
                <BtnSubmitIcon color='orange' icon={newUser ? 'Arrow.svg':'v to text.svg'} func={newUser?handleClickNew:handleClickExist} />
            </div>
        </div>
    )
}