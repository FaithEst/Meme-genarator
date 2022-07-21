import React, {useState} from "react";
import './box.css';
import boxes from "./boxes";

export default function Boxes() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    const [boxesArray, setBoxesArray] = useState(boxes);
    const boxElements = boxesArray.map(box => {
        return(
            <div className="box" key={box.id}></div>
        )
    })
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}