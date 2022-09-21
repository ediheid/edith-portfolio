import Link from "next/link";
import styles from "./logo-link.module.scss";

type LogoProps = {
  initials: string;
};

let logoData = {
  initials: "eh.",
};

const LogoLink = ({}: LogoProps) => {
  return (
    <div className={styles["home-link-container"]}>
      <Link href="/">
        <div>
          <span>{logoData.initials}</span>
        </div>
      </Link>
    </div>
  );
};

export default LogoLink;
