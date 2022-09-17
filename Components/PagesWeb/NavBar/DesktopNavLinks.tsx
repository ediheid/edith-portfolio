import { useGlobalContext } from "../../../Context";
import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./desktop-nav-bar.module.scss";

const DesktopNavLinks = () => {
  const { contactOpen } = useGlobalContext();
  const { setContactOpen } = useGlobalContext();

  const openContactFormModal = () => {
    setContactOpen(true);
  };

  return (
    <>
      <div className={styles["nav-links-container"]}>
        <ul className={styles["nav-list"]}>
          <li>About</li>
          <li>Web-Pages</li>
          <li>Web-Design</li>
          <li>Web-Apps</li>
          <li onClick={openContactFormModal}>Contact</li>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default DesktopNavLinks;
