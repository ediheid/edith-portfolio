import Image from "next/image";
import { Link as Hashlink } from "react-scroll";
import WebHashlinkButton from "../../UiComponents/WebHashlinkButtons/WebHashlinkButton";
import styles from "./web-about.module.scss";

import portrait from "../../../public/static/portrait.png";

type AboutProps = {
  heading: string;
  altTag: string;
  buttonToolsAndTech: string;
  buttonPortfolio: string;
  jobTitle: string;
  currentWork: string;
  currentWorkWebsite: string;
  toolsAndTechSectionID: string;
  portfolioSectionID: string;
};

let aboutData: AboutProps = {
  heading: "Who?",
  altTag: "Blue and white portrait of Edith - long curly hair and glasses.",
  buttonToolsAndTech: "Tools & Tech",
  buttonPortfolio: "Portfolio",
  jobTitle: "Junior Frontend Web Developer",
  currentWork: "HOLOPLOT Gmbh",
  currentWorkWebsite: "https://holoplot.com/",
  toolsAndTechSectionID: "tools",
  portfolioSectionID: "portfolio-section",
};

const WebAbout = ({}: AboutProps) => {
  return (
    <section id="about-section" className={styles["about-section-container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["image-container"]}>
          <Image
            className={styles["image"]}
            src={portrait}
            alt={aboutData.altTag}
          ></Image>
        </div>

        <div className={styles["text-container"]}>
          <h2>{aboutData.heading}</h2>
          <p>
            Australian born, Berlin based - creative full-stack{" "}
            <b>web developer</b> and <b>web designer</b> with a background in
            fine arts.
          </p>

          <p>
            Specialising in frontend development, particularly in <b>ReactJS</b>
            , <b>NextJS</b> and <b>Sass/Scss</b> with a keen interest in{" "}
            <b>UI/UX</b> - creating dynamic, sophisticated and scalable websites
            and web apps.
          </p>

          <p>
            Working as a {aboutData.jobTitle} at{" "}
            <a
              className={styles["company-link"]}
              href={aboutData.currentWorkWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutData.currentWork}
            </a>{" "}
            and as a freelance Developer/Designer for multiple small business
            sites in Germany.
          </p>

          <div className={styles["hashlinks-container"]}>
            <WebHashlinkButton>
              <Hashlink
                to={aboutData.toolsAndTechSectionID}
                spy={true}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                <span className={styles["link-text"]}>
                  {aboutData.buttonToolsAndTech}
                </span>
              </Hashlink>
            </WebHashlinkButton>

            <WebHashlinkButton>
              <Hashlink
                to={aboutData.portfolioSectionID}
                spy={true}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                <span className={styles["link-text"]}>
                  {aboutData.buttonPortfolio}
                </span>
              </Hashlink>
            </WebHashlinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
