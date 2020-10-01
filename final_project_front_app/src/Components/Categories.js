import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categories() {
  const { path } = useRouteMatch();
  const slug = path.slice(1); // could be "cooking" or "dyi"
  const [categoryData, setCategoryData] = useState([]);
  const url = `http://localhost:3000/gifs?category=${slug}`;
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

  const [showEditForm, setShowForm] = useState(false);
  console.log(showEditForm);

  const EditForm = ({ id }) => {
    const [formInputs, setFormInputs] = useState({ name: "", description: "" });
    const handleChange = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:3000/gifs/${id}`, {
          body: JSON.stringify(formInputs),
          method: "PATCH",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        const data = await response.json();
        setShowForm(false);
        const updatedCategoryData = categoryData.map((gif) =>
          gif.id === id ? data : gif
        );
        await setCategoryData(updatedCategoryData);
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
  const gfyCatGifs = allReturnedObjects.map((gfyCatGif, index) => {
    return (
      <div key={index}>
        <img src={gfyCatGif.gifUrl} />
      </div>
    );
  });
  const handleDelete = async (id) => {
    //event.preventDefault()
    console.log("the id is: ", id);
    try {
      const response = await fetch(`http://localhost:3000/gifs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      const filterGifs = categoryData.filter((gif) => !(gif.id === id));
      await setCategoryData(filterGifs);
    } catch (error) {
      console.error(error);
    }
  };
  const categoryGifs = categoryData.map((categoryItem, index) => {
    console.log(categoryItem.id);
    return (
      <div key={index}>
        <Link to={{ pathname: "/show", state: { categoryItem } }}>
          <h2>{categoryItem.name}</h2>
          <img src={categoryItem.gif_url} />
          <p>{categoryItem.description}</p>
        </Link>
        <button onClick={() => handleDelete(categoryItem.id)}>
          delete gif
        </button>
        <button onClick={() => setShowForm(true)}>edit</button>
        {showEditForm ? <EditForm id={categoryItem.id}></EditForm> : null}
      </div>
    );
  });

  return (
    <div className={""}>
      <h1>{slug}</h1>
      {categoryGifs}
      {slug == `cooking` ? gfyCatGifs : null}
      {/* {gfyCatGifs} */}
    </div>
  );
}
