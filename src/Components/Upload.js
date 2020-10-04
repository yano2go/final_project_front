import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

export default function Upload() {
  const url = `${process.env.REACT_APP_APILINK}gifs`;
  const [category, setCategory] = useState(false);

  const [formInputs, updateFormInputs] = useState({
    name: "",
    description: "",
    category: "",
    gif_url: "",
    //gif_file: "Some/file/path",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_APILINK}gifs`, {
        body: JSON.stringify(formInputs),
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setCategory(data.category);
      updateFormInputs({
        description: "",
        category: "",
        name: "",
        gif_url: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  // const handleUpload = (ev) => {
  //   ev.preventDefault();
  //   updateFormInputs({ ...formInputs, gif_file: ev.target.files[0] });
  //   console.log(formInputs);
  // };
  return (
    <div className="Gifform">
      {/* `${JSON.stringify(gifData)}` */}
      <h4>Post your gif</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">description</label>
        <input
          type="text"
          onChange={(event) =>
            updateFormInputs({ ...formInputs, description: event.target.value })
          }
        />
        <label htmlFor="category">category</label>
        <select
          type="text"
          onChange={(event) =>
            updateFormInputs({ ...formInputs, category: event.target.value })
          }
        >
          <option>select an option</option>
          <option value="artsandcrafts">Arts and crafts</option>
          <option value="programming">programming</option>
          <option value="cooking">cooking</option>
          <option value="diy">DIY</option>
          <option value="random">Random</option>
        </select>
        <label htmlFor="name">name</label>
        <input
          type="text"
          onChange={(event) =>
            updateFormInputs({ ...formInputs, name: event.target.value })
          }
        />
        <label htmlFor="gif_url">gif_url</label>
        <input
          type="text"
          onChange={(event) =>
            updateFormInputs({ ...formInputs, gif_url: event.target.value })
          }
        />
        {/* <label htmlFor="gif_file">Gif File</label>
        <input
          type="file"
          //value={formInputs.gif_file}
          onChange={handleUpload}
        /> */}
        <input type="submit" className="submit" />{" "}
        {category ? <Redirect to={"/" + category} /> : null}
      </form>
      <p>{formInputs.name}</p>
      <img src={formInputs.gif_url} />
      <p>{formInputs.description}</p>
    </div>
  );
}
