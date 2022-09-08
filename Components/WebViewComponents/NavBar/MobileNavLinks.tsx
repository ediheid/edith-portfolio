import { useGlobalContext } from "../../../Context";
import ContactForm from "../../ContactForm/ContactForm";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavLinks = () => {
  const { contactOpen } = useGlobalContext();
  const { setContactOpen } = useGlobalContext();

  const openContactFormModal = () => {
    setContactOpen(true);
  };

  return (
    <>
      <div className={styles["nav-dropdown-container"]}>
        <ul className={styles["nav-list"]}>
          <li>About</li>
          <li>Websites</li>
          <li>Web Design</li>
          <li>Web Apps</li>
          <li>Home</li>
          <li onClick={openContactFormModal}>Contact</li>
        </ul>
      </div>
      {contactOpen && <ContactForm />}
    </>
  );
};

export default MobileNavLinks;
