import Card from "./Card";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <Card>
      <div className={styles.spinner}></div>
    </Card>
  );
};
export default Spinner;
