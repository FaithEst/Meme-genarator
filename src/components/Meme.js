import React from "react";
import '../styles.css';
import memesData from "../memesData";

/**
  * Challenge: 
  * 1. Set up the text inputs to save to
  *    the `topText` and `bottomText` state variables.
  * 2. Replace the hard-coded text on the image with
  *    the text being saved to state.
  */
function Meme(){
    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    console.log(meme);
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

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return(
        <section>
            <div className="form">
                <div className="forms--input">
                    <input  
                        type="text" 
                        placeholder="Top Text"
                        className="form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        className="form-input"  
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    onClick={getRandomMeme} 
                    className="form--button">
                    Get a new meme image  🖼 
                </button>
            </div>
            <div className="form--image">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}

export default Meme;