import React, { useState } from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import { IconToggle } from "../../components/icon-toggle";
import { IconCounter } from "../../components/icon-counter";

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false); 

  const onSwitchToggle = () => {
    setIsToggleOn(prev => !prev);
  };

  return (
    <div>
      <img src={logo} alt="logo" className={styles.logo}/>
      <IconToggle checked={isToggleOn} onToggle={onSwitchToggle}/>
      <nav>
        <span>Main Page</span>
        <span>Categories</span>
        <span>All Products</span>
        <span>All Sales</span>
      </nav>
      <div>
        <IconCounter icon={heart} count={23} />
        <IconCounter icon={cart} count={4} />
      </div>
    </div>
  );
};
