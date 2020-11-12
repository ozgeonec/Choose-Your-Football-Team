import React from 'react'
import styles from './division-small.module.css'
import Header from "../header/header";
//import cn from 'classnames'

function DivisionSmall({header ,children}) {
    return <div className={styles.divSmall}>
        <Header>{header}</Header>
        {children}
    </div>
}

export default DivisionSmall