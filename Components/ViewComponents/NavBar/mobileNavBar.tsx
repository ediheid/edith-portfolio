import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import styles from "./mobile-nav-bar.module.scss";


  const MobileNavBar = () => {
const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    return (
      <>
        <div className={styles["nav-container"]}>

<div>Will be the logo/home link</div>

<div>

<Hamburger
label="Show menu"
size={25}
toggled={isNavOpen}
toggle={setIsNavOpen}
/>

</div>

        </div>
      </>
    );
  };
  
  export default MobileNavBar;