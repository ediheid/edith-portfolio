import Head from "next/head";
import NavBar from "../../Components/PagesWeb/NavBar/NavBar";

import styles from "./web.module.scss";

type WebAppProps = {
  title: string;
};

let webAppData = {
  title: "EH · Web",
};

const Web = ({}: WebAppProps) => {
  return (
    <div className={styles["web-view-container"]}>
      <Head>
        <title>{webAppData.title}</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>This will be the main section of the web SPA</main>
    </div>
  );
};

export default Web;
