import React from 'react'
import styles from './division-small.module.css'
import Header from "../header/header";
//import cn from 'classnames'

function DivisionSmall({children}) {
    return <div className={styles.divSmall}>
        <Header>{children}</Header>
    </div>
}

export default DivisionSmall