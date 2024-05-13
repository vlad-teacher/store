import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.txt}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button className={cn(styles.btn, styles.card)}> Check out</button>
      </div>
    </header>
  );
};
