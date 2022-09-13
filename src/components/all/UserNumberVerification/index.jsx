import React from 'react'
import { languages } from '../../../functions/languages'



export default function UserNumberVerification({ counter,  ilPhoneNum1 }) {
    const sendCode = languages[0].dict.SEND_CODE;
       let ilPhoneNum = ilPhoneNum1
    const resendCode1 = languages[0].dict.RESEND_CODE, resendCode2 = languages[0].dict.RESEND_CODE_END;


    return (
        <>
            {counter > 0 ?
                <div><b>{resendCode1}</b> {` ${resendCode2}`} {ilPhoneNum}</div> :
                <div>{sendCode} {ilPhoneNum}</div>
            }
        </>
    )
}
