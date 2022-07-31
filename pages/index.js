import Head from "next/head";
import styles from "../ViewComponents/Home/home.module.scss";

import SideBar from "../ViewComponents/Home/SideBar";
import EnterWebDev from "../ViewComponents/Home/EnterWebDev";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* // Todo: add more meta data */}
      <Head>
        <title>Edith Heidmann</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        {/* Side bar with contact and social media links */}
        <SideBar />

        {/* Ladnign page text */}
        <section className={styles["intro-text-container"]}>
          <p className={styles["intro-text"]}>
            Web <br /> Developer/ <br /> Designer and <br /> Visual Artist.
          </p>
        </section>

        {/* Components section to enter either one of the split sites */}
        <section className={styles["enter-components-container"]}>
          <EnterWebDev />
          {/* // Todo: EnterArt will go here */}
          <EnterWebDev />
        </section>
      </main>
    </div>
  );
}
