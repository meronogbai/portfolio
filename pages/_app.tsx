import type { AppProps } from "next/app";
import { MetaTags } from "../components";
import { GoogleAnalyticsScripts, useGoogleAnalytics } from "../features";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();

  return (
    <>
      <MetaTags />
      <GoogleAnalyticsScripts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
