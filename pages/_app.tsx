import type { AppProps } from "next/app";
import { MetaTags } from "../components";
import { useGoogleAnalytics } from "../lib";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();

  return (
    <>
      <MetaTags />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
