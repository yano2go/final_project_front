import React, { Component } from 'react'




export default function Show(props) { console.log(props)
     return (
          <div>
               
              {props.location.state.categoryItem.name}
              <br />
              <img src={props.location.state.categoryItem.gif_url} />
              <br />
              {props.location.state.categoryItem.description} 
          </div>
     )
}

