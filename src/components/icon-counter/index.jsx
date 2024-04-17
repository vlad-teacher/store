import React from "react";
import styles from './index.module.scss';

export const IconCounter = ({count, icon}) => {
    return (
        <div className={styles.wrapper} >
            {Boolean(count) && <div className={styles.count}>{count}</div>}
            <img src={icon} alt="counter-icon" />
        </div>
    );
}