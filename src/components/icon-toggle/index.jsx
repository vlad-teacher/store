import React from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import styles from "./index.module.scss";
import cn from "classnames";

export const IconToggle = ({ checked, onToggle }) => (
  <div
    className={cn(styles.wrapper, { [styles.active]: checked })}
    onClick={onToggle}
  >
    <img src={sun} alt="sun" className={styles.icon}/>
    <img src={moon} alt="moon" className={styles.icon} />
    <div className={cn(styles.circle, { [styles.active]: checked })}></div>
  </div>
);
