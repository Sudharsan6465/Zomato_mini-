import { useState } from "react";

function Forme(){
  console.log("render")
const [error,setError]=useState("")
 const [Form,setForm]=useState({
  username:"",
  password:"",
  confirmPassword:""
 });

 const handleChange=(e)=>{
  console.log([e.target.name]+"   "+e.target.value)
    setForm({
      ...Form,
      [e.target.name]:e.target.value
    })
    console.log(Form)
 }

 const validate=(e)=>{
   e.preventDefault(); 
  console.log("ds")
  if(Form.username==="" || Form.password==="" || Form.confirmPassword===""){
    setError("values required")
  }else if(!Form.username.includes('@')){
    setError("invalid mail")
  }
  else{
    setError("Coorect")
  }
 }


 return(
  <>
    <form>
      username :
      <input type="text" name="username" value={Form.username} onChange={handleChange}/><br/>
      password :
      <input type="password" name="password" value={Form.password} onChange={handleChange}/><br/>
      confirm password :
      <input type="password" name="confirmPassword" value={Form.confirmPassword} onChange={handleChange}/><br/>
      <input type="button" onClick={validate} value="submit"/>
      <p>{error}</p>
    </form>
  </>
 )

}
export default Forme;