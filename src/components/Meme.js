import React from "react";
import '../styles.css';

/**
  * Challenge: 
  * 1. Set up the text inputs to save to
  *    the `topText` and `bottomText` state variables.
  * 2. Replace the hard-coded text on the image with
  *    the text being saved to state.
  */

/**
  * Challenge: 
  * As soon as the Meme component loads the first time,
  * make an API call to "https://api.imgflip.com/get_memes".
  * 
  * When the data comes in, save just the memes array part
  * of that data to the `allMemes` state
  * 
  * Think about if there are any dependencies that, if they
  * changed, you'd want to cause to re-run this function.
  * 
  * Hint: for now, don't try to use an async/await function.
  * Instead, use `.then()` blocks to resolve the promises
  * from using `fetch`. We'll learn why after this challenge.
  */
function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);
    React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(memesData => setAllMemes(memesData.data.memes))
    }, []);

    
    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const image_url = allMemes[randomIndex].url;
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