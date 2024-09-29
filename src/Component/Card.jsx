import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-container  " style={props.style }>

      <img src={props.Image} alt={props.title} style={{paddingTop:"30px" , paddingBottom:"30px" , marginRight:"220px"}} />
      <h1 style={{marginRight:"220px"}} >{props.title}</h1>
      <p style={{ marginTop:"30px" , marginBottom:"70px" }}>{props.description}</p>
      <button className="bttn" style={{ marginRight:"220px" , marginBottom:"40px"}}>Learn More</button>

    </div>
  );
}
