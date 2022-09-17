import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import Confirm from '../../components/all/Confirm'
import Logo from '../../components/all/Logo'
import BtnCheckBox from '../../components/common/BtnCheckBox'
import BtnIcon from '../../components/common/BtnIcon'

import HeaderLogo from '../../components/common/HeaderLogo'
import HeaderTitle from '../../components/common/HeaderTitle'
import Input from '../../components/common/Input/Input'
import mainContext from '../../context/mainContext'

// import TempPDF from '../../components/common/TempPDF'
// import TempSimpleAnswer from '../../components/common/TempSimpleAnswer'
// import TempFile from '../../components/common/TempFile'
// import TempIMG from '../../components/common/TempIMG'

import UploadCShortAnswer from '../../components/common/UploadCShortAnswer'
import UploadedIMGView from '../../components/common/UploadedIMGView'
import UploadPicture from '../../components/common/UploadPicture'
// import UploadClientAnswer from '../../components/common/UploadClientAnswer'

import BExample1 from '../../pages/project/BExample1'
import BExample2 from '../../pages/project/BExample2'
import CreateTemplateGeneral from '../../components/all/CreateTemplateGeneral'

import axios from 'axios'

export default function Shaul() {

   //BtnCheckBox - how to set <BtnCheckBox /> example - dont DELETE IT

   // const dataTest = [
   //    { title: "A", isActive: false },
   //    { title: "B", isActive: false },
   //    { title: "C", isActive: false },
   //    { title: "D", isActive: false },]

   // useEffect(() => {
   //    setData(dataTest)
   // }, [])

   // const [data, setData] = useState()

   // const handleClick = (name) => {
   //    const result = data.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
   //    setData(result)
   // }
   const { header, drawer } = useContext(mainContext)

   // const fileName = "answerName.txt"
   const fileName = "Tour_Eiffel.jpg"
   // const fileName = "lesson.pdf"

   const onClickFile = async () => {
      axios({
         url: "http://localhost:5000/files/download",
         method: "POST",
         responseType: "blob",  // important
         data: {
            // This is the body part
            client: "solyattie",
            projectName: "fisrtProject",
            stepNum: "1",
            fileName: fileName,
            //  name: v.name,
            //  dir: v.dir,
         },
      }).then((response) => {
         console.log("response.data", response.headers["content-type"]);
         const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers["content-type"] }));
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", fileName);
         document.body.appendChild(link);
         link.click();
      });
   };


   // useEffect(() => {
   //    drawer.setDrawerContentHeader(<Confirm />)
   //    // header.setIsTitle(false)
   //    header.setTitle("אתר מרכז הצדקה")      // HeaderTitle
   //    header.setSubTitle("מורדי איזנשטיין")  // HeaderTitle
   //    header.setIsHamburguer(true)            // HeaderTitle
   //    // header.setIsDots(false)                 // HeaderTitle
   //    header.setIsArrow(false)                // HeaderLogo and HeaderTitle
   //    // header.setIsHeaderSet(false)            // HeaderLogo
   // }, [])
   function add() {
      drawer.setDrawer(<></>)
   }

   return (
      <>
         {/* <HeaderLogo /> */}
         {/* <HeaderTitle DrawerContentHeader={DrawerContentHeader} /> */}

         {/* {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />)} */}
         {/* <BExample1 /> */}
         <BExample2 />

         {/* <TempSimpleAnswer /> */}
         {/* <TempFile /> */}
         {/* <TempPDF /> */}

         {/* <UploadCShortAnswer /> */}
         {/* <UploadedIMGView /> */}
         {/* <TempIMG /> */}
         {/* <UploadPicture /> */}
         {/* <UploadClientAnswer /> */}
         {/* <CreateTemplateGeneral/> */}
         <button onClick={onClickFile}> click</button>

      </>
   )
}
