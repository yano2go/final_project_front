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
      name: "DIY",
      image_url: "https://media.giphy.com/media/f74WDV59cP0NArh8gu/giphy.gif",
      slug: "/diy",
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
