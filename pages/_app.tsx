import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/app.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="https://cdn.pokko.io/p/favicon.svg" />
      <link
        rel="stylesheet"
        href="https://cdn.pokko.io/p/fonts/Inter/inter.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.pokko.io/p/fonts/IBM-Plex-Mono/ibm-plex-mono.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
