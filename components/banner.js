import React from "react";
import styles from "./banner.module.css";

function Banner({ buttonText, handleOnClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>discover your local coffee shops</p>
      <button onClick={handleOnClick} className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
}

export default Banner;
