import React from "react";
import Header from "../../components/Header/Header";
import styles from "./styles.module.css"
import image from "../../images/heroImg.png"

const landingPage = () => {
  return (
    <>
      <Header />
      <div className={styles.heroWrapper}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeader}>All in One</h1>
          <p className={styles.heroUnderText}>Discover best prices</p>
          <button className={styles.heroButton}><a className={styles.heroLink} href="/Login">Login</a></button>
          <button className={styles.heroButton}><a className={styles.heroLink} href="/Register">Register</a></button>
        </div>
        <div className={styles.heroRight}>
          <img className={styles.image} src={image} alt="Technologies" />
        </div>
      </div>
    </>
  );
};

export default landingPage;
