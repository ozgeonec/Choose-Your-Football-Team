import React from 'react'
import styles from './division.module.css'
import Button from "../button/button";
import Team from "../team/team";
import DivisionSmall from "./division-small";
import Player from "../player/player";

import useSWR from "swr";
import fetcher from "../../lib/fetch";


function Division() {
    const { data, error } = useSWR('https://api.scoutium.com/api/clubs/4029/players?count=100', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    //console.log(data)
    return <div className={styles.division}>
        <div className={styles.header}>
            <Team>Beşiktaş JK</Team>
            <Button>Confirm</Button>
        </div>
        <div className={styles.divSmall}>
            <DivisionSmall>All Players
                {data?.players.map((player) => {
                    return <Player key={player.id} {...player}/>
                })}
            </DivisionSmall>
            <DivisionSmall>Line Up</DivisionSmall>
            <DivisionSmall>Substitutes</DivisionSmall>
        </div>
    </div>
}



export default Division