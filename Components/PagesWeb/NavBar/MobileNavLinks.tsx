import { useGlobalContext } from "../../../Context";
import Link from "next/link";
import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./mobile-nav-bar.module.scss";

type MobileNavLinkProps = {
  about: string;
  portfolio: string;
  contact: string;
  home: string;
  aboutSectionID: string;
  portfolioSectionID: string;
};

let mobileNavLinkData: MobileNavLinkProps = {
  about: "About",
  portfolio: "Portfolio",
  contact: "Contact",
  home: "Home",
  aboutSectionID: "about-section",
  portfolioSectionID: "portfolio-section",
};

const MobileNavLinks = ({}: MobileNavLinkProps) => {
  const { contactOpen, closeNav, openContactFormModal } = useGlobalContext();

  return (
    <>
      <div data-aos="fade-down" className={styles["nav-dropdown-container"]}>
        <ul className={styles["nav-list"]}>
          <li>
            <Link href={`#${mobileNavLinkData.aboutSectionID}`}>
              <span onClick={closeNav}>{mobileNavLinkData.about}</span>
            </Link>
          </li>
          <li>
            <Link href={`#${mobileNavLinkData.portfolioSectionID}`}>
              <span onClick={closeNav}>{mobileNavLinkData.portfolio}</span>
            </Link>
          </li>
          <li onClick={openContactFormModal}>{mobileNavLinkData.contact}</li>
          <li>
            <Link href="/">
              <span onClick={closeNav}>{mobileNavLinkData.home}</span>
            </Link>
          </li>
        </ul>
      </div>
      {contactOpen && <ContactForm heading={""} />}
    </>
  );
};

export default MobileNavLinks;
