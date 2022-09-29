/* eslint-disable react/jsx-key */
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiGitlab } from "react-icons/si";

import styles from "./tools-and-tech.module.scss";
import { IconType } from "react-icons/lib";

const test: { icon: any; iconName: string }[] = [
  { icon: <SiJavascript />, iconName: "JavaScript" },
];

const icons = [
  <SiJavascript />,
  <SiTypescript />,
  <SiReact />,
  <TbBrandNextjs />,
  <FaVuejs />,
  <FaSass />,
  <SiCss3 />,
  <SiHtml5 />,
  <FaFigma />,
];

const icons2 = [
  <SiAdobephotoshop />,
  <SiNodedotjs />,
  <SiExpress />,
  <SiMongodb />,
  <FaNpm />,
  <SiPostman />,
  <FaGitAlt />,
  <SiGithub />,
  <SiGitlab />,
];

const allIconsArray = icons.concat(icons2);

const ToolsAndTech = () => {
  return (
    <section className={styles["tools-tech-container"]} id="tools">
      {/* Small screens only - no animation */}
      <div className={styles["icons-container-mobile"]}>
        {allIconsArray.map((icon, index) => {
          return (
            <div className={styles["icon"]} key={index}>
              {icon}
            </div>
          );
        })}
      </div>

      {/*  Laptop and higher.. start animation - two mirrored animation elements for each row for seamless effect */}
      {/* to left */}
      <div className={styles["animation-container"]}>
        <div
          className={`${styles["animation-element"]} ${styles["animation-stop"]} ${styles["primary"]}`}
        >
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon-container"]}>
                <div className={styles["icon"]} key={index}>
                  {icon}
                </div>
                <span className={styles["icon-name"]}>Test</span>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles["animation-element"]}  ${styles["animation-stop"]} ${styles["secondary"]}`}
        >
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon-container"]}>
                <div className={styles["icon"]} key={index}>
                  {icon}
                </div>
                <span className={styles["icon-name"]}>Test</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* To right */}
      <div className={styles["animation-container"]}>
        <div className={`${styles["animation-element"]} ${styles["primary2"]}`}>
          {icons2.map((icon, index) => {
            return (
              <div className={styles["icon-container"]}>
                <div className={styles["icon"]} key={index}>
                  {icon}
                </div>
                <span className={styles["icon-name"]}>Test</span>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles["animation-element"]} ${styles["secondary2"]}`}
        >
          {icons2.map((icon, index) => {
            return (
              <div className={styles["icon-container"]}>
                <div className={styles["icon"]} key={index}>
                  {icon}
                </div>
                <span className={styles["icon-name"]}>Test</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTech;
