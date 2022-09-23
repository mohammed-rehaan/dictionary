import Card from "./UI/Card";
import styles from "./DisplayInfo.module.css";

const DisplayInfo = (props) => {
  return (
    <Card>
      <p className={styles.info}>{props.message}</p>
    </Card>
  );
};

export default DisplayInfo;
