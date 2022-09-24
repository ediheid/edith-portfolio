import { useGlobalContext } from "../Context";
import Head from "next/head";
import styles from "./home.module.scss";
import { SideBar } from "../Components/PagesHome/SideBarContact/SideBar";
import { enterSiteData } from "../Components/PagesHome/EnterSiteComponents/enterSiteData";
import EnterSitesComponent from "../Components/PagesHome/EnterSiteComponents/EnterSitesComponent";
import AnimatedText from "react-animated-text-content";

interface HomeProps {
  fullName: string;
  animatedText: string;
}

let homeData = {
  fullName: "Edith Heidmann",
  animatedText: "Web Developer/ Designer and Visual Artist.",
};

export default function Home({}: HomeProps) {
  const { contactOpen } = useGlobalContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>{homeData.fullName}</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
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
                threshold={0.1}
                rootMargin="20%"
              >
                {homeData.animatedText}
              </AnimatedText>

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
