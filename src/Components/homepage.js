import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
export default function Homepage(props) {
  const categories = [
    {
      name: "Cooking Gifs",
      image_url:
        "https://thumbs.gfycat.com/FrighteningGivingCaimanlizard-max-1mb.gif",
      slug: "/cooking",
    },
    {
      name: "Drinks",
      image_url:
        "https://media3.giphy.com/media/3oKIPuGIRtjn3vAaFW/giphy.gif?cid=ecf05e47p1f54hek3wc8c63ldp0w5gjy199m6ws4j0im7ggd&rid=giphy.gif",
      slug: "/drinks",
    },
    {
      name: "Arts and Crafts",
      image_url: "https://media.giphy.com/media/YBkTzzyNewWtUANTso/giphy.gif",
      slug: "/artsandcrafts",
    },

    {
      name: "Programming",
      image_url: "https://media.giphy.com/media/fAnzw6YK33jMwzp5wp/giphy.gif",
      slug: "/programming",
    },
    {
      name: "Random",
      image_url: "https://media.giphy.com/media/3orieYvhT5EVfSFyBa/giphy.gif",
      slug: "/random",
    },
  ];

  return (
    <div className="container">
      {categories.map((category, i) => {
        return (
          <Link
            className="homepageLinks"
            to={category.slug}
            key={`${i}-${category.name}`}
          >
            <div className="category">
              <h3>{category.name}</h3>
              <img className="homeGifs" src={category.image_url} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
