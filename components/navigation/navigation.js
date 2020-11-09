import React from 'react'
import Logo from "../Logo/logo";
import Avatar from "../avatar/avatar";
import styles from './navigation.module.css'
function Navigation() {
    return <div className={styles.navigation}>
        <Logo/>
        <Avatar src={"https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"}/>
    </div>
}

export default Navigation