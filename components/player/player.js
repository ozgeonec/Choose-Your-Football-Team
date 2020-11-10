import React from 'react'
import styles from './player.module.css'
import Avatar from "../avatar/avatar";
import Header from "../header/header";
import Text from "../text/text";
import ButtonBasic from "../button/button-basic";
import * as p from "next";
//import cn from 'classnames'

//image_url
//firstname
//lastname
//position.name
//player,  position, button="PICK"

function Player({image_url, firstname, lastname, button="PICK"}) {

    return <div className={styles.player}>
        <div className={styles.profile}>
            <Avatar src={image_url}/>
            <div className={styles.text}>
                <Header className={styles.name}>{firstname}{" "}{lastname}</Header>

                {/*{position.map(pos => <Text key={pos.id}> {pos.name} </Text>)}*/}
                    <Text>Striker</Text>

            </div>
        </div>
        <ButtonBasic className={styles.buttonBasic}>{button}</ButtonBasic>
    </div>
}

export default Player