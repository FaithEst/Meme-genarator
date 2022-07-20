import React, {useState} from "react";
import './practice.css';

function Practice() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    let [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);
    let paragraph = thingsArray.map(thing => {
         return <p>{thing}</p>
     });

    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${paragraph.length + 1}`]
        });
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {paragraph}
        </div>
    )
}

export default Practice;