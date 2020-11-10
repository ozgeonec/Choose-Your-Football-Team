import React from 'react'
import styles from './text.module.css'
//import cn from 'classnames'

function Text({children}) {
    return <p className={styles.text}>
        {children}
    </p>
}

export default Text