import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function DynamicRoute() {
  const query = useRouter().query.dynamic;

  return (
    <>
      <Head>
        <title>{query}</title>
      </Head>
      <div>Dynamic Route =)</div>
    </>
  );
}

export default DynamicRoute;
