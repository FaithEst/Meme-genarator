import React from "react";
import './box.css';

 /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   * 
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   * 
   * Goal: clicking each box should toggle it on and off.
   */


  
export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return(
        <div onClick={() => props.toggle(props.id)} style={styles} className="box" ></div>
    )
}