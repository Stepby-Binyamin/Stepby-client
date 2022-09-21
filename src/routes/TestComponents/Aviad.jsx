import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Answer from '../../components/all/Answer';
import mainContext from '../../context/mainContext'
import userContext from '../../context/userContext';
import apiCalls, { setToken } from "../../functions/apiRequest"

export default function Aviad() {
   const users = [
      { type: 'Biz', id: '631ee9f9d86c3d2ab5a08814' },
      { type: 'Admin', id: '6322e6562e79794c3c19db36' },
      { type: 'Biz', id: '632ae63713f39728402a6608' }]

   const { userData, setUserData } = useContext(userContext)
   const navigate = useNavigate();
   const { header, drawer } = useContext(mainContext);

   const handleClick = (id) => {
      apiCalls('post', '/user/loginToUser', { id })
         .then(res => {
            console.log(res);
            setToken(res.token)
            setUserData(res.user)
            localStorage.user = JSON.stringify(res.user)
            localStorage.token = res.token
            navigate('/projects')
         })
         .catch(error => {
            console.log(error)
         });
   }

   return (
      <>
         {users.map((v, i) => {
            return <Answer
               key={v.id}
               src="/images/icons/userOnly.svg"
               title={"משתמש " + i}
               p={v.type}
               isTitleFirst={true}
               isAdmin={false}
               onClick={() => handleClick(v.id)}
            />

         })}


      </>
   )
}
