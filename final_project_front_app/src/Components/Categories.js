import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categories() {
     const {path} = useRouteMatch();
     const slug = path.slice(1) // could be "cooking" or "dyi"
     const [categoryData, setCategoryData] = useState([]);
     const url = `http://localhost:3000/gifs?category=${slug}`
     console.log(url);
     useEffect(() => {
          const fetchData = async () =>{
               const response = await fetch(url, { method: 'get'});
               const categoryData = await response.json();
               setCategoryData(categoryData)
          }    
          fetchData();
     },[url]);

     
          
     //      const APIKEY = process.env.REACT_APP_APIKEY ;
      
     //    const [allReturnedObjects, setAllReturnedObjects] = useState([]);
        
     //    const baseURL = 'https://api.gfycat.com/v1/gfycats/search?search_text=cooking';
        

     //    useEffect(()=>{
     //         const fetchGfyCat = async () => {
     //              const gfyCatResponse = await fetch(baseURL, {method: 'get', Authorization: `${APIKEY}`});
     //                const allReturnedData = await gfyCatResponse.json();
     //                setAllReturnedObjects(allReturnedData.gfycats);
     //           } 
     //      fetchGfyCat();

     //    },[baseURL]);

     const handleDelete  = async (id) =>{
          //event.preventDefault()
          console.log("the id is: ", id);
          try{
            const response = await fetch ( `http://localhost:3000/gifs/${id}`, {
              
               method: 'DELETE',
            })
            const filterGifs = categoryData.filter(gif => !(gif.id === id))
            await setCategoryData(filterGifs);
            
          }catch(error){
            console.error(error)
          }
        }
     const categoryGifs = categoryData.map((categoryItem, index) => {
          console.log(categoryItem.id)
          return (
               <div key={index}>
                    <h2>{categoryItem.name}</h2>
                    <img src={categoryItem.gif_url}/>
                    <button onClick={() => handleDelete(categoryItem.id)} >delete gif</button>
               </div>
               
          );
     
     });
     // const gfyCatGifs = allReturnedObjects.map((gfyCatGif, index)=>{
     //      return (
     //           <div key={index}>
     //                <img src = {gfyCatGif.gifUrl} />
     //            </div> 
     //      )
     // })
     return (
          <div className={""}>
               <h1>{slug}</h1>
               {categoryGifs}
               {/* {gfyCatGifs} */}
          </div>
     )
};