import Definition from "./Definition";
const MeaningItem = (props) => {
  const { data } = props;
  return (
    <li>
      <span>[{data.partOfSpeech}]</span>

      {data.definitions.map((item, i) => {
        return <Definition data={item} key={i} />;
      })}
    </li>
  );
};
export default MeaningItem;
