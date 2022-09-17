import LogoLink from "../LogoLink/LogoLink";
import DesktopNavLinks from "./DesktopNavLinks";
import styles from "./desktop-nav-bar.module.scss";

const DesktopNavBar = () => {
  return (
    <div className={styles["nav-container"]}>
      <LogoLink />

      <DesktopNavLinks />
    </div>
  );
};

export default DesktopNavBar;