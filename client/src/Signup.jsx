import React, { useState } from "react";
import './Signlog.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Signup=()=>{
const [newemail,setnewemail]=useState('');
const [newpass,setnewpass]=useState('');
const [newname,setnewname]=useState('');


  const handlepost = () => {
    axios
      .post("http://localhost:3000/user/add", {email:newemail,password:newpass})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
    
 const naav = useNavigate();   
    
    return (


<div className="form-box">
<form className="form">
    <span className="title" >Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input" placeholder="Full Name" onChange={(e)=>setnewname(e.target.value)}/>
			<input type="email" className="input" placeholder="Email" onChange={(e)=>setnewemail(e.target.value)}/>
			<input type="password" className="input" placeholder="Password" onChange={(e)=>setnewpass(e.target.value)}/>
    </div>
    <button onClick={()=>{naav('/home')}}>Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <a href="" onClick={()=>{naav('/login')}}>Log in</a> </p>
</div>
</div>



    )
}



export default Signup;