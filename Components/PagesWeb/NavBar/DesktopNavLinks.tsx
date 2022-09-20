import { useGlobalContext } from "../../../Context";
import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./desktop-nav-bar.module.scss";

type DesktopNavProps = {
  about: string;
  webPages: string;
  webDesign: string;
  webApps: string;
  contact: string;
};

let desktopNavData = {
  about: "About",
  webPages: "Web-Pages",
  webDesign: "Web-Design",
  webApps: "Web-Apps",
  contact: "Contact",
};

const DesktopNavLinks = ({}: DesktopNavProps) => {
  const { contactOpen } = useGlobalContext();
  const { setContactOpen } = useGlobalContext();

  const openContactFormModal = () => {
    setContactOpen(true);
  };

  return (
    <>
      <div className={styles["nav-links-container"]}>
        <ul className={styles["nav-list"]}>
          <li>{desktopNavData.about}</li>
          <li>{desktopNavData.webPages}</li>
          <li>{desktopNavData.webDesign}</li>
          <li>{desktopNavData.webApps}</li>
          <li onClick={openContactFormModal}>{desktopNavData.contact}</li>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default DesktopNavLinks;
