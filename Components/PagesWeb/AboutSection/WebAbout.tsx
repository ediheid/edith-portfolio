import styles from "./web-about.module.scss";

type AboutProps = {
    sectionHeading: string
    paragraphOne: string
    paragraphTwo: string
}

let aboutData = {
sectionHeading: "About",
paragraphOne: " Australian born, Berlin based - creative full-stack web developer and web designer with a background in fine arts.",
paragraphTwo: " Specialising in frontend development, particularly in ReactJS, NextJS and Sass/Scss with a keen interest in UI/UX - creating dynamic, sophisticated and scalable websites and web apps."
}

const WebAbout = ({}: AboutProps) => {
  return (
    <section id="about-section" className={styles["about-section-container"]}>
      <h2>{aboutData.sectionHeading}</h2>
      <p>
      {aboutData.paragraphOne}
      </p>

      <p>
     {aboutData.paragraphTwo}
      </p>
    </section>
  );
};

export default WebAbout;
