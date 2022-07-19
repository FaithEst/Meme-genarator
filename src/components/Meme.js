import React from "react";
import '../styles.css';
import memesData from "../memesData";

function Meme(){
    const memeArray = memesData.data.memes;
    const [memeImage, setMemeImage] = React.useState("");

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const image_url = memeArray[randomIndex].url;
        console.log(image_url);
        setMemeImage(image_url);
    }

    function handleClick(){
        getRandomMeme();
    }
    
    return(
        <section>
            <div className="form">
                <div className="forms--input">
                    <input className="form-input" type='text' placeholder='Shut up'></input>
                    <input className="form-input" type='text' placeholder='and take my money'></input>
                </div>
                <button onClick={handleClick} className="form--button">
                    Get a new meme image  🖼 
                </button>
            </div>
            <div className="form--image">
                <img src={memeImage} className="meme--image"/>
            </div>
        </section>
    )
}

export default Meme;