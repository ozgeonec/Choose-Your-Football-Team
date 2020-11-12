import React, {useContext, useEffect, useState} from 'react'
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
    const [selectOut, setSelectOut] = useState({value:"",label:""})
    const [selectIn, setSelectIn] = useState({value:"",label:""})

    const showHideClassName = show ? "styles.modal" : "styles.display-none";

    const handleOutSelect=(e)=>{
        setSelectOut(e)
    }
    const handleInSelect=(e)=>{
        setSelectIn(e)
    }
    useEffect(()=>{
        setSelectIn(selectIn)
        setSelectOut(selectOut)
        localStorage.setItem("IN",JSON.stringify(selectIn))
        localStorage.setItem("OUT",JSON.stringify(selectOut))
    },[selectOut,selectIn])

    return <form className={styles.display}>
     <div className={cn(styles.modal,showHideClassName)}>
        <Header>Add Substitution</Header>
        <Text>OUT PLAYER</Text>
        <Dropdown options={options}  onChange={handleOutSelect} placeholder="Enter player name"/>
        <Text>IN PLAYER</Text>
        <Dropdown options={options} onChange={handleInSelect} placeholder="Enter player name"/>
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