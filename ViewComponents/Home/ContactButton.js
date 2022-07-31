import styles from "./contact-button.module.scss";

const ContactButton = () => {
  return (
    <div className={styles["button-container"]}>
      <button className={styles["contact-button"]}>Contact</button>
    </div>
  );
};

export default ContactButton;
