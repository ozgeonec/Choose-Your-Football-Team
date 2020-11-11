import React from 'react'
import styles from './button-basic.module.css'
import cn from 'classnames'

function ButtonBasic({children, isClicked, ...props}) {
    return <button className={cn(!isClicked && styles.buttonBasic, isClicked && styles.buttonClicked)}{...props}>
        {children}
    </button>
}

export default ButtonBasic