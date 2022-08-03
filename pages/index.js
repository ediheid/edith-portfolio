import Head from "next/head";
import styles from "../ViewComponents/Home/home.module.scss";

import SideBar from "../ViewComponents/Home/SideBar";

import { enterSiteData } from "../ViewComponents/Home/enterSiteData";
import EnterSitesComponent from "../ViewComponents/Home/EnterSitesComponent";

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

<div className={styles["landing-page-content-container"]}>
        {/* Landing page headings */}
        <section className={styles["intro-text-container"]}>
          <div>
            <h1
              data-aos="slide-left"
              data-aos-duration="800"
              className={styles["intro-text"]}
            >
              Web <br /> Developer/ <br /> Designer and <br /> Visual Artist.
            </h1>

            <h2 className={styles["name-heading"]}>Edith Heidmann</h2>
          </div>
        </section>

        {/* Mapped individual site data to return Components to enter individual sites -  */}
        <section className={styles["enter-components-container"]}>
          {enterSiteData.map((site, index) => {
            return <EnterSitesComponent key={index} site={site} />;
          })}
        </section>
        </div>

      </main>
    </div>
  );
}
