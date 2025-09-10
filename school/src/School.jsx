import React, { useState } from 'react'
import Admin from './Admin';
import Mentor from './Mentor';
import Studennt from './Studennt';
const School = () => {
  const[user,setuser] = useState("")
  const handleUser = (e) =>{
    setuser(e.target.value);
}
const[password,setpassword] = useState("")
  const handlepassword = (e) =>{
    setpassword(e.target.value);
}
//   const[Login,setLogin] = useState("")
//     const handleLogin = (e) =>{
//       setpassword(e.target.value);
// }

 const [msge, setmsge] = useState("");
const handleClick = () =>{
if((user === "Admin") && (password==="1234")){
  setmsge(<p>admin</p>)
}else if((user === "Mentor") && (password==="1234")){
  setmsge(<p>mentor</p>)
}else{
  setmsge(<p>student</p>)
}
};
return (
  <div>
    <h4>Welcome</h4>
      <h1>Nalanda English School</h1>
      <input type="text" placeholder='Enter your user name' onChange={handleUser} value={user}/>
      <input type="password" placeholder='password' onChange={handlepassword} value={password}/>
     <button type='submit' onClick={handleClick}>login</button>
     {msge}
  </div>
  )
}
export default School
