import { useGlobalContext } from "../../../Context";
import LogoLink from "../LogoLink/LogoLink";
import DesktopNavLinks from "./DesktopNavLinks";
import styles from "./desktop-nav-bar.module.scss";

const DesktopNavBar = () => {
  const { navVisible } = useGlobalContext();
  return (
    <div
      style={{ top: navVisible ? "0" : "-100px", transition: " top ease .5s" }}
      className={styles["nav-container"]}
    >
      <LogoLink initials={""} />

      <DesktopNavLinks
        about={""}
        webPages={""}
        webDesign={""}
        webApps={""}
        contact={""} home={""}      />
    </div>
  );
};

export default DesktopNavBar;
