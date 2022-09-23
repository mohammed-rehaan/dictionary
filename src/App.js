import { useState } from "react";
import MeaningCard from "./components/MeaningCard";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/UI/Spinner";
import DisplayInfo from "./components/DisplayInfo";
import Header from "./components/Header";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("Try Searching a word");

  const fetchData = async (query) => {
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query.toLowerCase()}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      setFetchedData(data);
    } catch (err) {
      setInfo(err.message);
      setFetchedData([]);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <SearchBar fetchData={fetchData} />
      {!isLoading && fetchedData.length === 0 && <DisplayInfo message={info} />}
      {!isLoading && fetchedData.length > 0 && (
        <MeaningCard data={fetchedData} />
      )}
      {isLoading && <Spinner />}
    </>
  );
}

export default App;
