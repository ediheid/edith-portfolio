import type { AppProps } from "next/app";
import { AppWrapper } from "../Context/AppContext";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // AppWrapper Holds Context
    <AppWrapper>
      {/*  Main App Component */}
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
