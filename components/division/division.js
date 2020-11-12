import React, {useEffect, useState} from 'react'
import styles from './division.module.css'

import useSWR from "swr";
import fetcher from "../../lib/fetch";

import Button from "../button/button";
import Team from "../team/team";
import DivisionSmall from "./division-small";
import Player from "../player/player";
import StoreContext from '../store/store'
import ButtonBasic from "../button/button-basic";
import Modal from "../modal/modal";


function Division() {

    //Adding and Removing players and re-render functions
    const[pickedPlayers, setPickedPlayers] = useState([])
    const[subs, setSubs] = useState(false)
    const[addSubs, setAddSubs] =useState(false)

    const addPlayer = (id) => {
        if(pickedPlayers.length < 11){
            setPickedPlayers([...pickedPlayers, data?.players.find((player) => player.id === id)])
        }
    }
    const removePlayer = (id) => {setPickedPlayers(pickedPlayers.filter((player) => player.id !== id))}
    const addSubsFunc = () => {
        if(pickedPlayers.length === 11){
            setAddSubs(!addSubs)
        }
    }
    useEffect(() => {setPickedPlayers(pickedPlayers); addSubsFunc();}  ,[pickedPlayers])

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
                    <DivisionSmall  header={"All Players"}>
                        {data?.players.map((player) => {
                            return <Player key={player.id} {...player}/>
                        })}
                    </DivisionSmall>
                    <DivisionSmall header={"Line Up"}>
                        {pickedPlayers.map((player) => {
                            return <Player key={player.id} flat={false} {...player}/>
                        })}
                    </DivisionSmall>
                    <DivisionSmall header={"Substitutes"}>
                        {addSubs && <ButtonBasic onClick={() => setSubs(true)}>+Add Substitutes</ButtonBasic>}
                        {subs && <Modal />}
                    </DivisionSmall>
                </div>
            </div>
        </StoreContext.Provider>

    )
}

export default Division