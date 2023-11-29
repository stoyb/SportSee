import React from 'react'
import styles from './Card.module.css'

const Card = ({img, value, type }) => {
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

export default Card
