import PortfolioCard from "./PortfolioCard";
import { portfolioCardData } from "./portfolioCardData";
import styles from "./portfolio-section.module.scss";

type Props = {
  portfolioSectionId: string;
};

const portfolioData: Props = {
  portfolioSectionId: "portfolio-section",
};

const Portfolio = ({} : Props) => {
  return (
    <section className={styles["portfolio-section-container"]} id={portfolioData.portfolioSectionId}>
      <div>

{portfolioCardData.map((card) => {

// eslint-disable-next-line react/jsx-key
return <PortfolioCard card={card} />

})}

      </div>
    </section>
  );
};

export default Portfolio;
