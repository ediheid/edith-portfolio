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
import React from "react";

const icons: { icon: React.ReactNode; iconName: string }[] = [
  { icon: <SiJavascript />, iconName: "JavaScript" },
  { icon: <SiTypescript />, iconName: "TypeScript" },
  { icon: <SiReact />, iconName: "ReactJS" },
  { icon: <TbBrandNextjs />, iconName: "Next.js" },
  { icon: <FaVuejs />, iconName: "Vue.js" },
  { icon: <FaSass />, iconName: "Sass" },
  { icon: <SiCss3 />, iconName: "CSS3" },
  { icon: <SiHtml5 />, iconName: "HTML5" },
  { icon: <FaFigma />, iconName: "Figma" },
];

const icons2: { icon: React.ReactNode; iconName: string }[] = [
  { icon: <SiAdobephotoshop />, iconName: "PhotoShop" },
  { icon: <SiNodedotjs />, iconName: "Node.js" },
  { icon: <SiExpress />, iconName: "Express.js" },
  { icon: <SiMongodb />, iconName: "MongoDB" },
  { icon: <FaNpm />, iconName: "npm" },
  { icon: <SiPostman />, iconName: "Postman" },
  { icon: <FaGitAlt />, iconName: "Git" },
  { icon: <SiGithub />, iconName: "GitHub" },
  { icon: <SiGitlab />, iconName: "GitLab" },
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
              {icon.icon}
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
              <div className={styles["icon-container"]} key={index}>
                <div className={styles["icon"]}>{icon.icon}</div>
                <span className={styles["icon-name"]}>{icon.iconName}</span>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles["animation-element"]}  ${styles["animation-stop"]} ${styles["secondary"]}`}
        >
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon-container"]} key={index}>
                <div className={styles["icon"]}>{icon.icon}</div>
                <span className={styles["icon-name"]}>{icon.iconName}</span>
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
              <div className={styles["icon-container"]} key={index}>
                <div className={styles["icon"]}>{icon.icon}</div>
                <span className={styles["icon-name"]}>{icon.iconName}</span>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles["animation-element"]} ${styles["secondary2"]}`}
        >
          {icons2.map((icon, index) => {
            return (
              <div className={styles["icon-container"]} key={index}>
                <div className={styles["icon"]}>{icon.icon}</div>
                <span className={styles["icon-name"]}>{icon.iconName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTech;
