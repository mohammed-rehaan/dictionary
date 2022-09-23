import Card from "./UI/Card";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { useRef } from "react";
const SearchBar = (props) => {
  const searchInputref = useRef();
  const { fetchData } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(searchInputref.current.value);
    searchInputref.current.value = "";
  };
  return (
    <Card>
      <div className={styles.searchbar}>
        <FaSearch className={styles.searchicon} />
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Search a word" ref={searchInputref} />
        </form>
      </div>
    </Card>
  );
};

export default SearchBar;
