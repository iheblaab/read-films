
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signlog.css'
import axios from "axios";

const Login=()=>{

const [email,setemail]=useState('')
const [data,setdata]=useState([]);
// const [log,setlog]=useState(0);
// console.log(log);
const navi=useNavigate();

console.log(data,"zzzz");
useEffect(() => {
    axios.get('http://localhost:8080/user/getall')
          .then((res) => {
            console.log(res.data,'iheb');
            setdata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


const check=(user)=>{
    data.map((e)=>{
        if(user===e.email) {
        console.log(e.email)
        localStorage.setItem('log',e.idusers)      

        // setlog(e.idusers)
        console.log(e.idusers,'ididid');
  navi('/home',)

    }
    else {console.log("password invalid !")}
    
    })}




return (
    <form className="form">
    <div className="header">Sign In</div>
    <div className="inputs">
        <input placeholder="Email" className="input" type="text" onChange={(e)=>{setemail(e.target.value)}}/>
        <input placeholder="Password" className="input" type="password"/>
        
    <div className="checkbox-container">
        <label className="checkbox">
        <input type="checkbox" id="checkbox"/>
        </label>
        <label for="checkbox" className="checkbox-text">Remember me</label>
    </div>
    <button className="sigin-btn"  onClick={()=>{check(email)}}>Submit</button>
    <a className="forget" href="#">Forget password ?</a>
    <p className="signup-link">Don't have an account? <a href="#" onClick={()=>{navi("/Signup")}}>Sign up</a></p>
    </div>
</form>
)
}








export default Login;