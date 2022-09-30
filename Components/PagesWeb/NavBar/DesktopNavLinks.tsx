import { useGlobalContext } from "../../../Context";
import Link from "next/link";
import { Link as Hashlink } from "react-scroll";

import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./desktop-nav-bar.module.scss";

type DesktopNavProps = {
  about: string;
  portfolio: string;
  contact: string;
  home: string;
};

let desktopNavData: DesktopNavProps = {
  about: "About",
  portfolio: "Portfolio",
  contact: "Contact",
  home: "Home",
};

const DesktopNavLinks = ({}: DesktopNavProps) => {
  const { contactOpen, openContactFormModal } = useGlobalContext();

  return (
    <>
      <div className={styles["nav-links-container"]}>
        <ul className={styles["nav-list"]}>
          <li>
            <Hashlink
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {desktopNavData.about}
            </Hashlink>
          </li>
          <li>{desktopNavData.portfolio}</li>
          <li onClick={openContactFormModal}>{desktopNavData.contact}</li>
          <Link href="/">
            <li>{desktopNavData.home}</li>
          </Link>
        </ul>
      </div>
      {contactOpen && <ContactForm heading={""} />}
    </>
  );
};

export default DesktopNavLinks;
