import styles from "./mobile-nav-bar.module.scss";

const MobileNavLinks = () => {
  return (
    <div className={styles["nav-dropdown-container"]}>
      <ul className={styles["nav-list"]}>
        <li>About</li>
        <li>Websites</li>
        <li>Web Design</li>
        <li>Web Apps</li>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
