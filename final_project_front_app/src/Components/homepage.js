import React from 'react';
import { Link } from 'react-router-dom'


export default function Homepage(props) {
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
      
      { name: 'Upload',
        image_url:'#',
        slug: '/upload',
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
          <Link to={category.slug} key={`${i}-${category.name}`}>
            <div className="category">
            <h3>{category.name}</h3>
            <img src={category.image_url}/>
          </div>
          </Link>
          
        );
      })}
    </div>
  );
}