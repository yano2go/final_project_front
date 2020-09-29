import React from 'react';
import { Link } from 'react-router-dom'


export default function Homepage(props) {
  const categories = [
    {
      name: "Cooking Gifs",
      // image_url: "https://i.imgur.com/xmuGNtv.jpg",
      slug: "/cooking"
    }, 
    {
      name: 'DIY',
      // image_url: "https://i.imgur.com/aI339pc.jpg",
      slug: "/diy"
    },
     {
       name: 'Arts and Crafts',
      //  image_url: "https://i.imgur.com/ZxXMMWO.jpg?1",
       slug: '/artsandcrafts'
      }, 
      
      {
        name: 'Programming',
        // image_url:'https://i.imgur.com/ywf8GXy.jpg',
        slug: '/programming'
      },
        {
          name: 'Random',
          // image_url:'https://i.imgur.com/tPorzfS.jpg',
          slug: '/random'
        
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