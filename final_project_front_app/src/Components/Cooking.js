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
     
     const cookingGifs = cookingData.map((cookingItem, index)=>{
          return (
               <div key={index}>
                    <img src={cookingItem.gif_url}/>
               </div>
               
          );
     
     });
     return <div>{cookingGifs}</div>
};

