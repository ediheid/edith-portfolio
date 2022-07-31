import Head from "next/head";
import styles from "../ViewComponents/Home/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edith Heidmann</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        {" "}
        This will be the landing page Component
      </main>
    </div>
  );
}
