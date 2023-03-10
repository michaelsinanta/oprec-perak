import { type AppType } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { RecoilRoot } from 'recoil'

import "../styles/globals.css";
import Navbar from "./component/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <>
    <RecoilRoot>
    <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    </RecoilRoot>
    </>
  )
  }
};

export default api.withTRPC(MyApp);
