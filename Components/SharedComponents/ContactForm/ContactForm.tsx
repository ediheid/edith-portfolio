import Form from "./Form";
import styles from "./contact-form.module.scss";

type ContactFormProps = {
  heading: string;
};

let contactFormProps: ContactFormProps = {
  heading: "Want to work together? Or just say hi?",
};

const ContactForm = ({}: ContactFormProps) => {
  return (
    <div className={styles["contact-form-page-container"]}>
      <div data-aos="zoom-in" className={styles["contact-modal"]}>
        <h2 className={styles["form-heading"]}>{contactFormProps.heading}</h2>
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
