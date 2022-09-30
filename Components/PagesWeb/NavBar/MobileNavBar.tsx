import { useGlobalContext } from "../../../Context";
import MobileNavLinks from "./MobileNavLinks";
import { Divide as Hamburger } from "hamburger-react";
import LogoLink from "../LogoLink/LogoLink";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavBar = () => {
  const { navOpen, setNavOpen, navVisible } = useGlobalContext();

  return (
    <div
      style={{ top: navVisible ? "0" : "-100px", transition: "top ease .1s" }}
      className={`${styles["nav-container"]} ${
        navOpen ? styles["nav-open-bg"] : styles["nav-closed-bg"]
      }`}
    >
      <LogoLink initials={""} />

      <div className={styles["hamburger-container"]}>
        <Hamburger
          label="Show menu"
          size={25}
          toggled={navOpen}
          toggle={setNavOpen}
        />
      </div>

      {navOpen && (
        <MobileNavLinks
          about={""}
          contact={""}
          home={""}
          portfolio={""}
          aboutSectionID={""}
          portfolioSectionID={""}
        />
      )}
    </div>
  );
};

export default MobileNavBar;
