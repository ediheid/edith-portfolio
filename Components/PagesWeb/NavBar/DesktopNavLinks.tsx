import { useGlobalContext } from "../../../Context";
import Link from "next/link";

import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./desktop-nav-bar.module.scss";

type DesktopNavProps = {
  about: string;
  portfolio: string;
  contact: string;
  home: string;
  aboutSectionID: string;
  portfolioSectionID: string;
};

let desktopNavData: DesktopNavProps = {
  about: "About",
  portfolio: "Portfolio",
  contact: "Contact",
  home: "Home",
  aboutSectionID: "about-section",
  portfolioSectionID: "portfolio-section",
};

const DesktopNavLinks = ({}: DesktopNavProps) => {
  const { contactOpen, openContactFormModal } = useGlobalContext();

  return (
    <>
      <div className={styles["nav-links-container"]}>
        <ul className={styles["nav-list"]}>
          <li>
            <Link href={`#${desktopNavData.aboutSectionID}`}>
              {desktopNavData.about}
            </Link>
          </li>
          <li>
            <Link href={`#${desktopNavData.portfolioSectionID}`}>
              {desktopNavData.portfolio}
            </Link>
          </li>
          <li onClick={openContactFormModal}>{desktopNavData.contact}</li>
          <li>
            <Link href="/">{desktopNavData.home}</Link>
          </li>
        </ul>
      </div>
      {contactOpen && <ContactForm heading={""} />}
    </>
  );
};

export default DesktopNavLinks;
