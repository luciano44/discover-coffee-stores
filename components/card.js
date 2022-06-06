import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

import cls from "classnames";

function Card({ name, imgUrl, href }) {
  return (
    <Link href={href}>
      <a className={cls("pdn", styles.cardLink)}>
        <div>
          <h2>{name}</h2>
          <Image src={imgUrl} width={260} height={160} />
        </div>
      </a>
    </Link>
  );
}

export default Card;
