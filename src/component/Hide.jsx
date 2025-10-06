import { useState } from "react";

function Hide()
{
    const [hide , Sethide] = useState(true)

    function change()
    {
        Sethide(!hide)
    }
    return(
        <body style={{backgroundColor : hide ? "red" : "gold"}}>        
            <h1>{hide ? "Hello! World" : ""}</h1>
            <br/>
            <button onClick={change}>Hide</button>
        </body>

    )
}

export default Hide;