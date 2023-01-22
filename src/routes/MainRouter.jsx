import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserName from '../pages/user/UserName'
import Login from '../pages/user/LoginPage'
import Verification from '../pages/user/Verification'
import BusinessCategory from '../pages/user/BusinessCategory'
import BusinessName from '../pages/user/BusinessName'
import Setting from '../pages/user/Setting'
import HomeProject from '../pages/home/HomeProject'
import HomeTemplate from '../pages/home/HomeTemplate'
import Project from './../pages/common/Project'
import Step from '../pages/project/Step'
import StepEdit from '../pages/template/StepEdit'
import Aviad from './Aviad'
import { useState } from 'react'
import { useEffect } from 'react'
import mainContext from '../context/mainContext'

const MainRouter = () => {
    const { drawer } = useContext(mainContext)

    //  for web -->
    const [url, setUrl] = useState(window.location.pathname)
    useEffect(() => {
        if (window.location.pathname !== url) {
            drawer.setDrawer()
            setUrl(window.location.pathname)
        }
    })
    // <--
    return (
        <Routes>
            <Route path='/' element={<><Login /> <Aviad /></>} />
            <Route path='/login' element={<><Login /> <Aviad /></>} />
            <Route path='/verification' element={<Verification />} />
            <Route path='/user-name' element={<UserName />} />
            <Route path='/business-name' element={<BusinessName />} />
            <Route path='/business-category' element={<BusinessCategory />} />
            <Route path='/setting' element={<Setting />} />

            <Route path='/projects' element={<HomeProject />} />
            <Route path='/templates' element={<HomeTemplate />} />

            <Route path='/template/:templateId'  >
                <Route index element={<Project mode="template" />} />
                <Route path='step/:stepId' element={<Step mode="template" />} />
                <Route path='edit-step/:stepId' element={<StepEdit mode="template" />} />
            </Route>

            <Route path='project/biz/:templateId'>
                <Route index element={<Project mode="biz" />} />
                <Route path='step/:stepId' element={<Step mode="biz" />} />
                <Route path='edit-step/:stepId' element={<StepEdit mode="biz" />} />
            </Route>

            <Route path='project/client/:templateId'>
                <Route index element={<Project mode="client" />} />
                <Route path='step/:stepId' element={<Step mode="client" />} />
            </Route>

            <Route path='*' element={<></>} />
        </Routes>
    )
}
export default MainRouter
