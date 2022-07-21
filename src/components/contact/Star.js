import React from "react";
import './contact.css';
import TestContact from "./TestContact";


export default function Star(props){
    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
    return(
        <img 
            src={process.env.PUBLIC_URL+`/images/${starIcon}`}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}