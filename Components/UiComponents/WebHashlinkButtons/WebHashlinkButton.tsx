import styles from "./web-hashlink-button.module.scss";

type Props = {
  children: React.ReactNode;
};

const WebHashlinkButton = ({ children }: Props) => {
  let textToAnimate = "Link here * Link here * Link here";

  return (
    <div className={styles["outer-circle"]}>
      <p className={styles["animated-text"]}>
        {textToAnimate.split("").map((letter) => {
          console.log(letter);
          let index = textToAnimate.indexOf(letter);
          console.log(index);
          return <span className={styles["letter"]} key={index}>{letter}</span>;
        })}
      </p>
      <div className={styles["button-circle"]}>{children}</div>
    </div>
  );
};

export default WebHashlinkButton;
