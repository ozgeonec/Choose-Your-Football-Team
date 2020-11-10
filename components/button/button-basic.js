import React from 'react'
import styles from './button-basic.module.css'
//import cn from 'classnames'

function ButtonBasic({children}) {
    return <button className={styles.buttonBasic}>
        {children}
    </button>
}

export default ButtonBasic