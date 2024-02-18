import Footer from "@/components/footer/footer";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../../lib/theme";

const favicons = (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#ffffff" />
  </>
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {favicons}
      </Head>
      <ThemeProvider theme={theme}>
        {/* <Component {...pageProps} /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}
