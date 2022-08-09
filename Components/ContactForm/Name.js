// import styles from "./contact-form.module.scss";

// const Name = () => {
//   return (
//     <div className={styles["label-input-containers"]}>
//       <label className={styles["labels"]} htmlFor="inputName">
//         Name
//       </label>

//       {/* Real time error handler */}
//       {useAppContext().userName.length >= 1 &&
//       useAppContext().userName.length < 2 ? (
//         <span className={styles["error-message"]}>
//           {" "}
//           * Please enter at least 2 characters
//         </span>
//       ) : null}

//       <input
//         className={styles["input"]}
//         type="text"
//         id="inputName"
//         value={useAppContext.userName}
//         onChange={(e) => useAppContext.setUserName(e.target.value)}
//       ></input>
//     </div>
//   );
// };

// export default Name;
