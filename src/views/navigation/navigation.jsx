import React, { useState } from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import { IconToggle } from "../../components/icon-toggle";
import { IconCounter } from "../../components/icon-counter";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  const getClassName = ({isActive}) => isActive ? styles.active : '';

  return (
    <div className={styles.header}>
      <div className={styles.iconWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <IconToggle checked={isToggleOn} onToggle={onSwitchToggle} />
      </div>
      <nav className={styles.navbar}>
        <NavLink to='/' className={getClassName}>Main Page</NavLink>
        <NavLink to='/categories' className={getClassName}>Categories</NavLink>
        <NavLink to='/all-products' className={getClassName}>All Products</NavLink>
        <NavLink to='/all-sales' className={getClassName}>All Sales</NavLink>
      </nav>
      <div className={styles.heartCartWrapper}>
        <IconCounter icon={heart} count={23} />
        <IconCounter icon={cart} count={4} />
      </div>
    </div>
  );
};
