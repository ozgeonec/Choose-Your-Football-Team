import React, {useContext, useState} from 'react'
import styles from './modal.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import cn from 'classnames'

import StoreContext from "../store/store";
import Text from "../text/text";
import Header from "../header/header";
import ButtonBasic from "../button/button-basic";
import Button from "../button/button";


function Modal() {

    const store = useContext(StoreContext)
    const options = store.pickedPlayers.map((player)=> player.display_name)
    const [show, setShow] = useState(true)
    const showHideClassName = show ? "styles.modal" : "styles.display-none";

    return <form className={styles.display}>
     <div className={cn(styles.modal,showHideClassName)}>
        <Header>Add Substitution</Header>
        <Text>OUT PLAYER</Text>
        <Dropdown options={options}  placeholder="Enter player name"/>
        <Text>IN PLAYER</Text>
        <Dropdown options={options}  placeholder="Enter player name"/>
        <Text>SUBSTITUTION MINUTE</Text>
        <input type="number" placeholder="Enter minute of substitution" min="0"/>
        <div className={styles.buttons}>
            <ButtonBasic className={styles.basic} onClick={()=>setShow(!show)}>Cancel</ButtonBasic>
            <Button>Add</Button>
        </div>
     </div>
    </form>
}

export default Modal