import { useGlobalContext } from "../../../Context";
import MobileNavLinks from "./MobileNavLinks";
import { Divide as Hamburger } from "hamburger-react";
import LogoLink from "../../BothViewComponents/LogoLink/LogoLink";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavBar = () => {
  const { navOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();

  return (
    <div className={styles["nav-container"]}>
      {/* //Todo: Logo / home link will go here */}

      <LogoLink />

      <div className={styles["hamburger-container"]}>
        <Hamburger
          label="Show menu"
          size={20}
          toggled={navOpen}
          toggle={setNavOpen}
        />
      </div>

      {navOpen && <MobileNavLinks />}
    </div>
  );
};

export default MobileNavBar;
