import React, {useContext, useState} from 'react'
import styles from './player.module.css'

import Avatar from "../avatar/avatar";
import Header from "../header/header";
import Text from "../text/text";
import ButtonBasic from "../button/button-basic";
import StoreContext from '../store/store'


function Player({image_url, firstname, lastname, name,id}) {

    const [isClickedKey,setClickedKey]= useState(false)
    //const [picked, setPicked] = useState(false)
    const store = useContext(StoreContext)

    return <div className={styles.player}>
        <div className={styles.profile}>
            <Avatar src={image_url}/>
            {/*<p>{store.pickedPlayers[0].firstname}</p>*/}
            <div className={styles.text}>
                <Header className={styles.name}>{firstname}{" "}{lastname}</Header>
                {/*{position.map(pos => <Text key={pos.id}> {pos.name} </Text>)}*/}
                <Text children={name}/>
            </div>
        </div>
        <ButtonBasic
            onClick={() => {setClickedKey(!isClickedKey);store.addPlayer(id);} }
            isClicked={isClickedKey}
            children={isClickedKey ? "UNPICK" : "PICK"}
        />

    </div>

}

export default Player