import React from "react";
import styles from './index.module.scss';


export const IconCounter = ({count, children}) => {
    return (
        <div className={styles.wrapper} >
            {Boolean(count) && <div className={styles.count}>{count}</div>}
            {children}
        </div>
    );
};
