import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./mobile-nav-bar.module.scss";

const MobileNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    
      <div className={styles["nav-container"]}>
      

        <div>
          <Hamburger
            label="Show menu"
            size={25}
            toggled={isNavOpen}
            toggle={setIsNavOpen}
          />
        </div>

        {isNavOpen && <MobileNavLinks />}
      </div>
    
  );
};

export default MobileNavBar;
