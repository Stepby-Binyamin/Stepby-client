import { useState } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import userContext from "./userContext";
import { projects, categories } from "../data/fakeProjects";
import { user } from "../data/fakeUser";

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
    const [drawer, setDrawer] = useState(); // content of drawer
    const [DrawerContentHeader, setDrawerContentHeader] = useState();

    return (

        <mainContext.Provider value={{
            drawer: {
                drawer,
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

        }}>
            <userContext.Provider value={{ userData, setUserData }}>
                <dataContext.Provider value={{ data: { projects, categories } }} >
                    {children}
                </dataContext.Provider>
            </userContext.Provider>
        </mainContext.Provider >
    )
}


