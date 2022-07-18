import React from "react";
import '../styles.css';

function Header(){
    return(
        <nav className="header">
            <img 
                className="header--logo" 
                src={process.env.PUBLIC_URL+"/images/troll-face.png"}
            />
            <h2 className="header--title">Meme Generator</h2>
            <span className="header--subtitle">React Course - Project 3</span>
        </nav>
    )
}

export default Header;