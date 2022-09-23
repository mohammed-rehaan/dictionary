import styles from "./Definition.module.css";

const Definition = (props) => {
  const { data } = props;
  return (
    <div className={styles.definition}>
      <p>{data.definition}</p>

      {data.example && (
        <p style={{ marginBottom: "0.8rem", linespacing: "1.2" }}>
          <strong>Ex:</strong> {data.example}
        </p>
      )}
    </div>
  );
};

export default Definition;
