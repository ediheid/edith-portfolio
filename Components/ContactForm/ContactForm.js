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
        <form className={styles["form"]}>
          <div>
            <div className={styles["label-input-containers"]}>
              <label>Name</label>
              <input type="text"></input>
            </div>

            <div className={styles["label-input-containers"]}>
              <label>email</label>
              <input type="email"></input>
            </div>

            <div className={styles["label-input-containers"]}>
              <label>Subject</label>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div className={styles["label-input-containers"]}>
              <label>Message</label>
              <textarea className={styles["text-area"]} type="text"></textarea>
            </div>

            <button className={styles["submit-button"]}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
