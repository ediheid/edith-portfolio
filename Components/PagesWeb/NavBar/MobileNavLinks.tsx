import { useGlobalContext } from "../../../Context";
import ContactForm from "../../SharedComponents/ContactForm/ContactForm";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavLinks = () => {
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
          <li onClick={closeNav}>About</li>
          <li onClick={closeNav}>Web-Pages</li>
          <li onClick={closeNav}>Web-Design</li>
          <li onClick={closeNav}>Web-Apps</li>
          <li onClick={closeNav}>Home</li>
          <li onClick={openContactFormModal}>Contact</li>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default MobileNavLinks;
