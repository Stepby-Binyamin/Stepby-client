import { useState, useEffect } from "react";
import mainContext from './mainContext'
import userContext from "./userContext";
import apiCalls from "../functions/apiRequest";

export const ContextProvider = ({ children }) => {
    // *** header state ***
    const [title, setTitle] = useState("Stepby");
    const [subTitle, setSubTitle] = useState();
    const [isTitle, setIsTitle] = useState(true);
    const [isArrow, setIsArrow] = useState(true);
    const [isHamburguer, setIsHamburguer] = useState(false);
    const [isDots, setIsDots] = useState(true)
    const [isHeaderSet, setIsHeaderSet] = useState(true)

    const [userData, setUserData] = useState(localStorage.user? JSON.parse(localStorage.user) : {})//only one user
    const [Drawer, setDrawer] = useState(); // content of drawer
    const [DrawerContentHeader, setDrawerContentHeader] = useState();
    const localStorageLang = localStorage.language? JSON.parse(localStorage.language) : ""
    const [language, setLanguage] = useState(localStorageLang)

    const lang = 0
    
    useEffect(() => {
        apiCalls("get", "/language/" + lang)
            .then(response => {
                console.log("🚀 ~ file: manageContext.js:36 ~ useEffect ~ response", response)
                setLanguage(response.dict)
                localStorage.language = JSON.stringify(response.dict)
            })
            .catch(error => {
                console.log("🚀 ~ file: manageContext.js:34 ~ useEffect ~ error", error)
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
                    {children}
            </userContext.Provider>
        </mainContext.Provider >
    )
}

