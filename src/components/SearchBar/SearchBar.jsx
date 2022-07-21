import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const SearchBar = ({ classes }) => {
  const [query, setQuery] = useState("");
  const [queryRes, serQueryRes] = useState([]);
  const key = process.env.REACT_APP_IMDB_API_KEY;

  const getMovie = (q) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&include_adult=false&query=${q}`
      )
      .then((res) => serQueryRes(res.data.results));
  };
  useEffect(() => {
    query.length > 0 ? getMovie(query) : serQueryRes([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className={`w-[30%] ${classes}`}>
      <SearchForm setQuery={setQuery} query={query} />
      <SearchResult result={queryRes} setQuery={setQuery} />
    </div>
  );
};

export default SearchBar;
