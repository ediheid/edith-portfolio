import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  // Initialising AOS on every render
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
