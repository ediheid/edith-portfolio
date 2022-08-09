import styles from "./contact-form.module.scss";

const Form = () => {
  return (
    <>
      <form className={styles["form"]}>
        {/* Name, email and subject */}
        <div>
          <div className={styles["label-input-containers"]}>
            <label>Name</label>
            <input type="text"></input>
          </div>

          <div className={styles["label-input-containers"]}>
            <label>email</label>
            <input type="text"></input>
          </div>

          <div className={styles["label-input-containers"]}>
            <label>Subject</label>
            <input type="text"></input>
          </div>
        </div>
        {/* Message and button */}
        <div>
          <div className={styles["label-input-containers"]}>
            <label>Message</label>
            <textarea className={styles["text-area"]} type="text"></textarea>
          </div>

          <button className={styles["submit-button"]}>Send</button>
        </div>
      </form>
    </>
  );
};

export default Form;
