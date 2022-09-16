import Link from "next/link";
import styles from "./enter-split-sites.module.scss";
import Image from "next/image";
import slide1 from "./static/slide-1.png";

const EnterSitesComponent = ({ site }: { [key: string]: any }) => {
  return (
    <>
      <Link href={site.href}>
        <div className={styles["content-container"]}></div>
      </Link>
    </>
  );
};

export default EnterSitesComponent;
