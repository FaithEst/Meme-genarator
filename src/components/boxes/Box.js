import React, {useState} from "react";
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
    const [on, setOn] = useState(props.on);

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggleColor(){
        setOn(prevOn => !prevOn)
    }
    
    return(
        <div onClick={toggleColor} style={styles} className="box" ></div>
    )
}