import React from 'react'
import styles from './layout.module.css'
import Navigation from "../navigation/navigation";
import Division from "../division/division";
import Modal from "../modal/modal";

function Layout() {
    return <div className={styles.layout}>
        <Navigation/>
        <Division/>

    </div>

}

export default Layout