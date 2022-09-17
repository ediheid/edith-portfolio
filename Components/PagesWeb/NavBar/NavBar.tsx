import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

type NavBarProps = {
  // eg.
  // message:string;
  // const App = ({ message }: AppProps) => <div>{message}</div>;
};

const NavBar = ({}: NavBarProps) => {
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
