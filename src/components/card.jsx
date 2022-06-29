import React from "react";

function Card(props){
    return(<div className="card">
        <h1>{props.emoji}</h1>
        <p className="emoji-name">{props.name}</p>
        <p className="emoji-def">{props.def}</p>
    </div>)
}

export default Card;