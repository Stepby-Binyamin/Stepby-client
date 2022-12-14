import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../../../context/mainContext'
import styles from './style.module.css'

const NavLink = () => {
    const { language } = useContext(mainContext)

    return (
        <div className={styles.main}>
            <Link to='/projects' className={window.location.pathname.split('/')[1] === 'projects' ? styles.active : ''}  >
                {language.PROJECTS}
            </Link>
            <Link to='/templates' className={window.location.pathname.split('/')[1] === 'templates' ? styles.active : ''} >
                {language.TEMPLATES}
            </Link>
        </div>
    )
}
export default NavLink