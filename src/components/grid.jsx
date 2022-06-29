import React from "react";
import Pixel from "./pixel";

function makeGrid(xlen, ylen) {
    let row= []
    for(let i=0; i<xlen; i++){
        row = []
        for(let j=0; i<ylen; j++){
            row.push(<Pixel x={i} y={j} />)
        }
    }
    
    return row
}

export default makeGrid;