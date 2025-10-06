import { createContext , useState } from "react";

export const context = createContext()

function Lighter({children})
{
  const [light , state] = useState("black")

  function Change()
  {
    state(light === "white" ? "black" : "white")
    console.log("Changed")

  }
  return(
    <context.Provider value={{light , Change}}>
      {children}
    </context.Provider>
  )
}

export default Lighter;

