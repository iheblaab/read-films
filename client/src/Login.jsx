
import React, { useState } from "react";

const Login=()=>{

const [email,setemail]=useState(null)
const [passw,setpassw]=useState(null)

return (
    <div className="formcont" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
    <form className="form">
    <div className="header">Sign In</div>
    <div className="inputs"/>
        <input placeholder="Email" className="input" type="text"/>
        <input placeholder="Password" className="input" type="password"/>
    <div className="checkbox-container">
        <label className="checkbox">
        <input type="checkbox" className="checkbox"/>
        </label>
        <label for="checkbox" className="checkbox-text">Remember me</label>
    </div>
    <div>
    <button className="sigin-btn">Submit</button>
    <a className="forget" href="#">Forget password ?</a>
    <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
    </div>
    
</form>
</div>
)
}








export default Login;