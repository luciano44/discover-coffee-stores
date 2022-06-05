import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

function Header() {
  console.log(styles);

  return (
    <header className={styles.header}>
      <ul>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/world">
          <a>world</a>
        </Link>
        <Link href="/coffee-store/asad">
          <a>coffee store</a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
