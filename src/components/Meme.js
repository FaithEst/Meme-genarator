import React from "react";
import '../styles.css';
import memesData from "../memesData";

function Meme(){
    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        const image_url = allMemeImages[randomIndex].url;
        console.log(image_url);
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: image_url
            }
        });
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
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </section>
    )
}

export default Meme;