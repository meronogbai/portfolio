import Head from "next/head";

export const MetaTags = () => (
  <Head>
    {/** Primary meta tags */}
    <title>Meron Ogbai</title>
    <meta name="title" content="Meron Ogbai" />
    <meta name="description" content="Meron's dev portfolio." />

    {/** Favicon */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>
  </Head>
);
