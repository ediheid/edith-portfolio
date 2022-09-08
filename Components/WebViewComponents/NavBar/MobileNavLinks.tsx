import { useGlobalContext } from "../../../Context";
import ContactForm from "../../ContactForm/ContactForm";
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
      <div className={styles["nav-dropdown-container"]}>
        <ul className={styles["nav-list"]}>
          <li onClick={closeNav}>About</li>
          <li onClick={closeNav}>Websites</li>
          <li onClick={closeNav}>Web Design</li>
          <li onClick={closeNav}>Web Apps</li>
          <li onClick={closeNav}>Home</li>
          <li onClick={openContactFormModal}>Contact</li>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default MobileNavLinks;
