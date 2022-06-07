import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import coffeeStoresData from "../../data/coffee-stores.json";
import styles from "./coffee-store.module.css";

export async function getStaticProps({ params }) {
  console.log(params);

  return {
    props: {
      coffeeStore: coffeeStoresData.find(
        (cs) => cs.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((cs) => ({
    params: {
      id: cs.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

function CoffeeStore(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop: {name}</title>
      </Head>
      <div>
        CoffeeStore {router.query.id}
        <br />
        <br />
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <hr />
        <br />
        <h3 className={styles.main}>{name}</h3>
        <h3 className={styles.title}>{address}</h3>
        <h3 className={styles.title}>{neighbourhood}</h3>
        <Image src={imgUrl} width={350} height={350} />
      </div>
    </div>
  );
}

export default CoffeeStore;
