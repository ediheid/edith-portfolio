import styles from "./side-bar.module.scss";

import ContactForm from "../ContactForm/ContactForm";

import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { useAppContext } from "../../Context/AppContext";
import React from "react";

const SideBar = () => {
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="800"
      className={styles["side-bar-container"]}
    >
      {/* Contact Button - opens contact form modal */}
      <button
        className={styles["contact-button"]}
        onClick={useAppContext().openContactFormModal}
      >
        Contact Form
      </button>

      {/* Display contact form when state is set to true */}
      {useAppContext().isContactFormOpen && <ContactForm />}

      {/* Vertical dividing line */}
      <div className={styles["vertical-line"]}></div>

      {/* Social Media links */}
      {/* LinkedIn */}
      <a
        className={styles["social-media-links"]}
        href="https://www.linkedin.com/in/edith-heidmann/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiLinkedin />
      </a>

      {/* GitHub */}
      <a
        className={styles["social-media-links"]}
        href="https://github.com/ediheid"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub />
      </a>

      {/* Instagram */}
      <a
        className={styles["social-media-links"]}
        href="https://www.instagram.com/e.d.ith_/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiInstagram />
      </a>

      {/* Darkroom Shop */}
      <a
        className={styles["social-media-links"]}
        href="https://edithheidmann.darkroom.tech/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiShoppingBag />
      </a>
    </div>
  );
};

export default SideBar;