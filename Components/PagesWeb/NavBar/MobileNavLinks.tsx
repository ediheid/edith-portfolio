import { useGlobalContext } from "../../../Context";
import Link from "next/link";
import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./mobile-nav-bar.module.scss";

type MobileNavLinkProps = {
  about: string;
  webPages: string;
  webDesign: string;
  webApps: string;
  contact: string;
  home: string;
};

let mobileNavLinkData = {
  about: "About",
  webPages: "Web-Pages",
  webDesign: "Web-Design",
  webApps: "Web-Apps",
  contact: "Contact",
  home: "Home",
};

const MobileNavLinks = ({}: MobileNavLinkProps) => {
  const { contactOpen } = useGlobalContext();
  const { setContactOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();

  const openContactFormModal = () => {
    setContactOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div data-aos="fade-down" className={styles["nav-dropdown-container"]}>
        <ul className={styles["nav-list"]}>
          <li onClick={closeNav}>{mobileNavLinkData.about}</li>
          <li onClick={closeNav}>{mobileNavLinkData.webPages}</li>
          <li onClick={closeNav}>{mobileNavLinkData.webDesign}</li>
          <li onClick={closeNav}>{mobileNavLinkData.webApps}</li>
          <li onClick={openContactFormModal}>{mobileNavLinkData.contact}</li>
          <Link href="/">
            <li onClick={closeNav}>{mobileNavLinkData.home}</li>
          </Link>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default MobileNavLinks;
