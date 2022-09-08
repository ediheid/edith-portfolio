import Link from "next/link";
import styles from "./enter-split-sites.module.scss";

const EnterSitesComponent = ({ site }) => {
  return (
    <>
      <Link href={site.href}>
        <div className={styles["content-container"]}></div>
      </Link>
    </>
  );
};

export default EnterSitesComponent;
