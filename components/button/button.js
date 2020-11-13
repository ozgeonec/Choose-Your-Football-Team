import React from 'react'
import styles from './button.module.css'
import Link from "next";
import cn from 'classnames'

function LinkButton({ href, children, ...props }) {
    return (
        <Link href={href}>
            <a {...props}>{children}</a>
        </Link>
    )
}
function BaseButton({ children, ...props }) {
    return (
        <button type="button" {...props}>
            {children}
        </button>
    )
}
function Button({ full = false, children, className, ...props }) {
    const Comp = props.href ? LinkButton : BaseButton
    return (

        <Comp className={cn(styles.button, className)} {...props}>
            {children}
        </Comp>
    )
}

export default Button