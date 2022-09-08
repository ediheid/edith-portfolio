import { useState } from "react";
import { useGlobalContext } from "../../../Context";
import MobileNavLinks from "./MobileNavLinks";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavBar = () => {
  const { navOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();

  return (
    <div className={styles["nav-container"]}>
      {/* //Todo: Logo / home link will go here */}

      <div className={styles["hamburger-container"]}>
        <Hamburger
          label="Show menu"
          size={20}
          onToggle={(toggled) => {
            toggled ? setNavOpen(true) : setNavOpen(false);
          }}
        />
      </div>

      {navOpen && <MobileNavLinks />}
    </div>
  );
};

export default MobileNavBar;
