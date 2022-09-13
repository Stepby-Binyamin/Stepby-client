import { useState, useEffect } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import userContext from "./userContext";
import languageContext from './languageContext'
import { projects, categories } from "../data/fakeProjects";
import { user } from "../data/fakeUser";
import axios from "axios"

export const ContextProvider = ({ children }) => {

    // *** header state ***
    const [title, setTitle] = useState("Stepby");
    const [subTitle, setSubTitle] = useState();
    const [isTitle, setIsTitle] = useState(true);
    const [isArrow, setIsArrow] = useState(true);
    const [isHamburguer, setIsHamburguer] = useState(false);
    const [isDots, setIsDots] = useState(true)
    const [isHeaderSet, setIsHeaderSet] = useState(true)

    const [userData, setUserData] = useState()//only one user
    const [Drawer, setDrawer] = useState(); // content of drawer
    const [DrawerContentHeader, setDrawerContentHeader] = useState();

    const [language, setLanguage] = useState()
    
    const lang = 0
    useEffect(() => {
        
      localStorage.language ?
      setLanguage(JSON.parse(localStorage.language)) :

         axios.get('http://localhost:5000/language/' + lang)
            .then(response => {
               setLanguage(response.data.dict)
               localStorage.language = JSON.stringify(response.data.dict)
            })
            .catch(error => {
               console.log(error)
            });

   }, [])

    return (

        <mainContext.Provider value={{
            drawer: {
                Drawer,
                setDrawer,
                DrawerContentHeader,
                setDrawerContentHeader,
            },
            header: {
                title,
                setTitle,
                subTitle,
                setSubTitle,
                isTitle,
                setIsTitle,
                isArrow,
                setIsArrow,
                isHamburguer,
                setIsHamburguer,
                isDots,
                setIsDots,
                isHeaderSet,
                setIsHeaderSet,
            },
            language

        }}>
            <userContext.Provider value={{ userData, setUserData }}>
                <dataContext.Provider value={{ data: { projects, categories } }} >
                    {children}
                </dataContext.Provider>
            </userContext.Provider>
        </mainContext.Provider >
    )
}


