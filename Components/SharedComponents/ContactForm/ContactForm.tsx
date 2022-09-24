import Form from "./Form";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  return (
    <div className={styles["contact-form-page-container"]}>
      <div data-aos="zoom-in" className={styles["contact-modal"]}>
        <h2 className={styles["form-heading"]}>Want to work together? Or just say hi?</h2>
        <Form
          nameLabel={""}
          emailLabel={""}
          subjectLabel={""}
          messageLabel={""}
          nameErrorMessage={""}
          emailErrorMessage={""}
          subjectErrorMessage={""}
          messageErrorMessage={""}
          sentSuccessfullyMessage={""}
          buttonSend={""}
          buttonSending={""}
          closeButton={""}
        />
      </div>
    </div>
  );
};

export default ContactForm;
