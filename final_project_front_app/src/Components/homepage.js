import React from 'react';
import { Link } from 'react-router-dom'


export default function homepage() {
  const categories = [
    {
      name: "Cooking Gifs",
      image_url: "#",
      slug: "/cooking"
    }, 
    {
      name: 'DIY',
      image_url: "#",
      slug: "/diy"
    },
     {
       name: 'Arts and Crafts',
       image_url: "#",
       slug: '/artsandcrafts'
      }, 
      {
        name: 'Programming',
        image_url:'#',
        slug: '/programming'
      }];
  return (
    <div className="container">
      {categories.map((category, i) => {
        return (
          <Link to={category.slug}>
            <div className="category" key={`#{i}-#{category.name}`}>
            <h3>{category.name}</h3>
            <img src={category.image_url}/>
          </div>
          </Link>
          
        );
      })}
    </div>
  );
}