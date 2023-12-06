import React from 'react'
import styles from './UserDataCard.module.css'

const UserDataCard = ({img, value, type }) => {
  return (
    <>
    <div className={styles.cardComponent}>
        <img className={styles.img} src={img} alt="icon-card"/>
        <div className={styles.legend}>
            <p className={styles.value}>{value}</p>
            <p className={styles.type}>{type}</p>
        </div>
    </div>
    </>
  )
}

export default UserDataCard
