import { useState } from "react";
import emailjs from "emailjs-com";

import styles from "./contact-form.module.scss";

import { init } from "emailjs-com";
init("userId");

let SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
let TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
let USER_ID = process.env.NEXT_PUBLIC_USER_ID;

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  /* For real time error handler when user clicks away from input - set via onBlur on corresponding input*/
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [subjectErrorMessage, setSubjectErrorMessage] = useState(false);
  const [messageTextErrorMessage, setMessageTextErrorMessage] = useState(false);

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

      // Todo: Think of a better message and add a toast message
      // alert("Please make sure to fill in all fields and try again.");
      setNameErrorMessage(true);
      setEmailErrorMessage(true);
      setSubjectErrorMessage(true);
      setMessageTextErrorMessage(true);
    }

    return validationSuccessful;
  };

  // Submit message function with error handling
  const submitMessage = (e) => {
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
        alert("Network error, please try again", e.ReferenceError);
        console.log("ERROR!!!", e);
      }
    }
  };

  return (
    <>
      {/*  Render form if message has not been sent */}
      {!isMessageSent ? (
        <form className={styles["form"]}>
          {/* Name, email and subject */}
          {/* // ? Name */}
          <div className={styles["seperating-containers"]}>
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputName">
                Name
              </label>

              {/* Real time validation message */}
              {nameErrorMessage ? (
                userName.length < 2 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    * Please enter at least 2 characters
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
                email
              </label>

              {/* Real time validation message */}
              {emailErrorMessage ? (
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    * Please enter a valid email address
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
                Subject
              </label>

              {/* Real time validation message */}
              {subjectErrorMessage ? (
                messageSubject.length < 2 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    * Please enter at least 2 characters
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
                Message
              </label>

              {/* Real time validation message */}
              {messageTextErrorMessage ? (
                messageText.trim().split(/\s+/).length < 5 ? (
                  <span className={styles["error-message"]}>
                    {" "}
                    * Please enter at least 5 words
                  </span>
                ) : null
              ) : null}

              {/* Real time validation message */}
              {/* Maximum length */}
              {messageText.length >= 2000 ? (
                <span className={styles["error-message"]}>
                  {" "}
                  Sorry, you have reached the maximum message length 2000
                  characters
                </span>
              ) : null}

              <textarea
                className={styles["text-area"]}
                type="text"
                id="inputMessage"
                value={messageText}
                maxLength="2000"
                onChange={(e) => setMessageText(e.target.value)}
                onBlur={() => setMessageTextErrorMessage(true)}
              ></textarea>
            </div>
          </div>

          {/* // ? Buttons */}
          <div className={styles["button-wrapper"]}>
            <button
              className={styles["submit-button"]}
              onClick={submitMessage}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      ) : (
        // If Message has been sent successfully then render thank you message
        <span className={styles["message-sent-notification"]}>
          Thanks for your message, I'll get back to you in a jiffy!
        </span>
      )}
    </>
  );
};

export default Form;
