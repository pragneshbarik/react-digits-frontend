import React, { useState } from "react";

function Pixel(props) {
    const [color, setColor] = useState("#000000"); 
    function colorBlock(event) {
        setColor("#FFFFFF")
    }

    return <div className="pixel" key={props.x + 28*props.y} data-id = {props.x + 28*props.y} data-x={props.x} data-y={props.y} onClick={colorBlock} style={{backgroundColor : color}} data-color={color}> </div>
}

export default Pixel;