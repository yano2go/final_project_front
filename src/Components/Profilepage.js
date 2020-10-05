import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profilepage() {
  const [showEditForm, setShowForm] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const EditForm = ({ id }) => {
    const [formInputs, setFormInputs] = useState({ name: "", description: "" });

    const handleChange = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(
          `${process.env.REACT_APP_APILINK}/gifs/${id}`,
          {
            body: JSON.stringify(formInputs),
            method: "PATCH",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
        const data = await response.json();
        setShowForm(false);
        const updatedGifs = gifs.map((gif) => (gif.id === id ? data : gif));
        setGifs(updatedGifs);
        // setFormInputs({
        //   description: '',
        //   name: '',

        // })
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className="editform">
        {/* `${JSON.stringify(gifData)}` */}
        <h4>Edit your gif</h4>

        <form onSubmit={handleChange}>
          <label htmlFor="description">description</label>
          <input
            type="text"
            onChange={(event) =>
              setFormInputs({ ...formInputs, description: event.target.value })
            }
          />
          <label htmlFor="name">name</label>
          <input
            type="text"
            onChange={(event) =>
              setFormInputs({ ...formInputs, name: event.target.value })
            }
          />
          <input type="submit" className="submit" />
        </form>
        <p>{formInputs.name}</p>
        <img src={formInputs.gif_url} />
        <p>{formInputs.description}</p>
      </div>
    );
  };

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
  const handleDelete = async (id) => {
    //event.preventDefault()
    console.log("the id is: ", id);
    try {
      const response = await fetch(
        ` ${process.env.REACT_APP_APILINK}/gifs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const filterGifs = gifs.filter((gif) => !(gif.id === id));
      await setGifs(filterGifs);
    } catch (error) {
      console.error(error);
    }
  };
  const GifDetail = (props) => {
    const { name, description, gif_url, id } = props;
    return (
      <>
        <h2>{name}</h2>
        <img src={gif_url} />
        <p>{description}</p>
        <button onClick={() => handleDelete(id)}>delete gif</button>
        <button onClick={() => setShowForm(true)}>edit</button>
        {showEditForm ? <EditForm id={id}></EditForm> : null}
      </>
    );
  };
  return (
    <div>
      {gifs
        .filter((gif) => {
          const belongsToUser =
            parseInt(localStorage.getItem("user_id")) == gif.user_id;

          return belongsToUser;
        })
        .map((gifs, i) => (
          <GifDetail key={i} {...gifs} />
        ))}
    </div>
  );
}
