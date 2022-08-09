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
  let [isMessageSent, setIsMessageSent] = useState(false);

  // clear form function
  const clearForm = () => {
    setUserName("");
    setUserEmail("");
    setMessageSubject("");
    setMessageText("");
  };

  // Submit message function with validation and error handling
  const submitMessage = (e) => {
    e.preventDefault();

    userEmail = userEmail.toLowerCase();

    // ? Validation Check
    if (
      userName.length >= 2 &&
      messageSubject.length >= 2 &&
      messageText.trim().split(/\s+/).length >= 5 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)
    ) {
      // Set EmailJS parameters
      const templateParams = {
        userName,
        userEmail,
        messageSubject,
        messageText,
      };

      // Try sending email
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      // Reset form
      clearForm();

      // Clears AND disables form after successful submit
      setIsMessageSent(true);
    } else {
      // Todo: Think of a better message and add a toast message
      alert("Message couldn't send. Please check input and try again.");
    }
  };

  return (
    <>
      {/*  Render from id message has not been sent */}
      {!isMessageSent ? (
        <form className={styles["form"]}>
          {/* Name, email and subject */}
          {/* // ? Name */}
          <div>
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputName">
                Name
              </label>

              {/* Real time error handler */}
              {userName.length >= 1 && userName.length < 2 ? (
                <span className={styles["error-message"]}>
                  {" "}
                  * Please enter at least 2 characters
                </span>
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>

            {/* // ? Email */}
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputEmail">
                email
              </label>

              {/* Real time error handler */}
              {userEmail.length >= 1 &&
              // (!) for not at beginning of regex email validation
              !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ? (
                <span className={styles["error-message"]}>
                  {" "}
                  * Please enter a valid email address
                </span>
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              ></input>
            </div>

            {/* // ? Subject */}
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputSubject">
                Subject
              </label>

              {/* Real time error handler */}
              {messageSubject.length >= 1 && messageSubject.length < 2 ? (
                <span className={styles["error-message"]}>
                  {" "}
                  * Please enter at least 2 characters
                </span>
              ) : null}

              <input
                className={styles["input"]}
                type="text"
                id="inputSubject"
                value={messageSubject}
                onChange={(e) => setMessageSubject(e.target.value)}
              ></input>
            </div>
          </div>

          {/* // ? Message */}
          <div>
            <div className={styles["label-input-containers"]}>
              <label className={styles["labels"]} htmlFor="inputMessage">
                Message
              </label>

              {/* Real time error handler */}
              {/* Minimum length */}
              {messageText.length >= 1 &&
              messageText.trim().split(/\s+/).length < 5 ? (
                <span className={styles["error-message"]}>
                  {" "}
                  * Please enter at least 5 words
                </span>
              ) : null}

              {/* Maximum lenght */}
              {messageText.length >= 2000 ? (
                <span className={styles["error-message"]}>
                  {" "}
                  Sorry, you have reached the maximum message length.
                </span>
              ) : null}

              <textarea
                className={styles["text-area"]}
                type="text"
                id="inputMessage"
                value={messageText}
                maxLength="2000"
                onChange={(e) => setMessageText(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* // ? Buttons */}
          <div className={styles["button-wrapper"]}>
            <button
              className={styles["clear-button"]}
              onClick={clearForm}
              type="reset"
            >
              Clear
            </button>
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
        <div>Thanks for your message, I'll get back to you in a jiffy! 🙂 </div>
      )}
    </>
  );
};

export default Form;
