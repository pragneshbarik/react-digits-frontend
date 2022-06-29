import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return(
    <footer>
        <a href="https://github.com/pragneshbarik/Web-Development/tree/master/Drishti-Digits-AI/DigitsAI"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="github-icon" alt="github-icon"/></a>
        
        <div>Pragnesh Barik, {year}</div>
    </footer>
            );
}

export default Footer;