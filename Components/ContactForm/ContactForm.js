import { useAppContext } from "../../Context/AppContext";
import Form from "./Form";
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
        {/* Form */}
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
