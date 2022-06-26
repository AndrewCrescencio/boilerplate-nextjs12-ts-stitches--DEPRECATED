import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Ecode Desafio Frontend</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="author" content="Author: Andrew Crescencio" />
        <meta property="description" content="Desafio frontend Pedido Pago" />

        <meta
          property="keywords"
          content="ecode, desafio, frontend, front-end"
        />
        <meta property="og:site_name" content="ECode Test Frontend" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
