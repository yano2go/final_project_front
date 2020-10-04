import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Categories.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categories() {
  const { path } = useRouteMatch();
  const slug = path.slice(1); // could be "cooking" or "dyi"
  const [categoryData, setCategoryData] = useState([]);
  const url = `${process.env.REACT_APP_APILINK}gifs?category=${slug}`;
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { method: "get" });
      const categoryData = await response.json();
      setCategoryData(categoryData);
    };

    fetchData();
  }, [url]);

  const APIKEY = process.env.REACT_APP_APIKEY;

  const [allReturnedObjects, setAllReturnedObjects] = useState([]);

  const baseURL =
    "https://api.gfycat.com/v1/gfycats/search?search_text=cooking";

  useEffect(() => {
    const fetchGfyCat = async () => {
      const gfyCatResponse = await fetch(baseURL, {
        method: "get",
        Authorization: `${APIKEY}`,
      });
      const allReturnedData = await gfyCatResponse.json();
      setAllReturnedObjects(allReturnedData.gfycats);
    };
    fetchGfyCat();
  }, [baseURL]);

  const gfyCatGifs = allReturnedObjects.map((gfyCatGif, index) => {
    return (
      <div key={index}>
        <img src={gfyCatGif.gifUrl} />
      </div>
    );
  });

  const categoryGifs = categoryData.map((categoryItem, index) => {
    console.log(categoryItem.id);
    return (
      <div key={index}>
        <Link to={{ pathname: "/show", state: { categoryItem } }}>
          <h2 className="card">{categoryItem.name}</h2>
          <img className="card" src={categoryItem.gif_url}></img>
          <p className="card">{categoryItem.description}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="display">
      <h1>{slug}</h1>
      {categoryGifs}
      {slug == `cooking` ? gfyCatGifs : null}
      {/* {gfyCatGifs} */}
    </div>
  );
}
