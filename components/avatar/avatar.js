import React from 'react'
import cn from 'classnames'
import styles from './avatar.module.css'

function Avatar({ src, alt, size = 30 }) {
    return (
        <div className={cn([styles.photo])} style={{ width: size, height: size }}>
            <img
                className={styles.img}
                src={src}
                alt={alt}
            />
        </div>
    )
}
//"https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"
export default Avatar