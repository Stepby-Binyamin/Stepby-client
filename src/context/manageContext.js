import { useState } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import { projects, categories } from "../data/fakeProjects";

export const ContextProvider = ({ children }) => {

    // *** header state ***
    const [title, setTitle] = useState("Stepby");
    const [subTitle, setSubTitle] = useState();
    const [isTitle, setIsTitle] = useState(true);
    const [isArrow, setIsArrow] = useState(true);
    const [isHamburguer, setIsHamburguer] = useState(false);
    const [drawerContent, setDrawerContent] = useState();

    const [drawer, setDrawer] = useState(); // content of drawer

    return (
        <mainContext.Provider value={{
            drawer: {
                drawer,
                setDrawer
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
                drawerContent,
                setDrawerContent,
            }
        }}>
            <dataContext.Provider value={{ data: { projects, categories } }} >
                {children}
            </dataContext.Provider>
        </mainContext.Provider >
    )
}


