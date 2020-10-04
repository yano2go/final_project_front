import React, { useState, useEffect } from "react";
import axios from "axios";

function GifSearch() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);
  const axios_instance = axios.create({
    baseURL: process.env.REACT_APP_APILINK,
  });
  useEffect(() => {
    setLoading(true);
    axios_instance
      .get(`/gifs`)
      .then((res) => {
        console.log(res.data);
        setTitles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>search Gifs</h1>
      <input
        type="text"
        placeholder="Search Gifs"
        onChange={(e) => setSearch(e.target.value)}
      />
      {titles
        .filter((gif) =>
          (gif.name + gif.description)
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((gifs, i) => (
          <GifDetail key={i} {...gifs} />
        ))}
    </div>
  );
}

const GifDetail = (props) => {
  const { name, description, gif_url } = props;

  return (
    <>
      <h2>{name}</h2>
      <img src={gif_url} />
      <p>{description}</p>
    </>
  );
};
export default GifSearch;
