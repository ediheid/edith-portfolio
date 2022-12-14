import { useGlobalContext } from "../../../Context";
import Link from "next/link";
import { Link as Hashlink } from "react-scroll";
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
            <Hashlink
              onClick={closeNav}
              to={mobileNavLinkData.aboutSectionID}
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {mobileNavLinkData.about}
            </Hashlink>
          </li>
          <li>
            <Hashlink
              onClick={closeNav}
              to={mobileNavLinkData.portfolioSectionID}
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {mobileNavLinkData.portfolio}
            </Hashlink>
          </li>
          <li onClick={openContactFormModal}>{mobileNavLinkData.contact}</li>
          <Link href="/">
            <li onClick={closeNav}>{mobileNavLinkData.home}</li>
          </Link>
        </ul>
      </div>
      {contactOpen && <ContactForm heading={""} />}
    </>
  );
};

export default MobileNavLinks;
