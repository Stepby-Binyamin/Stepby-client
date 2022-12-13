import React, { useContext } from 'react'
import mainContext from '../../../context/mainContext';

const UserNumberVerification = ({ counter, ilPhoneNum1 }) => {
    const { language } = useContext(mainContext)

    return (
        <>
            {counter > 0 ?
                <div>
                    <b>{language.RESEND_CODE}</b> {` ${language.RESEND_CODE_END}`} {ilPhoneNum1}
                </div>
                :
                <div>{language.SEND_CODE} {ilPhoneNum1}</div>
            }
        </>
    )
}
export default UserNumberVerification
