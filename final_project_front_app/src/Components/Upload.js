import React, { useEffect, useState } from 'react';


export default function Upload() {
     const url = 'http://localhost:3000/gifs'
     const [gifData, setGifData] = useState([]);
     useEffect(() => {
       // if (!query) retu rn;
     
       const fetchData = async () => {
         
         const response = await fetch(url, { method: "get" });
         const gifData = await response.json();
         setGifData(gifData);
       
       };
     
       fetchData();
     }, [url]);
     const [formInputs, updateFormInputs] = useState({  name: '', desription: '', category: '', gif_url:''});
     const handleSubmit  = async (event) =>{
       event.preventDefault()
       try{
         const response = await fetch ( 'http://localhost:3000/gifs', {
           body: JSON.stringify(formInputs),
           method: 'POST',
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           }
         })
         const data = await response.json()
         updateFormInputs({
           description: '',
           category: '',
           name: '',
           gif_url:'',
         })
         console.log(data)
         // setNotices([data, ...notices])
       }catch(error){
         console.error(error)
       }
     }
     return (
         <div className="Gifform">
           `${JSON.stringify(gifData)}`
           <h4>Post your favoDite beer</h4>
         <form onSubmit= {handleSubmit}>
           <label htmlFor="description">description</label>
           <input type="text" onChange={(event)=>updateFormInputs({...formInputs, description:event.target.value})}/>
           <label htmlFor="category">category</label>
           <input type="text" onChange={(event)=>updateFormInputs({...formInputs, category:event.target.value})}/>
           <label htmlFor="name">name</label>
           <input type="text" onChange={(event)=>updateFormInputs({...formInputs, name:event.target.value})}/>
           <label htmlFor="gif_url">gif_url</label>
           <input type="text" onChange={(event)=>updateFormInputs({...formInputs, gif_url:event.target.value})}/>
           <input type="submit" className="submit" />
         </form>
         <img src={formInputs.gif_url} />
         </div>
       );
     }

     