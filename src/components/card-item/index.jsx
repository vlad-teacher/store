import React from "react";
import heartImg from "../../assets/heart.svg";
import cartImg from "../../assets/cart.svg";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";

export const CardItem = ({ price, description, image, discont, discontPercent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.discount}>{discontPercent}%</div>
        <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
        <img src={heartImg} className={styles.heart} alt="heart" />
        <img src={cartImg} className={styles.cart} alt="cart" />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>{description}</div>
        <div className={styles.prices}>
          <div className={styles.newPrice}>{discont}</div>
          <div className={styles.oldPrice}>{price}</div>
        </div>
      </div>
    </div>
  );
};
