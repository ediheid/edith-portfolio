import styles from "./contact-form.module.scss";

const Form = () => {
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
            ></textarea>
          </div>
        </div>
        <div className={styles["button-wrapper"]}>
          <button
            className={styles["clear-button"]}
            // onClick={useAppContext().closeContactFormModal}
          >
            Clear
          </button>
          <button className={styles["submit-button"]}>Send</button>
        </div>
      </form>
    </>
  );
};

export default Form;
