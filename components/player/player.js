import React, {useContext, useState} from 'react'
import styles from './player.module.css'

import Avatar from "../avatar/avatar";
import Header from "../header/header";
import Text from "../text/text";
import ButtonBasic from "../button/button-basic";
import StoreContext from '../store/store'


function Player({image_url, display_name,id,flat=true}) {

    const [isClickedKey,setClickedKey]= useState(false)
    const store = useContext(StoreContext)

    return <div className={styles.player}>
        <div className={styles.profile}>
            <Avatar src={image_url}/>
            <div className={styles.text}>
                <Header className={styles.name}>{display_name}</Header>
                <Text>Striker</Text>
            </div>
        </div>
        {flat && <ButtonBasic
            onClick={() => {
                setClickedKey(!isClickedKey);
                isClickedKey ? store.removePlayer(id) : store.addPlayer(id)
            }}
            isClicked={isClickedKey}
            children={isClickedKey ? "UNPICK" : "PICK"}
        />}
    </div>
}

export default Player