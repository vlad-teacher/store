import React, {memo} from "react";
import { HeartIcon, CartIcon, LogoIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";

const CardItem = ({
  price,
  description,
  image,
  discont,
  discontPercent,
  onLike, // НОВАЯ ССЫЛКА НА ФУНКЦИЮ
  id,
  isLiked,
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.discount}>{discontPercent}%</div>
        <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
        {isLiked ? (
          <LogoIcon />
        ) : (
          <HeartIcon className={styles.heart} onClick={() => onLike(id)} />
        )}

        <CartIcon className={styles.cart} />
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
}


export const MemoCardItem = memo(CardItem);
