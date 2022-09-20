import React from "react";
import { useGlobalContext } from "../../../Context";
import styles from "./side-bar.module.scss";

import ContactForm from "../../SharedComponents/ContactForm/ContactForm";

import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

type Props = {
  contactButtonText: string;
  linkedIn: string;
  gitHub: string;
  instagram: string;
  darkroom: string;
};

let sideBarData = {
  contactButtonText: "Contact Form",
  linkedIn: "https://www.linkedin.com/in/edith-heidmann/",
  gitHub: "https://github.com/ediheid",
  instagram: "https://www.instagram.com/e.d.ith_/?igshid=YmMyMTA2M2Y%3D",
  darkroom: "https://edithheidmann.darkroom.tech/",
};

export const SideBar = ({}: Props) => {
  const { contactOpen } = useGlobalContext();
  const { setContactOpen } = useGlobalContext();

  const openContactFormModal = () => {
    setContactOpen(true);
  };

  return (
    <div
      data-aos="slide-up"
      data-aos-duration="800"
      className={styles["side-bar-container"]}
    >
      {/* Contact Button - opens contact form modal */}
      <button
        className={styles["contact-button"]}
        onClick={openContactFormModal}
      >
        {sideBarData.contactButtonText}
      </button>

      {/* Display contact form when state is set to true */}
      {contactOpen && <ContactForm closeButton={""} />}

      {/* Vertical dividing line */}
      <div className={styles["vertical-line"]}></div>

      {/* Social Media links */}
      {/* LinkedIn */}
      <a
        className={styles["social-media-links"]}
        href={sideBarData.linkedIn}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiLinkedin />
      </a>

      {/* GitHub */}
      <a
        className={styles["social-media-links"]}
        href={sideBarData.gitHub}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub />
      </a>

      {/* Instagram */}
      <a
        className={styles["social-media-links"]}
        href={sideBarData.instagram}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiInstagram />
      </a>

      {/* Darkroom Shop */}
      <a
        className={styles["social-media-links"]}
        href={sideBarData.darkroom}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiShoppingBag />
      </a>
    </div>
  );
};
