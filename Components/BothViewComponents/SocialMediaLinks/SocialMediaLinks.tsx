import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

import styles from "./social-media-links.module.scss";

const SocialMediaLinks = () => {

return (

<div className={styles["media-links-container"]}>

     {/* LinkedIn */}
     <a
        // className={styles["social-media-links"]}
        href="https://www.linkedin.com/in/edith-heidmann/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiLinkedin />
      </a>

      {/* GitHub */}
      <a
        // className={styles["social-media-links"]}
        href="https://github.com/ediheid"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub />
      </a>

      {/* Instagram */}
      <a
        // className={styles["social-media-links"]}
        href="https://www.instagram.com/e.d.ith_/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiInstagram />
      </a>

      {/* Darkroom Shop */}
      <a
        // className={styles["social-media-links"]}
        href="https://edithheidmann.darkroom.tech/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiShoppingBag />
      </a>


</div>


)

}

export default SocialMediaLinks