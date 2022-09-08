import React from 'react'
import { languages } from '../../../functions/languages'



export default function UserNumberVerification({ counter, phoneNum }) {
    const sendCode = languages[0].dict.SEND_CODE;
    let start="054",end="7668489";
    if(phoneNum){
         start = phoneNum.slice(0, 3)
         end = phoneNum.slice(3)
    }
    const ilPhoneNum = `${start}-${end}`
    const resendCode1 = languages[0].dict.SEND_CODE, resendCode2 = "שוב";


    return (
        <>
            {counter > 0 ?
                <div><b>{resendCode1}</b> {` ${resendCode2}`} {ilPhoneNum}</div> :
                <div>{sendCode} {ilPhoneNum}</div>
            }
        </>
    )
}
