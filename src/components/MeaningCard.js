import { useState } from "react";
import Card from "./UI/Card.js";
import styles from "./MeaningCard.module.css";
import MeaningItem from "./MeaningItem.js";

const MeaningCard = (props) => {
  const dataArr = props.data;
  const [data] = dataArr;

  return (
    data && (
      <Card className={styles.whitespace}>
        <div className={styles.test}>
          <h2>{data.word}</h2>
          {data.phonetic && (
            <p className={styles.phonetic}>(say: {data.phonetic})</p>
          )}

          <h4>Meanings</h4>
          <ul>
            {data.meanings.map((item, i) => {
              return <MeaningItem data={item} key={i} />;
            })}
          </ul>
        </div>
      </Card>
    )
  );
};

export default MeaningCard;
