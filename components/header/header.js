import React from 'react'
import styles from './header.module.css'
//import cn from 'classnames'

function Header({children}) {
    return <h1 className={styles.header}>
        {children}
    </h1>
}

export default Header