import React, { useEffect, useState } from 'react';

export default function Cooking(props) {
     const [cookingData, setCookingData] = useState([]);
     const url = 'http://localhost:3000/cooking'
     useEffect(() => {
          const fetchData = async () =>{
               const response = await fetch(url, { method: 'get'});
               const cookingData = await response.json();
               setCookingData(cookingData)
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

     const cookingGifs = cookingData.map((cookingItem, index) => {
          return (
               <div key={index}>
                    <img src={cookingItem.gif_url}/>
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
               {cookingGifs}
               {gfyCatGifs}
          </div>
     )
};

