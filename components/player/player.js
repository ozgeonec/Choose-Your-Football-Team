import React, {useEffect, useState} from 'react'
import styles from './player.module.css'
import Avatar from "../avatar/avatar";
import Header from "../header/header";
import Text from "../text/text";
import ButtonBasic from "../button/button-basic";
import cn from 'classnames'

function Player({image_url, firstname, lastname}) {

    const [isClickedKey,setClickedKey]= useState(false)

    return <div className={styles.player}>
        <div className={styles.profile}>
            <Avatar src={image_url}/>
            <div className={styles.text}>
                <Header className={styles.name}>{firstname}{" "}{lastname}</Header>

                {/*{position.map(pos => <Text key={pos.id}> {pos.name} </Text>)}*/}
                    <Text>Striker</Text>

            </div>
        </div>
        <ButtonBasic onClick={() => setClickedKey(!isClickedKey)} isClicked={isClickedKey} children={isClickedKey ? "UNPICK" : "PICK"}/>
    </div>
}

export default Player