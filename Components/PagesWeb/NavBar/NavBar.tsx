import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const NavBar = () => {
  return (
    <>
      <nav>
        <MobileNavBar />
        <DesktopNavBar />
      </nav>
    </>
  );
};

export default NavBar;
