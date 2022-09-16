import Link from "next/link";
import styles from "./enter-split-sites.module.scss";

const EnterSitesComponent = ({ site }: { [key: string]: any }) => {
  return (
    <>
      <Link href={site.href}>
        <div
          className={styles["content-container"]}
          // id={styles[`${site.imageId}`]}


        >

<h2 className={styles["site-name"]}>{site.id}</h2>


        </div>
      </Link>
    </>
  );
};

export default EnterSitesComponent;
