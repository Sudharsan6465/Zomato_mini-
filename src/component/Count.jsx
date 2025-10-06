import { useState } from "react";

function Count()
{
    const [count , Setstate]=useState(0)
    return(
        <div>
        <div style={{width : "20px", border : "2px solid" , height:"20px",borderBlockColor:"red" , marginLeft:"60px"}}>{count}</div>
        <button onClick={() => Setstate(count + 1)}>Increase</button>
        <button onClick={() => Setstate(count- 1)}>Decrease</button>
        </div>
    )

}

export default Count
