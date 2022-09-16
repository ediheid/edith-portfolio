import Link from "next/link";
import styles from "./logo-link.module.scss";

const LogoLink = () => {
  return (
    <div className={styles["home-link-container"]}>
      <Link href="/">
        <div>
          <span>eh</span>
          <span> .home</span>
        </div>
      </Link>
    </div>
  );
};

export default LogoLink;
