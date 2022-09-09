import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'


export default function NavLink({ firstText, secondText, ...props }) {
    // import {languages} in your page to get the text

    // first text hebrew: languages[0].dict.PROJECTS
    // second text hebrew: languages[0].dict.TEMPLATES

    return (
        <div className={styles.main}>
            {/* another way to filter 
              <Link to='/projects' className={window.location.pathname.split('/')[1] === 'projects'? styles.active : ''} {...props} >{firstText}</Link> */}

            <Link to='/projects' className={window.location.pathname.includes('projects') ? styles.active : ''} {...props} >{firstText}</Link>
            <Link to='/templates' className={window.location.pathname.includes('templates') ? styles.active : ''} {...props}>{secondText}</Link>
        </div>
    )
}