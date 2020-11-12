import React from 'react'
import styles from './button.module.css'
//import cn from 'classnames'

function Button({children}) {
    return <button type="submit" className={styles.button}>
        {children}
    </button>
}

export default Button