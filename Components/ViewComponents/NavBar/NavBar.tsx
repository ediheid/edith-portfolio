import MobileNavBar from "./mobileNavBar";
import styles from "./nav-bar.module.scss";

type NavBarProps = {

    // eg.
    // message:string;
  
    // const App = ({ message }: AppProps) => <div>{message}</div>;
  }
  
  const NavBar = ({} : NavBarProps) => {
    return (
      <>
        <nav className={styles["nav-bar-element"]}>
            <MobileNavBar/>

        </nav>
      </>
    );
  };
  
  export default NavBar;