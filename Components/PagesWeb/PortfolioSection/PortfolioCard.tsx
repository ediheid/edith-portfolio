import Link from "next/link";
import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import styles from "./portfolio-card.module.scss"

const PortfolioCard = ({
  card,
}: {
  [key: string]: { [key: string]: string };
}) => {
  return (
    <>
      {/* External link card */}
      {/* Something like 'if ID = external then return this.. else return internal */}

      <a>
        This will be the card
        <div className={styles["image-container"]}>
          <Image
            src={card.projectImage}
            alt={card.projectImageAltText}
          // Overwritten in image container
            height="300"
            width="300"
          ></Image>
        </div>
      </a>

      {/* Internal link card */}

      <Link href={card.externalLink}>
        <div className={styles["image-container"]}>
          <Image
            src={card.projectImage}
            alt={card.projectImageAltText}
          // Overwritten in image container
            height="300"
            width="300"
          ></Image>
        </div>
      </Link>
    </>
  );
};

export default PortfolioCard;
