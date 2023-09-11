
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import logo from "../../images/logo.png";
import Cookies from "js-cookie";

const LoggeOut = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navitem}>
        <a className={styles.navLink} href="/Login">
          Login
        </a>
      </li>
      <li className={styles.navitem}>
        <a className={styles.navLink} href="/Register">
          Register
        </a>
      </li>
    </ul>
  );
};

const Logged = ({ onLogout }) => {
  const handleLogout = () => {
    Cookies.remove("Token");
    onLogout();
  };

  return (
    <ul className={styles.navList}>
      <li className={styles.navitem}>
        <a className={styles.navLink} onClick={handleLogout} href="/">
          Log Out
        </a>
      </li>
      <li className={styles.navitem}>
        <a className={styles.navLink} href="/AddPage">
          Add Page
        </a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("Token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const logoHref = isLoggedIn ? "/main" : "/";

  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <a href={logoHref}>
          <img className={styles.logo} src="https://www.svgrepo.com/show/194550/online-shop.svg" alt="logo" />
        </a>
      </div>
      <div className={styles.navWrapper}>
        {isLoggedIn ? <Logged onLogout={handleLogout} /> : <LoggeOut />}
      </div>
    </div>
  );
};

export default Header;
