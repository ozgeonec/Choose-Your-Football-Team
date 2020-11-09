import React from 'react'
import styles from './division.module.css'
import Button from "../button/button";
import Team from "../team/team";
import DivisionSmall from "./division-small";

function Division() {
    return <div className={styles.division}>
        <div className={styles.header}>
            <Team>Beşiktaş JK</Team>
            <Button>Confirm</Button>
        </div>
        <div className={styles.divSmall}>
            <DivisionSmall>All Players</DivisionSmall>
            <DivisionSmall>Line Up</DivisionSmall>
            <DivisionSmall>Substitutes</DivisionSmall>
        </div>
    </div>
}

export default Division