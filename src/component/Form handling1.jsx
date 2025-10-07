import React, { useState } from "react"
function Form()
{
  const [name , setname] = useState("")
  const [pass , setpass] = useState("")
  const handle = (e) =>{
    e.preventDefault()
  }

  const print = () =>
  {
    console.log(name)
    console.log(pass)
    setname("")
    setpass("")
  }

  return(
    <form onSubmit={handle}>
      Name : <input type="text" value={name} onChange = {(e) => {setname(e.target.value)}}/>
      <br/><br/>
      Password : <input type="password" value={pass} onChange = {(e) => {setpass(e.target.value)}}/>
      <br/><br/>
      <button onClick={print}>Submit</button>
    </form>
  )
}

export default Form