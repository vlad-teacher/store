import React from "react";
import heartImg from '../../assets/heart.svg';
import cartImg from '../../assets/cart.svg';
import styles from './index.module.scss';

// sale, description, image, discount
export const CardItem = () => {
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.discount}>50%</div>
            <img/>
            <img src={heartImg} className={styles.heart}/>
            <img src={cartImg} className={styles.cart}/>
        </div>
        <div className={styles.description}>Description</div>
        <div className={styles.prices}>
            <div className={styles.newPrice}>500</div>
            <div className={styles.oldPrice}>1000</div>
        </div>
    </div>
};