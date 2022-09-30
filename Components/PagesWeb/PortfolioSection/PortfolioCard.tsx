import Link from "next/link";
import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import styles from "./portfolio-card.module.scss";

const PortfolioCard = ({
  card,
}: {
  [key: string]: { [key: string]: string };
}) => {
  return (
    <>
      {/* Conditionally render card with <a></a> for external link wrapper or <Link> for internal depending on ID */}
      {card.id === "externalLink" ? (
        // External Link Card
        <a href={card.externalLink} target="_blank" rel="noopener noreferrer">
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
      ) : (
        // Internal Link Card
        <Link href={card.internalLink}>
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
      )}
    </>
  );
};

export default PortfolioCard;
