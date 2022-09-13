import React, { useContext} from 'react'
import mainContext from '../../../context/mainContext';



export default function UserNumberVerification({ counter,  ilPhoneNum1 }) {

    const {language} = useContext(mainContext)
    const sendCode = language.SEND_CODE;
       let ilPhoneNum = ilPhoneNum1
    const resendCode1 = language.RESEND_CODE, resendCode2 = language.RESEND_CODE_END;


    return (
        <>
            {counter > 0 ?
                <div><b>{resendCode1}</b> {` ${resendCode2}`} {ilPhoneNum}</div> :
                <div>{sendCode} {ilPhoneNum}</div>
            }
        </>
    )
}
