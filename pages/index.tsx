import React from "react";
import Head from "next/head";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Docco - Pokko</title>
      </Head>
      <main>
        <Logo />
        <h1>Documentation</h1>

        <p>Coming soon.</p>
      </main>
    </>
  );
}
