import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetaTags } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTags />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
