import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/coffee-store/asad">
          <a>coffee store</a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
