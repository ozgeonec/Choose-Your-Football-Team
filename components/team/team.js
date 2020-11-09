import React from 'react'
import styles from './team.module.css'
import Avatar from "../avatar/avatar";
import Header from "../header/header";
//import cn from 'classnames'

function Team({children}) {
    return <div className={styles.team}>
        <Avatar src="https://bjk.com.tr/img/_old-site/amblem.jpg"/>
        <Header>{children}</Header>
    </div>
}

export default Team