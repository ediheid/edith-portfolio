import Link from "next/link";
import styles from "./enter-split-sites.module.scss";

const EnterSitesComponent = ({ site }: { [key: string]: any }) => {
  return (
    <>
      <Link href={site.href}>
        <div
          className={styles["content-container"]}
          // id={styles[`${site.imageId}`]}
        ></div>
      </Link>
    </>
  );
};

export default EnterSitesComponent;
