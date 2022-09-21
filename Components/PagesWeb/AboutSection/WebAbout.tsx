import Image from "next/image";
import styles from "./web-about.module.scss";

import portrait from "../../../public/static/portrait.png";

type AboutProps = {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
};

let aboutData = {
  heading: "Who?",
  paragraphOne:
    " Australian born, Berlin based - creative full-stack web developer and web designer with a background in fine arts.",
  paragraphTwo:
    " Specialising in frontend development, particularly in ReactJS, NextJS and Sass/Scss with a keen interest in UI/UX - creating dynamic, sophisticated and scalable websites and web apps.",
};

const WebAbout = ({}: AboutProps) => {
  return (
    <section id="about-section" className={styles["about-section-container"]}>
      <div className={styles["content-container"]}>

        <div className={styles["image-container"]}>
        <Image
          className={styles["image"]}
          src={portrait}
          alt="Blue and white portrait of Edith - long curly hair and glasses."
        ></Image>
        </div>

        <h2>{aboutData.heading}</h2>
        <p>{aboutData.paragraphOne}</p>

        <p>{aboutData.paragraphTwo}</p>
      </div>
    </section>
  );
};

export default WebAbout;
