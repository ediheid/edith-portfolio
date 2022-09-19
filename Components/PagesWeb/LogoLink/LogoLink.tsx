import Link from "next/link";
import styles from "./logo-link.module.scss";

type LogoProps = {
  initials: string
  extraText: string
}

let logoData = {
initials: "eh",
extraText: " .home"

}

const LogoLink = ({} : LogoProps) => {
  return (
    <div className={styles["home-link-container"]}>
      <Link href="/">
        <div>
          <span>{logoData.initials}</span>
          <span>{logoData.extraText}</span>
        </div>
      </Link>
    </div>
  );
};

export default LogoLink;
