import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Category(props) {
     const category = props.category
     const [categoryData, setCategoryData] = useState([]);
     const url = `http://localhost:3000/?category=${props.category}`
     useEffect(() => {
          const fetchData = async () =>{
               const response = await fetch(url, { method: 'get'});
               const categoryData = await response.json();
               setCategoryData(categoryData)
          }    
          fetchData();
     },[url]);

     
          
          const APIKEY = process.env.REACT_APP_APIKEY ;
      
        const [allReturnedObjects, setAllReturnedObjects] = useState([]);
        
        const baseURL = 'https://api.gfycat.com/v1/gfycats/search?search_text=cooking';
        

        useEffect(()=>{
             const fetchGfyCat = async () => {
                  const gfyCatResponse = await fetch(baseURL, {method: 'get', Authorization: `${APIKEY}`});
                    const allReturnedData = await gfyCatResponse.json();
                    setAllReturnedObjects(allReturnedData.gfycats);
               } 
          fetchGfyCat();

        },[baseURL]);

     const categoryGifs = categoryData.map((categoryItem, index) => {
          return (
               <div key={index}>
                    <img src={categoryItem.gif_url}/>
               </div>
               
          );
     
     });
     const gfyCatGifs = allReturnedObjects.map((gfyCatGif, index)=>{
          return (
               <div key={index}>
                    <img src = {gfyCatGif.gifUrl} />
                </div> 
          )
     })
     return (
          <div>
               {categoryGifs}
               <h1>{category}</h1>
               {gfyCatGifs}
          </div>
     )
};