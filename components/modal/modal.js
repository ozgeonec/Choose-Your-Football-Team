import React, {useContext, useEffect, useState} from 'react'
import styles from './modal.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import cn from 'classnames'
import Modal from 'react-modal';


import StoreContext from "../store/store";
import Text from "../text/text";
import Header from "../header/header";
import ButtonBasic from "../button/button-basic";
import Button from "../button/button";


function ModalPart({open}) {

    const store = useContext(StoreContext)
    const options = store.pickedPlayers.map((player)=> player.display_name)
    const [show, setShow] = useState(true)
    const [selectOut, setSelectOut] = useState()
    const [selectIn, setSelectIn] = useState({value:"",label:""})
    const [minute, setMinute] = useState(0)

    const showHideClassName = show ? "styles.modal" : "styles.display-none";

    const handleOutSelect=(e)=>{
        setSelectOut(e)
    }
    const handleInSelect=(e)=>{
        setSelectIn(e)
    }
    const handleMin = (e) => {
        setMinute(e)
    }
    useEffect(()=>{
        setSelectIn(selectIn)
        setSelectOut(selectOut)
        setMinute(minute)
        console.log(JSON.stringify(selectIn))
        localStorage.setItem("IN",JSON.stringify(selectIn))
        localStorage.setItem("OUT",JSON.stringify(selectOut))
        localStorage.setItem("MIN",JSON.stringify(minute))
        localStorage.setItem("PICKED",JSON.stringify(store.pickedPlayers.map((player)=> player.display_name)))
    },[selectOut,selectIn])

    const cancelHandler = () => {
        setShow(!show)
    }

    const addInOut = (selectIn) => {
       selectIn = localStorage.getItem("IN")
        store.addSubPlayer(JSON.parse(selectIn).value);
       console.log(JSON.parse(selectIn))
        // console.log(selectIn)
    }

    return <Modal isOpen={show} onRequestClose={cancelHandler} >
      <div className={styles.display}>
      <div className={cn(styles.modal,showHideClassName)}>
          <Header>Add Substitution</Header>
          <Text>OUT PLAYER</Text>
          <Dropdown options={options} onChange={handleOutSelect} placeholder="Enter player name"/>
          <Text>IN PLAYER</Text>
          <Dropdown options={options} onChange={handleInSelect} placeholder="Enter player name"/>
          <Text>SUBSTITUTION MINUTE</Text>
          <input type="number" placeholder="Enter minute of substitution" onChange={handleMin} min="0" max="150"/>

          <div className={styles.buttons}>
            <button className={styles.basic} id="mButton" onClick={cancelHandler}>Cancel</button>
            <Button onClick={addInOut}>Add</Button>
          </div>

     </div>
    </div>
    </Modal>
}

export default ModalPart