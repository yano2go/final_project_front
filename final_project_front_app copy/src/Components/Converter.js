import React, { useEffect, useState } from "react";
import Gfycat from "gfycat-sdk";
export default function Cooking(props) {
  const APIKEY = process.env.REACT_APP_APIKEY;

  const [allReturnedObjects, setAllReturnedObjects] = useState([]);

  const baseURL = "https://api.gfycat.com/v1/gfycats";

  useEffect(() => {
    const fetchGfyCat = async () => {
      const gfyCatResponse = await fetch(baseURL, {
        method: "POST",
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
  return <div>{gfyCatGifs}</div>;
}
