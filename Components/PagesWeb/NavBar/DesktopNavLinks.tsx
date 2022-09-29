import { useGlobalContext } from "../../../Context";
import Link from "next/link";
import { Link as Hashlink } from "react-scroll";

import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./desktop-nav-bar.module.scss";

type DesktopNavProps = {
  about: string;
  webPages: string;
  webDesign: string;
  webApps: string;
  contact: string;
  home: string;
};

let desktopNavData: DesktopNavProps = {
  about: "About",
  webPages: "Web-Pages",
  webDesign: "Web-Design",
  webApps: "Web-Apps",
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
          <li>{desktopNavData.webPages}</li>
          <li>{desktopNavData.webDesign}</li>
          <li>{desktopNavData.webApps}</li>
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
