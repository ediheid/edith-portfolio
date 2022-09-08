import type { AppProps } from "next/app";

import { GlobalContextProvider } from "../Context/globalContext";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      {/*  Main App Component */}
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
