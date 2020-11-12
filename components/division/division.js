import React, {useEffect, useState} from 'react'
import styles from './division.module.css'

import useSWR from "swr";
import fetcher from "../../lib/fetch";

import Button from "../button/button";
import Team from "../team/team";
import DivisionSmall from "./division-small";
import Player from "../player/player";
import StoreContext from '../store/store'


function Division() {

    const[pickedPlayers, setPickedPlayers] = useState([])

    const addPlayer = (id) => {
        if(pickedPlayers.length < 11){
            setPickedPlayers([...pickedPlayers, data?.players.find((player)=> player.id===id)])

        }
    }

    const removePlayer = (id) => {
        setPickedPlayers(pickedPlayers.filter((player)=> player.id!==id))
    }

    useEffect(() => {
        setPickedPlayers(pickedPlayers)
    },[pickedPlayers])

    //Fetching data with Next's SWR package
    const { data, error } = useSWR('https://api.scoutium.com/api/clubs/4029/players?count=100', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <StoreContext.Provider value={{pickedPlayers, addPlayer, removePlayer}}>
            <div className={styles.division}>
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
                    <DivisionSmall>Line Up
                        {pickedPlayers.map((player) => {
                            return <Player key={player.id} flat={false} {...player}/>
                        })}
                    </DivisionSmall>
                    <DivisionSmall>Substitutes</DivisionSmall>
                </div>
            </div>
        </StoreContext.Provider>

    )
}

export default Division