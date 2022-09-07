import { useAppContext } from "../../Context/AppContext";
import Form from "./Form";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  return (
    <div className={styles["contact-form-page-container"]}>
      <div className={styles["contact-modal"]}>
        <div className={styles["button-container"]}>
          <button
            className={styles["close-button"]}
            onClick={useAppContext().closeContactFormModal}
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
