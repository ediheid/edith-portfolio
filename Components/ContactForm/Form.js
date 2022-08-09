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
  let [nameError, setNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [subjectError, setSubjectError] = useState(false);
  let [messageError, setMessageError] = useState(false);
  let [isMessageSent, setIsMessageSent] = useState(false);

  console.log("Test", process.env.SERVICE_ID);
  console.log("Test 2", process.env.NEXT_PUBLIC_TEMPLATE_ID);

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
      // Todo: Send email code here try catch block
      //   console.log(messageText.trim().split(/\s+/).length);

      let serviceId = SERVICE_ID;
      let templateId = TEMPLATE_ID;
      let userId = USER_ID;
      const templateParams = {
        userName,
        userEmail,
        messageSubject,
        messageText,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      // Reset form
      setUserName("");
      setUserEmail("");
      setMessageSubject("");
      setMessageText("");
      //   setNameError(false);
      //   setLastNameError(false);
      //   setEmailError(false);
      //   setSubjectError(false);
      //   setMessageError(false);

      // Clears AND disables form after successful submit
      setIsMessageSent(true);
    } else {
      // ? Error Message state
      // Username char length
      userName < 2 ? setNameError(true) : setNameError(false);

      // Email validation
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }

      // Subject char length
      messageSubject < 2 ? setSubjectError(true) : setSubjectError(false);

      // message word length
      messageText.trim().split(/\s+/).length < 5
        ? setMessageError(true)
        : setMessageError(false);

      // Todo: Think of a better message and add a toast message
      alert("Message not sent. Please see  validation messages and try again.");
    }
  };

  return (
    <>
      <form className={styles["form"]}>
        {/* Name, email and subject */}
        <div>
          <div className={styles["label-input-containers"]}>
            <label className={styles["labels"]} htmlFor="inputName">
              Name
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="inputName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div className={styles["label-input-containers"]}>
            <label className={styles["labels"]} htmlFor="inputEmail">
              email
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="inputEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
          </div>

          <div className={styles["label-input-containers"]}>
            <label className={styles["labels"]} htmlFor="inputSubject">
              Subject
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="inputSubject"
              value={messageSubject}
              onChange={(e) => setMessageSubject(e.target.value)}
            ></input>
          </div>
        </div>
        {/* Message and button */}
        <div>
          <div className={styles["label-input-containers"]}>
            <label className={styles["labels"]} htmlFor="inputMessage">
              Message
            </label>
            <textarea
              className={styles["text-area"]}
              type="text"
              id="inputMessage"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={styles["button-wrapper"]}>
          <button
            className={styles["clear-button"]}
            onClick={clearForm}
            type="reset"

            // onClick={useAppContext().closeContactFormModal}
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
    </>
  );
};

export default Form;
