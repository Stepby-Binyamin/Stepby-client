import { useState } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import fakeProject from "../data/fakeProjects";

export const ContextProvider = ({ children }) => {

    // *** header state ***
    const [title, setTitle] = useState("Stepby");
    const [subTitle, setSubTitle] = useState();
    const [isTitle, setIsTitle] = useState(true);
    const [isArrow, setIsArrow] = useState(true);
    const [isHamburguer, setIsHamburguer] = useState(false);
    const [drawerFunc, setDrawerFunc] = useState(false);
    
    const [drawer, setDrawer] = useState(); // content of drawer

    // *** fake data ***
    const [projectsData, setProjectsData] = useState(fakeProject);

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
                drawerFunc,
                setDrawerFunc,
            }
        }}>
            <dataContext.Provider value={{ projectsData, setProjectsData }}>
                {children}
            </dataContext.Provider>
        </mainContext.Provider>
    )
}


