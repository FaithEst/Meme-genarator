import React from "react";
import '../styles.css';

function Meme(){
    return(
        <section>
            <div className="form">
                <div className="forms--input">
                    <input className="form-input" type='text' placeholder='Shut up'></input>
                    <input className="form-input" type='text' placeholder='and take my money'></input>
                </div>
                <button className="form--button">
                Get a new meme image  🖼 
                </button>
            </div>
        </section>
    )
}

export default Meme;