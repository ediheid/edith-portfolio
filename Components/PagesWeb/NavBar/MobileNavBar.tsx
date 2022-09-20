import { useGlobalContext } from "../../../Context";
import MobileNavLinks from "./MobileNavLinks";
import { Divide as Hamburger } from "hamburger-react";
import LogoLink from "../LogoLink/LogoLink";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavBar = () => {
  const { navOpen } = useGlobalContext();
  const { setNavOpen } = useGlobalContext();

  return (
    <div className={styles["nav-container"]}>
      <LogoLink initials={""} extraText={""} />

      <div className={styles["hamburger-container"]}>
        <Hamburger
          label="Show menu"
          size={20}
          toggled={navOpen}
          toggle={setNavOpen}
        />
      </div>

      {navOpen && <MobileNavLinks about={""} webPages={""} webDesign={""} webApps={""} contact={""} home={""} />}
    </div>
  );
};

export default MobileNavBar;
