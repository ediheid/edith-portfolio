import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact-form.module.scss";
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { init } from "emailjs-com";
import { useGlobalContext } from "../../../Context";
import Web from "../../../pages/web";
init("userId");

declare let process: {
  env: {
    NEXT_PUBLIC_SERVICE_ID: string;
    NEXT_PUBLIC_TEMPLATE_ID: string;
    NEXT_PUBLIC_USER_ID: string;
  };
};

let SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
let TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
let USER_ID = process.env.NEXT_PUBLIC_USER_ID;

type FormProps = {
  closeButton: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  nameErrorMessage: string;
  emailErrorMessage: string;
  subjectErrorMessage: string;
  messageErrorMessage: string;
  sentSuccessfullyMessage: string;
  buttonSend: string;
  buttonSending: string;
};

let formData = {
  closeButton: "close",
  nameLabel: "Name",
  emailLabel: "email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  nameErrorMessage: "* Please enter at least 2 characters",
  emailErrorMessage: "* Please enter a valid email address",
  subjectErrorMessage: "* Please enter at least 2 characters",
  messageErrorMessage: "* Please enter at least 5 words",
  sentSuccessfullyMessage:
    "Thanks for your message, I'll get back to you in a jiffy!",
  buttonSend: "Send",
  buttonSending: "Sending",
};

const Form = ({}: FormProps) => {
  const { setContactOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();
  const { navOpen } = useGlobalContext();
  const [userName, setUserName] = useState<string>("");
  let [userEmail, setUserEmail] = useState<string>("");
  const [messageSubject, setMessageSubject] = useState<string>("");
  const [messageText, setMessageText] = useState<string>("");
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  /* For real time error handler when user clicks away from input - set via onBlur on corresponding input*/
  const [nameErrorMessage, setNameErrorMessage] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<boolean>(false);
  const [subjectErrorMessage, setSubjectErrorMessage] =
    useState<boolean>(false);
  const [messageTextErrorMessage, setMessageTextErrorMessage] =
    useState<boolean>(false);

  const closeContactFormModal = () => {
    setContactOpen(false);
    // If user is on Web View, and mobile nav dropdown - hide dropdown when user uses contact form
    // !
    // Todo: Once built add same functionality for all sub pages of Web and the same for Art or create Layout and and add there
    <Web title={""} /> && navOpen === true ? setNavOpen(false) : null;
  };

  // Toast alerts
  const fillAllFieldsNotification = () => {
    toast.warning(
      "Message not sent - Please fill out all fields and try again. 👀 ",
      {
        position: "bottom-center",
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
  };

  const networkErrorNotification = () => {
    toast.error(
      "Something went wrong 😔 Please check your connection and try again.",
      {
        position: "bottom-center",
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
  };

  // clear form function
  const clearForm = () => {
    setUserName("");
    setUserEmail("");
    setMessageSubject("");
    setMessageText("");
  };

  // Validation Check function
  const validationCheck = () => {
    let validationSuccessful = false;

    if (
      userName.length >= 2 &&
      messageSubject.length >= 2 &&
      messageText.trim().split(/\s+/).length >= 5 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)
    ) {
      validationSuccessful = true;
    } else {
      validationSuccessful = false;

      // Show toast alert
      fillAllFieldsNotification();
      // Set error messages
      setNameErrorMessage(true);
      setEmailErrorMessage(true);
      setSubjectErrorMessage(true);
      setMessageTextErrorMessage(true);
    }

    return validationSuccessful;
  };

  // Submit message function with error handling
  const submitMessage = (e: React.MouseEvent) => {
    e.preventDefault();

    userEmail = userEmail.toLowerCase();

    if (validationCheck()) {
      // Set EmailJS parameters
      const templateParams = {
        userName,
        userEmail,
        messageSubject,
        messageText,
      };

      try {
        // Set is sending to true for button change
        setIsSending(true);
        // Try sending email via emailJS
        emailjs
          .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
          .then((response) => {
            console.log("response status", response.status);

            if (response.status === 200) {
              clearForm();
              setIsMessageSent(true);
            }
          });
      } catch (e) {
        // Show toast alert
        networkErrorNotification();
        // switch back to 'send button'
        setIsSending(false);
        console.log("ERROR!!!", e);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      {/*  Render form if message has not been sent */}
      {!isMessageSent ? (
        <form className={styles["form"]}>
          {/* Name, email and subject */}
          {/* // ? Name */}
          <div className={styles["seperating-containers"]}>
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputName">
                {formData.nameLabel}
              </label>

              {/* Real time validation message */}
              {nameErrorMessage ? (
                userName.length < 2 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    {formData.nameErrorMessage}
                  </span>
                ) : null
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onBlur={() => setNameErrorMessage(true)}
              ></input>
            </div>

            {/*  Email */}
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputEmail">
                {formData.emailLabel}
              </label>

              {/* Real time validation message */}
              {emailErrorMessage ? (
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    {formData.emailErrorMessage}
                  </span>
                ) : null
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                onBlur={() => setEmailErrorMessage(true)}
              ></input>
            </div>

            {/* Subject */}
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputSubject">
                {formData.subjectLabel}
              </label>

              {/* Real time validation message */}
              {subjectErrorMessage ? (
                messageSubject.length < 2 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    {formData.subjectErrorMessage}
                  </span>
                ) : null
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputSubject"
                value={messageSubject}
                onChange={(e) => setMessageSubject(e.target.value)}
                onBlur={() => setSubjectErrorMessage(true)}
              ></input>
            </div>
          </div>

          {/* Message */}
          <div className={styles["seperating-containers"]}>
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputMessage">
                {formData.messageLabel}
              </label>

              {/* Real time validation message */}
              {messageTextErrorMessage ? (
                messageText.trim().split(/\s+/).length < 5 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    {formData.messageErrorMessage}
                  </span>
                ) : null
              ) : null}

              <textarea
                className={styles["text-area"]}
                id="inputMessage"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onBlur={() => setMessageTextErrorMessage(true)}
              ></textarea>
            </div>
          </div>

          {/* // ? Buttons */}
          <div className={styles["button-wrapper"]}>
            <button
              className={styles["close-button"]}
              onClick={closeContactFormModal}
            >
              {formData.closeButton}
            </button>

            {isSending ? (
              <button className={styles["sending-button"]}>
                <span> {formData.buttonSending} </span>
                <PulseLoader color="#cececc" size={8} />
              </button>
            ) : (
              <button
                className={styles["submit-button"]}
                onClick={submitMessage}
                type="submit"
              >
                {formData.buttonSend}
              </button>
            )}
          </div>
        </form>
      ) : (
        // If Message has been sent successfully then render thank you message
        <span
          data-aos="zoom-in"
          className={styles["message-sent-notification"]}
        >
          {formData.sentSuccessfullyMessage}
        </span>
      )}
    </>
  );
};

export default Form;
