import styles from "./style";

export default () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div></div>
    </div>
  </div>
);
