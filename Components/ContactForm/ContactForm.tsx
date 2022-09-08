import { useGlobalContext } from "../../Context";
import Form from "./Form";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  const { setContactOpen } = useGlobalContext();

  const closeContactFormModal = () => {
    setContactOpen(false);
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
