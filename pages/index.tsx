import { useGlobalContext } from "../Context";
import Head from "next/head";
import styles from "../Components/BothViewComponents/Home/home.module.scss";
import SideBar from "../Components/SideBarContact/SideBar";

import { enterSiteData } from "../Components/BothViewComponents/Home/enterSiteData";
import EnterSitesComponent from "../Components/BothViewComponents/Home/EnterSitesComponent";

import AnimatedText from "react-animated-text-content";

export default function Home() {
  const { contactOpen } = useGlobalContext();

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
              <AnimatedText
                // if contact from is open, hide animated text
                className={
                  !contactOpen
                    ? `${styles["intro-text"]}`
                    : `${styles["intro-text-low-index"]}`
                }
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                // tag="p"
                // includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Web Developer/ Designer and Visual Artist.
              </AnimatedText>

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
