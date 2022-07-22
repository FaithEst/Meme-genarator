import React, {useState} from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function Boxes() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` below with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    /**
     * Challenge part 4: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */

    const [boxesArray, setBoxesArray] = useState(boxes);
    function toggle(id){
            setBoxesArray(prevBoxesArray => {
                return(
                    prevBoxesArray.map(box => {
                        return box.id === id ? {...box, on: !box.on} : box
                    }
                ))
            })
    }
    const boxElements = boxesArray.map(box => {
        return(
            <Box 
                on={box.on} 
                id={box.id}
                key={box.id}
                toggle={toggle}
            />
        )
    })
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}