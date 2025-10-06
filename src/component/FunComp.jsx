import { useState } from "react";

function Color()
{
    const [color , Setcolor] = useState("red")
    return(
        <>
        <h2>My favourite color <span style={{color: color }}>{color}</span></h2>
        <button onClick={() => Setcolor("blue")}>Blue</button>
        </>
        
    )
}

export default Color;