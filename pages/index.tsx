import { useGlobalContext } from "../Context";
import Head from "next/head";
import styles from "./home.module.scss";
import { SideBar } from "../Components/PagesHome/SideBarContact/SideBar";
import { enterSiteData } from "../Components/PagesHome/EnterSiteComponents/enterSiteData";
import EnterSitesComponent from "../Components/PagesHome/EnterSiteComponents/EnterSitesComponent";
import { motion } from "framer-motion";

interface HomeProps {
  fullName: string;
  animatedText: string;
  metaContent: string;
}

let homeData: HomeProps = {
  fullName: "Edith Heidmann",
  animatedText: "Web Developer/ Designer and Visual Artist.",
  metaContent:
    "Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects.",
};

export default function Home({}: HomeProps) {
  const { contactOpen } = useGlobalContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>{homeData.fullName}</title>
        <meta name="description" content={homeData.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        {/* Side bar with contact and social media links */}
        <SideBar
          contactButtonText={""}
          linkedIn={""}
          gitHub={""}
          instagram={""}
          darkroom={""}
        />

        <div className={styles["landing-page-content-container"]}>
          {/* Landing page headings */}
          <section className={styles["intro-text-container"]}>
            <div>
              <motion.div
                className={
                  !contactOpen
                    ? `${styles["intro-text"]}`
                    : `${styles["intro-text-low-index"]}`
                }
                initial={{ opacity: 0, y: -20 }} // start above and invisible
                animate={{ opacity: 1, y: 0 }} // animate to visible and position
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {homeData.animatedText.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    style={{ display: "inline-block", marginRight: "0.25rem" }}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.06 }} // stagger words
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <h2 className={styles["name-heading"]}>{homeData.fullName}</h2>
            </div>
          </section>

          {/* Components to enter art or web  */}
          <section className={styles["enter-components-container"]}>
            {enterSiteData.map((site) => {
              // eslint-disable-next-line react/jsx-key
              return <EnterSitesComponent site={site} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
}
