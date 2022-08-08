import { useAppContext } from "../../Context/AppContext";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  return (
    <div className={styles["contact-form-page-container"]}>
      <div className={styles["contact-modal"]}>
        <button
          className={styles["close-button"]}
          onClick={useAppContext().closeContactFormModal}
        >
          Close
        </button>
        <div>This will be the contact form modal</div>
      </div>
    </div>
  );
};

export default ContactForm;
