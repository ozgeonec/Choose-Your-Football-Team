import React from 'react'
import Layout from "../components/layout/layout";
import Navigation from "../components/navigation/navigation";
import Division from "../components/division/division";
import styles from "../components/layout/layout.module.css";
import DivisionSmall from "../components/division/division-small";


function Confirmed() {
    return (<div className={styles.layout}>
            <Navigation/>
    </div>

    )
}


export default Confirmed