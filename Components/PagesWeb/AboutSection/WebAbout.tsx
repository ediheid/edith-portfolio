import Image from "next/image";
import WebHashlinkButton from "../../UiComponents/WebHashlinkButtons/WebHashlinkButton";
import styles from "./web-about.module.scss";

import portrait from "../../../public/static/portrait.png";

type AboutProps = {
  heading: string;
  altTag: string;
  buttonText1: string;
  buttonText2: string;
};

let aboutData: AboutProps = {
  heading: "Who?",
  altTag: "Blue and white portrait of Edith - long curly hair and glasses.",
  buttonText1: "Tools & Tech",
  buttonText2: "Portfolio",
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

          <div className={styles["hashlinks-container"]}>
            <WebHashlinkButton>
              <span className={styles["link-text"]}>
                {aboutData.buttonText1}
              </span>
            </WebHashlinkButton>

            <WebHashlinkButton>
              <span className={styles["link-text"]}>
                {aboutData.buttonText2}
              </span>
            </WebHashlinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
