import { useGlobalContext } from "../../../Context";
import Form from "./Form";
import Web from "../../../pages/web";
import styles from "./contact-form.module.scss";

type ContactFormProps = {
  closeButton: string;
};

let contactFormData = {
  closeButton: "close",
};

const ContactForm = ({}: ContactFormProps) => {
  const { setContactOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();
  const { navOpen } = useGlobalContext();

  const closeContactFormModal = () => {
    setContactOpen(false);
    // If user is on Web View, and mobile nav dropdown - hide dropdown when user uses contact form
    // Todo: Once built add same functionality for all sub pages of Web and the same for Art or create Layout and and add there
    <Web /> && navOpen === true ? setNavOpen(false) : null;
  };

  return (
    <div className={styles["contact-form-page-container"]}>
      <div data-aos="zoom-in" className={styles["contact-modal"]}>
        <div className={styles["button-container"]}>
          <button
            className={styles["close-button"]}
            onClick={closeContactFormModal}
          >
            {contactFormData.closeButton}
          </button>
        </div>
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
        />
      </div>
    </div>
  );
};

export default ContactForm;
