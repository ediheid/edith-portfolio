import styles from "./tools-and-tech.module.scss";

const icons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ToolsAndTech = () => {
  return (
    <section className={styles["tools-tech-container"]}>
      <div className={styles["animation-container"]}>
        <div className={`${styles["animation-element"]} ${styles["primary"]}`}>
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon"]} key={index}>
                {icon}
              </div>
            );
          })}
        </div>

        <div
          className={`${styles["animation-element"]} ${styles["secondary"]}`}
        >
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon"]} key={index}>
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTech;
