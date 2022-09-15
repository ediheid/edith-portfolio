import { useGlobalContext } from "../../Context";
import Form from "./Form";
import Web from "../../pages/web";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  const { setContactOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();
  const { navOpen } = useGlobalContext();

  const closeContactFormModal = () => {
    setContactOpen(false);
    // If user is on Web View, and nav dropdown - hode dropdown when user uses contact form
    // Todo: Once built add all sub pages of Web and the same for Art
    <Web /> && navOpen === true ? setNavOpen(false) : null;
  };

  return (
    <div className={styles["contact-form-page-container"]}>
      <div className={styles["contact-modal"]}>
        <div className={styles["button-container"]}>
          <button
            className={styles["close-button"]}
            onClick={closeContactFormModal}
          >
            close
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
