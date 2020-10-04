import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profilepage() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios_instance = axios.create({
    baseURL: process.env.REACT_APP_APILINK,
  });

  useEffect(() => {
    setLoading(true);
    axios_instance
      .get(`/gifs`)
      .then((res) => {
        console.log(res.data);
        setGifs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let user_id = localStorage.getItem("username");

  return (
    <div>
      {gifs
        .filter((gif) =>
          localStorage.getItem.toLowerCase().includes(gif.user_id.toLowerCase())
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
